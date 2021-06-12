import { AiFillGoogleCircle, AiFillGithub, AiFillApple } from 'react-icons/ai';
import chatter from '../assets/img/chatter.svg';

export const Login = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='rounded-xl shadow-2xl bg-white bg-opacity-40 max-w-md w-full space-y-8'>
        <img
          className='mx-auto h-32 w-auto mt-8'
          src={chatter}
          alt='Chatter logo'
        />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-800'>
          Welcome to Chatter!
        </h2>
        <form className='flex flex-col pt-3 pb-12 px-4 sm:px-6 lg:px-8'>
          <div class='w-full md:w-full px-3 mb-6'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='Password'
            >
              Email address
            </label>
            <input
              class='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
              type='email'
              required
            />
          </div>
          <div class='w-full md:w-full px-3 mb-6'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='Password'
            >
              Password
            </label>
            <input
              class='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
              type='password'
              required
            />
          </div>
          <div class='w-full md:w-full px-3 mb-6'>
            <button class='appearance-none block w-full bg-blue-600 text-gray-100 font-bold rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500'>
              Sign in
            </button>
          </div>
          <div class='mx-auto -mb-6 pb-1'>
            <span class='text-center text-xs text-gray-700'>
              or sign up with
            </span>
          </div>
          <div className='flex items-center w-full mt-2'>
            <div class='w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400'>
              <button class='appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-400 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'>
                <AiFillGoogleCircle className='h-6 w-6 fill-current text-gray-700' />
              </button>
            </div>
            <div class='w-full md:w-1/3 px-3 pt-4 mx-2'>
              <button class='appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-400 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'>
                <AiFillApple className='h-6 w-6 fill-current text-gray-700' />
              </button>
            </div>
            <div class='w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400'>
              <button class='appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-400 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'>
                <AiFillGithub className='h-6 w-6 fill-current text-gray-700' />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
