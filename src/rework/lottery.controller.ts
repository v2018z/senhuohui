import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { User } from './user.entity';
import { LotteryService } from './lottery.service';
import { BadHandleException } from '../common/exceptions/bad-handle.exception';
import { UserDTO } from './dto/user.dto';
import { CaptchaService } from './captcha.service';
import { Captcha } from './captcha.entity';
import { CaptchaDTO } from './dto/captcha.dto';
import { AwardService } from './award.service';

@Crud({
  model: {
    type: User,
  },
})
@Controller('rework')
export class LotteryController implements CrudController<User> {
  constructor(
    public service: LotteryService,
    public captchaService: CaptchaService,
    public awardService: AwardService,
  ) {}

  get base(): CrudController<User> {
    return this;
  }

  @Get('query_swfc_by_phone')
  async querySwfcByPhone(@Query('phone') phone: string): Promise<any> {
    try {
      const { data } = await this.service.querySwfcByPhone(phone);
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
        await this.captchaService.send(phone, randomCaptcha);
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
      return data;
    } else {
      throw new BadHandleException('请输入正确的验证码');
    }
  }

  @Get('lottery')
  async lottery(@Query('phone') phone: string): Promise<any> {
    return Promise.reject();
  }

  @Override('createOneBase')
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: UserDTO,
  ): Promise<User> {
    const phone = dto.phone;
    if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(phone)) {
      throw new BadHandleException('您输入的手机号有误');
    }
    const data = await this.service.getUserByPhone(phone);
    if (data) {
      throw new BadHandleException('您已经参与过抽奖');
    }
    const user = this.base.createOneBase(req, dto);
    return user;
  }
}
