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

  return (
    <div
      // Optionally, use isLocallySelected for styling if parent doesn't manage selection state visually
      className={`ChannelBox ${isLocallySelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
}

export default ChannelBox;
