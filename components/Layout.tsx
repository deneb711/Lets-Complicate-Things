import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-black font-['Press_Start_2P'] text-white selection:bg-white selection:text-black overflow-x-hidden relative">
      {/* Very subtle static texture for old TV feel */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
      
      <div className="relative z-10 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  );
};