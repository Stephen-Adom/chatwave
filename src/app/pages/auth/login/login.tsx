import chatWave from 'assets/images/logo/chatwave-logo.png';
import loginSvg from 'assets/images/auth/joel-filipe-jU9VAZDGMzs-unsplash.jpg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './login.module.css';
import { AuthenticationService } from '@chatwave/services';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  AuthenticationReponse,
  handleError,
  loginFormType,
  notifySuccess,
} from '@chatwave/utils';
import localforage from 'localforage';
import { setAuthUser } from '@chatwave/store';

const authService = new AuthenticationService();

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const form = useForm<loginFormType>({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  console.log(form.control.getFieldState('username'));

  const submitForm = (data: loginFormType) => {
    setLoading(true);
    authService
      .authenticate(data)
      .then((response: AuthenticationReponse) => {
        notifySuccess('User signed in successfully');
        setLoading(false);
        saveUserInfoAndRedirect(response);
      })
      .catch((error) => {
        setLoading(false);
        handleError(error);
      });
  };

  const saveUserInfoAndRedirect = async (response: AuthenticationReponse) => {
    const userInfo = await localforage.setItem('authUser', response.data);
    sessionStorage.setItem('access_token', response.access_token);
    sessionStorage.setItem('refresh_token', response.refresh_token);
    dispatch(setAuthUser(userInfo));
    window.location.href = '/chats';
  };

  return (
    <div
      id="login-section"
      className="w-screen h-screen bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[30%_70%] overflow-y-hidden"
    >
      <div className="form-section flex flex-col items-center justify-center relative">
        <div className="flex items-center justify-center">
          <img src={chatWave} alt="chatwave" className="w-[20%]" />
          <h3 className="font-bold text-xl text-gray-500 tracking-widest">
            Chatwave
          </h3>
        </div>

        <h1 className="mb-8 mt-10 font-extrabold text-2xl sm:text-2xl md:text-xl">
          Welcome Back!
        </h1>

        <form
          onSubmit={handleSubmit(submitForm)}
          className="w-[70%] sm:w-[70%] md:w-[60%] mx-auto"
        >
          <div className="form-group">
            <input
              type="text"
              aria-label="username"
              className={`form-control ${
                control.getFieldState('username').invalid && styles.error
              }`}
              placeholder="Username"
              {...register('username', {
                required: 'Username is required',
              })}
            />
            <span className="block text-red-600 italic text-xs mt-2 font-semibold">
              {errors.username?.message}
            </span>
          </div>
          <div className="form-group">
            <input
              type="password"
              aria-label="password"
              className={`form-control ${
                control.getFieldState('password').invalid && styles.error
              }`}
              placeholder="Password"
              {...register('password', {
                required: 'Password is required',
              })}
            />
            <span className="block text-red-600 italic text-xs mt-2 font-semibold">
              {errors.password?.message}
            </span>
          </div>

          <div className="form-group text-right">
            <a href="#" className="text-gray-400 italic text-sm">
              Forgot Password
            </a>
          </div>

          <div className="form-group mt-10">
            <button
              disabled={loading}
              type="submit"
              className="btn bg-primaryColor hover:bg-secondaryColor text-white w-full py-3 shadow-shadowLight disabled:cursor-wait disabled:bg-secondaryColor"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        <span className="absolute text-gray-400 bottom-3 left-[50%] -translate-x-[50%] block w-full text-center">
          Don't have an account?{' '}
          <Link to={'/auth/register'} className="font-extrabold text-gray-500">
            Sign Up
          </Link>
        </span>
      </div>

      <div
        className="bg-center bg-cover hidden sm:hidden md:block shadow-shadowLight"
        style={{ backgroundImage: `url(${loginSvg})` }}
      ></div>
    </div>
  );
};
