import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBConnection } from 'src/constants/db-connection-names';
import { Switch } from './switch.entity';

@Injectable()
export class SwitchService extends TypeOrmCrudService<Switch> {
  constructor(
    @InjectRepository(Switch, DBConnection.machine1)
    repo: Repository<Switch>,
  ) {
    super(repo);
  }

  async getSwitch() {
    return this.repo.findOne();
  }
}
