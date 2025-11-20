import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Menu } from './views/Menu';
import { GenericPage } from './views/GenericPage';
import { RoutePath } from './types';

const useHashLocation = () => {
  const [loc, setLoc] = useState(window.location.hash);
  useEffect(() => {
    const handler = () => setLoc(window.location.hash);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  const path = loc.replace(/^#/, '') || '/';
  return path;
};

const App: React.FC = () => {
  const currentPath = useHashLocation();

  const renderContent = () => {
    switch (currentPath) {
      case RoutePath.HOME:
        return <Menu />;
      
      case RoutePath.GUESS:
        return (
          <GenericPage 
            title="Be My Guess" 
            color="#00FF00"
            content={
              <div className="space-y-8 font-['Press_Start_2P'] text-sm md:text-base text-green-500 leading-loose">
                <p>SYSTEM READY.</p>
                <p>ERROR: PSYCHIC_MOD MISSING.</p>
                <p>INSTRUCTION: VISUALIZE A NUMBER.</p>
                <div className="mt-10 p-6 border-4 border-green-500 text-center bg-green-900 text-white">
                  AWAITING INPUT
                </div>
              </div>
            }
          />
        );

      case RoutePath.WHO_AM_I:
        return (
          <GenericPage 
            title="Who Am I?" 
            color="#FF00FF"
            content={
              <div className="space-y-8 font-['Press_Start_2P'] text-sm md:text-base text-pink-500 leading-loose">
                <p>SCANNING BIOMETRICS...</p>
                <p>RESULT: UNKNOWN ENTITY.</p>
                <p>QUERY: ARE YOU HUMAN?</p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8">
                   <button className="border-4 border-pink-500 px-6 py-4 hover:bg-pink-500 hover:text-black uppercase">YES</button>
                   <button className="border-4 border-pink-500 px-6 py-4 hover:bg-pink-500 hover:text-black uppercase">NO</button>
                </div>
              </div>
            }
          />
        );

      case RoutePath.SANDRA:
        return (
          <GenericPage 
            title="Sandra Bothard" 
            color="#00FFFF"
            content={
              <div className="flex flex-col gap-8 items-start font-['Press_Start_2P'] text-sm md:text-base text-cyan-400">
                <div className="flex items-center gap-6 border-b-4 border-cyan-800 pb-6 w-full">
                    <div className="w-24 h-24 border-4 border-cyan-500 bg-black flex items-center justify-center text-2xl">
                    SB
                    </div>
                    <div>
                        <p className="mb-2 text-white">LVL 99</p>
                        <p>TECHNOMANCER</p>
                    </div>
                </div>
                <div className="space-y-4 leading-loose">
                  <p>NAME: SANDRA BOTHARD</p>
                  <p>STATUS: COMPLICATED</p>
                  <p>LIKES: RECURSION</p>
                  <div className="mt-6 p-4 border-2 border-white text-white text-xs">
                    "Why make it simple when you can make it interesting?"
                  </div>
                </div>
              </div>
            }
          />
        );

      case RoutePath.EAT:
        return (
          <GenericPage 
            title="Let's Eat Complicated!" 
            color="#FFFF00"
            content={
              <div className="space-y-8 font-['Press_Start_2P'] text-sm md:text-base text-yellow-400">
                <p>LOADING MENU...</p>
                <ul className="list-none space-y-4 text-white">
                  <li>[1] Binary Burger</li>
                  <li>[2] Recursive Ramen</li>
                  <li>[3] Pixel Pizza</li>
                  <li>[4] Glitch Shake</li>
                </ul>
                <div className="mt-10 border-t-4 border-dotted border-yellow-600 pt-6 text-center">
                  INSERT COIN TO ORDER
                </div>
              </div>
            }
          />
        );

      default:
        return <Menu />;
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
};

export default App;