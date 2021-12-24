import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryPostDto {
  @ApiPropertyOptional({ description: '页码' })
  readonly page: number;

  @ApiPropertyOptional({ description: '数量' })
  readonly size: number;
}
