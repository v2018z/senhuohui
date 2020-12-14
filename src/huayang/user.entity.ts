import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

const db = process.env.NODE_ENV === 'production' ? 'huayang' : 'huayang-test';

@Entity('user', { database: db })
@Index('id', ['id'])
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    comment: '手机号',
  })
  phone: string;

  @Column({
    type: 'varchar',
    comment: '姓名',
  })
  name: string;

  @Column({
    type: 'varchar',
    comment: '公司名称',
  })
  company: string;

  @Column({
    type: 'varchar',
    comment: '奖品Id',
    name: 'award_id',
  })
  awardId: number;

  @Column({
    type: 'varchar',
    comment: '奖品',
    name: 'award_name',
  })
  awardName: string;

  @Column({
    type: 'int',
    comment: '奖品类型',
    name: 'award_type',
  })
  awardType: number;

  @Column({
    name: 'created_at',
    type: 'int',
    // 只有第一次保存更新，后续修改不会触发此更新
    update: false,
  })
  createdAt: number = Math.floor(Date.now() / 1000);

  @Column({
    name: 'updated_at',
    type: 'int',
    update: true,
  })
  updatedAt: number = Math.floor(Date.now() / 1000);
}
