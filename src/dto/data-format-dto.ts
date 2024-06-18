import { IsNumber, IsString } from 'class-validator';

export class dataDto {
  @IsString()
  name: string;

  @IsString()
  role: string;

  @IsNumber()
  age: number;
}
