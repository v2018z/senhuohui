import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

const db =
  process.env.NODE_ENV === 'production'
    ? 'senhuohui-2023'
    : 'senhuohui-2023-test';

@Entity('user', { database: db })
@Index('id', ['id'])
@Index('phone', ['phone'], { unique: true })
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
    name: 'award_id',
    type: 'int',
    comment: '奖品ID',
    nullable: true,
  })
  awardId: number;

  @Column({
    name: 'award',
    type: 'varchar',
    comment: '奖品名称',
    nullable: true,
  })
  award: string;

  @Column({
    name: 'award_status',
    type: 'int',
    comment: '领奖状态 -1未抽奖 0 未领奖 1 已领奖',
    default: -1,
  })
  awardStatus: number;

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
  })
  updatedAt: number = Math.floor(Date.now() / 1000);
}
