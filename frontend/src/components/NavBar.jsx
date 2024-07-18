import React, { useState, useEffect } from 'react';
import { FaGithub,  FaLinkedin, FaInstagram, FaFileAlt, FaHome, FaProjectDiagram, FaUserAlt, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { CgToolbox } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import "../styling/navbar.css"
import pfp from '../media/pfp.jpg';

const NavBar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHeightBelow924, setIsHeightBelow924] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHeightBelow924(window.innerHeight < 924);
    };

   
    handleResize();

    
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="md:sticky sm:fixed top-0 h-screen w-full text-white">
      {/* Header Section */}
      <div className="flex items-center justify-between p-5 bg-darkblue md:hidden">
        <div className="flex items-center">
          <img src={pfp} alt="Profile" className="w-1/4 rounded-full mr-3" />
          <div>
            <h2 className="text-lg font-bold text-white">Ethan Lynch</h2>
            <p className="text-sm ">Full-Stack Developer</p>
          </div>
        </div>
        <button onClick={toggleNavigation} className="text-white mr-2 text-sm pointer-events-auto ">
          {openNavigation ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={` top-24 left-0 w-full bg-darkblue transition-all duration-500 ease-in-out ${openNavigation ? 'h-full' : 'h-0'} overflow-hidden md:hidden pointer-events-auto`}>
        <nav className="w-full text-base p-5 text-white">
          <div className="mt-4 text-white">
            <Link to="/" className="flex items-center -mt-6 text-lg p-3 hover:bg-Fgh-700 mb-5" onClick={handleClick}>
              <button className="btn btn-outline w-full text-white"><FaHome className="mr-3" /> Home</button>
            </Link>
          </div>
          <div className="mb-5 text-white">
            <Link to="/projects" className="flex items-center text-lg p-3 bg-gradient-to-br from-gradient1to-blue-500 hover:bg-gradient-to-bl" onClick={handleClick}>
              <button className="btn btn-outline w-full text-white"><FaProjectDiagram className="mr-3" /> Projects</button>
            </Link>
          </div>
          <div className="mb-5 text-white">
            <Link to="/services" className="flex items-center text-lg p-3 " onClick={handleClick}>
              <button className="btn btn-outline w-full text-white"><CgToolbox className="mr-3" /> Services</button>
            </Link>
          </div>
          <div className="mb-5 text-white">
            <Link to="/about" className="flex items-center text-lg p-3 " onClick={handleClick}>
              <button className="btn btn-outline w-full text-white"><FaUserAlt className="mr-3" /> About</button>
            </Link>
          </div>
          <div className="mb-5 text-white">
            <Link to="/contact" className="flex items-center text-lg p-3 " onClick={handleClick}>
              <button className="btn btn-outline w-full text-white"><FaEnvelope className="mr-3" /> Contact</button>
            </Link>
          </div>
          {/* Social Media Links in Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-5">
            <a href="https://github.com/XEthanLynchX" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125">
              <FaGithub className="text-xl text-white hover:text-black" />
            </a>
            <a href="https://www.linkedin.com/in/ethan-lynch-04a188255" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125">
              <FaLinkedin className="text-xl text-white hover:text-primary" />
            </a>
            <a href="https://www.instagram.com/ethan_lynch123" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125">
              <FaInstagram className="text-xl text-white hover:text-purple" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125">
              <FaFileAlt className="text-xl text-white hover:text-yellow" />
            </a>
          </div>
        </nav>
      </div>

     
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:items-center p-5 bg-darkblue h-full z-50 pointer-events-auto  overflow-hidden">
      <div className="text-center mb-6 ">
        <div className="avatar">
          <div className="w-24 h-24 md:w-48 md:h-48 rounded-full ring ring-offset-base-100 ring-offset-2">
            <img src={pfp} alt="Profile" className="w-full h-full rounded-full mb-3" />
          </div>
        </div>
        <h2 className="text-lg font-bold text-white">Ethan Lynch</h2>
        <p className="text-sm">Full-Stack Developer</p>
      </div>
      <div className="icon-container flex space-x-4 mb-5">
        <a href="https://github.com/XEthanLynchX" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125">
          <FaGithub className="text-xl text-white hover:text-black" />
        </a>
        <a href="https://www.linkedin.com/in/ethan-lynch-04a188255" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125">
          <FaLinkedin className="text-xl text-white hover:text-primary" />
        </a>
        <a href="https://www.instagram.com/ethan_lynch123" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125">
          <FaInstagram className="text-xl text-white hover:text-purple" />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125">
          <FaFileAlt className="text-xl text-white hover:text-yellow" />
        </a>
      </div>

      <nav className="w-full text-base text-white sidebar">
        <div className="mt-4 mb-5">
          <Link to="/" className="flex items-center text-lg p-3 " onClick={handleClick}>
            <button className="btn btn-outline w-full text-white hover:bg-gradient2 hover:text-white">
              <FaHome className="mr-3" /> Home
            </button>
          </Link>
        </div>
        <div className="mb-5">
          <Link to="/projects" className="flex items-center text-lg p-3 " onClick={handleClick}>
            <button className="btn btn-outline w-full text-white hover:bg-gradient2 hover:text-white">
              <FaProjectDiagram className="mr-3" /> Projects
            </button>
          </Link>
        </div>
        <div className="mb-5">
          <Link to="/services" className="flex items-center text-lg p-3 " onClick={handleClick}>
            <button className="btn btn-outline w-full text-white hover:bg-gradient2 hover:text-white">
              <CgToolbox className="mr-3" /> Services
            </button>
          </Link>
        </div>
        <div className="mb-5">
          <Link to="/about" className="flex items-center text-lg p-3 " onClick={handleClick}>
            <button className="btn btn-outline w-full text-white hover:bg-gradient2 hover:text-white">
              <FaUserAlt className="mr-3" /> About
            </button>
          </Link>
        </div>
        <div className="mb-5">
          <Link to="/contact" className="flex items-center text-lg p-3 " onClick={handleClick}>
            <button className="btn btn-outline w-full text-white hover:bg-gradient2 hover:text-white">
              <FaEnvelope className="mr-3" /> Contact
            </button>
          </Link>
        </div>
      </nav>
      <p className="text-white font-bold text-xs">Local Time: {formattedTime}</p>
      <p className="text-white font-bold text-xs">Kennesaw, Georgia</p>
    </div>
    </div>
  );
};

export default NavBar;
