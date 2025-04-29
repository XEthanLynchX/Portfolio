// import React, { useEffect, useRef } from 'react';
// import '../styling/servicesstyling.css';
// import laptop from '../media/laptop.png'; 
// import unknown from '../media/unknown.svg'; 
// import WebDesign from '../media/webDesign.svg'; 
// import webDev from '../media/webDev.svg'; 
// import select from '../media/select.svg'; 
// import { Link } from 'react-router-dom';
// import { FaReact, FaDatabase, FaPython,  FaNodeJs } from 'react-icons/fa'; 
// import { SiAxios } from "react-icons/si";
// import { DiMongodb } from "react-icons/di";
// import { DiMysql } from "react-icons/di";
// import { SiExpress } from "react-icons/si";
// import '../styling/fade.css'


// const Services = () => {
//   const pricingContainerRef = useRef(null);
//   const sectionsRef = useRef([]);
//   const detailsContainerRef = useRef(null);

//   const scrollToPricing = () => {
//     pricingContainerRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   const scrollToDetail = () => {
//     detailsContainerRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     sectionsRef.current.forEach(section => {
//       if (section) observer.observe(section);
//     });

//     return () => {
//       sectionsRef.current
//         .filter(section => section !== null)
//         .forEach(section => observer.unobserve(section));
//     };
//   }, []);

//   return (
//     <>
//     <div className="pt-32 lg:flex flex-col lg:flex-row items-center relative z-10 w-screen mb-64 image-container -mt-16">
//       <div role="contentinfo" className="w-full lg:w-1/2 h-full lg:ml-24 mb-16 p-4 ">
//         <p
//           className="text-base text-gray text-center lg:text-left md:text-sm xl:text-sm sm:mb-2"
//           style={{ textShadow: '8px 6px 4px rgba(0,0,0,0.5)' }}
//         >
//           A Developer For You
//         </p>
//         <p
//           tabIndex="0"
//           className="font-bold 2xl:text-2xl mb-4 text-white text-center  lg:text-left text-lg   sm:mb-8"
//           style={{ textShadow: '8px 6px 4px rgba(0,0,0,0.5)' }}
//         >
//           Designing & Building <span className="text-shade5">Creative Brands</span>
//         </p>
//         <p
//           tabIndex="0"
//           className="font-regular mb-8 text-white text-center text-sm lg:text-left xl:w-2/3 sm:px-12 md:px-0"
//           style={{ textShadow: '8px 6px 4px rgba(0,0,0,0.5)' }}
//         >
//           Creating visually appealing and highly functional websites tailored to your brand’s unique needs. Let's bring your vision to life with innovative design and seamless functionality.
//         </p>
//         <div className="flex justify-center lg:justify-start">
//           <button
//             className="bg-shade1 w-2/3 xl:w-1/2 rounded-2xl text-base p-2 font-semibold text-white hover:bg-shade3"
//             onClick={scrollToDetail}
//           >
//             Learn more
//           </button>
//         </div>
//       </div>
//       <div className="md:w-full sm:w-2/3 content-center sm:ml-40 md:ml-0 lg:w-3/5 md:mr-64  mt-8 lg:-mt-32 flex justify-center">
//         <img
//           tabIndex="0"
//           role="img"
//           aria-label="Sunset"
//           src={laptop}
//           alt="Sunset"
//         />
//       </div>
//     </div>

    

//         {/* Header */}

//         {/* Services */}
//         <div className="servicesSection flex justify-center items-center relative z-20 mb-16 fade-in " ref={el => sectionsRef.current.push(el)}>
//           <div className="relative w-4/5  " ref={detailsContainerRef}>
//             <div className="absolute inset-0 z-0 rounded-lg"></div>
//             <div className="relative z-10 flex flex-col justify-center items-center rounded-2xl p-4 ">
//               {/* Header moved here, outside and above the cards container */}
//               <h2 className=" text-type md:text-xl text-center mb-8 font-bold text-white">Your Trusted Partner in Web Development</h2>
//               <h3 className=" text-gray text-sm text-center mb-8 font-bold -mt-6">Our Features & Sevices</h3>

