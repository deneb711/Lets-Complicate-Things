import React from 'react';
import { ArcadeButton } from '../components/ArcadeButton';
import { MenuItem, RoutePath } from '../types';

const MENU_ITEMS: MenuItem[] = [
  { 
    label: "BeMyGuess", 
    path: RoutePath.GUESS, 
    color: '#00FF00', // Pure Green
    description: "INSERT COIN"
  },
  { 
    label: "WhoAmI?", 
    path: RoutePath.WHO_AM_I, 
    color: '#FF00FF', // Pure Magenta
    description: "IDENTITY CHECK"
  },
  { 
    label: "Sandra Bothard", 
    path: RoutePath.SANDRA, 
    color: '#00FFFF', // Pure Cyan
    description: "PROFILE"
  },
  { 
    label: "Let's Eat Complicated!", 
    path: RoutePath.EAT, 
    color: '#FFFF00', // Pure Yellow
    description: "PUZZLE"
  }
];

export const Menu: React.FC = () => {
  const handleNavigate = (path: RoutePath) => {
    const url = `${window.location.origin}/#${path}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-transparent">
      <header className="mb-12 text-center flex flex-col items-center w-full">
        {/* Adjusted container width and margins to prevent cutoff */}
        <div className="border-4 border-white p-4 md:p-8 bg-black shadow-[8px_8px_0px_rgba(255,255,255,1)] w-full max-w-[90vw] md:w-auto md:max-w-4xl mx-auto">
          <h1 className="text-base sm:text-xl md:text-3xl leading-relaxed text-orange-500 mb-4 font-bold tracking-widest uppercase break-words">
            LET'S<br/>COMPLICATE<br/>THINGS
          </h1>
        </div>
        
        <div className="mt-8 flex space-x-4 md:space-x-16 text-white font-['Press_Start_2P'] text-[10px] md:text-sm uppercase bg-black/80 p-2 rounded border border-white/20 backdrop-blur-sm">
            <div className="flex flex-col items-center">
                <span className="text-red-500 mb-2">1UP</span>
                <span>00</span>
            </div>
             <div className="flex flex-col items-center">
                <span className="text-red-500 mb-2">HIGH SCORE</span>
                <span>50000</span>
            </div>
             <div className="flex flex-col items-center">
                <span className="text-red-500 mb-2">2UP</span>
                <span>00</span>
            </div>
        </div>
      </header>

      <main className="w-full max-w-2xl flex flex-col items-center">
        {MENU_ITEMS.map((item) => (
          <ArcadeButton
            key={item.path}
            label={item.label}
            subLabel={item.description}
            color={item.color}
            onClick={() => handleNavigate(item.path)}
          />
        ))}
      </main>

      <footer className="mt-12 text-center w-full pb-4">
        <p className="text-xs text-gray-500 font-['Press_Start_2P']">© 1984 ARCADE CORP</p>
      </footer>
    </div>
  );
};