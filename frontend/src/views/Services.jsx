import React from 'react';
import module from '../media/module.png'; // Replace with the path to your laptop image
// import codeImage from '../media/code.png'; // Replace with the path to your code image
// import '../styling/ServicesStyling.css'; // Create and import your CSS file


const Services = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 sm:p-10">
      <div className="text-container text-left flex-1">
        <h1 className="text-white text-3xl sm:text-4xl mb-4">Sites Beyond Imagination</h1>
        <p className="text-white text-lg">A couple clicks away.</p>
      </div>
      <div className="image-container flex-1 flex justify-center mt-8 md:mt-0">
        <div className="laptop">
          <img src={module} alt="Laptop" className=" w-full h-auto" />
          {/* <img src={codeImage} alt="Code" className="code-image" /> */}
        </div>
      </div>
    </div>
  );
}

export default Services;
