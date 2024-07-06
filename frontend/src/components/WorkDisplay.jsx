import React from 'react';
import { motion } from "framer-motion";

const WorkDisplay = ({ image, name, technologies, link, repo }) => {
    return (
        <div className="text-white p-8 rounded-lg shadow-md hover:shadow-glow mb-24 w-screen md:w-full font-cambria bg-darkblue" >
            <img src={image} alt={name} className="w-screen rounded-lg mb-4" />
            <h2 className="md:text-2xl font-semibold mb-2">{name}</h2>
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 ">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="bg-gradient3 md:text-sm font-bold text-black px-3 py-1 text-xxs rounded-full">{tech}</span>
                        </motion.div>
                    ))}
                </div>
                <div className="flex space-x-2"> {/* Container with Flexbox */}
                    <a 
                        href={link} 
                        className="bg-gradient3 font-bold text-black px-3 py-1 text-xxs rounded-full ml-4 md:text-sm"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <span className="block md:hidden">Project</span>
                        <span className="hidden md:block">View Project</span>
                    </a>
                    <a 
                        href={repo} /* Update this href to the repo link if different */
                        className="bg-gradient3 md:text-sm font-bold text-black px-3 py-1 text-xxs rounded-full hidden md:block  "
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        
                        <span className="hidden md:block">View Repo</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WorkDisplay;