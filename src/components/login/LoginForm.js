import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authAction';
import './loginForm.css';
import LoginButton from '../common/loginButton/LoginButton';
import LoginButtonDisabled from '../common/loginButtonDisabled/LoginButtonDisabled';
import { emailRegex } from '../../utils/regex';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
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

  useEffect(() => {
    const testEmail = emailRegex.test(email);
    if (email.length > 0 && testEmail && password.length > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, email.length, password.length]);

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

        {isFormValid ? <LoginButton /> : <LoginButtonDisabled />}
      </form>
    </div>
  );
}

export default LoginForm;
