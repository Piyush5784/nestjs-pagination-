import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { dataDto } from './dto/data-format-dto';

@Controller('/data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/send')
  addData(@Body(ValidationPipe) dataDto: dataDto) {
    return this.appService.storeData(dataDto);
  }

  @Get('/:page')
  getData(@Param('page') page?: number) {
    return this.appService.getAllData(page);
  }
}
