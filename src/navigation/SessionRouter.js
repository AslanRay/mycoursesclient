import React, { useEffect } from 'react';
import {
  Redirect, Route, Switch, withRouter,
} from 'react-router-dom';
import MyCourses from '../components/mycourses/MyCourses';
import RedirectAfterLogin from './RedirectAfterLogin';

const SessionRouter = (props) => {
  useEffect(() => () => props.history.push('/mycourses'), []);

  return (
    <Switch>
      <Route exact path="/">
        <RedirectAfterLogin />
      </Route>
      <Route exact path="/mycourses">
        <MyCourses />
      </Route>

      <Route path="*">
        <Redirect to="/mycourses" />
      </Route>
    </Switch>
  );
};

export default withRouter(SessionRouter);
