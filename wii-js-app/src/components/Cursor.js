import React from 'react';
import './Cursor.css';

function Cursor({ position }) {
  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    // Ensure cursor is above other elements if necessary, can be adjusted in CSS too
    // zIndex: 1000
  };

  return (
    <div className="Cursor" style={style}>
      {/* Cursor element styled by CSS and positioned by inline style */}
    </div>
  );
}

export default Cursor;
