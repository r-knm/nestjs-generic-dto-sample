import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CommonResponseDto } from './common-response.dto';
import { GetHelloResponse } from './get-hello.dto';

@Injectable()
export class AppService {
  getHello(): CommonResponseDto<GetHelloResponse> {
    // WARN: Force to throw internal server error.
    throw new InternalServerErrorException('Internal Server Error');

    return {
      success: true,
      date: new Date(),
      data: {
        message: 'Hello World!',
      },
      error: null,
    };
  }
}
