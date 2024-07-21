import React, { useState, useEffect } from 'react';
import '../styling/typingcursor.css';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Nice to meet you!"];

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      setText(
        currentWord.substring(0, text.length + 1)
      );
  
      if (text === currentWord) {
        clearTimeout(timer); // Stop the typing effect once the word is fully typed
        return; // Exit the function to prevent further typing
      }
  
      timer = setTimeout(handleTyping, typingSpeed);
    };
  
    timer = setTimeout(handleTyping, typingSpeed);
  
    return () => clearTimeout(timer);
  }, [text, typingSpeed, loopNum, words]);

  return (
    <p className=" text-gray text-sm font-semibold text-left ">
      {text}
      <span className="blinking-cursor">|</span>
    </p>
  );
};

export default TypingAnimation;
