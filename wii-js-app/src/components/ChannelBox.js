import React, { useState } from 'react';
import './ChannelBox.css';

// Added id and onSelect props
function ChannelBox({ id, name, onSelect }) {
  const [isLocallySelected, setIsLocallySelected] = useState(false);

  const handleClick = () => {
    // Toggle local selection for immediate visual feedback if desired
    setIsLocallySelected(!isLocallySelected);
    console.log(`Channel "${name}" (ID: ${id}) clicked. Local selection: ${!isLocallySelected}`);

    // Call the onSelect prop passed from the parent if it exists
    if (onSelect) {
      onSelect(id, name); // Pass channel id (or name) to parent
    }
  };

  let iconElement = null;
  if (name === "Mii Channel") {
    // Using a span inside .icon-mii for the more complex Mii icon if needed later,
    // but current CSS is simplified for a single div.
    iconElement = <div className="channel-icon icon-mii"></div>;
  } else if (name === "Photo Channel") {
    iconElement = <div className="channel-icon icon-photo"></div>;
  } else {
    // Default placeholder for other channels
    iconElement = <div className="channel-icon icon-default"></div>;
  }

  return (
    <div
      className={`ChannelBox ${isLocallySelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {iconElement}
      <div className="channel-name">{name}</div>
    </div>
  );
}

export default ChannelBox;
