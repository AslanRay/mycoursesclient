import React, { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { saveUserTrackedCourse } from '../../actions/myCoursesAction';
import './createTrackedCourse.css';

const CreateTrackedCourse = ({
  userName,
  selectCourseOptions,
  selectCourseTypeOptions,
}) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState('');
  const [selectedOptionCourse, setSelectedOptionCourse] = useState(null);
  const [selectedOptionCourseType, setSelectedOptionCourseType] = useState(null);

  const handleSetTime = (event) => {
    const { value } = event.target;
    setTime(value);
  };

  const clearForm = () => {
    setTime('');
    setSelectedOptionCourse(null);
    setSelectedOptionCourseType(null);
  };

  const handleSave = () => {
    dispatch(saveUserTrackedCourse(
      userName, selectedOptionCourse.value, selectedOptionCourseType.value, time,
    ));
    clearForm();
  };

  const handleConfirmAlert = () => {
    Swal.fire({
      title: 'Confirm your register',
      text: "You're about to create a new tracked course",
      icon: 'info',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, continue!',
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleSave();
        Swal.fire(
          'Created!',
          'Register successfully done',
          'success',
        );
      } else if (result.isDismissed) {
        clearForm();
      }
    });
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
          placeholder="Logged time. Format example 1d 1h"
          type="text"
          value={time}
        />

        <button type="button" className="button Register_button" onClick={handleConfirmAlert}>Save</button>
      </div>
    </div>
  );
};

export default CreateTrackedCourse;
