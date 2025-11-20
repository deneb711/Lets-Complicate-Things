import React, { useEffect } from 'react';
import { playArcadeSound } from '../utils/sound';

interface GenericPageProps {
  title: string;
  color: string;
  content: React.ReactNode;
}

export const GenericPage: React.FC<GenericPageProps> = ({ title, color, content }) => {
  
  useEffect(() => {
    const timer = setTimeout(() => playArcadeSound(), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col p-4 md:p-8 border-[8px] border-double" style={{ borderColor: color }}>
      <div className="bg-black border-b-4 pb-4 mb-8 flex justify-between items-center" style={{ borderColor: color }}>
        <h1 className="text-lg md:text-2xl uppercase truncate mr-4" style={{ color: color }}>
          {title}
        </h1>
        <span className="text-xs md:text-sm text-white whitespace-nowrap">PLAYER 1</span>
      </div>
      
      <div className="flex-grow bg-black p-4 md:p-6 border-4 border-white relative overflow-hidden shadow-[8px_8px_0px_rgba(255,255,255,0.2)]">
        {content}
        
        {/* Decorative static icon */}
        <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none">
           <div className="text-6xl font-bold text-white" style={{ color }}>?</div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={() => window.close()} 
          className="px-6 py-4 border-4 hover:bg-white hover:text-black transition-none text-sm font-['Press_Start_2P'] uppercase"
          style={{ borderColor: 'white', color: 'white', boxShadow: '4px 4px 0px #555' }}
        >
          EXIT SYSTEM
        </button>
      </div>
    </div>
  );
};