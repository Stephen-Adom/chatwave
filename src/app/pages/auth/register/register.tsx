/* eslint-disable @nx/enforce-module-boundaries */
import whiteBg from 'assets/images/auth/white-bg.jpeg';
import chatWave from 'assets/images/logo/chatwave-logo.png';
import { useForm } from 'react-hook-form';
import { PhoneInput, PhoneInputRefType } from 'react-international-phone';
import { Link, useNavigate } from 'react-router-dom';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { useEffect, useRef, useState } from 'react';
import { debounceTime, fromEvent, map } from 'rxjs';
import styles from './register.module.css';
import { AuthenticationService } from '@chatwave/services';
import {
  AuthenticationReponse,
  handleError,
  notifySuccess,
} from '@chatwave/utils';
import localforage from 'localforage';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '@chatwave/store';

type registerFormType = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phonenumber: string;
};

const authService = new AuthenticationService();

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<registerFormType>({
    defaultValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      phonenumber: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    watch,
    control,
    clearErrors,
    setError,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  const phoneUtil = PhoneNumberUtil.getInstance();

  const phoneRef = useRef<PhoneInputRefType>(null);

  const { name } = register('phonenumber', {
    required: {
      value: true,
      message: 'Phonenumber is required',
    },
  });

  useEffect(() => {
    if (phoneRef && phoneRef.current) {
      fromEvent(phoneRef.current, 'keyup')
        .pipe(
          map((event) => {
            const target = event.target as PhoneInputRefType;
            return target?.state.phone;
          }),
          debounceTime(400)
        )
        .subscribe((data) => {
          if (data) {
            const isValid = validatePhoneInput(data);

            if (!isValid) {
              setError('phonenumber', {
                type: 'phoneInvalid',
                message: 'Invalid phone number',
              });
            } else {
              clearErrors('phonenumber');
            }
          }
        });
    }
  }, [phoneRef.current]);

  const validatePhoneInput = (phone: string) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };

  const registerUser = (userInfo: registerFormType) => {
    setLoading(true);
    authService
      .registerUser(userInfo)
      .then((response: AuthenticationReponse) => {
        notifySuccess('User created successfully');
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
    navigate('/chats');
  };

  return (
    <div
      id="register-section"
      className="w-screen h-screen overflow-hidden bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${whiteBg})` }}
    >
      <div className="register-form-container relative h-full flex items-center justify-center flex-col">
        <div className="flex items-center justify-center">
          <img src={chatWave} alt="chatwave" className="w-[20%]" />
          <h3 className="font-bold text-xl text-gray-500 tracking-widest">
            Chatwave
          </h3>
        </div>
        <h1 className="text-2xl text-center my-5">Welcome To ChatWave!</h1>

        <form
          onSubmit={handleSubmit(registerUser)}
          className="grid grid-cols-2 gap-x-4 w-[85%] mx-auto mt-10"
        >
          <div className="form-group">
            <input
              type="text"
              aria-label="firstname"
              placeholder="Firstname"
              className={`form-control ${
                control.getFieldState('firstname').invalid && styles.error
              }`}
              {...register('firstname', {
                required: {
                  value: false,
                  message: 'Firstname is required',
                },
              })}
            />
            <span className="block text-red-600 italic text-xs mt-2 font-semibold">
              {errors.firstname?.message}
            </span>
          </div>

          <div className="form-group">
            <input
              type="text"
              aria-label="lastname"
              placeholder="Lastname"
              className={`form-control ${
                control.getFieldState('lastname').invalid && styles.error
              }`}
              {...register('lastname', {
                required: {
                  value: true,
                  message: 'Lastname is required',
                },
              })}
            />
            <span className="block text-red-600 italic text-xs mt-2 font-semibold">
              {errors.lastname?.message}
            </span>
          </div>

          <div className="form-group">
            <input
              type="text"
              aria-label="username"
              placeholder="Username"
              className={`form-control ${
                control.getFieldState('username').invalid && styles.error
              }`}
              {...register('username', {
                required: {
                  value: true,
                  message: 'Username is required',
                },
              })}
            />
            <span className="block text-red-600 italic text-xs mt-2 font-semibold">
              {errors.username?.message}
            </span>
          </div>

          <div className="form-group">
            <input
              type="email"
              aria-label="email"
              placeholder="Email"
              className={`form-control ${
                control.getFieldState('email').invalid && styles.error
              }`}
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            <span className="block text-red-600 italic text-xs mt-2 font-semibold">
              {errors.email?.message}
            </span>
          </div>

          <div className="form-group col-span-2">
            <PhoneInput
              defaultCountry="gh"
              name={name}
              ref={phoneRef}
              onChange={(value) => {
                setValue('phonenumber', value);
              }}
              className={`${
                control.getFieldState('phonenumber').invalid && styles.error
              }`}
            />
            {errors.phonenumber?.type === 'phoneInvalid' && (
              <span className="block text-red-600 italic text-xs mt-2 font-semibold">
                {errors.phonenumber.message}
              </span>
            )}
            {errors.phonenumber?.type === 'required' && (
              <span className="block text-red-600 italic text-xs mt-2 font-semibold">
                {errors.phonenumber.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              aria-label="password"
              placeholder="Password"
              className={`form-control ${
                control.getFieldState('password').invalid && styles.error
              }`}
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is required',
                },
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
            />

            <span className="block text-red-600 italic text-xs mt-2 font-semibold">
              {errors.password?.message}
            </span>
          </div>
          <div className="form-group">
            <input
              type="password"
              aria-label="confirm_password"
              placeholder="Confirm Password"
              className={`form-control ${
                control.getFieldState('confirmPassword').invalid && styles.error
              }`}
              {...register('confirmPassword', {
                required: {
                  value: true,
                  message: 'Confirm Password is required',
                },
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                validate: (val: string) => {
                  if (watch('password') !== val) {
                    return 'Your passwords do not match';
                  }
                },
              })}
            />
            <span className="block text-red-600 italic text-xs mt-2 font-semibold">
              {errors.confirmPassword?.message}
            </span>
          </div>

          <div className="form-group mt-8 col-span-2">
            <button
              disabled={loading}
              type="submit"
              className="btn bg-primaryColor hover:bg-secondaryColor text-white w-full py-3 shadow-shadowLight disabled:cursor-wait disabled:bg-secondaryColor"
            >
              {loading ? 'Creating Account' : 'Create Account'}
            </button>
          </div>
        </form>

        <span className="absolute text-gray-400 bottom-3 left-[50%] -translate-x-[50%] block w-full text-center">
          Already have an account?{' '}
          <Link to={'/auth/login'} className="font-extrabold text-gray-500">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};
