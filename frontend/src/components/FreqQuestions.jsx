import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FaqSection = () => {
  const faqs = [
    { question: 'What Service Do I Need', answer: 'If you are looking to have a website just as a display of your business than go with frontend development. If your looking into implementing payments, user login / registration, or another similar feature into a already existing website go with backend. If you would like a website designed from scratch with frontend and backend capabilities go with full-stack.' },
    { question: 'What Makes a Good Website', answer: 'A good website is one that is easy to navigate, visually appealing, and provides the information or services that the user is looking for. It should load quickly, be mobile-friendly, and have clear calls to action. A good website should also be secure, accessible, and optimized for search engines.'},
    { question: 'What Does the Process look like ', answer : 'The process of creating a website typically involves several steps, including planning, design, development, testing, and deployment. '},
    { question: 'How Long Does it Take to Build a Website', answer: 'The time it takes to build a website can vary depending on the complexity of the project and the number of features required. A simple website can be built in a within a couple of weeks, while a more complex website may take several weeks or months to complete.' },
    { question: 'What is Frontend Development', answer: 'This is the part of the website that users interact with directly. It Consist of the layout, design, and the interactive features visible to the user.' },
    { question: 'What is Backend Development', answer: 'This is the part of the website that users do not see. It consists of the server, database, and application. It is responsible for storing and organizing data and ensuring everything on the client-side of the website functions.' },
    { question: 'What is Full-Stack Development', answer: 'This is the combination of both frontend and backend development. It involves creating the website layout and design for the user, along with backend functionality such as payments, retrieving data, storing user data, and any other sort of information.' },
    
  ];

  const [openFaqs, setOpenFaqs] = useState([]);

  const handleFaqClick = (index) => {
    setOpenFaqs(prevOpenFaqs => 
      prevOpenFaqs.includes(index) ? prevOpenFaqs.filter(i => i !== index) : [...prevOpenFaqs, index]
    );
  };

  return (
    <div className="lg:py-24 mt-72" id="faq">
      <div className="px-8 md:ml-36 md:w-2/3  lg:px-16">
      <p className="text-base font-bold uppercase sm:mx-6 text-center text-normal  mt-4 text-shade4 ">
          FAQS
        </p>
        <h3 className="mt-1 text-xl font-bold sm:mx-6  md:text-2xl text-center">
          You Got Questions ?
        </h3>
        
        <div className="grid grid-cols-1 gap-0 md:grid-cols-1 md:gap-6 pt-10 ">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.04 }}
              className="w-full py-6 mx-auto mt-10 faq-gradient text-sm  rounded-lg  md:px-8 md:py-8  cursor-pointer"
              onClick={() => handleFaqClick(index)}
            >
              <h3 className="text-md font-bold text-indigo-500 sm:text-xl md:text-xl">{faq.question}</h3>
              {openFaqs.includes(index) && (
                <p className="mt-6 text-base   text-white ">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;