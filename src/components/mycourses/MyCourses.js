import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import { logout as signout } from '../../actions/authAction';
import { getAllTrackedCourses, getCoursesList, getCoursesTypeList } from '../../actions/myCoursesAction';
import './myCourses.css';
import TrackedCourseItem from './TrackedCourseItem';
import CreateTrackedCourse from './CreateTrackedCourse';
import ModalForm from './ModalForm';

const MyCourses = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [userCourseTrackedID, setUserCourseTrackedID] = useState(null);
  const [selectedCourseOption, setSelectedCourseOption] = useState(null);
  const [selectedCourseTypeOption, setSelectedCourseTypeOption] = useState(null);
  const [usersCoursesTrackedFiltered, setUsersCoursesTracked] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const userName = useSelector((state) => state.authReducer.userName);

  const usersCoursesTracked = useSelector(
    (state) => state.myCoursesReducer.usersCoursesTracked.reverse(),
  );

  useEffect(() => {
    dispatch(getAllTrackedCourses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCoursesList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCoursesTypeList());
  }, [dispatch]);

  const coursesList = useSelector((state) => state.myCoursesReducer.coursesList);

  const courseTypesList = useSelector((state) => state.myCoursesReducer.courseTypesList);

  const temporalCourseOptions = coursesList.map((d) => ({
    value: d.name,
    label: d.name,
  }));

  const temporalCourseTypeOptions = courseTypesList.map((d) => ({
    value: d.name,
    label: d.name,
  }));

  const logout = () => {
    dispatch(signout());
    history.push('/');
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTrackedCourseClick = (userCourseTracked) => {
    setName(userCourseTracked.userName);
    setTime(userCourseTracked.loggedTime);
    setSelectedCourseOption({
      value: userCourseTracked.courseName,
      label: userCourseTracked.courseName,
    });
    setSelectedCourseTypeOption({
      value: userCourseTracked.courseType,
      label: userCourseTracked.courseType,
    });
    setUserCourseTrackedID(userCourseTracked.id);
    handleModal();
  };

  const handleSearchFilter = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    const filteredData = usersCoursesTracked.filter((userCourseTracked) => userCourseTracked
      .userName
      .toLowerCase()
      .startsWith(value.toLowerCase())
      || userCourseTracked.courseName.toLowerCase().startsWith(value.toLowerCase()));
    setUsersCoursesTracked(filteredData);
  };

  const renderTrackedCourseList = () => {
    if (usersCoursesTrackedFiltered && usersCoursesTrackedFiltered.length > 0) {
      return usersCoursesTrackedFiltered.map((userCourseTracked) => (
        <TrackedCourseItem
          key={userCourseTracked.id}
          userName={userCourseTracked.userName}
          courseName={userCourseTracked.courseName}
          courseType={userCourseTracked.courseType}
          loggedTime={userCourseTracked.loggedTime}
          onClick={() => handleTrackedCourseClick(userCourseTracked)}
        />
      ));
    }
     return usersCoursesTracked.map((userCourseTracked) => (
       <TrackedCourseItem
         key={userCourseTracked.id}
         userName={userCourseTracked.userName}
         courseName={userCourseTracked.courseName}
         courseType={userCourseTracked.courseType}
         loggedTime={userCourseTracked.loggedTime}
         onClick={() => handleTrackedCourseClick(userCourseTracked)}
       />
    ));
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

      <CreateTrackedCourse
        userName={userName}
        selectCourseOptions={temporalCourseOptions}
        selectCourseTypeOptions={temporalCourseTypeOptions}
      />

      <div className="MyCourses-tracked-courses-list">
        <h4>All Tracked Courses List</h4>

        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearchFilter}
          className="Input-container"
        />

        {renderTrackedCourseList()}
      </div>

      <Modal
        isOpen={isModalOpen}
        className="Modal"
        overlayClassName="Overlay"
      >
        <ModalForm
          userName={name}
          loggedTime={time}
          onClick={handleModal}
          selectCourseOptions={temporalCourseOptions}
          selectedCourseOption={selectedCourseOption}
          selectCourseTypeOptions={temporalCourseTypeOptions}
          selectedCourseTypeOption={selectedCourseTypeOption}
          userCourseTrackedID={userCourseTrackedID}
        />
      </Modal>
    </div>
  );
};

export default MyCourses;
