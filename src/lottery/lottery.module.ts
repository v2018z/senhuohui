import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConnection } from 'src/constants/db-connection-names';
import { LotteryController } from './lottery.controller';
import { LotteryService } from './lottery.service';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User], DBConnection.machine1),
    HttpModule,
  ],
  controllers: [LotteryController],
  providers: [LotteryService],
})
export class LotteryModule {}
