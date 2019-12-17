import React from 'react';
import Routes from '@components/Routes';
import routes from '@routes';
import { BrowserRouter } from 'react-router-dom';

// import Routes
const Main = () => {
  return (
    <BrowserRouter>
      <Routes routes={routes} />
    </BrowserRouter>
  );
};

export default Main;
