import { of } from 'rxjs';
import { BASEURI } from './baseUri';
import { RegisterUserType } from '@chatwave/utils';

export class AuthenticationService {
  registerUser = async (userInfo: RegisterUserType) => {
    try {
      const response = await fetch(`${BASEURI}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw errorResponse;
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  };
}
