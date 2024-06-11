import React, { useState, useEffect } from 'react';
import WorkDisplay from '../components/WorkDisplay';
import work from '../media/work.gif';

const projectsData = [
    {
        image: work,
        name: 'Ethan Lynch Coaching',
        technologies: ['React', 'Django', 'Tailwind']
    },
    {
        image: 'path/to/image2.jpg',
        name: 'Project 2',
        technologies: ['Vue.js', 'Firebase', 'TailwindCSS']
    },
    {
        image: 'path/to/image3.jpg',
        name: 'Project 3',
        technologies: ['Angular', 'Express', 'MySQL']
    },
    {
        image: 'path/to/image4.jpg',
        name: 'Project 4',
        technologies: ['Svelte', 'GraphQL', 'PostgreSQL']
    }
];

const Projects = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setIsAnimating(position > 0);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
      <div className="p-10 bg-gradient-to-b from-gradient1 via-gradient2 via-40% to-gradient3 min-h-screen w-full">
          <div className="w-full flex items-center justify-center relative">
              <div className={`text-6xl font-bold text-gray-500 fixed top-1/4 left-5 transition-transform duration-300 ease-in-out mb-24 ${isAnimating ? 'flip-animation' : ''}`}>
                  <div>
                      {Math.floor(scrollPosition / 100) % 10}
                  </div>
              </div>
          </div>
          <div className="w-full mb-24 overflow-y-auto p-10">
              {projectsData.map((project, index) => (
                  <WorkDisplay key={index} {...project} />
              ))}
          </div>
      </div>
  );
};

export default Projects;