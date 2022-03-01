import { Body, Controller, Post } from '@nestjs/common';
import { FusionUpperPipe } from './pipes/FusionUpperPipe.pipe';

@Controller('skills')
export class AppController {
  @Post()
  skills(@Body(FusionUpperPipe) body) {
    return body;
  }
}
