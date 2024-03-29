import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConnection } from 'src/constants/db-connection-names';
import { LotteryController } from './lottery.controller';
import { LotteryService } from './lottery.service';
import { CaptchaService } from './captcha.service';
import { User } from './user.entity';
import { Captcha } from './captcha.entity';
import { Award } from './award.entity';
import { Switch } from './switch.entity';
import { SwitchService } from './switch.service';
import { AwardService } from './award.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User], DBConnection.machine1),
    TypeOrmModule.forFeature([Captcha], DBConnection.machine1),
    TypeOrmModule.forFeature([Award], DBConnection.machine1),
    TypeOrmModule.forFeature([Switch], DBConnection.machine1),
    HttpModule,
  ],
  controllers: [LotteryController],
  providers: [LotteryService, CaptchaService, SwitchService, AwardService],
})
export class LotteryModule {}
