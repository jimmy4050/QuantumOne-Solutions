import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-secondary rounded-md ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="18" className="stroke-primary" strokeWidth="4" />
        <path
          d="M20 2V20H38"
          className="stroke-secondary"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="rotate(45 20 20)"
        />
        <circle cx="20" cy="20" r="4" className="fill-primary" />
      </svg>
      <span className="text-lg sm:text-xl font-bold font-heading">
        <span className="text-primary">QuantumOne</span>
        <span className="text-neutral-500 font-light"> Solutions</span>
      </span>
    </div>
  );
};

export default Logo;