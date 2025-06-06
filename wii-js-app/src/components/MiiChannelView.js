import React from 'react';
import './MiiChannelView.css';

function MiiChannelView({ onReturnToMenu }) {
  return (
    <div className="MiiChannelView">
      <h2>Mii Channel</h2>
      <p>Mii Channel - Basic View. Pre-defined Miis will be shown here.</p>
      <button className="mii-back-button" onClick={onReturnToMenu}>
        Back to Menu
      </button>
    </div>
  );
}

export default MiiChannelView;
