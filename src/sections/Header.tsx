import React from "react";
import StarsBackground from "../components/header/StarsBackground";
import HeaderContent from "../components/header/HeaderContent";

const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <StarsBackground />
      <HeaderContent />

      <style>{`
        .header-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 80vh; /* ocupa la altura de la pantalla */
        }

        .stars-background {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300%;   /* extra grande para cubrir mientras rota */
          height: 300%;
          background-image:
            radial-gradient(white 1.2px, transparent 1.2px),
            radial-gradient(white 0.9px, transparent 0.9px);
          background-size: 200px 200px, 100px 100px;
          background-position: 0 0, 50px 50px;
          opacity: 0.35;
          z-index: 0;
          animation: rotateStars 120s linear infinite;
          transform-origin: center center;
          transform: translate(-50%, -50%);
        }

        @keyframes rotateStars {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </header>
  );
};

export default Header;
