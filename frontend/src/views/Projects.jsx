import React, { useState } from 'react';
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
        name: 'Pokemon Handheld',
        technologies: ['React', 'Flask', 'MySQL']
    },
    {
        image: 'path/to/image3.jpg',
        name: 'MoveMetrics',
        technologies: ['React', 'Javascript', 'MongoDB']
    },
    {
        image: 'path/to/image4.jpg',
        name: 'W&W Auto Detailing',
        technologies: ['SquareSpace', 'Figma', 'Adobe']
    }
];

const Projects = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [count, setCount] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextCount, setNextCount] = useState(count);

    const nextProject = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        const newCount = (count < projectsData.length) ? count + 1 : 1;
        setNextCount(newCount);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length); 
            setIsAnimating(false);
            setCount(newCount);
            // Reset isAnimating after the animation completes
        }, 400); // Match duration to animation time
    };

    const prevProject = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        const newCount = (count > 1) ? count - 1 : projectsData.length;
        setNextCount(newCount);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
            setCount(newCount);
            setIsAnimating(false); // Reset isAnimating after the animation completes
        }, 400); // Match duration to animation time
    };

    return (
        <div className="p-10 w-full mt-12 leading font-cambria ">
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

            <div className="grid grid-cols-3 md:grid-cols-3 h-full">
                {/* Number animation */}
                <div className="col-span-1 h-screen sticky top-0 flex items-center justify-center flip-container">
                    <div className={`flip-number ${isAnimating ? 'flip-animation' : ''}`}>
                        <div className="flipper text-2xl">
                            <div className="front">
                                0{count}
                            </div>
                            <div className="back">
                                0{nextCount}
                            </div>
                        </div>
                    </div>
                </div>

                {/* This is the container that should take up the remaining space */}
                <div className="col-span-2 w-full p-10 flex items-center justify-center relative flex-grow">
                    <button onClick={prevProject} className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full">
                        &#8592;
                    </button>
                    <WorkDisplay key={currentIndex} {...projectsData[currentIndex]} className="w-full h-full" />
                    <button onClick={nextProject} className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full">
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
