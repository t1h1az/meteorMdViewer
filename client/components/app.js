import React from 'react';
import Header from './header';
import SideNav from './sideNav';

export default (props) => {
  return (
    <div className="col-xs-12">
      <Header />
      <SideNav />
      {props.children}
    </div>
  );
};
