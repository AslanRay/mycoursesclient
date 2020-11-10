import React from 'react';
import LoginForm from './components/login/LoginForm';
import { getSessionStorage } from './utils/utilFunctions';

function App() {
  const token = getSessionStorage('sessionToken');
  console.log('TOKEN', token);
  return (
    <LoginForm />
  );
}

export default App;
