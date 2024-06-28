import React from 'react';
import module from '../media/module.png'; // Replace with the path to your laptop image
// import codeImage from '../media/code.png'; // Replace with the path to your code image
import '../styling/servicesstyling.css'; // Import your CSS file
import iphone from '../media/iphone.png'; // Replace with the path to your iphone image
import background from '../media/Background.png'; // Replace with the path to your background image

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row items-top justify-around min-h-screen p-4 sm:p-10 font-cambria">
      <div className="text-container text-left flex-1">
        <h1 className="text-white text-2xl md:text-4xl mb-4">Sites Beyond Imagination</h1>
        <p className="text-white text-lg">A couple clicks away.</p>
      </div>
      <div className="image-container flex-1 flex justify-center mt-8 md:mt-0 relative">
          <img src={background} alt="Background" className="absolute mr-48 top-10  w-1/2 h-auto z-0" />
          <div className="laptop flex z-10">
          <img src={module} alt="Laptop" className="w-3/4 h-1/2 -ml-32" />
          <img src={iphone} alt="Iphone" className="w-4/5 h-1/3 mt-24 -ml-24" />
          {/* <img src={background} alt="Code" className="code-image w-1/2" /> */}
        </div>
      </div>
    </div>
  );
}

export default Services;
