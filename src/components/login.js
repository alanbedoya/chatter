import {
  AiFillGoogleCircle,
  AiFillGithub,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import chatter from '../assets/img/chatter.svg';
import 'firebase/auth';
import firebase from 'firebase/app';
import { auth } from '../firebase';

export const Login = () => {
  return (
    <div className='w-full inset-0 mt-11 pb-12 2xl:mt-20 flex justify-center items-center align'>
      <div className='rounded-xl shadow-2xl bg-white bg-opacity-40 xs:w-3 max-w-md w-full space-y-2'>
        <img
          className='mx-auto h-32 w-auto mt-8'
          src={chatter}
          alt='Chatter logo'
        />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-800'>
          Welcome to Chatter!
        </h2>
        <form className='flex flex-col pt-3 pb-12 px-4 sm:px-6 lg:px-8'>
          <div className='w-full md:w-full px-3 mb-6'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='Password'
            >
              Email address
            </label>
            <input
              className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
              type='email'
              required
            />
          </div>
          <div className='w-full md:w-full px-3 mb-6'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='Password'
            >
              Password
            </label>
            <input
              className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
              type='password'
              required
            />
          </div>
          <div className='w-full md:w-full px-3 mb-6'>
            <button className='appearance-none block w-full bg-blue-600 text-gray-100 font-bold rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500'>
              Sign in
            </button>
          </div>
          <div className='mx-auto -mb-6 pb-1'>
            <span className='text-center text-xs text-gray-700'>
              or sign up with
            </span>
          </div>
          <div className='flex items-center w-full mt-2'>
            <div className='w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400'>
              <button
                onClick={() =>
                  auth.signInWithRedirect(
                    new firebase.auth.TwitterAuthProvider()
                  )
                }
                className='appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-400 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'
              >
                <AiFillTwitterCircle className='h-6 w-6 fill-current text-gray-700' />
              </button>
            </div>
            <div className='w-full md:w-1/3 px-3 pt-5 mx-2'>
              <button
                onClick={() =>
                  auth.signInWithRedirect(
                    new firebase.auth.GoogleAuthProvider()
                  )
                }
                className='appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-400 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'
              >
                <AiFillGoogleCircle className='h-6 w-6 fill-current text-gray-700' />
              </button>
            </div>
            <div className='w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400'>
              <button
                onClick={() =>
                  auth.signInWithRedirect(
                    new firebase.auth.GithubAuthProvider()
                  )
                }
                className='appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-400 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'
              >
                <AiFillGithub className='h-6 w-6 fill-current text-gray-700' />
              </button>
            </div>
          </div>
        </form>
        <div className='text-xs text-center text-indigo-900 pb-5'>
          © 2021 Alan Bedoya
        </div>
      </div>
    </div>
  );
};
