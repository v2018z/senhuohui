import { HttpService, Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, MoreThan, Repository } from 'typeorm';
import { User } from './user.entity';
import { DBConnection } from '../constants/db-connection-names';
import { EntityManager } from 'typeorm';
import * as MD5 from 'md5';
import { base64encode } from 'nodejs-base64';
import { AwardService } from './award.service';
import { ServiceException } from '../common/exceptions/service.exception';
import { Award } from './award.entity';
import { Control } from './control.entity';
import { LotteryLog } from './lottery-log.entity';

@Injectable()
export class LotteryService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User, DBConnection.machine1)
    repo: Repository<User>,
    private readonly httpService: HttpService,
    private awardService: AwardService,
  ) {
    super(repo);
  }

  async getUserByPhone(phone: string) {
    return await this.repo
      .createQueryBuilder('user')
      .where('user.phone = :phone', { phone })
      .getOne();
  }

  async getUserByUserId(userId: string) {
    return await this.repo
      .createQueryBuilder('user')
      .where('user.id = :userId', { userId })
      .getOne();
  }

  async insertUser(phone: string) {
    const user = new User();
    user.phone = phone;
    try {
      return await this.repo.save(user);
    } catch (error) {
      return this.getUserByPhone(user.phone);
    }
  }

  async modifyUser(user: User) {
    user.updatedAt = Math.floor(Date.now() / 1000);
    return await this.repo.update(user.id, user);
  }

  querySwfcByPhone(phone: string): any {
    const md5str = `${phone}swfcfood`;
    const sign = MD5(md5str);
    const time = ~~(Date.now() / 1000);
    const base64str = `${phone}|${sign}|${time}`;
    const token = base64encode(base64str);
    return this.httpService
      .get(
        `https://www.swfcfoodgarden.com/api/web/query_swfc_by_phone/${token}`,
      )
      .toPromise();
  }

  async lottery(phone: string, manager: EntityManager): Promise<any> {
    try {
      const awards = await manager
        .createQueryBuilder(Award, 'award')
        .setLock('pessimistic_write')
        .getMany();

      const getUserByPhone = (phone: string) => {
        return manager
          .createQueryBuilder(User, 'user')
          .where('user.phone = :phone')
          .setLock('pessimistic_write')
          .setParameter('phone', phone)
          .getOne();
      };

      const user = await getUserByPhone(phone);

      if (!user || !user.id) {
        throw new ServiceException('用户信息有误!', -301);
      } else {
        if (user.award) {
          return user;
        }
      }

      const control = await manager
        .createQueryBuilder(Control, 'control')
        .setLock('pessimistic_write')
        .getOne();

      const participantsCount = await this.countParticipantsForToday(manager);
      const awardCount = await this.countWinnersForToday(manager);

      let probability = control.probability;

      if (probability > 1) {
        probability = 1;
      }

      if (probability === null || typeof probability === 'undefined') {
        probability = 0.5;
      }

      const availableAwards = awards.filter((g) => g.stock > 0);
      const randomNum = Math.random();

      console.log('=====当前概率======', control, probability, randomNum);
      console.log('=====当前抽奖人数======', participantsCount);
      console.log('=====当前中奖人数======', awardCount);
      console.log(
        '=====control.participantsCount======',
        control.participantsCount,
      );
      console.log('=====control.maxWinners======', control.maxWinners);

      if (
        randomNum > probability ||
        availableAwards.length <= 0 ||
        participantsCount >= control.participantsCount ||
        awardCount >= control.maxWinners
      ) {
        user.awardId = -2;
        user.award = '未中奖';
        user.awardStatus = 1;

        let failureReason = '';

        if (randomNum > probability) {
          failureReason = '随机数未命中中奖概率';
        } else if (availableAwards.length <= 0) {
          failureReason = '奖品已发放完毕';
        } else if (participantsCount >= control.participantsCount) {
          failureReason = '抽奖人数已达上限';
        } else if (awardCount >= control.maxWinners) {
          failureReason = '今日奖品数量已达上限';
        }

        const newLogEntry = new LotteryLog();
        newLogEntry.userId = user.id;
        newLogEntry.phone = user.phone;
        newLogEntry.currentProbability = probability;
        newLogEntry.lotteryProbability = randomNum;
        newLogEntry.awardId = -2;
        newLogEntry.award = '未中奖';
        newLogEntry.failureReason = failureReason;

        try {
          await Promise.all([
            manager.update(User, user.id, user),
            manager.save(LotteryLog, newLogEntry),
          ]);
          return user;
        } catch (error) {
          console.log(error);
          throw new ServiceException('抽奖异常，请重试!', -203);
        }
      }

      const randomIndex = Math.floor(Math.random() * availableAwards.length);
      const winingAward = availableAwards[randomIndex];

      if (winingAward && winingAward.stock > 0) {
        try {
          // 中奖减库存
          winingAward.stock -= 1;
          user.awardId = winingAward.id;
          user.award = winingAward.award;
          user.awardStatus = 0;

          const newLogEntry = new LotteryLog();
          newLogEntry.userId = user.id;
          newLogEntry.phone = user.phone;
          newLogEntry.currentProbability = probability;
          newLogEntry.lotteryProbability = randomNum;
          newLogEntry.awardId = winingAward.id;
          newLogEntry.award = winingAward.award;

          await Promise.all([
            manager.update(Award, winingAward.id, winingAward),
            manager.update(User, user.id, user),
            manager.save(LotteryLog, newLogEntry),
          ]);
          return user;
        } catch (error) {
          throw new ServiceException('抽奖异常，请重试!', -203);
        }
      } else {
        throw new ServiceException('抽奖异常，请重试!', -203);
      }
    } catch (error) {
      throw error;
    }
  }

  async checkActicity(phone: string, manager: EntityManager): Promise<any> {
    try {
      const getUserByPhone = (phone: string) => {
        return manager
          .createQueryBuilder(User, 'user')
          .where('user.phone = :phone')
          .setLock('pessimistic_write')
          .setParameter('phone', phone)
          .getOne();
      };

      const user = await getUserByPhone(phone);

      return user;
    } catch (error) {
      throw error;
    }
  }

  async receive(userId: string, hxm: string): Promise<any> {
    try {
      if (hxm != 'shh2023') {
        throw new ServiceException('核销码错误!', -300);
      }
      const user = await this.getUserByUserId(userId);
      console.log(user, userId);
      // 如果还没有抽奖,抛出异常
      if (user.awardStatus == -1) {
        throw new ServiceException('还没有抽奖!', -300);
      }
      // 如果已经领奖，抛出异常
      if (user.awardStatus == 1) {
        throw new ServiceException('已经领过奖了!', -301);
      }
      // 如果没有中奖，抛出异常
      if (user.awardId == -2) {
        throw new ServiceException('很遗憾，您未中奖!', -302);
      }
      if (user.awardId > 0 && user.awardStatus == 0) {
        user.awardStatus = 1;
        await this.modifyUser(user);
        return user;
      }
    } catch (error) {
      throw error;
    }
  }

  changeAawardStock(awardId: string, stock: number) {
    console.log(awardId, stock);
    return this.repo
      .createQueryBuilder()
      .update(Award)
      .set({ stock })
      .where('id = :awardId', { awardId })
      .execute();
  }

  getAllUser() {
    return this.repo.createQueryBuilder('user').getMany();
  }

  removeUsers() {
    return this.repo.createQueryBuilder('user').delete().execute();
  }

  getControl(manager: EntityManager) {
    return manager.createQueryBuilder(Control, 'control').getOne();
  }

  changeControl(probability: number) {
    console.log('prod', probability);
    return this.repo
      .createQueryBuilder()
      .update(Control)
      .set({ probability })
      .where('id = :id', { id: 1 })
      .execute();
  }

  // 查询当天抽奖人数
  async countParticipantsForToday(
    entityManager: EntityManager,
  ): Promise<number> {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0); // 设置为当天的 00:00:00
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // 设置为第二天的 00:00:00

    const count = await entityManager.count(LotteryLog, {
      lotteryTime: Between(today, tomorrow),
    });

    return count;
  }

  // 查询当天已中奖的人数
  async countWinnersForToday(entityManager: EntityManager): Promise<number> {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0); // 设置为当天的 00:00:00
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // 设置为第二天的 00:00:00

    const count = await entityManager.count(LotteryLog, {
      lotteryTime: Between(today, tomorrow),
      awardId: MoreThan(0), // 假设 awardId 大于 0 代表中奖了
    });

    return count;
  }

  async summary() {
    // 查询所有抽奖的人数
    const participantsCount = await this.repo.count({
      awardStatus: MoreThan(-1),
    });
    // 查询所有中奖的人数
    const winnersCount = await this.repo.count({
      awardId: MoreThan(0),
    });
    // 查询领奖总人数
    const receivedCount = await this.repo
      .createQueryBuilder('user')
      .where('user.awardStatus = 1')
      .andWhere('user.awardId > 0')
      .getCount();

    return `
      <html>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
        <head>
          <style>
            p {
              font-size: 24px;
            }
          </style>
        </head>
        <body>
          <p>
            总抽奖人数: 
            <span style="color: red;">${participantsCount}</span>
          </p>
          <p>
            总中奖人数:
            <span style="color: red;">${winnersCount}</span>
          </p>
          <p>
            总领奖人数:
            <span style="color: red;">${receivedCount}</span>
          </p>
        </body>
      </html>
    `;
  }
}
