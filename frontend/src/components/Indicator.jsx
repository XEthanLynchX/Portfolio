import React from 'react';


const TabIndicator = ({ count, currentIndex, handleClick }) => {
  console.log('Rendering TabIndicator', { count, currentIndex }); // Debugging line

  return (
      <div className="flex justify-center text-red">
          {Array.from({ length: count }, (_, index) => (
              <span
                  key={index}
                  className={`inline-block mx-1 w-6 h-6   mr-12 bg-blue rounded-full ${
                      index === currentIndex ? 'opacity-100' : 'opacity-50'
                  }`}
                  onClick={() => handleClick(index)}
              ></span>
          ))}
      </div>
  );
};

export default TabIndicator;

