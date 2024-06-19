import React from 'react';
import { motion } from "framer-motion";
import { FlipWords } from '../components/FlipWords';
import { SiMongodb, SiMysql, SiJavascript } from 'react-icons/si';
import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import work from '../media/work.gif';

const Home = () => {
    return (
        <div className="p-4 mb-64 md:mb-0 md:p-10 min-h-screen w-full font-cambria">
            <h1 className='text-type md:text-3xl text-white mb-8 md:mb-12 font-bold'>Professional Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 smd:gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-darkblue text-white p-4 md:p-8 rounded-lg shadow-md text-center hover:shadow-glow h-full">
                            <h2 className="text-xl md:text-3xl font-semibold md:mb-2">2 <span className='text-sm md:text-base'>Years</span></h2>
                            <p className="text-gray text-sm md:text-base">Experience</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-darkblue text-white p-4 md:p-8 rounded-lg shadow-md text-center hover:shadow-glow h-full">
                            <h2 className="text-xl md:text-3xl font-semibold  md:mb-2">10+</h2>
                            <p className="text-gray text-sm md:text-base">Completed Projects</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-darkblue text-white p-4 md:p-8 rounded-lg shadow-md text-center hover:shadow-glow h-full">
                            <h2 className="text-lg md:text-xl font-semibold mb-1 md:mt-12">Full-Stack Expert</h2>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-darkblue text-white p-4 md:p-8 rounded-lg shadow-md text-center hover:shadow-glow h-full">
                            <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Certified Software Developer</h2>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-darkblue text-white p-4 md:p-10 rounded-lg shadow-md hover:shadow-glow flex flex-col space-y-4 md:space-y-8 h-full mt-8 md:mt-0">
                        <div>
                            <h2 className="text-lg md:text-xl font-semibold text-white inline-flex mt-4 md:mt-16">
                                <FlipWords words={['Ultimate Software Developer ', 'Innovative Problem Solver ', 'Creative Tech Visionary ']} duration={3500} />
                                <span> </span>
                            </h2>
                        </div>
                        <div>
                            <p className="text-gray text-sm md:text-base">My Passion is to deliver digital experiences not only fulfill essential purposes but also give your business a significant competitive edge.</p>
                            <button className='text-white bg-gradient-to-r from-gradient1 to-gradient2 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 text-center mt-4 md:mt-5'>
                                <a href="#contact">Get In Touch</a>
                            </button>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-darkblue text-white p-4 md:p-10 rounded-lg shadow-md hover:shadow-glow mt-24 md:mt-0">
                        <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4">Featured Projects</h2>
                        <div className="flex justify-center items-center text-sm md:text-base font-semibold text-blue mb-4 md:mb-8">
                            <a href="#projects" className="flex justify-center items-center text-blue-500">
                                View all
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 md:h-6 w-5 md:w-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                        <img src={work} alt="Work" className='border-4 border-gradient2 hover:border-gradient3 rounded-lg' />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-darkblue text-white p-4 md:p-10 rounded-lg shadow-md hover:shadow-glow h-full mt-24 md:mt-0">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4">Full-Stack Development</h2>
                        <p className="text-gray text-sm md:text-base mb-4 md:mb-8">Full-stack development involves creating both the front-end and back-end of web applications, ensuring seamless user experiences and robust server functionality.</p>
                        <div className="flex space-x-4 md:space-x-6 justify-center">
                            <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
                                <FaPython size={40} md:size={60} color="#3776AB" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
                                <FaReact size={40} md:size={60} color="#61DAFB" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
                                <FaNodeJs size={40} md:size={60} color="#68A063" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
                                <SiMysql size={40} md:size={60} color="#4479A1" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
                                <SiMongodb size={40} md:size={60} color="#47A248" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
