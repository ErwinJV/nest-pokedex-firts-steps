import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class QueryParametersDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  offset?: number;
}
