import React, { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import './modalForm.css';
import { editUserCourseTracked, deleteUserCourseTracked } from '../../actions/myCoursesAction';

const ModalForm = ({
  userName,
  loggedTime,
  onClick,
  selectCourseOptions,
  selectCourseTypeOptions,
  selectedCourseOption,
  selectedCourseTypeOption,
  userCourseTrackedID,
}) => {
  const [name, setName] = useState(userName);
  const [time, setTime] = useState(loggedTime);
  const [selectedOptionCourse, setSelectedOptionCourse] = useState(selectedCourseOption);
  const [selectedOptionCourseType, setSelectedOptionCourseType] = useState(
    selectedCourseTypeOption,
  );
  const dispatch = useDispatch();

  const handleSetName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleSetTime = (event) => {
    const { value } = event.target;
    setTime(value);
  };

  const handleEditSubmit = () => {
    dispatch(editUserCourseTracked(
        userCourseTrackedID,
        name,
        selectedCourseOption.value,
        selectedCourseTypeOption.value,
        time,
      ));
    onClick();
  };

  const handleEditAlert = () => {
    Swal.fire({
      title: 'Confirm your edits',
      text: "You're about to edit your selected register",
      icon: 'info',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, continue!',
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleEditSubmit();
        Swal.fire(
          'Edited!',
          'Edit successfully done',
          'success',
        );
      } else if (result.isDismissed) {
        onClick();
      }
    });
  };

  const handleDeleteSubmit = () => {
    dispatch(deleteUserCourseTracked(userCourseTrackedID));
    onClick();
  };

  const handleDeleteAlert = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You can't undo this action after confirm deleting",
      icon: 'question',
      confirmButtonColor: '#FF0000',
      confirmButtonText: 'Yes, continue!',
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteSubmit();
        Swal.fire(
          'Deleted!',
          'Delete successfully done',
          'success',
        );
      } else if (result.isDismissed) {
        onClick();
      }
    });
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
        <button className="button" type="button" onClick={handleEditAlert}>Edit</button>
        <button className="button" type="button" onClick={handleDeleteAlert}>Delete</button>
      </div>
    </div>
  );
};

export default ModalForm;
