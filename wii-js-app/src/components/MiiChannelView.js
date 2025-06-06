import React from 'react';
import './MiiChannelView.css';

function MiiChannelView({ onReturnToMenu }) {
  return (
    <div className="MiiChannelView">
      <h1 className="mii-channel-title">Mii Channel</h1>
      <p className="mii-channel-message">
        Mii Channel - Basic View. Pre-defined Miis will be shown here.
      </p>
      <button className="mii-back-button" onClick={onReturnToMenu}>
        Back to Menu
      </button>
    </div>
  );
}

export default MiiChannelView;
