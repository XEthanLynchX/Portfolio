import React, { useState } from 'react';
import WorkDisplay from '../components/WorkDisplay';
import work from '../media/work.gif';
import '../styling/ProjectsStyling.css';
import TabIndicator from '../components/Indicator';
import pokemonthumbnail from '../media/pokemonthumbnail.png';
import thumbnail from '../media/thumbnail.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import wwauto from '../media/wwauto.png';

const projectsData = [
    {
        image: work,
        name: 'Ethan Lynch Coaching',
        technologies: ['React', 'Django', 'Tailwind'],
        link: "https://ethan-lynch-coaching.web.app/",
        repo: 'https://github.com/XEthanLynchX/ethan-lynch'
    },
    {
        image: pokemonthumbnail,
        name: 'Pokemon Handheld',
        technologies: ['React', 'Flask', 'MySQL'],
        link: "https://www.youtube.com/watch?v=YjYFz6mf0vU&t=3s",
        repo: 'https://github.com/Skylarsj/Dojo-Group'
    },
    {
        image: thumbnail,
        name: 'MoveMetrics',
        technologies: ['React', 'Javascript', 'MongoDB'],
        link: "https://www.youtube.com/watch?v=Bx8snIJxfA0",
        repo: 'https://github.com/XEthanLynchX/MoveMetrics'
    },
    {
        image: wwauto,
        name: 'W&W Auto Detailing',
        technologies: ['SquareSpace', 'Figma', 'Adobe'],
        link: "https://www.autodetailingww.com/",
        repo: 'https://www.autodetailingww.com/'
    }
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    const handleBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
    };

    return (
        <div className="p-4 md:p-10 w-full mt-12 leading font-cambria overflow-x-hidden">
            <h1 className='text-3xl md:text-4xl text-white mb-6 md:mb-12 font-bold text-center'>
                SELECTED WORKS <span className='text-black'>| </span>
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

            <div className='relative grid grid-col-1 overflow-x-hidden'>
                <div className='absolute top-1/3 transform -translate-y-1/2 left-4 md:left-32 z-10'>
                    <ArrowBackIosIcon onClick={handleBack} style={{ cursor: 'pointer' }} />
                </div>
                <div className="swipeableView flex justify-center items-center">
                    <WorkDisplay {...projectsData[currentIndex]} className="md:w-3/4 mr-8 md:h-3/4 w-2/3 h-full" />
                </div>
                <div className='absolute top-1/3 transform -translate-y-1/2 -right-2 md:right-24 w-1/12 z-10'>
                    <ArrowForwardIosIcon onClick={handleNext} style={{ cursor: 'pointer' }} />
                </div>
                <TabIndicator count={projectsData.length} currentIndex={currentIndex} handleClick={setCurrentIndex} />
            </div>
        </div>
    );
};

export default Projects;
