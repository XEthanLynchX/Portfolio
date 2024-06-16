import React from "react";
import laptop from '../media/laptop.jpg';
import TypingAnimation from '../components/TypingAnimation';
import "../styling/TypingCursor.css";

const About = () => {
  return (
    <div className="flex flex-col items-center h-screen p-10 font-cambria " style={{ textShadow: '8px 6px 4px rgba(0,0,0,0.5)' }} >
      <p className="text-gray">Nice to meet you!</p>
      <TypingAnimation />
      
      <h3 className="text-base w-1/3 text-center mt-8">I work as Full-Stack Developer creating memorable web experiences, through the use of robust code and techniques.</h3>
      <img src={laptop} alt="" className="w-1/2 mt-24 border-8 rounded border-black hover:shadow-glow" />

      <div className="text-left w-1/2 mt-16" >

        <div>
          <h3 className="text-gray ">Summary</h3>
          <h2 className="text-type font-bold mb-8">Studying Computer Science & freelancing in tech </h2>
        </div>

        <div>
          <p className="text-white text-base mb-6">Thanks to my studies in software development and growing my soft skills, I connect with clients in order to make memorable web experiences. </p>
          <p className="text-white text-base mb-6 ">Currently, I'm working on many personal/client projects to continously improve upon my technical skills and networking to meet new people and potetial clients.</p>
          <p className="text-white text-base mb-4">Outside of that, I attend <a href="https://www.kennesaw.edu/" className="no-underline-hover textShadow" target="_blank" rel="noopener noreferrer">KSU</a> where I'm pursuing my bacherlor's in computer science.</p>
          <p className="text-white text-base mb-6">I have always had a love for a technology and an itch for creativity, which is where I found my passion and love for coding and web design.</p>
          <p className="text-white text-base mb-24">A gift and a curse, I am a people pleaser so designing the best and most user friendly sites are very important to me and not only for the user but for my clients.</p>
        </div>

        <div>
          <h3 className="text-gray ">Background Story</h3>
          <h2 className="text-xl font-bold mb-8">My Constant Cycle of Learning</h2>
        </div>
        
        <div>
          <p className="text-white text-base mb-6 ">Computers have always been of passion of mine from building my PC when I was 15 to creating the page you're reading right now. As I was looking for career paths during my final months of highschool I found programming</p>
          <p className="text-white text-base mb-6">After highschool I decided not to go straight into college and took the bootcamp route. Where I learned a substantial amount about coding, however with the industry today I knew it wasn't enough. I kept creating personal projects and have now even moved to professional relationships. </p>
          <p className="text-white text-base mb-6">My Curosity has </p>
          <p className="text-white text-base mb-24"></p>
        
        </div>

        <h3 className="text-gray text-bold text-2xl">Why Full-Stack?</h3>
        <h2 className="text-base font-bold">blah blah </h2>
        <p></p>
      </div>
      
    </div>
  );
}

export default About;
