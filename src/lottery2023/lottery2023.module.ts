import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConnection } from 'src/constants/db-connection-names';
import { User } from './user.entity';
import { Captcha } from './captcha.entity';
import { Award } from './award.entity';
import { Prize } from './prize.entity';
import { AwardService } from './award.service';
import { PrizeService } from './prize.service';
import { CaptchaService } from './captcha.service';
import { LotteryController } from './lottery.controller';
import { LotteryService } from './lottery.service';
import { Control } from './control.entity';
import { LotteryLog } from './lottery-log.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User], DBConnection.machine1),
    TypeOrmModule.forFeature([Captcha], DBConnection.machine1),
    TypeOrmModule.forFeature([Award], DBConnection.machine1),
    TypeOrmModule.forFeature([Prize], DBConnection.machine1),
    TypeOrmModule.forFeature([Control], DBConnection.machine1),
    TypeOrmModule.forFeature([LotteryLog], DBConnection.machine1),
    HttpModule,
  ],
  controllers: [LotteryController],
  providers: [LotteryService, CaptchaService, AwardService, PrizeService],
})
export class Lottery2023Module {}
