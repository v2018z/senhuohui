import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

const db =
  process.env.NODE_ENV === 'production'
    ? 'senhuohui2022'
    : 'senhuohui2022-test';

@Entity('switch', { database: db })
@Index('id', ['id'])
export class Switch {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    comment: '开关：1是未开奖，2是已开奖，最好录好奖励之后再开',
    default: 1,
  })
  switch: number;
}
