import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
};
