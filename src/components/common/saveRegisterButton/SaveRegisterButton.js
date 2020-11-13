import React from 'react';
import './saveRegisterButton.css';

const SaveRegisterButton = ({ handleConfirmAlert }) => (
  <button type="button" className="Save_register_button" onClick={handleConfirmAlert}>Save</button>
  );

export default SaveRegisterButton;
