import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { saveUserTrackedCourse } from '../../actions/myCoursesAction';
import SaveRegisterButton from '../common/saveRegisterButton/SaveRegisterButton';
import SaveRegisterButtonDisabled from '../common/saveRegisterButtonDisabled/SaveRegisterButtonDisabled';
import Tooltip from '../common/tooltip/Tooltip';
import {
  hoursRegex,
  daysRegex,
  weeksRegeX,
  singleWeeksRegeX,
  singleDaysRegex,
  weeksDaysRegeX,
} from '../../utils/regex';
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
  const [isFormValid, setIsFormValid] = useState(false);

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

  useEffect(() => {
    const testWeeks = weeksRegeX.test(time);
    const testDays = daysRegex.test(time);
    const testHours = hoursRegex.test(time);
    const testSingleWeeks = singleWeeksRegeX.test(time);
    const testSingleDays = singleDaysRegex.test(time);
    const testWeeksDays = weeksDaysRegeX.test(time);
    if (
      time.length > 0
      && selectedOptionCourse
      && selectedOptionCourseType
      && (testWeeks
        || testDays
        || testHours
        || testSingleWeeks
        || testSingleDays
        || testWeeksDays)
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [time, time.length, selectedOptionCourse, selectedOptionCourseType]);

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

        <Tooltip>
          <input
            className="Logged_time_input"
            onChange={handleSetTime}
            placeholder="Logged time. Format example 1d 1h"
            type="text"
            value={time}
          />
        </Tooltip>

        {isFormValid ? (
          <SaveRegisterButton handleConfirmAlert={handleConfirmAlert} />
        ) : (
          <SaveRegisterButtonDisabled />
        )}
      </div>
    </div>
  );
};

export default CreateTrackedCourse;
