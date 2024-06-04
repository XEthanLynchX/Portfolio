import React, { useState, useEffect } from 'react';
import '../styling/HomeStyling.css';


const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Your Ultimate Software Developer" ,"Crafting Innovative Solutions","Building User-Friendly Applications" ];
  
  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      setText(
        isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <h2 className="text-type font-semibold text-white">
      {text}
      <span className="blinking-cursor">|</span>
    </h2>
  );
};

export default TypingAnimation;
