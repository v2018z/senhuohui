import { HttpService, Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { DBConnection } from '../constants/db-connection-names';
import { EntityManager } from 'typeorm';
import * as MD5 from 'md5';
import { base64encode } from 'nodejs-base64';
import { AwardService } from './award.service';
import { ServiceException } from '../common/exceptions/service.exception';
import { Award } from './award.entity';

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

      const calcAwards = awards.filter((g) => g.stock > 0);

      const user = await getUserByPhone(phone);

      if (!user) {
        throw new ServiceException('用户信息有误!', -301);
      } else {
        if (user.award) {
          return user;
        }
      }

      // 总中奖概率
      const threshold = 0.5;
      // 礼品总数
      const tal = calcAwards.reduce((a, b) => a + b.quantity, 0);
      const num = tal / threshold; // 随机数范围 = 礼品总数 / 总中奖率
      const random = Math.round(Math.random() * (num - 1));
      console.log('tal', tal, random);
      // 随机数发生在没中奖的范围
      if (random >= tal || calcAwards.length == 0) {
        user.awardId = -2;
        user.award = '未中奖';
        user.awardStatus = 1;
        try {
          await manager.update(User, user.id, user);
          return user;
        } catch (error) {
          console.log(error);
          throw new ServiceException('抽奖异常，请重试!', -203);
        }
      }

      const lotteryRandom = Math.round(Math.random() * (calcAwards.length - 1));
      const winingAward = calcAwards[lotteryRandom];

      if (winingAward) {
        try {
          // 中奖减库存
          winingAward.stock -= 1;
          user.awardId = winingAward.id;
          user.award = winingAward.award;
          user.awardStatus = 0;
          await Promise.all([
            manager.update(Award, winingAward.id, winingAward),
            manager.update(User, user.id, user),
          ]);
          return user;
        } catch (error) {
          console.log(error);
          throw new ServiceException('抽奖异常，请重试!', -203);
        }
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

  // async lottery(phone: string): Promise<any> {
  //   try {
  //     console.log('-------------------------------123');
  //     const awards = await this.awardService.getAll();

  //     const calcAwards = awards.filter((g) => g.stock > 0);

  //     if (calcAwards.length == 0) {
  //       throw new ServiceException('活动已结束!', -300);
  //     }

  //     let user = await this.getUserByPhone(phone);
  //     if (!user) {
  //       try {
  //         user = new User();
  //         user.phone = phone;
  //         await this.insertUser(user);
  //       } catch (error) {
  //         console.log(error);
  //         throw new ServiceException('已经抽过奖', -304);
  //       }
  //     } else {
  //       if (user.award) {
  //         return user;
  //       }
  //     }

  //     const lotteryRandom = Math.round(Math.random() * (calcAwards.length - 1));
  //     const winingAward = calcAwards[lotteryRandom];

  //     console.log('抽奖随机', lotteryRandom);
  //     console.log(winingAward);

  //     if (winingAward) {
  //       try {
  //         // 中奖减库存
  //         user.awardId = winingAward.id;
  //         user.award = winingAward.award;
  //         await Promise.all([
  //           this.awardService.reduceStock(winingAward.id, winingAward),
  //           this.modifyUser(user),
  //         ]);
  //         return this.getUserByPhone(phone);
  //       } catch (error) {
  //         console.log(error);
  //         throw new ServiceException('抽奖异常，请重试!', -203);
  //       }
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async lotteryOld(phone: string): Promise<any> {
  //   try {
  //     const awards = await this.awardService.getAll();

  //     const calcAwards = awards.filter((g) => g.stock > 0);

  //     if (calcAwards.length == 0) {
  //       throw new ServiceException('活动已结束!', -300);
  //     }

  //     let user = await this.getUserByPhone(phone);
  //     if (!user) {
  //       try {
  //         user = new User();
  //         user.phone = phone;
  //         await this.insertUser(user);
  //       } catch (error) {
  //         console.log(error);
  //         throw new ServiceException('已经抽过奖', -304);
  //       }
  //     } else {
  //       if (user.award) {
  //         return user;
  //       }
  //     }

  //     // 总中奖概率
  //     const threshold = 0.7;
  //     // 礼品总数
  //     const tal = calcAwards.reduce((a, b) => a + b.quantity, 0);
  //     const num = tal / threshold; // 随机数范围 = 礼品总数 / 总中奖率
  //     const random = Math.round(Math.random() * (num - 1));
  //     console.log('tal', tal, random);
  //     // 随机数发生在没中奖的范围
  //     if (random >= tal) {
  //       user.awardId = -2;
  //       user.award = '未中奖';
  //       try {
  //         await this.modifyUser(user);
  //         return this.getUserByPhone(phone);
  //       } catch (error) {
  //         console.log(error);
  //         throw new ServiceException('抽奖异常，请重试!', -203);
  //       }
  //     }

  //     const lotteryRandom = Math.round(Math.random() * (calcAwards.length - 1));
  //     const winingAward = calcAwards[lotteryRandom];

  //     console.log('抽奖随机', lotteryRandom);
  //     console.log(winingAward);

  //     if (winingAward) {
  //       try {
  //         // 中奖减库存
  //         user.awardId = winingAward.id;
  //         user.award = winingAward.award;
  //         await Promise.all([
  //           this.awardService.reduceStock(winingAward.id, winingAward),
  //           this.modifyUser(user),
  //         ]);
  //         return this.getUserByPhone(phone);
  //       } catch (error) {
  //         console.log(error);
  //         throw new ServiceException('抽奖异常，请重试!', -203);
  //       }
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}