import React from 'react';

const WorkDisplay = ({ image, name, technologies }) => {
    return (
        <div className=" ml-64 text-white p-8 rounded-lg shadow-md hover:shadow-glow mb-24 w-3/4">
            <img src={image} alt={name} className="w-full rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <div className="flex space-x-2">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-gradient3 font-bold text-black px-3 py-1 rounded-full">{tech}</span>
                ))}
            </div>
        </div>
    );
};

export default WorkDisplay;
