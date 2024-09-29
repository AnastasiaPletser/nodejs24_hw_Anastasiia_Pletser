import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {}

export class PartialUpdateUserDto {
  lastName?: string;
  firstName?: string;
  age?: number;
  isStudent?: boolean;
}
