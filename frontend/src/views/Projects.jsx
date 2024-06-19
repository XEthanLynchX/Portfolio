import React, { useState, useEffect } from 'react';
import WorkDisplay from '../components/WorkDisplay';
import work from '../media/work.gif';
import '../styling/ProjectsStyling.css';

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
    const [count, setCount] = useState(1);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount < 4 ? prevCount + 1 : prevCount));
        }, 1000); // Change count every 1 second

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <div className="p-10  w-full mt-12 leading font-cambria">
            <h1 className='text-4xl text-white mb-12 font-bold text-center'>
                SELECTED WORKS /
                <span className='text-4xl text-gradient3 mb-12 font-bold '>
                    ({count})
                </span>
            </h1>

            <div className='grid md:grid-cols-3 mb-12'>
                <div className='col-span-1'></div>

                <div className='col-span-2 ml-16 inline-block text-xl text-gray'>
                    <p>(Projects)</p>
                    <p className='text-base w-2/3'>Featured projects that have been meticulously crafted with passion and purpose over the years.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 overflow-y:auto numberf">
                {/* number animation */}
                <div className="col-span-1 overflow-y:auto fixed h-1/5">
                    <div className={`w-full text-6xl font-bold text-center duration-300 ease-in-out ${isAnimating ? 'flip-animation' : ''}`}>
                        <p className='numberf'>0{Math.floor(scrollPosition / 100) % 10}.</p>
                    </div>
                </div>

                <div className="col-span-2 w-full p-10 ml-6xl">
                    {projectsData.map((project, index) => (
                        <WorkDisplay key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
