import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout as signout } from '../../actions/authAction';
import './myCourses.css';

const MyCourses = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userName = useSelector((state) => state.authReducer.userName);
  // const userId = useSelector((state) => state.authReducer.userID);

  const logout = () => {
    dispatch(signout());
    history.push('/');
  };

  return (
    <div className="MyCourses-container">
      <div className="MyCourses-title-row">
        <h1 className="MyCourses-title">{`My Courses for ${userName}`}</h1>

        <div
          aria-label="logout"
          className="MyCourses-logout-button"
          onClick={logout}
          role="button"
          onKeyDown={logout}
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default MyCourses;
