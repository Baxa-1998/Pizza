import React from 'react';
import Header from '../components/Header/Header';
import  Footer  from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

type TheaderShow = {
  headerShow: boolean
}
export const Layout: React.FC<TheaderShow> = ({ headerShow }) => {


  return (
 
      <>
        <Header headerShow={headerShow} />

        <Outlet />

        <Footer />
      </>
 
  );
};
