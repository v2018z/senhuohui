import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConnection } from 'src/constants/db-connection-names';
import { LotteryController } from './lottery.controller';
import { LotteryService } from './lottery.service';
import { User } from './user.entity';
import { AwardController } from './award.controller';
import { AwardService } from './award.service';
import { Award } from './award.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Award], DBConnection.machine1),
    HttpModule,
  ],
  controllers: [LotteryController, AwardController],
  providers: [LotteryService, AwardService],
})
export class HYLotteryModule {}
