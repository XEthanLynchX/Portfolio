import React, { useState } from 'react';
import WorkDisplay from '../components/WorkDisplay';
import work from '../media/work.gif';
import '../styling/ProjectsStyling.css';
import SwipeableViews from 'react-swipeable-views';
import  TabIndicator  from '../components/Indicator';

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
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index); // Assuming setCurrentIndex updates the state in the parent component
    };

    const handleChangeIndex = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="p-4 md:p-10 w-full mt-12 leading font-cambria ">
            <h1 className='text-3xl md:text-4xl text-white mb-6 md:mb-12 font-bold text-center'>
                SELECTED WORKS | 
                <span className='text-3xl md:text-4xl text-white mb-6 md:mb-12 font-bold '>
                    {currentIndex + 1}
                </span>
            </h1>

            <div className='grid md:grid-cols-3 mb-6 md:mb-12'>
                <div className='col-span-'></div>

                <div className='col-span-3 ml-0 md:ml-64 inline-block text-base md:text-xl text-gray'>
                    <p>(Projects)</p>
                    <p className='text-sm md:text-base w-full md:w-2/3'>
                        Featured projects that have been meticulously crafted with passion and purpose over the years.
                    </p>
                </div>
            </div>

            <div className='grid grid-col-1'>
                <SwipeableViews index={currentIndex} onChangeIndex={handleChangeIndex} enableMouseEvents>
                    {projectsData.map((project, index) => (
                        <div key={index} className="swipeableView">
                            <WorkDisplay {...project} className="w-3/4 h-3/4" />
                        </div>
                    ))}
                </SwipeableViews>
           
           
                <TabIndicator count={projectsData.length} currentIndex={currentIndex} handleClick={handleClick} />
             </div>
        </div>
    );
};

export default Projects;
