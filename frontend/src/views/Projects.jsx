// import React, { useState, useEffect, useRef } from 'react';
// import WorkDisplay from '../components/WorkDisplay';
// import work from '../media/work.gif';
// import '../styling/ProjectsStyling.css';
// import '../styling/fade.css';
// import TabIndicator from '../components/Indicator';
// import pokemonthumbnail from '../media/pokemonthumbnail.png';
// import thumbnail from '../media/thumbnail.png';
// import wwauto from '../media/wwauto.png';

// const projectsData = [
//     {
//         image: work,
//         name: 'Ethan Lynch Coaching',
//         technologies: ['React', 'Django', 'Tailwind'],
//         link: "https://ethan-lynch-coaching.web.app/",
//         repo: 'https://github.com/XEthanLynchX/ethan-lynch'
//     },
//     {
//         image: pokemonthumbnail,
//         name: 'Pokemon Handheld',
//         technologies: ['React', 'Flask', 'MySQL'],
//         link: "https://www.youtube.com/watch?v=YjYFz6mf0vU&t=3s",
//         repo: 'https://github.com/Skylarsj/Dojo-Group'
//     },
//     {
//         image: thumbnail,
//         name: 'MoveMetrics',
//         technologies: ['React', 'Javascript', 'MongoDB'],
//         link: "https://www.youtube.com/watch?v=Bx8snIJxfA0",
//         repo: 'https://github.com/XEthanLynchX/MoveMetrics'
//     },
//     {
//         image: wwauto,
//         name: 'W&W Auto Detailing',
//         technologies: ['SquareSpace', 'Figma', 'Adobe'],
//         link: "https://www.autodetailingww.com/",
//         repo: 'https://www.autodetailingww.com/'
//     }
// ];

// const Projects = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const sectionsRef = useRef([]);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
//     };

//     const handleBack = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
//     };

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             entries => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add('visible');
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );

//         sectionsRef.current.forEach(section => {
//             if (section) observer.observe(section);
//         });

//         return () => {
//             sectionsRef.current
//                 .filter(section => section !== null)
//                 .forEach(section => observer.unobserve(section));
//         };
//     }, []);

//     return (
//         <div className="p-4 md:p-10 w-full mt-12 leading  overflow-hidden">
//             <h1 className='text-2xl md:text-2xl lg:text-2xl xl:text-4xl text-white mb-6 md:mb-12 font-bold text-center fade-in' ref={el => sectionsRef.current.push(el)}>
//                 SELECTED WORKS <span className='text-black hidden 2xl:inline'>| </span>
//                 <span className='hidden 2xl:inline text-3xl md:text-4xl text-white mb-6 md:mb-12 font-bold'>
//                     {currentIndex + 1}
//                 </span>
//             </h1>

//             <div className='p-12 sm:w-2/3 sm:ml-24 md:p-4 md:ml-32 xl:ml-32 2xl:ml-44 md:w-2/3 inline-block text-base md:text-xl text-gray fade-in' ref={el => sectionsRef.current.push(el)}>
//                 <p>(Projects)</p>
//                 <p className='text-sm md:text-base w-full  xl:w-full'>
//                     Featured projects that have been meticulously crafted with passion and purpose over the years.
//                 </p>
//             </div>

//             <div className='relative grid grid-col-1 overflow-x-hidden p-2 fade-in ' ref={el => sectionsRef.current.push(el)}>
//                 <div className="swipeableView flex justify-center items-center">
//                     <WorkDisplay
//                         {...projectsData[currentIndex]}
//                         className="md:w-3/4 mr-8 md:h-3/4 w-2/3 h-full"
//                         onNext={handleNext}
//                         onBack={handleBack}
//                     />
//                 </div>
//                 <TabIndicator count={projectsData.length} currentIndex={currentIndex} handleClick={setCurrentIndex} />
//             </div>
//         </div>
//     );
// };

// export default Projects;
