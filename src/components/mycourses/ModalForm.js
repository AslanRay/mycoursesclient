import React, { useState } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import './modalForm.css';
import { editUserCourseTracked } from '../../actions/myCoursesAction';

const ModalForm = ({
  userName,
  loggedTime,
  onClick,
  selectCourseOptions,
  selectCourseTypeOptions,
  selectedCourseOption,
  selectedCourseTypeOption,
}) => {
  const [name, setName] = useState(userName);
  const [time, setTime] = useState(loggedTime);
  const [selectedOptionCourse, setSelectedOptionCourse] = useState(selectedCourseOption);
  const [selectedOptionCourseType, setSelectedOptionCourseType] = useState(
    selectedCourseTypeOption,
  );
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.authReducer.userID);

  const handleSetName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleSetTime = (event) => {
    const { value } = event.target;
    setTime(value);
  };

  console.log('selectedOption', selectedOptionCourse);

  const handleEditSubmit = () => {
    dispatch(
      editUserCourseTracked(
        userId,
        name,
        selectedCourseOption.value,
        selectedCourseTypeOption.value,
        time,
      ),
    );
    onClick();
  };

  return (
    <div className="Modal_form_container">
      <div
        aria-label="closemodal"
        className="Modal_close"
        onClick={onClick}
        role="button"
        onKeyDown={() => {}}
        tabIndex={0}
      />

      <input
        className="Input-container"
        onChange={handleSetName}
        placeholder="User name"
        type="text"
        value={name}
      />

      <Select
        options={selectCourseOptions}
        className="Modal_select_input"
        value={selectedOptionCourse}
        onChange={setSelectedOptionCourse}
      />

      <Select
        options={selectCourseTypeOptions}
        className="Modal_select_input"
        value={selectedOptionCourseType}
        onChange={setSelectedOptionCourseType}
      />

      <input
        className="Input-container"
        onChange={handleSetTime}
        placeholder="Logged time"
        type="text"
        value={time}
      />

      <div className="Modal_buttons_container">
        <button className="button" type="button" onClick={handleEditSubmit}>Edit</button>
        <button className="button" type="button">Delete</button>
      </div>
    </div>
  );
};

export default ModalForm;
