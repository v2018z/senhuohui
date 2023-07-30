import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

const db =
  process.env.NODE_ENV === 'production'
    ? 'senhuohui-2023'
    : 'senhuohui-2023-test';

@Entity('control', { database: db })
export class Control {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'double',
    comment: '抽奖概率',
    default: 0.5,
  })
  probability: number;

  @Column({
    name: 'participants_count',
    type: 'integer',
    default: 0,
    comment: '当前抽奖人数',
  })
  participantsCount: number;

  @Column({
    name: 'max_winners',
    type: 'integer',
    default: 0,
    comment: '最大奖品数',
  })
  maxWinners: number;
}
