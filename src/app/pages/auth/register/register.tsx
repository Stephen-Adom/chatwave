import whiteBg from 'assets/images/auth/white-bg.jpeg';
import chatWave from 'assets/images/logo/chatwave-logo.png';
import { Link } from 'react-router-dom';

export const Register = () => {
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

        <form className="grid grid-cols-2 gap-x-4 w-[85%] mx-auto mt-10">
          <div className="form-group">
            <input
              type="text"
              aria-label="firstname"
              placeholder="Firstname"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              aria-label="lastname"
              placeholder="Lastname"
              className="form-control"
            />
          </div>

          <div className="form-group col-span-2 sm:col-span-2 md:col-span-1">
            <input
              type="text"
              aria-label="username"
              placeholder="Username"
              className="form-control"
            />
          </div>

          <div className="form-group col-span-2 sm:col-span-2 md:col-span-1">
            <input
              type="email"
              aria-label="email"
              placeholder="Email"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              aria-label="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              aria-label="confirm_password"
              placeholder="Confirm Password"
              className="form-control"
            />
          </div>

          <div className="form-group mt-8 col-span-2">
            <button
              type="button"
              className="btn bg-primaryColor hover:bg-secondaryColor text-white w-full py-3 shadow-shadowLight"
            >
              Create Account
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
