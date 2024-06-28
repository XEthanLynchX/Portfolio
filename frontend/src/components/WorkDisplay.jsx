import React from 'react';
import { motion } from "framer-motion";

const WorkDisplay = ({ image, name, technologies, link }) => {
    return (
        <div className="text-white p-8 rounded-lg shadow-md hover:shadow-glow mb-24 w-screen md:w-full font-cambria bg-darkblue">
            <img src={image} alt={name} className="w-screen  rounded-lg mb-4" />
            <h2 className="md:text-2xl font-semibold mb-2">{name}</h2>
            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="bg-gradient3 font-bold text-black px-3 py-1 rounded-full">{tech}</span>
                        </motion.div>
                    ))}
                </div>
                <a 
                    href={link} 
                    className="bg-gradient3 font-bold text-black px-3 py-1 rounded-full"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <span className="block md:hidden">View</span>
                    <span className="hidden md:block">View Project</span>
                </a>
            </div>
        </div>
    );
};

export default WorkDisplay;
