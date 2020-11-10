import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RedirectAfterLogin = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/mycourses');
  }, []);

  return <></>;
};

export default RedirectAfterLogin;
