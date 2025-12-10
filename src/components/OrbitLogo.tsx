import React from 'react';

export const OrbitLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="swirlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" /> {/* Sky Blue */}
          <stop offset="50%" stopColor="#3b82f6" /> {/* Blue */}
          <stop offset="100%" stopColor="#7c3aed" /> {/* Violet */}
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Nebula Swirl Background */}
      <g transform="rotate(0 100 100)">
        <path d="M100,100 m-60,-20 q30,-50 60,-50 q40,0 60,50 q-30,50 -60,50 q-40,0 -60,-50" 
              fill="url(#swirlGradient)" opacity="0.8" 
              transform="rotate(45 100 100)"/>
        <path d="M100,100 m-50,-10 q25,-40 50,-40 q35,0 50,40 q-25,40 -50,40 q-35,0 -50,-40" 
              fill="#2563eb" opacity="0.6" 
              transform="rotate(-15 100 100)"/>
        <path d="M100,100 m-55,-15 q28,-45 55,-45 q38,0 55,45 q-28,45 -55,45 q-38,0 -55,-45" 
              fill="#7c3aed" opacity="0.5" 
              transform="rotate(100 100 100)"/>
      </g>

      {/* Orbital Rings */}
      <g stroke="white" strokeWidth="4" fill="none" strokeLinecap="round">
        <ellipse cx="100" cy="100" rx="85" ry="28" transform="rotate(45 100 100)" opacity="0.9" />
        <ellipse cx="100" cy="100" rx="85" ry="28" transform="rotate(-45 100 100)" opacity="0.9" />
      </g>
      
      {/* Satellites */}
      <circle cx="170" cy="50" r="5" fill="white" />
      <circle cx="30" cy="150" r="4" fill="white" />
      <circle cx="100" cy="15" r="4" fill="white" />

      {/* Center Core */}
      <circle cx="100" cy="100" r="18" fill="white" filter="url(#glow)" />
    </svg>
  );
};

export default OrbitLogo;