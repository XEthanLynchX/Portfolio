import React from "react";
import laptop from '../media/laptop.jpg';
import TypingAnimation from '../components/TypingAnimation';
import "../styling/TypingCursor.css";

const About = () => {
  return (
    <div className="flex flex-col items-center h-screen p-10 font-cambria ">
      <p className="text-gray">Nice to meet you!</p>
      <TypingAnimation />
      
      <h3 className="text-base w-1/3 text-center mt-8">I work as Full-Stack Developer creating memorable web experiences, through the use of robust code and techniques.</h3>
      <img src={laptop} alt="" className="w-1/2 mt-24 border-8 rounded border-black" />

      <div className="text-left w-1/2 mt-16">
        <h3 className="text-gray ">Summary</h3>
        <h2 className="text-type font-bold">Studying Computer Science & freelancing in tech </h2>
        <p className="text-white text-base mb-24">Thanks to my studies in software development and growing my soft skills, I connect with clients in order to make memorable web experiences.  </p>

        <h3 className="text-gray ">Background Story</h3>
        <h2 className="text-xl font-bold">blah blah</h2>
        <p></p>

        <h3 className="text-gray text-bold text-2xl">Why Full-Stack?</h3>
        <h2 className="text-base font-bold">blah blah </h2>
        <p></p>
      </div>
      
    </div>
  );
}

export default About;
