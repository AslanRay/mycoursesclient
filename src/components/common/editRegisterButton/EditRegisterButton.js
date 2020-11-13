import React from 'react';
import './editRegisterButton.css';

const EditRegisterButton = ({ handleEditAlert }) => (
  <button className="Edit_register_button" type="button" onClick={handleEditAlert}>Edit</button>
  );

export default EditRegisterButton;
