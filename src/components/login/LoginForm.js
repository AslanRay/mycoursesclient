import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authAction';
import './loginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispath = useDispatch();

  const handleEmailText = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordText = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispath(login(email, password));
  };

  return (
    <div>
      <form className="Login-container" onSubmit={handleSubmit}>
        <input
          className="Input-container"
          onChange={handleEmailText}
          placeholder="Email"
          type="text"
          value={email}
        />
        <input
          className="Input-container"
          onChange={handlePasswordText}
          placeholder="Password"
          type="password"
          value={password}
        />
        <button className="Button-container" type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
