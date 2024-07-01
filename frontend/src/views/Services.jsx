import React from 'react';
import module from '../media/module.png'; // Replace with the path to your laptop image
import '../styling/servicesstyling.css'; // Import your CSS file
import lightbulb from '../media/lightbulb.svg'; // Replace with the path to your lightbulb image
import chart from '../media/chart.svg'; // Replace with the path to your chart image
import unknown from '../media/unknown.svg'; // Replace with the path to your unknown image
import handshake from '../media/handshake.svg'; // Replace with the path to your handshake image
import award from '../media/award.svg'; // Replace with the path to your award image
import check from '../media/check.svg'; // Replace with the path to your check image


const Services = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="lighting-bg"></div>

        {/* Header */}
        <div className="flex md:flex-row items-top justify-around min-h-screen p-4 sm:p-10 font-cambria relative z-10">
          <div className="flex flex-col w-2/3 md:flex-row items-top justify-around p-4 sm:p-10 font-cambria h-1/2 -z-1">
            <div className="text-container text-left flex-1 font-bold" style={{ textShadow: '8px 8px 4px rgba(0,0,0,0.5)' }}>
              <p className='text-gray text-sm'> A Developer For You</p>
              <h1 className="text-white text-2xl md:text-3xl mb-12 font-bold w-3/4">Elevate Your Online Presence</h1>
              <p className="text-base mb-2">Increase Your Brand Awareness.</p>
              <p className="text-base mb-2">Quick Turn Around Time.</p>
              <p className="text-base mb-2">Professional and Reliable.</p>
              <p className="text-base mb-2">Easy Design Process.</p>
              <p className="text-base text-shade4 mb-2">A couple clicks away.</p>
              <div className='flex mt-12'>
                <button type="button" className="text-white bg-gradient-to-br from-shade4 to-gradient1 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View Plans</button>
                <button type="button" className="text-white bg-gradient-to-br from-gradient1 to-shade4 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ml-6 mb-2">Contact Me</button>
              </div>
            </div>
          </div>
          <div className="image-container flex-1 flex mt-8 md:mt-0 relative mr-8">
            <div className="-z-1">
              <img src={lightbulb} className="w-full h-3/5" />
              <div className="icons flex justify-center">
                <img src={check} className="w-1/4 h-3/5 mr-6" />
                <img src={handshake} className="w-1/4 h-3/5 mr-6" />
                <img src={award} className="w-1/4 h-3/5" />
              </div>
            </div>
          </div>
        </div>
        {/* Header */}

        {/* Services */}
        <div className="flex justify-center items-center relative z-10">
          <div className="relative w-4/5" style={{
            backgroundColor: 'rgba(58, 100, 197, 0.2)',
            backdropFilter: 'blur(20px)',
          }}>
            <div className="absolute inset-0 z-0 backdrop-blur-lg rounded-lg"></div>
            <div className="relative z-10 flex justify-center items-center rounded-xl p-4">
              <p className="text-blue-500 text-xl">Your Trusted Partner in Digital Transformation</p>
            </div>
          </div>
        </div>
        {/* Services */}
      </div>
    </>
  );
}

export default Services;
