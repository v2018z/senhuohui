import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserDTO {
  id: number;

  @IsNotEmpty()
  @IsNumber()
  phone: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  company: string;
}
