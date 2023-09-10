import { Outlet } from 'react-router';
import Header from './Header';
import Navbar from './Navbar';
import Transition from './Transition';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Transition />
      {children}
    </>
  );
};

export default Layout;
