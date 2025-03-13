import Header from '../components/Header';
import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";

const MainLayouts = () => {
  const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
          <Header />
          <Outlet />  
        </>
    );
};

export default MainLayouts;