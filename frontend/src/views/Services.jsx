import React from 'react';
import module from '../media/module.png'; // Replace with the path to your laptop image
import '../styling/servicesstyling.css'; // Import your CSS file
import lightbulb from '../media/lightbulb.svg'; // Replace with the path to your lightbulb image
import chart from '../media/chart.svg'; // Replace with the path to your chart image
import unknown from '../media/unknown.svg'; // Replace with the path to your unknown image
import handshake from '../media/handshake.svg'; // Replace with the path to your handshake image
import award from '../media/award.svg'; // Replace with the path to your award image
import check from '../media/check.svg'; // Replace with the path to your check image
import WebDesign from '../media/webDesign.svg'; // Replace with the path to your WebDesign image
import webDev from '../media/webDev.svg'; // Replace with the path to your WebDevelopment image
import { FaReact, FaDatabase, FaPython,  FaNodeJs } from 'react-icons/fa'; // Import FontAwesome icons
import { SiAxios } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
import { SiExpress } from "react-icons/si";

const Services = () => {
  return (
    <>
      <div className="relative ">
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
        <div className="servicesSection flex justify-center items-center relative z-20 mb-16">
          <div className="relative w-4/5 relativeDiv">
            <div className="absolute inset-0 z-0 backdrop-blur-lg rounded-lg"></div>
            <div className="relative z-10 flex flex-col justify-center items-center rounded-2xl p-4">
              {/* Header moved here, outside and above the cards container */}
              <h2 className=" text-xl text-center mb-8 font-bold">Your Trusted Partner in Web Development</h2>
              <h3 className=" text-gray text-sm text-center mb-8 font-bold -mt-6">Our Features & Sevices</h3>
              {/* Cards container */}
              <div className='flex space-x-8 p-10 text-center'>
                <div className='card bg-darkblue text-white p-8 rounded-lg w-1/3 hover:shadow-glow'>
                  <img src={webDev} alt="Chart" className='w-full h-auto'/>
                  <h3 className='text-lg mt-2 font-bold'>Web Development</h3>
                  <p className='text-sm mt-4 mb-4'>Enhances your website's functionality and design, ensuring a seamless user experience. </p>
                  <button className='mt-2 bg-lightblue text-white p-2 rounded'>More</button>
                </div>
                <div className='card bg-darkblue text-white p-8 rounded-lg w-1/3 hover:shadow-glow'>
                  <img src={WebDesign} alt="Unknown" className='w-full h-auto'/>
                  <h3 className='text-lg mt-2 font-bold'>Web Design</h3>
                  <p className='text-sm mt-4 mb-4'>Improves your website's visual appeal and user interface for a better user experience.</p>
                  <button className='mt-2 bg-lightblue text-white p-2 rounded font-bold'>More</button>
                </div> 
                <div className='card bg-darkblue text-white p-8 rounded-lg w-1/3 hover:shadow-glow'>
                  <img src={unknown} alt="Unknown" className='w-full h-auto'/>
                  <h3 className='text-lg mt-2 font-bold'>SEO Optimization</h3>
                  <p className='text-sm mt-4 mb-4'>
                  Increases your website's visibility on search engines and builds trust with higher rankings. </p>
                  <button className='mt-2 bg-lightblue text-white p-2 rounded'>More</button>
                </div>
              </div>
              <div className="tech-banner-container">
                <div className="tech-banner">
                  <div className="icon-text">
                    <span ><FaReact color="#61DAFB" size={30}/></span>
                    <span>React</span>
                  </div>
                  <div className="icon-text">
                    <span><SiAxios color="#800080" size={30} /></span>
                    <span>Axios</span>
                  </div>
                  <div className="icon-text">
                    <span><SiExpress size={30}/></span>
                    <span>Express</span>
                  </div>
                  <div className="icon-text">
                    <span><FaPython color="#3776AB" size={30}/></span>
                    <span>Python</span>
                  </div>
                  <div className="icon-text">
                    <span><FaNodeJs color="#008000" size={30}/></span>
                    <span>Node.js</span>
                  </div>
                  <div className="icon-text">
                    <span><DiMongodb color="#008000" size={30} /></span>
                    <span>MongoDB</span>
                  </div>
                  <div className="icon-text">
                    <span><DiMysql color="#ADD8E6 " size={30}/></span>
                    <span>MySQL</span>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
