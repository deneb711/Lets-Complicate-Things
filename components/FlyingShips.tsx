import React from 'react';

export const FlyingShips: React.FC = () => {
  const ShipIcon = ({ color, rotate = 0 }: { color: string, rotate?: number }) => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 12 12" 
      className="pixel-art"
      style={{ transform: `rotate(${rotate}deg)`, imageRendering: 'pixelated' }}
    >
      <path 
        fill={color} 
        d="M5 0h2v1H5V0zm-1 1h4v1H4V1zm-1 1h6v1H3V2zm-1 1h8v1H2V3zm-1 1h10v2H1V4zm1 2h1v2H2V6zm8 0h1v2h-1V6zm-6 3h2v1H4V9zm4 0h2v1H8V9z"
      />
    </svg>
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <style>{`
        @keyframes flyDiagonal1 {
          0% { transform: translate(-10vw, 110vh); }
          100% { transform: translate(110vw, -10vh); }
        }
        @keyframes flyDiagonal2 {
          0% { transform: translate(110vw, 110vh); }
          100% { transform: translate(-10vw, -10vh); }
        }
        @keyframes flyHorizontal {
          0% { transform: translate(-10vw, 20vh); }
          50% { transform: translate(50vw, 30vh); }
          100% { transform: translate(110vw, 20vh); }
        }
      `}</style>

      {/* Red Ship - Diagonal Up-Right */}
      <div className="absolute" style={{ animation: 'flyDiagonal1 12s linear infinite', left: 0, bottom: 0 }}>
        <ShipIcon color="#FF0000" rotate={45} />
      </div>

      {/* Cyan Ship - Diagonal Up-Left */}
      <div className="absolute" style={{ animation: 'flyDiagonal2 18s linear infinite', animationDelay: '2s', right: 0, bottom: 0 }}>
        <ShipIcon color="#00FFFF" rotate={-45} />
      </div>

      {/* Yellow Ship - Horizontal Sweep */}
      <div className="absolute" style={{ animation: 'flyHorizontal 15s linear infinite', animationDelay: '5s', top: '20%', left: 0 }}>
        <ShipIcon color="#FFFF00" rotate={90} />
      </div>
    </div>
  );
};
