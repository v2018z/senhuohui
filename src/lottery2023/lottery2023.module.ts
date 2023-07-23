import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConnection } from 'src/constants/db-connection-names';
import { User } from './user.entity';
import { Captcha } from './captcha.entity';
import { Award } from './award.entity';
import { AwardService } from './award.service';
import { CaptchaService } from './captcha.service';
import { LotteryController } from './lottery.controller';
import { LotteryService } from './lottery.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User], DBConnection.machine1),
    TypeOrmModule.forFeature([Captcha], DBConnection.machine1),
    TypeOrmModule.forFeature([Award], DBConnection.machine1),
    HttpModule,
  ],
  controllers: [LotteryController],
  providers: [LotteryService, CaptchaService, AwardService],
})
export class Lottery2023Module {}