import React, { useEffect } from 'react';
import {
  Redirect, Route, Switch, withRouter,
} from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';
import AllCourses from '../components/allcourses/AllCourses';

const PublicRouter = (props) => {
  useEffect(() => () => props.history.push('/'), []);

  return (
    <Switch>
      <Route exact path="/">
        <LoginForm />
      </Route>

      <Route exact path="/allcourses">
        <AllCourses />
      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default withRouter(PublicRouter);
