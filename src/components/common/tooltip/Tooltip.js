import React from 'react';
import './tooltip.css';

const Tooltip = ({ children }) => (
  <div className="tooltip">
    {children}
    <div className="tooltiptext">
      <p>Valid format time example:</p>
      <p>1w 1d 1h</p>
      <p>w: weeks | d: days | h: hours</p>
      <p>use any descendant combination</p>
    </div>
  </div>
  );

export default Tooltip;
