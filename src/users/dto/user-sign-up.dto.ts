import { IsNumber, IsString, Length } from 'class-validator';
import { IUser } from '../interfaces/user.interface';
import { Transform } from 'class-transformer';

export class UserSignUpDto implements IUser {
  @IsString()
  @Length(1, 5)
  isStudent: true;

  firstName: string;
  lastName: string;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value) * 10)
  age: number;

  @Transform(({ value }) => parseInt(value, 10))
  id: number;
}
