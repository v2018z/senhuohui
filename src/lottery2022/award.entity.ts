import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

const db =
  process.env.NODE_ENV === 'production'
    ? 'senhuohui2022'
    : 'senhuohui2022-test';

@Entity('award', { database: db })
@Index('id', ['id'])
@Index('phone', ['phone'], { unique: true })
export class Award {
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
    comment: '等级',
  })
  level: string;

  @Column({
    type: 'varchar',
    comment: '奖品',
  })
  award: string;
}
