import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

const db =
  process.env.NODE_ENV === 'production'
    ? 'senhuohui-2023'
    : 'senhuohui-2023-test';

@Entity({ name: 'lottery_log', database: db })
export class LotteryLog {
  @PrimaryGeneratedColumn({ name: 'id', comment: '自增id' })
  id: number;

  @Column({ name: 'user_id', type: 'int', comment: '用户ID' })
  userId: number;

  @Column({ name: 'phone', type: 'varchar', comment: '手机号' })
  phone: string;

  @Column({
    name: 'current_probability',
    type: 'float',
    comment: '当前固定概率',
  })
  currentProbability: number;

  @Column({
    name: 'lottery_probability',
    type: 'float',
    comment: '抽奖抽到的概率',
  })
  lotteryProbability: number;

  @Column({ name: 'award_id', type: 'int', comment: '奖品ID' })
  awardId: number;

  @Column({ name: 'award', type: 'varchar', comment: '奖品名称' })
  award: string;

  @Column({
    name: 'failure_reason',
    type: 'varchar',
    length: 100,
    nullable: true,
    comment: '未中奖原因',
  })
  failureReason: string | null;

  @Column({
    name: 'lottery_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '抽奖时间',
  })
  lotteryTime: Date;
}
