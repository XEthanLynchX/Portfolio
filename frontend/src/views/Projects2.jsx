// // ProjectsSection.js
// import React, { useState, useEffect, useRef } from 'react';
// import { ProjectData }  from "../components/ProjectData";
// import ProjectDisplay from "../components/ProjectDisplay";
// import '../styling/fade.css'

// const Projects2 = () => {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//         entries => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('visible');
//                     observer.unobserve(entry.target);
//                 }
//             });
//         },
//         { threshold: 0.1 }
//     );

//     sectionsRef.current.forEach(section => {
//         if (section) observer.observe(section);
//     });

//     return () => {
//         sectionsRef.current
//             .filter(section => section !== null)
//             .forEach(section => observer.unobserve(section));
//     };
// }, []);
//   return (
//     <div  >
//       <div className="header-container  " >
//         <h2 className='fade-in text-white' ref={el => sectionsRef.current.push(el)}>What I've Been Working On</h2>
//         <div className="header-line"></div>
//       </div>
//       {ProjectData.map((project, index) => (
//         <ProjectDisplay
//           key={index}
//           project={project}
//           isReversed={index % 2 !== 0}
//         />
//       ))}
//     </div>
//   );
// };

// export default Projects2;
