import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import { logout as signout } from '../../actions/authAction';
import { getAllTrackedCourses, getCoursesList, getCoursesTypeList } from '../../actions/myCoursesAction';
import './myCourses.css';
import TrackedCourseItem from './TrackedCourseItem';
import ModalForm from './ModalForm';

const MyCourses = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const userName = useSelector((state) => state.authReducer.userName);
  // const userId = useSelector((state) => state.authReducer.userID);

  useEffect(() => {
    dispatch(getAllTrackedCourses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCoursesList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCoursesTypeList());
  }, [dispatch]);

  const usersCoursesTracked = useSelector(
    (state) => state.myCoursesReducer.usersCoursesTracked,
  );

  const coursesList = useSelector((state) => state.myCoursesReducer.coursesList);

  const courseTypesList = useSelector((state) => state.myCoursesReducer.courseTypesList);

  console.log('usersCoursesTracked', { usersCoursesTracked, coursesList, courseTypesList });

  const logout = () => {
    dispatch(signout());
    history.push('/');
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTrackedCourseClick = (userCourseTracked) => {
    console.log('Clicked', userCourseTracked);
    setName(userCourseTracked.userName);
    setTime(userCourseTracked.loggedTime);
    handleModal();
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

      <div className="MyCourses-tracked-courses-list">
        <h4>All Tracked Courses List</h4>
        {usersCoursesTracked.map((userCourseTracked) => (
          <TrackedCourseItem
            key={userCourseTracked.id}
            userName={userCourseTracked.userName}
            courseName={userCourseTracked.courseName}
            courseType={userCourseTracked.courseType}
            loggedTime={userCourseTracked.loggedTime}
            onClick={() => handleTrackedCourseClick(userCourseTracked)}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        className="Modal"
        overlayClassName="Overlay"
      >
        <ModalForm userName={name} loggedTime={time} onClick={handleModal} />
      </Modal>
    </div>
  );
};

export default MyCourses;
