import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { AwardService } from './award.service';
import { Award } from './award.entity';

@Crud({
  model: {
    type: Award,
  },
})
@Controller('huayang/awards')
export class AwardController implements CrudController<Award> {
  constructor(public service: AwardService) {}
}
