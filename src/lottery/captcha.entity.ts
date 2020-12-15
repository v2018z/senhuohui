import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

const db =
  process.env.NODE_ENV === 'production' ? 'senhuohui' : 'senhuohui-test';

@Entity('captcha', { database: db })
@Index('id', ['id'])
export class Captcha {
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
    comment: '验证码',
  })
  captcha: string;

  @Column({
    type: 'int',
    comment: '是否有效',
    default: 1,
  })
  effective: number;

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
