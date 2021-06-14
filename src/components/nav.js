import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className='w-full inset-0'>
      <nav className='flex justify-between w-full bg-indigo-400 text-white p-4'>
        <Link className='font-semibold text-xl tracking-tight' to='/'>
          Chatter
        </Link>
        <Link className='p-2 ml-2 bg-red-300 text-white font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-red-200'>
          Logout
        </Link>
      </nav>
    </div>
  );
};