//               {/* Cards container */}
//               <div className='flex-wrap xl:flex-nowrap  xl:flex  justify-center xl:justify-between space-y-8 xl:space-y-0 xl:space-x-8 p-4 ' >
//                 <div className='card bg-darkblue text-white p-8 rounded-lg w-full xl:w-1/3 hover:shadow-glow'>
//                   <img src={webDev} alt="Web Development" className='w-full h-auto'/>
//                   <h3 className='text-lg mt-2 font-bold'>Web Development</h3>
//                   <p className='text-xs md:text-sm mt-4 mb-4 xl:text-xs'>Enhances your website's design and functionality, ensuring a seamless user experience. </p>
//                   <div className="flex justify-center mt-4">
//                     <button onClick={scrollToPricing} className="w-2/3 bg-shade1 rounded-lg h-full font-bold hover:bg-shade4">
//                       More
//                     </button>
//                   </div>
//                 </div>
//                 <div className='card bg-darkblue text-white p-8 rounded-lg w-full xl:w-1/3 hover:shadow-glow'>
//                   <img src={WebDesign} alt="Web Design" className='w-full h-full mb-1'/>
//                   <h3 className="text-lg mt-2 font-bold"> Web&#8209;Design</h3>
//                   <p className='text-xs md:text-sm mt-4 mb-4 xl:text-xs'>Improves your website's visual appeal and user interface for a memorable user experience.</p>
//                   <div className="flex justify-center mt-4">
//                     <button onClick={scrollToPricing} className="w-2/3 bg-shade1 rounded-lg h-full font-bold hover:bg-shade4">
//                       More
//                     </button>
//                   </div>
//                 </div> 
//                 <div className='card bg-darkblue text-white p-8 rounded-lg w-full xl:w-1/3 hover:shadow-glow'>
//                   <img src={unknown} alt="SEO Optimization" className='w-full h-auto'/>
//                   <h3 className='text-lg mt-2 font-bold'>SEO Optimization</h3>
//                   <p className='text-xs md:text-sm mt-4 mb-4 xl:text-xs'>
//                     Increases your website's visibility on search engines and builds trust with higher rankings.
//                   </p>
//                   <div className="flex justify-center mt-4">
//                     <button onClick={scrollToPricing} className="w-2/3 bg-shade1 rounded-lg h-full font-bold  hover:bg-shade4">
//                       More
//                     </button>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="tech-banner-container fade-in" ref={el => sectionsRef.current.push(el)}>
//                 <div className="tech-banner flex justify-center items-center mt-12 md:mt-0 space-x-6 p-4 md:p-10">
//                   <div className="icon-text flex flex-col items-center">
//                     <span><FaReact color="#61DAFB" size={30} /></span>
//                     <span className="mt-2">React</span>
//                   </div>
//                   <div className="icon-text flex flex-col items-center">
//                     <span><SiAxios color="#800080" size={30} /></span>
//                     <span className="mt-2">Axios</span>
//                   </div>
//                   <div className="icon-text flex flex-col items-center">
//                     <span><SiExpress size={30} /></span>
//                     <span className="mt-2">Express</span>
//                   </div>
//                   <div className="icon-text flex flex-col items-center">
//                     <span><FaPython color="#3776AB" size={30} /></span>
//                     <span className="mt-2">Python</span>
//                   </div>
//                   <div className="icon-text flex flex-col items-center">
//                     <span><FaNodeJs color="#008000" size={30} /></span>
//                     <span className="mt-2">Node.js</span>
//                   </div>
//                   <div className="icon-text flex flex-col items-center">
//                     <span><DiMongodb color="#008000" size={30} /></span>
//                     <span className="mt-2">MongoDB</span>
//                   </div>
//                   <div className="icon-text flex flex-col items-center">
//                     <span><DiMysql color="#ADD8E6" size={30} /></span>
//                     <span className="mt-2">MySQL</span>
//                   </div>
//                 </div>
//               </div>

//              <div className=" md:flex-row lg:flex-row 2xl:flex items-center justify-around mt-8 md:mt-32 p-4 sm:p-10 font-cambria fade-in" ref={el => sectionsRef.current.push(el)}>
//               {/* Left Column with Image */}
//               <div className="flex-1 flex justify-center items-center mt-36 md:mt-0 p-4">
//                 <img src={select} alt="Selected Image" className="w-full h-auto md:max-w-md" />
//               </div>
              
//               {/* Right Column with Text */}
//               <div className="flex-1 flex flex-col justify-center items-start p-4 ">
//                 <p className="text-xs text-gray mb-2">A Trusted Partner</p>
//                 <h1 className="text-type md:text-xl font-bold text-white mb-4 2xl:text-xl">Why Choose Me</h1>
//                 <p className="text-sm mt-4 md:mt-0 text-white mb-8">
//                   With knowledge in today's latest technologies, I'm committed to delivering top-notch quality and engaging with you every step of the way.
//                 </p>
                
