import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout as signout } from '../../actions/authAction';
import { getAllTrackedCourses } from '../../actions/myCoursesAction';
import './myCourses.css';
import TrackedCourseItem from './TrackedCourseItem';

const MyCourses = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userName = useSelector((state) => state.authReducer.userName);
  // const userId = useSelector((state) => state.authReducer.userID);

  useEffect(() => {
    dispatch(getAllTrackedCourses());
  }, [dispatch]);

  const usersCoursesTracked = useSelector(
    (state) => state.myCoursesReducer.usersCoursesTracked,
  );
  console.log('usersCoursesTracked', usersCoursesTracked);

  const logout = () => {
    dispatch(signout());
    history.push('/');
  };

  const handleTrackedCourseClick = (userCourseTracked) => { console.log('Clicked', userCourseTracked); };

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

      <div className="MyCourses-tracked-courses-list">
        <h4>All Tracked Courses List</h4>
        {usersCoursesTracked.map((userCourseTracked) => (
          <TrackedCourseItem
            userName={userCourseTracked.userName}
            courseName={userCourseTracked.courseName}
            courseType={userCourseTracked.courseType}
            loggedTime={userCourseTracked.loggedTime}
            onClick={() => handleTrackedCourseClick(userCourseTracked)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
