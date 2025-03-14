import Header from '../components/Header';
import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Footer from '../components/Footer';

const MainLayouts = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='bg-primary bg-opacity-25 min-vh-100'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;