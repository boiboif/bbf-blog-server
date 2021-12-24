import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: '文章标题' })
  @IsNotEmpty({ message: '文章标题必填' })
  readonly title: string;

  @IsNotEmpty({ message: '缺少作者信息' })
  @ApiProperty({ description: '作者' })
  readonly author: string;

  @IsNotEmpty({ message: '缺少摘要信息' })
  @ApiProperty({ description: '摘要' })
  readonly briefContent: string;

  @IsNotEmpty({ message: '缺少内容' })
  @ApiProperty({ description: '内容' })
  readonly content: string;

  @ApiPropertyOptional({ description: '文章封面' })
  readonly cover_url: string;

  @IsNotEmpty({ message: '缺少文章类型' })
  @ApiProperty({ description: '文章类型: 0:markdown文本，1:富文本' })
  readonly type: number;

  @ApiPropertyOptional({ description: '阅读次数（不用传）' })
  readonly readCount: number;
}
