import React from 'react';
import { motion } from "framer-motion"
import TypingAnimation from '../components/TypingAnimation';
import { FlipWords } from '../components/FlipWords';
import { SiMongodb, SiMysql, SiJavascript } from 'react-icons/si';
import { FaPython, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import work from '../media/work.gif';




const Home = () => {
    const words = ["Professional Skills"];

    return (
        
        <div className="p-10 bg-gradient-to-b from-gradient1 via-gradient2 via-40% to-gradient3 ml-96 w-full min-h-screen">
          
            <h1 className='text-3xl text-white mb-28 font-bold'>Professional Skills</h1>
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Column 1, Row 1 */}
                <div className="grid grid-cols-2 gap-6">
                <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05,  }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-darkblue text-white p-8 rounded-lg shadow-md w-80 h-52 text-center hover:shadow-glow">
                            <h2 className="text-3xl font-semibold mb-2">2 <span className='text-base'>Years</span></h2>
                            <p className="text-gray text-base">Experience</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05,  }}
                        transition={{ duration: 0.5 }}
                    >
                    <div className="bg-darkblue text-white p-8 rounded-lg shadow-md w-80 h-52 -ml-28 text-center hover:shadow-xl hover:shadow-glow">
                        <h2 className="text-3xl font-semibold mb-2">10+</h2>
                        <p className="text-gray text-nowrap text-base">Completed Projects</p>
                    </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05,  }}
                        transition={{ duration: 0.5 }}
                    >
                    <div className="bg-darkblue text-white p-8 rounded-lg shadow-md mt-8 w-80 h-52 text-center hover:shadow-xl hover:shadow-glow">
                        <h2 className="text-xl text-nowrap font-semibold mb-2">Full-Stack</h2>
                        <h2 className="text-xl text-nowrap font-semibold mb-2">Expert</h2>
                    </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05,  }}
                        transition={{ duration: 0.5 }}
                    >
                    <div className="bg-darkblue text-white p-8 rounded-lg shadow-md mt-8 w-80 -ml-28 h-52 text-center hover:shadow-xl hover:shadow-glow">
                        <h2 className="text-type font-semibold mb-2">Certified Software Developer</h2>
                    </div>
                    </motion.div>
                </div>

                {/* Column 2, Row 1 */}
                <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02,  }}
                        transition={{ duration: 0.5 }}
                    >

                    <div className="bg-darkblue text-white p-10 rounded-lg shadow-md -ml-56 h-full w-9/12 text-left hover:shadow-xl hover:shadow-glow flex flex-col space-y-16 ">
                    <div className='mt-16'>
                        <h2 className="text-type font-semibold text-white inline-flex">
                            <span>The&nbsp;</span>
                            <FlipWords words={['Ultimate Software Developer', 'Innovative Problem Solver', 'Creative Tech Visionary']} duration={5500} />
                            <span> </span>
                        </h2>
                        </div>
                    <div className=''>
                        <p className="text-gray text-base -mt-12">My Passion is to deliver digital experiences not only fulfill essential purposes but also give your business a significant competitive edge.</p>
                        <button className='text-white bg-gradient-to-r from-gradient1  to-gradient2 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10 mb-2'><a href="#contact">Get In Touch</a></button>
                    </div>
                    </div>
                </motion.div>
                
                {/* Column 1, Row 2 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02}}
                    transition={{ duration: 0.3 }}
                >
                    <div className="bg-darkblue text-white p-10 rounded-lg shadow-md w-9/12 hover:shadow-glow">
                        <h2 className="text-3xl font-semibold mb-2">Featured Projects</h2>
                        <div className="flex justify-center items-center text-base text-semibold text-blue mb-12">
                            <a href="#projects" className="flex justify-center items-center text-blue-500">
                                View all
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            </a>
                        </div>
                        <img src={work} alt="Work" />
                    </div>
                </motion.div>
                {/* Column 2, Row 2 */}
                <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-darkblue text-white p-10 rounded-lg shadow-md -ml-56 w-9/12 hover:shadow-xl hover:shadow-glow">
                            <h2 className="text-3xl font-semibold mb-1">Full-Stack Development</h2>
                            <p className="text-gray text-base">Full-stack development involves creating both the front-end and back-end of web applications, ensuring seamless user experiences and robust server functionality.</p>
                            <div className="flex space-x-6 mt-20 justify-center">
                                <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
                                    <FaPython size={40} color="#3776AB" />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
                                    <FaReact size={40} color="#61DAFB" />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
                                    <FaNodeJs size={40} color="#68A063" />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
                                    <SiMysql size={40} color="#4479A1" />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
                                    <SiMongodb size={40} color="#47A248" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
            </div>
        </div>
        
    );
};

export default Home;
