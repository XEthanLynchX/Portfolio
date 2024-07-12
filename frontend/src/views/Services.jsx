import React, { useEffect, useRef } from 'react';
import '../styling/servicesstyling.css';
import lightbulb from '../media/lightbulb.svg'; 
import unknown from '../media/unknown.svg'; 
import handshake from '../media/handshake.svg';
import award from '../media/award.svg'; 
import check from '../media/check.svg'; 
import WebDesign from '../media/webDesign.svg'; 
import webDev from '../media/webDev.svg'; 
import select from '../media/select.svg'; 
import { Link } from 'react-router-dom';
import { FaReact, FaDatabase, FaPython,  FaNodeJs } from 'react-icons/fa'; 
import { SiAxios } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import '../styling/fade.css'

const Services = () => {
  const pricingContainerRef = useRef(null);
  const sectionsRef = useRef([]);

  const scrollToPricing = () => {
    pricingContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current
        .filter(section => section !== null)
        .forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="relative fade-in" ref={el => sectionsRef.current.push(el)}>
        {/* Header */}
        <div className="flex md:flex-row items-top justify-around min-h-screen p-0 md:p-10 mb-36 md:mb-0 font-cambria relative z-10">
          <div className="flex flex-col w-2/3 md:flex-row items-top justify-around p-4 sm:p-10 font-cambria h-1/2 -z-1">
            <div className="text-container text-left flex-1 font-bold" style={{ textShadow: '8px 8px 4px rgba(0,0,0,0.5)' }}>
              <p className='text-gray text-sm mb-2 md:mb-0'> A Developer For You</p>
              <h1 className="text-white text-xl md:text-3xl mb-12 font-bold w-3/4">Elevate Your Online Presence</h1>
              <p className="text-sm md:text-base mb-6 md:mb-2">Increase Your Brand Awareness.</p>
              <p className="text-sm md:text-base mb-6 md:mb-2">Quick Turn Around Time.</p>
              <p className="text-sm md:text-base mb-6 md:mb-2">Professional and Reliable.</p>
              <p className="text-sm md:text-base mb-6 md:mb-2">Easy Design Process.</p>
              <p className="text-sm text-shade4 mb-6 md:mb-2">A couple clicks away.</p>
              <div className='flex mt-12 justify-center md:justify-start'>
                <button onClick={scrollToPricing} type="button" className="text-white bg-gradient-to-br from-shade4 to-gradient1 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 md:px-5 py-0 md:py-2.5 text-center me-2 mb-2">View Plans</button>
                <Link to='/contact'>
                <button type="button" className="text-white bg-gradient-to-br from-gradient1 to-shade4 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 md:px-5 py-0 md:py-2.5 text-center me-2 ml-6 mb-2">Contact Me</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="image-container flex-1  justify-center items-center mt-8 md:mt-0 relative mr-8 hidden md:block">
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
        <div className="servicesSection flex justify-center items-center relative z-20 mb-16 fade-in" ref={el => sectionsRef.current.push(el)}>
          <div className="relative w-4/5 ">
            <div className="absolute inset-0 z-0 rounded-lg"></div>
            <div className="relative z-10 flex flex-col justify-center items-center rounded-2xl p-4">
              {/* Header moved here, outside and above the cards container */}
              <h2 className=" text-type md:text-xl text-center mb-8 font-bold">Your Trusted Partner in Web Development</h2>
              <h3 className=" text-gray text-sm text-center mb-8 font-bold -mt-6">Our Features & Sevices</h3>

              {/* Cards container */}
              <div className='flex-wrap md:flex-nowrap  md:flex  justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8 p-4 ' >
                <div className='card bg-darkblue text-white p-8 rounded-lg w-full md:w-1/3 hover:shadow-glow'>
                  <img src={webDev} alt="Web Development" className='w-full h-auto'/>
                  <h3 className='text-lg mt-2 font-bold'>Web Development</h3>
                  <p className='text-xs md:text-sm mt-4 mb-4'>Enhances your website's design and functionality, ensuring a seamless user experience. </p>
                  <div className="flex justify-center mt-4">
                    <button onClick={scrollToPricing} className="w-full">
                      More
                    </button>
                  </div>
                </div>
                <div className='card bg-darkblue text-white p-8 rounded-lg w-full md:w-1/3 hover:shadow-glow'>
                  <img src={WebDesign} alt="Web Design" className='w-full h-auto'/>
                  <h3 className='text-lg mt-2 font-bold'>Web Design</h3>
                  <p className='text-xs md:text-sm mt-4 mb-4'>Improves your website's visual appeal and user interface for a memorable user experience.</p>
                  <div className="flex justify-center mt-4">
                    <button onClick={scrollToPricing} className="w-full">
                      More
                    </button>
                  </div>
                </div> 
                <div className='card bg-darkblue text-white p-8 rounded-lg w-full md:w-1/3 hover:shadow-glow'>
                  <img src={unknown} alt="SEO Optimization" className='w-full h-auto'/>
                  <h3 className='text-lg mt-2 font-bold'>SEO Optimization</h3>
                  <p className='text-xs md:text-sm mt-4 mb-4'>
                    Increases your website's visibility on search engines and builds trust with higher rankings.
                  </p>
                  <div className="flex justify-center mt-4">
                    <button onClick={scrollToPricing} className="w-full">
                      More
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="tech-banner-container fade-in" ref={el => sectionsRef.current.push(el)}>
                <div className="tech-banner flex justify-center items-center mt-12 md:mt-0 space-x-6 p-4 md:p-10">
                  <div className="icon-text flex flex-col items-center">
                    <span><FaReact color="#61DAFB" size={30} /></span>
                    <span className="mt-2">React</span>
                  </div>
                  <div className="icon-text flex flex-col items-center">
                    <span><SiAxios color="#800080" size={30} /></span>
                    <span className="mt-2">Axios</span>
                  </div>
                  <div className="icon-text flex flex-col items-center">
                    <span><SiExpress size={30} /></span>
                    <span className="mt-2">Express</span>
                  </div>
                  <div className="icon-text flex flex-col items-center">
                    <span><FaPython color="#3776AB" size={30} /></span>
                    <span className="mt-2">Python</span>
                  </div>
                  <div className="icon-text flex flex-col items-center">
                    <span><FaNodeJs color="#008000" size={30} /></span>
                    <span className="mt-2">Node.js</span>
                  </div>
                  <div className="icon-text flex flex-col items-center">
                    <span><DiMongodb color="#008000" size={30} /></span>
                    <span className="mt-2">MongoDB</span>
                  </div>
                  <div className="icon-text flex flex-col items-center">
                    <span><DiMysql color="#ADD8E6" size={30} /></span>
                    <span className="mt-2">MySQL</span>
                  </div>
                </div>
              </div>

             <div className=" md:flex-row lg:flex-row 2xl:flex items-center justify-around mt-8 md:mt-32 p-4 sm:p-10 font-cambria fade-in" ref={el => sectionsRef.current.push(el)}>
              {/* Left Column with Image */}
              <div className="flex-1 flex justify-center items-center mt-36 md:mt-0 p-4">
                <img src={select} alt="Selected Image" className="w-full h-auto md:max-w-md" />
              </div>
              
              {/* Right Column with Text */}
              <div className="flex-1 flex flex-col justify-center items-start p-4 ">
                <p className="text-xs  mb-2">A Trusted Partner</p>
                <h1 className="text-type md:text-3xl font-bold text-white mb-4">Why Choose Me</h1>
                <p className="text-sm mt-4 md:mt-0 text-white mb-8">
                  With knowledge in today's latest technologies, I'm committed to delivering top-notch quality and engaging with you every step of the way.
                </p>
                
                {/* Statistics Row */}
                <div className="flex flex-row gap-6 md: md:flex-row justify-between w-full mt-4">
                  <div className="flex flex-col items-center mb-4 md:mb-0 text-center">
                    <p className=" text-base md:text-2xl font-bold text-white">Many</p>
                    <p className="text-xs md:text-sm ">Years Experience</p>
                  </div>
                  <div className="flex flex-col items-center mb-4 md:mb-0 text-center">
                    <p className="text-base md:text-2xl font-bold text-white">10+</p>
                    <p className="text-xs md:text-sm ">Projects</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <p className="text-base md:text-2xl font-bold text-white">10+</p>
                    <p className="text-xs md:text-sm ">Technologies Mastered</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-container flex flex-col items-center justify-center min-h-screen p-4 sm:p-10 font-cambria mt-28 fade-in" ref={el => sectionsRef.current.push(el)}>
                <h3 className="text-base text-shade4 mb-4 font-bold">Pricing</h3>
                <h2 className="text-3xl text-white mb-8 font-bold">Flexible Plans.</h2>

                <div className="pricing-table grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-4 lg:gap-8 mt-16 w-full" ref={pricingContainerRef}>
                  {/* Basic Package */}
                  <div className="card bg-darkblue w- text-white p-6 sm:p-8 rounded-lg text-center hover:shadow-glow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-lg text-white mb-4 font-bold">Basic</h3>
                      <p className="text-xl  sm:text-xl text-white font-bold mb-4">$1500</p>
                      <ul className="mb-8 space-y-2">
                        <li>Clean Website Design</li>
                        <li>Responsive Layout</li>
                        <li>5 Pages</li>
                        <li>Basic SEO</li>
                        <li>Free Small changes</li>
                      </ul>
                    </div>
                    <Link to='/contact' className='text-center'>
                      <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5">Get Started</button>
                    </Link>
                  </div>

                  {/* Standard Package */}
                  <div className="card bg-darkblue text-white p-6 sm:p-8 rounded-lg text-center hover:shadow-glow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-lg text-white mb-4 font-bold">Standard</h3>
                      <p className="text-xl sm:text-xl text-white font-bold mb-4">$2500</p>
                      <ul className="mb-8 space-y-2">
                        <li>Advanced Website Design</li>
                        <li>Responsive Layout</li>
                        <li>10 Pages</li>
                        <li>Advanced SEO</li>
                        <li>Free Larger Changes</li>
                      </ul>
                    </div>
                    <Link to='/contact' className='text-center'>
                      <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5">Get Started</button>
                    </Link>
                  </div>

                  {/* Premium Package */}
                  <div className="card bg-darkblue text-white p-6 sm:p-8 rounded-lg text-center hover:shadow-glow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-lg text-white mb-4 font-bold">Premium</h3>
                      <p className="text-xl sm:text-xl text-white font-bold mb-4">$4500</p>
                      <ul className="mb-8 space-y-2">
                        <li>Premium Website Design</li>
                        <li>Responsive Layout</li>
                        <li>15 pages</li>
                        <li>Premium SEO</li>
                        <li>Any Change</li>
                      </ul>
                    </div>
                    <Link to='/contact' className='text-center'>
                      <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5">Get Started</button>
                    </Link>
                  </div>

                  {/* Custom Package */}
                  <div className="card bg-darkblue text-white p-6 sm:p-8 rounded-lg text-center hover:shadow-glow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-lg text-white mb-4 font-bold">Custom</h3>
                      <p className="text-xl sm:text-xl text-white font-bold mb-4">$</p>
                      <ul className="mb-8 space-y-2">
                        <li>Custom Website Design</li>
                        <li>Responsive Layout</li>
                        <li>Up to 20 pages</li>
                        <li>Any Choice of SEO</li>
                        <li>Any Choice of Changes</li>
                      </ul>
                    </div>
                    <Link to='/contact' className='text-center'>
                      <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5">Get Started</button>
                    </Link>
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
