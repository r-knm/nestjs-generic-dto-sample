import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CommonResponseDto<TData> {
  @ApiProperty({
    description: '実行結果',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  success: boolean;

  @ApiProperty({
    description: 'APIエンドポイント名',
    example: true,
  })
  @IsString()
  @IsNotEmpty()
  instance: string;

  @ApiProperty({
    description: 'レスポンス送信日時',
    example: '2024-03-12T07:45:29.583Z',
    type: Date,
  })
  @IsDate()
  date: Date;

  @ApiProperty({
    description: 'データ',
    required: false,
  })
  @IsNotEmpty()
  data: TData | TData[];

  @ApiProperty({
    description: 'エラー内容',
    example: [],
    required: false,
  })
  @IsArray()
  @IsNotEmpty()
  error: string;
}
