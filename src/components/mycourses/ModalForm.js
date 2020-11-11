import React, { useState } from 'react';
import './modalForm.css';

const ModalForm = ({ userName, loggedTime, onClick }) => {
  const [name, setName] = useState(userName);
  const [time, setTime] = useState(loggedTime);

  const handleSetName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleSetTime = (event) => {
    const { value } = event.target;
    setTime(value);
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

      <input
        className="Input-container"
        onChange={handleSetTime}
        placeholder="Logged time"
        type="text"
        value={time}
      />
    </div>
  );
};

export default ModalForm;
