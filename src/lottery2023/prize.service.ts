import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBConnection } from 'src/constants/db-connection-names';
import { Prize } from './prize.entity';

@Injectable()
export class PrizeService extends TypeOrmCrudService<Prize> {
  constructor(
    @InjectRepository(Prize, DBConnection.machine1)
    repo: Repository<Prize>,
  ) {
    super(repo);
  }

  getAll() {
    return this.repo.find();
  }
}
