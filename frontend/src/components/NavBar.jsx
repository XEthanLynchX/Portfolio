import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';
import '../styling/navbar.css';

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = ['home', 'projects', 'experience', 'about', 'stack'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`top-navbar fixed w-full px-6 py-4 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="logo-container"
        >
          <div className="logo-icon">
            <FaCode />
          </div>
          <span>EthanDev</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className={`nav-link px-2 py-1 ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a 
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className={`nav-link px-2 py-1 ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </a>
          <a 
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}
            className={`nav-link px-2 py-1 ${activeSection === 'experience' ? 'active' : ''}`}
          >
            Experience
          </a>
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className={`nav-link px-2 py-1 ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a 
            href="#stack"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('stack');
            }}
            className={`nav-link px-2 py-1 ${activeSection === 'stack' ? 'active' : ''}`}
          >
            Stack
          </a>
        </nav>
     
        {/* CTA Button */}
        <a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
          className="talk-button hidden md:block px-6 py-2.5 font-medium text-sm"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden w-full absolute left-0 bg-white shadow-lg py-4 px-6 mt-4">
        <nav className="flex flex-col space-y-4">
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
              document.getElementById('mobile-menu').classList.add('hidden');
            }}
            className={`nav-link px-2 py-1 ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a 
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
              document.getElementById('mobile-menu').classList.add('hidden');
            }}
            className={`nav-link px-2 py-1 ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </a>
          <a 
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
              document.getElementById('mobile-menu').classList.add('hidden');
            }}
            className={`nav-link px-2 py-1 ${activeSection === 'experience' ? 'active' : ''}`}
          >
            Experience
          </a>
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
              document.getElementById('mobile-menu').classList.add('hidden');
            }}
            className={`nav-link px-2 py-1 ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a 
            href="#stack"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('stack');
              document.getElementById('mobile-menu').classList.add('hidden');
            }}
            className={`nav-link px-2 py-1 ${activeSection === 'stack' ? 'active' : ''}`}
          >
            Stack
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
              document.getElementById('mobile-menu').classList.add('hidden');
            }}
            className="talk-button w-full text-center px-6 py-2.5 font-medium text-sm"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
