import React from 'react';
import CountUp from 'react-countup';
import useInView from '../hooks/useInView';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2.5, suffix = '', className = '' }) => {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className={className}>
      {isInView ? <CountUp end={end} duration={duration} suffix={suffix} /> : 0}
    </div>
  );
};

export default AnimatedCounter;
