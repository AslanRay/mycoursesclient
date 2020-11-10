import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SessionRouter from './SessionRouter';
import PublicRouter from './PublicRouter';
// import { getSessionStorage } from '../utils/utilFunctions';

const AppRouter = () => {
  // const token = getSessionStorage('sessionToken');

  const token = useSelector((state) => state.authReducer.token);

  function renderContent() {
    return token ? <SessionRouter /> : <PublicRouter />;
  }

  return (
    <Router>
      {renderContent()}
    </Router>
  );
};

export default AppRouter;
