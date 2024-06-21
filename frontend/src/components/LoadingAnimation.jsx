
import React, { useEffect } from 'react';
import '../styling/LoadingAnimation.css';

const LoadingAnimation = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 3000); // Change the duration as needed
    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="loading-animation">
      <div className="loading-spinner"></div>
      {/* You can add more elements for your animation here */}
    </div>
  );
};

export default LoadingAnimation;
