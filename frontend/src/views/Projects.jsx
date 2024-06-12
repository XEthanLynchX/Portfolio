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
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (Math.abs(position - lastScrollPosition) > 100) {
            setIsAnimating(true);
            setLastScrollPosition(position);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

    return (
        <div className="p-10 bg-gradient-to-b from-gradient1 via-gradient2 via-40% to-gradient3 min-h-screen w-full mt-12 leading font-cambria">
            <h1 className='text-4xl text-white mb-12 font-bold text-center'>SELECTED WORKS / <span className='text-4xl text-gradient3 mb-12 font-bold '>(4)</span></h1>
            <div className="w-full flex items-center justify-center relative  fixed">
                <div className={`text-6xl text-left font-bold text-gray-500 fixed top-1/4 left-1 transition-transform duration-300 ease-in-out mb-24 ${isAnimating ? 'flip-animation' : ''} transform translate-x-1/2`}>
                    <div>
                        <p></p>{Math.floor(scrollPosition / 1000) % 80}
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