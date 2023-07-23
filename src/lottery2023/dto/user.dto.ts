import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserDTO {
  id: number;

  @IsNotEmpty()
  @IsNumber()
  phone: string;

  @IsNotEmpty()
  @IsNumber()
  awardId: number;

  createdAt: number;

  updatedAt: number;
}
