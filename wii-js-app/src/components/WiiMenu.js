import React, { useState } from 'react';
import './WiiMenu.css';
import SystemBar from './SystemBar';
import ChannelView from './ChannelView';
import MiiChannelView from './MiiChannelView'; // Import MiiChannelView
import Cursor from './Cursor';

function WiiMenu() {
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
  const [activeView, setActiveView] = useState('ChannelView'); // 'ChannelView' or 'MiiChannelView'

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  // Handler for when a channel is selected
  const handleChannelSelect = (channelId, channelName) => {
    console.log(`Channel selected in WiiMenu: ID ${channelId}, Name: ${channelName}`);
    if (channelName === "Mii Channel") { // Could also use channelId === 2
      setActiveView('MiiChannelView');
    }
    // Potentially handle other channels here or pass to a router
  };

  // Handler for returning to the main menu
  const handleReturnToMenu = () => {
    setActiveView('ChannelView');
  };

  return (
    <div className="WiiMenu" onMouseMove={handleMouseMove}>
      <SystemBar />
      {activeView === 'ChannelView' && (
        <ChannelView onChannelSelect={handleChannelSelect} />
      )}
      {activeView === 'MiiChannelView' && (
        <MiiChannelView onReturnToMenu={handleReturnToMenu} />
      )}
      <Cursor position={cursorPosition} />
    </div>
  );
}

export default WiiMenu;
