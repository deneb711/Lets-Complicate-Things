import React, { useState } from 'react';
import { playArcadeSound, playHoverSound } from '../utils/sound';

interface ArcadeButtonProps {
  label: string;
  subLabel?: string;
  color: string;
  onClick: () => void;
}

export const ArcadeButton: React.FC<ArcadeButtonProps> = ({ label, subLabel, color, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    playArcadeSound();
    onClick();
  };

  const handleMouseEnter = () => {
    playHoverSound();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full max-w-md px-6 py-6 my-4 border-4 transition-none outline-none focus:outline-none transform active:translate-y-2 active:translate-x-2 active:shadow-none"
      style={{
        borderColor: color,
        backgroundColor: isHovered ? color : '#000000',
        color: isHovered ? '#000000' : color,
        // Retro block shadow (hard edge)
        boxShadow: isHovered ? `8px 8px 0px #ffffff` : `8px 8px 0px ${color}` 
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <span 
          className="text-lg md:text-xl text-center uppercase"
          style={{ 
            textShadow: 'none'
          }}
        >
          {label}
        </span>
        {subLabel && (
          <span 
            className="text-[10px] md:text-xs font-['Press_Start_2P'] uppercase tracking-widest mt-2"
            style={{
               color: isHovered ? '#000000' : '#ffffff'
            }}
          >
            {subLabel}
          </span>
        )}
      </div>
    </button>
  );
};