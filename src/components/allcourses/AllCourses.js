import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TrackedCourseItem from '../mycourses/TrackedCourseItem';
import './allcourses.css';

const AllCourses = () => {
  const [searchInput, setSearchInput] = useState('');
  const [usersCoursesTrackedFiltered, setUsersCoursesTracked] = useState(null);
  const usersCoursesTracked = useSelector(
    (state) => state.myCoursesReducer.usersCoursesTracked.reverse(),
  );

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
          onClick={() => {}}
          showOnly
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
         onClick={() => {}}
         showOnly
       />
    ));
  };

  return (
    <div className="All_courses_container">
      <div className="All_courses_list">
        <h1>All Tracked Courses List</h1>

        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearchFilter}
          className="Input-container"
        />

        {renderTrackedCourseList()}
      </div>
    </div>
  );
};

export default AllCourses;
