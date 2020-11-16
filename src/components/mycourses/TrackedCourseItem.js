import React from 'react';
import './trackedCourseItem.css';

const TrackedCourseItem = ({
 userName, courseName, courseType, loggedTime, onClick, showOnly,
}) => (
  <div
    aria-label="trackedcourseitem"
    className={!showOnly ? 'TCI_container' : 'TCI_container_show_only'}
    onClick={onClick}
    role="button"
    onKeyDown={() => {}}
    tabIndex={0}
  >
    <span className="TCI_item">{`User: ${userName}`}</span>
    <span className="TCI_item">{`Course: ${courseName}`}</span>
    <span className="TCI_item">{`Format: ${courseType}`}</span>
    <span className="TCI_item">{`Logged time: ${loggedTime}`}</span>
  </div>
  );

export default TrackedCourseItem;
