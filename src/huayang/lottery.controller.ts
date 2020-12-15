import { Controller, Get, Query } from '@nestjs/common';
import {
  CreateManyDto,
  Crud,
  CrudController,
  CrudRequest,
  CrudService,
  Override,
  GetManyDefaultResponse,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { User } from './user.entity';
// import { UserDTO } from './dto/user.dto';
import { LotteryService } from './lottery.service';
import { UserDTO } from './dto/user.dto';
import { AwardService } from './award.service';
import { randomNum } from '../common/utils';
import { BadHandleException } from 'src/common/exceptions/bad-handle.exception';

@Crud({
  model: {
    type: User,
  },
})
@Controller('huayang/users')
export class LotteryController implements CrudController<User> {
  constructor(
    public service: LotteryService,
    public awardService: AwardService,
  ) {}
  // getManyBase?(
  //   @ParsedRequest() req: CrudRequest,
  // ): Promise<GetManyDefaultResponse<User> | User[]> {
  //   throw new Error('Method not implemented.');
  // }

  // getOneBase?(@ParsedRequest() req: CrudRequest): Promise<User> {
  //   throw new Error('Method not implemented.');
  // }

  @Override('createOneBase')
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: UserDTO,
  ): Promise<User> {
    const awardType = dto.awardType;
    const awardList = await this.awardService.getAwards(awardType);

    if (awardList.length == 0) {
      throw new BadHandleException('奖品已领取完毕', -9);
    }

    const random = Math.floor(
      Math.random() * (awardList.length - 1 - 0 + 1) + 0,
    );
    const awardItem = awardList[random];

    dto.awardName = awardItem.awardName;
    dto.awardType = awardItem.awardType;
    dto.awardId = awardItem.id;
    awardItem.usedNum += 1;

    await this.awardService.addAward(awardItem);
    const lottery = await this.service.createOne(req, dto);

    return lottery;
  }

  // createManyBase?(
  //   @ParsedRequest() req: CrudRequest,
  //   dto: CreateManyDto<User>,
  // ): Promise<User[]> {
  //   throw new Error('Method not implemented.');
  // }

  // updateOneBase?(@ParsedRequest() req: CrudRequest, dto: User): Promise<User> {
  //   throw new Error('Method not implemented.');
  // }

  // replaceOneBase?(@ParsedRequest() req: CrudRequest, dto: User): Promise<User> {
  //   throw new Error('Method not implemented.');
  // }

  // deleteOneBase?(@ParsedRequest() req: CrudRequest): Promise<void | User> {
  //   throw new Error('Method not implemented.');
  // }
}
