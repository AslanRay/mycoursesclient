import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SessionRouter from './SessionRouter';
import PublicRouter from './PublicRouter';
import { getSessionStorage } from '../utils/utilFunctions';

const AppRouter = () => {
  const token = getSessionStorage('sessionToken');

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
