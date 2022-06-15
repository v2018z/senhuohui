import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from 'nestjs-config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {
    console.log('__LYG_JAX', this.config.get('machine.machine.master')); // debug-log
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      logging: this.config.get('machine.logging'),
      synchronize: this.config.get('machine.synchronize'),
      keepConnectionAlive: true,
      replication: {
        // 更新、写入
        master: {
          ...this.config.get('machine.machine.master'),
        },
        // 读
        slaves: [...this.config.get('machine.machine.slaves')],
      },
    };
  }
}
