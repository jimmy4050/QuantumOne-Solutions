import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  phrases: string[];
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ phrases, className = '' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(currentIndex => (currentIndex + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  return (
    <div className={`relative h-10 ${className}`} aria-live="polite">
      {phrases.map((phrase, i) => (
        <span
          key={i}
          aria-hidden={i !== index}
          className={`absolute w-full left-0 right-0 transition-all duration-500 ease-in-out text-xl sm:text-2xl font-semibold text-accent font-heading ${
            i === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
          style={{ willChange: 'transform, opacity' }}
        >
          {phrase}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;