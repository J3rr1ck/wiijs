import React, { useState } from 'react';
import './WiiMenu.css';
import SystemBar from './SystemBar';
import ChannelView from './ChannelView';
import Cursor from './Cursor';

function WiiMenu() {
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event) => {
    // Get bounding rectangle of WiiMenu to calculate relative coordinates
    const rect = event.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="WiiMenu" onMouseMove={handleMouseMove}>
      <SystemBar />
      <ChannelView />
      <Cursor position={cursorPosition} />
    </div>
  );
}

export default WiiMenu;
