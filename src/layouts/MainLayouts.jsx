import React from 'react';
import Header from '../components/Header';

const MainLayouts = () => {
    return (
        <>
          <Header />
          <Outlet />  
        </>
    );
};

export default MainLayouts;