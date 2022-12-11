import { HttpService, Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { DBConnection } from 'src/constants/db-connection-names';
import * as MD5 from 'md5';
import { base64encode } from 'nodejs-base64';

@Injectable()
export class LotteryService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User, DBConnection.machine1)
    repo: Repository<User>,
    private readonly httpService: HttpService,
  ) {
    super(repo);
  }

  async getUserByPhone(phone) {
    return await this.repo
      .createQueryBuilder('user')
      .where('user.phone = :phone', { phone })
      .getOne();
  }

  querySwfcByPhone(phone): any {
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
}
