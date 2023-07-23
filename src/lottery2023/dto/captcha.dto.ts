import { IsNotEmpty, IsNumber } from 'class-validator';

export class CaptchaDTO {
  id: number;

  @IsNotEmpty()
  @IsNumber()
  phone: string;

  captcha: string;
}
