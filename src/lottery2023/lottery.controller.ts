import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Transaction, EntityManager, TransactionManager } from 'typeorm';
import { User } from './user.entity';
import { LotteryService } from './lottery.service';
import { BadHandleException } from '../common/exceptions/bad-handle.exception';
import { ServiceException } from '../common/exceptions/service.exception';
import { CaptchaService } from './captcha.service';
import { Captcha } from './captcha.entity';
import { CaptchaDTO } from './dto/captcha.dto';
import { AwardService } from './award.service';
import { DBConnection } from '../constants/db-connection-names';
import { PrizeService } from './prize.service';

@Crud({
  model: {
    type: User,
  },
})
@Controller('lottery2023')
export class LotteryController implements CrudController<User> {
  constructor(
    public service: LotteryService,
    public captchaService: CaptchaService,
    public awardService: AwardService,
    public prizeService: PrizeService,
  ) {}

  get base(): CrudController<User> {
    return this;
  }

  @Get('query_swfc_by_phone')
  async querySwfcByPhone(@Query('phone') phone: string): Promise<any> {
    try {
      const { data } = await this.service.querySwfcByPhone(phone);
      console.log(data);
      return data;
    } catch (error) {
      throw new BadHandleException();
    }
  }

  @Post('sendCaptcha')
  async sendCaptcha(@Body('phone') phone: string): Promise<any> {
    try {
      const randomCaptcha = (
        '000000' + Math.floor(Math.random() * 999999)
      ).slice(-4);
      try {
        if (process.env.NODE_ENV !== 'development') {
          await this.captchaService.send(phone, randomCaptcha);
        }
        const captcha = new Captcha();
        captcha.phone = phone;
        captcha.captcha = randomCaptcha;
        this.captchaService.insertCaptchaInfo(captcha);
      } catch (ex) {
        throw new BadHandleException('验证码发送失败');
      }
    } catch (error) {
      console.log('__LYG_JAX', '发验证码', error); // debug-log
      throw new BadHandleException();
    }
  }

  @Post('login')
  async login(@Body() dto: CaptchaDTO): Promise<any> {
    const phone = dto.phone;
    const captcha = dto.captcha;

    if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(phone)) {
      throw new BadHandleException('您输入的手机号有误');
    }

    const data = await this.captchaService.findCaptchaInfo(phone, 1);

    if (!data) {
      throw new BadHandleException('请发送验证码后再试');
    }

    if (data.effective == 2) {
      throw new BadHandleException('验证码已失效，请重新发送验证码');
    }

    if (captcha == data.captcha) {
      this.captchaService.deleteCaptchaInfo(data);
    } else {
      throw new BadHandleException('请输入正确的验证码');
    }
    return this.service.insertUser(phone);
  }

  @Get('user')
  async user(@Query('phone') phone: string): Promise<any> {
    if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(phone)) {
      throw new BadHandleException('您输入的手机号有误');
    }
    try {
      const user = await this.service.getUserByPhone(phone);
      return user ?? null;
    } catch (error) {
      throw new BadHandleException('用户查询错误');
    }
  }

  @Get('check_activity')
  @Transaction({
    connectionName: DBConnection.machine1,
  })
  async checkActicity(
    @Query('phone') phone: string,
    @TransactionManager() manager: EntityManager,
  ): Promise<any> {
    if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(phone)) {
      throw new BadHandleException('您输入的手机号有误');
    }
    return this.service.checkActicity(phone, manager);
  }

  @Get('prizes')
  async prizes(): Promise<any> {
    return await this.prizeService.getAll();
  }

  @Get('awards')
  async awards(): Promise<any> {
    return await this.awardService.getAll();
  }

  @Get('users')
  async users(): Promise<any> {
    return await this.service.getAllUser();
  }

  @Post('users/remove')
  async removeUsers(): Promise<any> {
    return await this.service.removeUsers();
  }

  @Post('lottery')
  @Transaction({
    connectionName: DBConnection.machine1,
  })
  async lottery(
    @Body('phone') phone: string,
    @TransactionManager() manager: EntityManager,
  ): Promise<any> {
    try {
      const user = await this.service.getUserByPhone(phone);
      if (!user) {
        throw new ServiceException('用户未注册', -400);
      }
      return await this.service.lottery(phone, manager);
    } catch (error) {
      throw new BadHandleException(
        error.message ?? '服务器开小差了',
        error.code,
      );
    }
  }

  @Post('receive')
  async receive(
    @Body('userId') userId: string,
    @Body('hxm') hxm: string,
  ): Promise<any> {
    try {
      return this.service.receive(userId, hxm);
    } catch (error) {
      throw new BadHandleException(
        error.message ?? '服务器开小差了',
        error.code,
      );
    }
  }

  @Post('changeAawardStock')
  async changeAawardStock(
    @Body('id') id: string,
    @Body('num') num: number,
  ): Promise<any> {
    try {
      return this.service.changeAawardStock(id, num);
    } catch (error) {
      throw new BadHandleException(
        error.message ?? '服务器开小差了',
        error.code,
      );
    }
  }

  @Get('control')
  async control(): Promise<any> {
    try {
      return this.service.getControl();
    } catch (error) {
      throw new BadHandleException(
        error.message ?? '服务器开小差了',
        error.code,
      );
    }
  }

  @Post('control/change')
  async changeControl(@Body('num') num): Promise<any> {
    try {
      return this.service.changeControl(num);
    } catch (error) {
      throw new BadHandleException(
        error.message ?? '服务器开小差了',
        error.code,
      );
    }
  }
}
