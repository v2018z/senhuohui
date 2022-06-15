import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBConnection } from './constants/db-connection-names';
import { BootstrapModule } from './bootstrap.module';
import { ReworkModule } from './rework/rework.module';
import { TypeOrmConfigService } from './orm-config.server';

@Module({
  imports: [
    BootstrapModule,
    TypeOrmModule.forRootAsync({
      name: DBConnection.machine1,
      useClass: TypeOrmConfigService,
    }),
    ReworkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
