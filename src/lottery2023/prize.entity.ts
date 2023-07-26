import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

const db =
  process.env.NODE_ENV === 'production'
    ? 'senhuohui-2023'
    : 'senhuohui-2023-test';

@Entity('prize', { database: db })
@Index('id', ['id'])
export class Prize {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    comment: '品类',
  })
  category: string;

  @Column({
    type: 'varchar',
    comment: '奖品',
  })
  award: string;

  @Column({
    type: 'int',
    comment: '数量',
  })
  quantity: number;

  @Column({
    type: 'int',
    comment: '库存',
  })
  stock: number;

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
