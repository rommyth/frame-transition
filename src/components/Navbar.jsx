import { HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import Link from './Link';

const Navbar = () => {
  const navData = [
    {
      name: 'Home',
      path: '/',
      icon: <HomeIcon className='w-10 h-10 text-white' />,
    },
    {
      name: 'About',
      path: '/about',
      icon: <UserIcon className='w-10 h-10 text-white' />,
    },
  ];
  return (
    <div className='flex w-full flex-row items-center justify-center gap-10 py-4'>
      {navData.map((nav, i) => (
        <Link key={i} to={nav.path}>
          {nav.icon}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
