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
}
