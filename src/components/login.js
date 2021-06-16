import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import chatter from '../assets/img/chatter.svg';
import 'firebase/auth';
import firebase from 'firebase';
import { auth } from '../firebase';

export const Login = () => {
  return (
    <div className='w-full inset-0 mt-24 3xl:mt-36  pb-12 flex justify-center items-center align'>
      <div className='rounded-xl shadow-2xl bg-white bg-opacity-50 xs:w-3 max-w-md w-full space-y-2'>
        <img
          className='mx-auto h-32 w-auto mt-8'
          src={chatter}
          alt='Chatter logo'
        />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-800'>
          Welcome to Chatter!
        </h2>
        <div className='flex flex-col justify-center pt-3 pb-12 px-4 sm:px-6 lg:px-8'>
          <span className='flex items-center justify-center space-x-2'>
            <span className='h-px bg-gray-400 w-14'></span>
            <span className='font-normal text-gray-500'>
              sign in with either
            </span>
            <span className='h-px bg-gray-400 w-14'></span>
          </span>
          <div className='flex flex-col space-y-4 mt-6'>
            <button
              onClick={() =>
                auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())
              }
              className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none'
            >
              <AiFillGithub className='w-6 h-6 text-gray-800 fill-current group-hover:text-white' />
              <span className='text-sm font-medium text-gray-800 group-hover:text-white'>
                Github
              </span>
            </button>
            <button
              className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-yellow-500 rounded-md group hover:bg-yellow-500 focus:outline-none'
              onClick={() =>
                auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
              }
            >
              <AiFillGoogleCircle className='text-yellow-500 group-hover:text-gray-200 h-6 w-6' />
              <span className='text-sm font-medium text-yellow-500 group-hover:text-gray-200'>
                Google
              </span>
            </button>
            <button
              className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none'
              onClick={() =>
                auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider())
              }
            >
              <AiFillTwitterCircle className='text-blue-500 group-hover:text-white h-6 w-6' />
              <span className='text-sm font-medium text-blue-500 group-hover:text-white'>
                Twitter
              </span>
            </button>
            <button
              className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-700 rounded-md group hover:bg-blue-700 focus:outline-none'
              onClick={() =>
                auth.signInWithRedirect(
                  new firebase.auth.FacebookAuthProvider()
                )
              }
            >
              <AiFillFacebook className='text-blue-700 group-hover:text-white h-6 w-6' />
              <span className='text-sm font-medium text-blue-700 group-hover:text-white'>
                Facebook
              </span>
            </button>
          </div>
        </div>
        <div className='text-xs text-center text-indigo-900 pb-5'>
          © 2021 Alan Bedoya
        </div>
      </div>
    </div>
  );
};
