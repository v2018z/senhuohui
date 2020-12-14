import { HttpService, Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Award } from './award.entity';
import { DBConnection } from 'src/constants/db-connection-names';

@Injectable()
export class AwardService extends TypeOrmCrudService<Award> {
  constructor(
    @InjectRepository(Award, DBConnection.machine1)
    repo: Repository<Award>,
  ) {
    super(repo);
  }

  async getAwards(awardType): Promise<Award[]> {
    const rowManyData = await this.repo
      .createQueryBuilder('award')
      .where('award.awardType = :awardType', { awardType })
      .andWhere('award.total != award.usedNum')
      .getMany();

    return rowManyData;
  }

  async addAward(award: Award) {
    await this.repo.update({ id: award.id }, award);
  }
}
