import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const day = now.toLocaleString('en-US', { weekday: 'short' }).toLowerCase();
      const month = now.toLocaleString('en-US', { month: 'short' }).toLowerCase();
      const date = now.getDate();

      const time = now.toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      setDateTime(`${day} ${month} ${date} ${time}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{dateTime}</p>
    </div>
  );
};

export default DateTime;
