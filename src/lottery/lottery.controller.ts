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

@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
export class LotteryController implements CrudController<User> {
  constructor(public service: LotteryService) {}
  // getManyBase?(
  //   @ParsedRequest() req: CrudRequest,
  // ): Promise<GetManyDefaultResponse<User> | User[]> {
  //   throw new Error('Method not implemented.');
  // }

  // getOneBase?(@ParsedRequest() req: CrudRequest): Promise<User> {
  //   throw new Error('Method not implemented.');
  // }

  // @Override('createOneBase')
  // createOneBase?(
  //   @ParsedRequest() req: CrudRequest,
  //   @ParsedBody() dto: UserDTO,
  // ): Promise<User> {
  //   throw new Error('Method not implemented.');
  // }

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

  @Get('query_swfc_by_phone')
  async querySwfcByPhone(@Query('phone') phone: string): Promise<any> {
    // try {
    //   await this.switchCfgService.setUpSwitchCfgByPost(+postSwitch + 1);
    //   // 通知其他端刷新配置项
    //   this.switchCfgService.reloadSwitches();
    // } catch (ex) {
    //   return new BadHandleException(ex.msg);
    // }
    const data = await this.service.querySwfcByPhone(phone);

    // console.log('__LYG_JAX', data); // debug-log

    return data;
  }
}
