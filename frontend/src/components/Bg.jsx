import React, { useState, useEffect } from 'react';
import '../styling/bg.css'; // Import your CSS file

const BackgroundWithHoverEffect = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX - 75, y: e.clientY - 75 }); // Adjust for half of the light size (150px / 2)
  };

  useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
      };
  }, []);

  return (
      <div className="background">
          <div 
              className="light" 
              style={{ 
                  left: `${cursorPosition.x}px`, 
                  top: `${cursorPosition.y}px` 
              }} 
          />
      </div>
  );
};

export default BackgroundWithHoverEffect;
