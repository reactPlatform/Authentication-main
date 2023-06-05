import { useState, useEffect } from 'react';

const AutoLogout = () => {
  const [isActive, setIsActive] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  // Add event listeners to track user activity
  useEffect(() => {
    const resetTimer = () => {
      setIsActive(true);
      clearTimeout(timeoutId);
      const newTimeoutId = setTimeout(logout, 2 * 60 * 1000); // 2 minutes
      setTimeoutId(newTimeoutId);
    };

    const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    const timeoutId = setTimeout(logout, 2 * 60 * 1000); // 2 minutes
    setTimeoutId(timeoutId);

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
      clearTimeout(timeoutId);
    };
  }, []);

  const logout = () => {
    // Perform your logout logic here
    // For example, redirect to the logout page or dispatch a logout action
    console.log('Auto logout');
  };

  return <div>Auto Logout Component</div>;
};

export default AutoLogout;