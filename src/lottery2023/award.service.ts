import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBConnection } from 'src/constants/db-connection-names';
import { Award } from './award.entity';

@Injectable()
export class AwardService extends TypeOrmCrudService<Award> {
  constructor(
    @InjectRepository(Award, DBConnection.machine1)
    repo: Repository<Award>,
  ) {
    super(repo);
  }

  getAll() {
    return this.repo.find();
  }

  reduceStock(id: number, award: Award) {
    award.stock -= 1;
    return this.repo.update(id, award);
  }
}