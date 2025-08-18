// Header.tsx
import React from "react";
import StarsBackground from "../components/StarsBackground";
import HeaderContent from "../components/HeaderContent";

const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <StarsBackground />
      <HeaderContent />

      <style>{`
      .header-wrapper {
        position: relative;
        overflow: hidden;
      }
      .stars-background {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 600%; /* Aumentamos tamaño para cubrir toda la rotación */
        background-image:
          radial-gradient(white 1.2px, transparent 1.2px),
          radial-gradient(white 0.9px, transparent 0.9px);
        background-size: 200px 200px, 100px 100px;
        background-position: 0 0, 50px 50px;
        opacity: 0.3;
        z-index: 0;
        animation: rotateStars 120s linear infinite;
        transform-origin: center center;
      }

      @keyframes rotateStars {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
    </header>
  );
};

export default Header;
