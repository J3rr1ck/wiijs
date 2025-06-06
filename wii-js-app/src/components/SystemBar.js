import React, { useState, useEffect } from 'react';
import './SystemBar.css';

function SystemBar() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Format time (HH:MM AM/PM)
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      setTime(`${hours}:${minutes} ${ampm}`);

      // Format date (MM/DD)
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      setDate(`${month}/${day}`);
    };

    updateDateTime(); // Initial call
    const intervalId = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="SystemBar">
      <span className="wii-button">Wii</span>
      <span className="time">{time}</span>
      <span className="date">{date}</span>
    </div>
  );
}

export default SystemBar;
