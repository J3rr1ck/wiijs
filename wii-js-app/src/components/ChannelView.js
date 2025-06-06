import React from 'react';
import './ChannelView.css';
import ChannelBox from './ChannelBox'; // Import ChannelBox

// Accept onChannelSelect prop
function ChannelView({ onChannelSelect }) {
  const channels = [
    { id: 1, name: "Disc Channel" },
    { id: 2, name: "Mii Channel" }, // This will be used to trigger MiiChannelView
    { id: 3, name: "Photo Channel" },
    { id: 4, name: "Shop Channel" },
    { id: 5, name: "Forecast Channel" },
    { id: 6, name: "News Channel" },
    { id: 7, name: "Game Channel 1" },
    { id: 8, name: "Game Channel 2" },
    { id: 9, name: "Game Channel 3" },
    { id: 10, name: "Game Channel 4" },
    { id: 11, name: "Internet Channel" },
    { id: 12, name: "Everybody Votes Channel" }
  ];

  return (
    <div className="ChannelView">
      {channels.map(channel => (
        <ChannelBox
          key={channel.id}
          id={channel.id} // Pass id
          name={channel.name}
          onSelect={onChannelSelect} // Pass the handler
        />
      ))}
    </div>
  );
}

export default ChannelView;
