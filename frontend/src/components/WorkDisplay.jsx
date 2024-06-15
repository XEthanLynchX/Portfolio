import React from 'react';
import { motion } from "framer-motion";

const WorkDisplay = ({ image, name, technologies }) => {
    return (
        <div className="  text-white p-8 rounded-lg shadow-md hover:shadow-glow mb-24 w-full">
            <img src={image} alt={name} className="w-full rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <div className="flex space-x-2">
                {technologies.map((tech, index) => (
                     <motion.div
                     initial={{ opacity: 0, scale: 1 }}
                     animate={{ opacity: 1, scale: 1 }}
                     whileHover={{ scale: 1.2 }}
                     transition={{ duration: 0.2 }}
                 >
                    <span key={index} className="  bg-gradient3 font-bold text-black px-3 py-1 rounded-full">{tech}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WorkDisplay;
