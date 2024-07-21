import React, { useEffect, useRef } from "react";
import laptop from '../media/laptop2.webp';
import TypingAnimation from '../components/TypingAnimation';
import "../styling/ProjectsStyling.css";

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current
        .filter(section => section !== null)
        .forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-10 " style={{ textShadow: '8px 6px 4px rgba(0,0,0,0.5)' }}>
      <div className=""><TypingAnimation/></div>
      
      
      
      
      <img src={laptop} alt="Laptop" className="w-full sm:w-2/3 lg:w-1/2 mt-8 sm:mt-24 rounded border-black  fade-in" ref={el => sectionsRef.current.push(el)} />

      <div className="text-left w-full sm:w-2/3 lg:w-1/2 mt-8 sm:mt-16">
        <div className="fade-in" ref={el => sectionsRef.current.push(el)}>
          <h3 className="text-gray text-sm">Summary</h3>
          <h2 className="text-type font-bold mb-4 sm:mb-8 text-white">Studying Computer Science & freelancing in tech</h2>
        </div>

        <div className="fade-in" ref={el => sectionsRef.current.push(el)}>
          <p className="text-white text-base mb-6">Thanks to my studies in software development and growing my soft skills, I connect with clients to create memorable web experiences.</p>
          <p className="text-white text-base mb-6">Currently, I'm working on many personal and client projects to continuously improve my technical skills and network with new people and potential clients.</p>
          <p className="text-white text-base mb-4">Outside of that, I attend <a href="https://www.kennesaw.edu/" className="no-underline-hover textShadow" target="_blank" rel="noopener noreferrer">Kennesaw State University</a>, where I'm pursuing my bachelor's in computer science.</p>
          <p className="text-white text-base mb-6">I've always had a love for technology and a knack for creativity, which led to my passion for coding and web design.</p>
          <p className="text-white text-base mb-32">Being a people pleaser, designing the best and most user-friendly sites is very important to me, not just for the users but also for my clients.</p>
        </div>

        <div className="fade-in" ref={el => sectionsRef.current.push(el)}>
          <h3 className="text-gray text-sm">Background Story</h3>
          <h2 className="text-xl font-bold mb-4 sm:mb-8 text-white">My Constant Cycle of Learning</h2>
        </div>
        
        <div className="fade-in" ref={el => sectionsRef.current.push(el)}>
          <p className="text-white text-base mb-6">Computers have always been a passion of mine, from building my PC when I was 15 to creating the page you're reading right now. As I was exploring career paths during my final months of high school, I discovered programming.</p>
          <p className="text-white text-base mb-6">After high school, I decided not to go straight to college and took the bootcamp route, where I learned a substantial amount about coding. 
          </p>
          <p className="text-white text-base mb-6">However, with the industry's demands, I knew it wasn't enough. I kept creating personal projects and have now moved into professional relationships.</p>
          <p className="text-white text-base mb-32">My curiosity has led me to shift towards machine learning, especially with the rise of AI in today's world.</p>
        </div>

        <div className="fade-in" ref={el => sectionsRef.current.push(el)}>
          <h3 className="text-gray text-bold text-sm">Why Full-Stack?</h3>
          <h2 className="font-bold text-xl mb-4 sm:mb-8 text-white">Making Things Simple and Easy</h2>
          <p className="text-white text-base mb-6">As technology progresses, things are only getting more complex. As a Full-Stack Developer, I have the opportunity to make these complex processes simple and user-friendly.</p>
          <p className="text-white text-base mb-6">Full-Stack development allows us to create unique websites and applications, differentiating ourselves from others by showing care through our attention to design.</p>
          <p className="text-white text-base mb-6">Everyone values good design, whether consciously or unconsciously. It could be the difference between staying on your website or leaving.</p>
          <p className="text-white text-base mb-6">This is one of the many reasons I love creating meaningful and polished experiences, making both visionaries and customers happy.</p>
          <p className="text-white text-base font-bold mb-32">I'm always looking for new projects to work on and new people to meet. If you're interested in working together, feel free to <a href="mailto:ethanlynchdevelopment@outlook.com" className="no-underline-hoverBlue textShadow font-bold" target="_blank" rel="noopener noreferrer">email me anytime.</a></p>
        </div>
      </div>
    </div>
  );
}

export default About;
