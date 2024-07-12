import React from 'react';
import { motion } from "framer-motion";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const WorkDisplay = ({ image, name, technologies, link, repo, onNext, onBack }) => {
    return (
        <div className="relative ml-6 text-white p-8 rounded-lg shadow-md hover:shadow-glow mb-24 sm:w-screen mmd:w-full  bg-darkblue">
            <ArrowBackIosIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={onBack} />
            <img src={image} alt={name} className="w-full rounded-lg mb-4" />
            <h2 className="md:text-xxl font-semibold mb-2">{name}</h2>
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
                            <span className="bg-gradient3 md:text-xs font-bold text-black px-3 py-1 text-xssm rounded-full">{tech}</span>
                        </motion.div>
                    ))}
                </div>
                <div className="flex space-x-2">
                    <motion.button
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gradient3 md:text-xs font-bold ml-8 text-black px-3 py-1 text-xssm rounded-full"
                        onClick={() => window.open(link, "_blank")}
                    >
                        Project
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gradient3 md:text-xs font-bold hidden md:block text-black px-3 py-1 text-xxs rounded-full"
                        onClick={() => window.open(repo, "_blank")}
                    >
                        View Repo
                    </motion.button>
                </div>
            </div>
            <ArrowForwardIosIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={onNext} />
        </div>
    );
};

export default WorkDisplay;
