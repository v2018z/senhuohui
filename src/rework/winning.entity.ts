import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

const db =
  process.env.NODE_ENV === 'production'
    ? 'senhuohui-rework'
    : 'senhuohui-rework-test';

@Entity('winning', { database: db })
@Index('id', ['id'])
export class Award {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'int',
    comment: '用户ID',
  })
  userId: number;

  @Column({
    type: 'int',
    comment: '奖品ID',
  })
  awardId: number;

  @Column({
    name: 'created_at',
    type: 'int',
    // 只有第一次保存更新，后续修改不会触发此更新
    update: false,
  })
  createdAt: number = Math.floor(Date.now() / 1000);
}
