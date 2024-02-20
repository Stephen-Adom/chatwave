import { BASEURI } from './baseUri';
import { RegisterUserType, loginFormType } from '@chatwave/utils';

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

  authenticate = async (userInfo: loginFormType) => {
    try {
      const response = await fetch(`${BASEURI}/auth/authenticate`, {
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

  signOut = async () => {
    try {
      const response = await fetch(`${BASEURI}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
        },
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
