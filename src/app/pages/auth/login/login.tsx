import chatWave from '../../../../assets/images/logo/chatwave-logo.png';
import loginSvg from '../../../../assets/images/auth/joel-filipe-jU9VAZDGMzs-unsplash.jpg';

export const Login = () => {
  return (
    <div
      id="login-section"
      className="w-screen h-screen bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[30%_70%]"
    >
      <div className="form-section flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <img src={chatWave} alt="chatwave" className="w-[20%]" />
          <h3 className="font-bold text-xl text-gray-500 tracking-widest">
            Chatwave
          </h3>
        </div>

        <form action="" className="mt-20 w-[70%] sm:w-[70%] md:w-[60%] mx-auto">
          <div className="form-group">
            <input
              type="text"
              aria-label="username"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              aria-label="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="form-group text-right">
            <a href="#" className="text-gray-400 italic text-sm">
              Forgot Password
            </a>
          </div>

          <div className="form-group mt-10">
            <button
              type="button"
              className="btn bg-primaryColor hover:bg-secondaryColor text-white w-full py-3 shadow-shadowLight"
            >
              Login
            </button>
          </div>
        </form>

        <span className="absolute text-gray-400 bottom-3 left-[50%] -translate-x-[50%] block w-full text-center">
          Don't have an account?{' '}
          <a href="" className="font-extrabold">
            Sign Up
          </a>
        </span>
      </div>

      <div
        className="bg-center bg-cover hidden sm:hidden md:block"
        style={{ backgroundImage: `url(${loginSvg})` }}
      ></div>
    </div>
  );
};
