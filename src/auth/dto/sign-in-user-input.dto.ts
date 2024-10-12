import { ISignInUserInput } from '../interface/sign-in-user-response.interface';

export class SignInUserInputDto implements ISignInUserInput {
  firstName: string;
  password: string;
}
