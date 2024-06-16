import React, { useState } from 'react';
import pfp from '../media/pfp.jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt, FaHome, FaProjectDiagram, FaUserAlt, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex flex-col  items-center p-5 bg-darkblue transition-all duration-500 ease-in-out  md:sticky top-0 h-screen ${isOpen ? 'w-full' : 'w-full'} font-cambria`}>
            <div className="md:hidden w-full flex justify-between items-center mb-6">
              
                <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                    IP{
                        
                    }
            </div>
            <div className={`flex flex-col items-center ${isOpen ? 'block' : 'hidden md:block'}`}>
                <div className="text-center mb-6">
                    <div className="avatar">
                        <div className="w-48 rounded-full ring ring-offset-base-100 ring-offset-2">
                            <img src={pfp} alt="Profile" className="w-48 h-48 rounded-full mb-3" />
                        </div>
                    </div>
                    <h2 className="text-lg font-bold text-white">Ethan Lynch</h2>
                    <p className="text-sm text-gray-400">Full-Stack Developer</p>
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
                <nav className="w-full text-base">
                    <div className="mt-12 mb-5">
                        <Link to="/" className="flex items-center text-lg p-3 hover:bg-gray-700">
                            <button className="btn btn-outline w-full"><FaHome className="mr-3" /> Home</button>
                        </Link>
                    </div>
                    <div className="mb-5 ">
                        <Link to="/projects" className="flex items-center text-lg p-3 hover:bg-gray-700">
                            <button className="btn btn-outline w-full"><FaProjectDiagram className="mr-3" /> Projects</button>
                        </Link>
                    </div>
                    <div className="mb-5">
                        <Link to="/about" className="flex items-center text-lg p-3 hover:bg-gray-700">
                            <button className="btn btn-outline w-full"><FaUserAlt className="mr-3" /> About</button>
                        </Link>
                    </div>
                    <div className="mb-5">
                        <Link to="/contact" className="flex items-center text-lg p-3 hover:bg-gray-700">
                            <button className="btn btn-outline w-full"><FaEnvelope className="mr-3" /> Contact</button>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
