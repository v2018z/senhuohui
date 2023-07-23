import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBConnection } from 'src/constants/db-connection-names';
import * as Core from '@alicloud/pop-core';
import { Captcha } from './captcha.entity';

const client = new Core({
  accessKeyId: 'LTAI4GHVT7be52fAbbLvzd6K',
  accessKeySecret: 'VuZHTdqa1LDv26Pg5n3atCzbg30fxe',
  endpoint: 'https://dysmsapi.aliyuncs.com',
  apiVersion: '2017-05-25',
});

@Injectable()
export class CaptchaService extends TypeOrmCrudService<Captcha> {
  constructor(
    @InjectRepository(Captcha, DBConnection.machine1)
    repo: Repository<Captcha>,
  ) {
    super(repo);
  }

  async send(phone: string, captcha: string) {
    console.log('__LYG_JAX_2020', '验证码', captcha); // debug-log
    const params = {
      RegionId: 'cn-hangzhou',
      PhoneNumbers: phone,
      SignName: '森活会',
      TemplateCode: 'SMS_206660676',
      TemplateParam: `{"code":"${captcha}"}`,
    };
    return new Promise((resolve, reject) => {
      client.request('SendSms', params, { method: 'POST' }).then(
        (result) => {
          console.log('result', result);
          resolve(result);
        },
        (ex) => {
          console.log('result-error', ex);
          reject(ex);
        },
      );
    });
  }

  findCaptchaInfo(phone: string, effective?: number) {
    const query: any = { phone };
    if (effective) {
      query.effective = effective;
    }
    return this.repo.findOne(query);
  }

  deleteCaptchaInfo(captcha: Captcha) {
    captcha.effective = 2;
    this.repo.update(captcha.id, captcha);
  }

  async insertCaptchaInfo(captcha: Captcha) {
    const info = await this.findCaptchaInfo(captcha.phone, 1);
    if (info) {
      info.captcha = captcha.captcha;
      info.updatedAt = Math.floor(Date.now() / 1000);
      return this.repo.update(info.id, info);
    } else {
      return this.repo.save(captcha);
    }
  }
}
