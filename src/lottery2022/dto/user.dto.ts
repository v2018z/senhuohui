import { IsNotEmpty, IsNumber } from 'class-validator';

export class UserDTO {
  id: number;

  @IsNotEmpty()
  @IsNumber()
  phone: string;

  createdAt: number;

  updatedAt: number;
}
