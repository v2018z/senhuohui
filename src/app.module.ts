import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBConnection } from './constants/db-connection-names';
import { BootstrapModule } from './bootstrap.module';
import { Lottery2023Module } from './lottery2023/lottery2023.module';
import { TypeOrmConfigService } from './orm-config.server';

@Module({
  imports: [
    BootstrapModule,
    TypeOrmModule.forRootAsync({
      name: DBConnection.machine1,
      useClass: TypeOrmConfigService,
    }),
    Lottery2023Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