//                 {/* Statistics Row */}
//                 <div className="flex flex-row gap-6 md: md:flex-row justify-between w-full mt-4">
//                   <div className="flex flex-col items-center mb-4 md:mb-0 text-center">
//                     <p className=" text-base md:text-2xl font-bold text-white">Many</p>
//                     <p className="text-xs text-gray md:text-sm ">Years Experience</p>
//                   </div>
//                   <div className="flex flex-col items-center mb-4 md:mb-0 text-center">
//                     <p className="text-base md:text-2xl font-bold text-white">10+</p>
//                     <p className="text-xs text-gray md:text-sm ">Projects</p>
//                   </div>
//                   <div className="flex flex-col items-center text-center">
//                     <p className="text-base md:text-2xl font-bold text-white">10+</p>
//                     <p className="text-xs text-gray md:text-sm ">Technologies Mastered</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <section className="p-6 text-white mt-32">
//               <div className="container mx-auto">
//                 <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase">How it works</span>
//                 <h2 className="text-xl font-bold text-center">Building Your Website</h2>
//                 <div className="grid gap-6 my-16 2xl:grid-cols-3">
//                   <div className="flex p-8 space-y-4 rounded-md bg-gradient1 hover:shadow-glow">
//                     <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-shade1 text-base font-bold rounded-full">1</div>
//                     <div className="ml-4">
//                       <p className="text-base font-semibold">
//                         <b className='text-shade5'>Planning & Design.</b> We start from the ground up creating a design that fits your business.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex p-8 space-y-4 rounded-md bg-gradient1 hover:shadow-glow">
//                     <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-shade1 text-base font-bold rounded-full">2</div>
//                     <div className="ml-4">
//                       <p className="text-base font-semibold">
//                         <b className='text-shade4'>Development.</b> Building your website the way you want it. Check-ins throughout the entire process.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex p-8 space-y-4 rounded-md bg-gradient1 hover:shadow-glow">
//                     <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-shade1 text-base font-bold rounded-full">3</div>
//                     <div className="ml-4">
//                       <p className="text-base font-semibold">
//                         <b className='text-shade4'>Deployment.</b> Completing & Launching your perfect website for the world to see.  
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>



//             <div className="pricing-container flex flex-col items-center justify-center min-h-screen p-4 sm:p-10 font-cambria mt-14 fade-in" ref={el => sectionsRef.current.push(el)}>
//                 <h3 className="text-base text-shade4 mb-4 font-bold">Pricing</h3>
//                 <h2 className="text-3xl text-white mb-8 font-bold text-center">Flexible Plans.</h2>

//                 <div className="pricing-table grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-4 lg:gap-8 mt-16 w-full" ref={pricingContainerRef}>
//                   {/* Basic Package */}
//                   <div className="card bg-darkblue w- text-white p-6 sm:p-8 rounded-lg text-center hover:shadow-glow flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-lg sm:text-lg text-white mb-4 font-bold">Standard</h3>
//                       <p className="text-xl  sm:text-xl text-white font-bold mb-4">$15/Hr</p>
//                       <ul className="mb-8 space-y-2">
//                         <li>Clean Website Design</li>
//                         <li>Responsive Layout</li>
//                         <li>Front-End</li>
//                         <li>Basic SEO</li>
//                         <li>Free Small changes</li>
//                       </ul>
//                     </div>
//                     <Link to='/contact' className='text-center'>
//                       <button className="text-white bg-shade1 font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-shade4">Get Started</button>
//                     </Link>
//                   </div>

               

//                   {/* Premium Package */}
//                   <div className="card bg-darkblue text-white p-6 sm:p-8 rounded-lg text-center hover:shadow-glow flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-lg sm:text-lg text-white mb-4 font-bold">Premium</h3>
//                       <p className="text-xl sm:text-xl text-white font-bold mb-4">$21/Hr</p>
//                       <ul className="mb-8 space-y-2">
//                         <li>Premium Website Design</li>
//                         <li>Responsive Layout</li>
//                         <li>Full-Stack Features</li>
//                         <li>Premium SEO</li>
//                         <li>Any Changes</li>
//                       </ul>
//                     </div>
//                     <Link to='/contact' className='text-center'>
//                       <button className="text-white bg-shade1 font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-shade4">Get Started</button>
//                     </Link>
//                   </div>

//                   {/* Custom Package */}
//                   <div className="card bg-darkblue text-white p-6 sm:p-8 rounded-lg text-center hover:shadow-glow flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-lg sm:text-lg text-white mb-4 font-bold">Custom</h3>
//                       <p className="text-xl sm:text-xl text-white font-bold mb-4">$</p>
//                       <ul className="mb-8 space-y-2">
//                         <li>Custom Website Design</li>
//                         <li>Responsive Layout</li>
//                         <li>Choice of Development </li>
//                         <li>Any Choice of SEO</li>
//                         <li>Any Choice of Changes</li>
//                       </ul>
//                     </div>
//                     <Link to='/contact' className='text-center'>
//                       <button className="text-white bg-shade1 font-medium rounded-lg text-sm px-5 py-2.5  hover:bg-shade4">Get Started</button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
    
//     </>
//   );
// }

// export default Services;
