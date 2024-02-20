export type RegisterUserType = {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  phonenumber: string;
};

export type loginFormType = {
  username: string;
  password: string;
};

export type ErrorType = {
  status: string;
  messages?: string[];
  message?: string;
};

export type AuthUser = {
  bio: string | null;
  email: string;
  enabled: boolean;
  firstname: string;
  id: number;
  image: string | null;
  lastname: string;
  phonenumber: string;
  username: string;
};

export type AuthenticationReponse = {
  data: AuthUser;
  access_token: string;
  refresh_token: string;
  status: string;
};
