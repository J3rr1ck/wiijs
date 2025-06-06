import React from 'react';
import './SystemBar.css';

function SystemBar() {
  return (
    <div className="SystemBar">
      <span>Wii</span>
      <span style={{ margin: '0 50px' }}>Time</span>
      <span>Date</span>
    </div>
  );
}

export default SystemBar;
