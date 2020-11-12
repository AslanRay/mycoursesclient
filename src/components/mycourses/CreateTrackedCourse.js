import React, { useState } from 'react';
import Select from 'react-select';
import './createTrackedCourse.css';

const CreateTrackedCourse = ({
  userName,
  selectCourseOptions,
  selectCourseTypeOptions,
}) => {
  console.log('userName', userName);
  const [time, setTime] = useState('');
  const [selectedOptionCourse, setSelectedOptionCourse] = useState(null);
  const [selectedOptionCourseType, setSelectedOptionCourseType] = useState(null);

  const handleSetTime = (event) => {
    const { value } = event.target;
    setTime(value);
  };

  return (
    <div className="CTC_container">
      <h2 className="CTC_track_a_new_text">Track a new course</h2>

      <div className="CTC_form">
        <Select
          options={selectCourseOptions}
          value={selectedOptionCourse}
          onChange={setSelectedOptionCourse}
          className="CTC_select_input"
        />

        <Select
          options={selectCourseTypeOptions}
          value={selectedOptionCourseType}
          onChange={setSelectedOptionCourseType}
          className="CTC_select_input"
        />

        <input
          className="Logged_time_input"
          onChange={handleSetTime}
          placeholder="Logged time in format 1d 1h"
          type="text"
          value={time}
        />

        <button type="button" className="button Register_button">Save</button>
      </div>
    </div>
  );
};

export default CreateTrackedCourse;
