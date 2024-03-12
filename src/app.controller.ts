import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';
import { ApiCommonOkResponse } from './api-common-ok-response.decorator';
import { GetHelloResponse } from './get-hello.dto';
import { CommonResponseDto } from './common-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'あいさつ取得',
    description: 'あいさつを取得する。',
  })
  @ApiCommonOkResponse(GetHelloResponse, 'object')
  getHello(): CommonResponseDto<GetHelloResponse> {
    return this.appService.getHello();
  }

  @Get('error')
  @ApiOperation({
    summary: '(強制エラー)',
    description: '強制的にエラーを出力する。',
  })
  getError(): void {
    return this.appService.getError();
  }
}
