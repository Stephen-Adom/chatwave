import { of } from 'rxjs';
import { BASEURI } from './baseUri';
import { RegisterUserType } from '@chatwave/utils';

export class AuthenticationService {
  registerUser = (userInfo: RegisterUserType) => {
    return fetch(`${BASEURI}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
  };
}
