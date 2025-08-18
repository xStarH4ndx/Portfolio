// HeaderContent.tsx
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HeaderContent: React.FC = () => {
  return (
    <div className="header-content">
      {/* Nombre */}
      <h1 className="name">
        Bruno <span className="surname">Toro Elgueta</span>
      </h1>

      {/* Información académica */}
      <div className="info">
        <h2 className="degree">Universidad Católica del Norte</h2>
        <h3 className="degree">Ingeniería Civil en Computación e Informática</h3>
        <p className="inspiration">
          "Con determinación y claridad, transformo los desafíos en oportunidades para crear y avanzar".
        </p>
      </div>

      {/* Botones CTA */}
      <div className="cta-buttons">
        <a
          className="download-btn"
          href="./CV_Bruno_Toro_Elgueta.pdf"
          download
          aria-label="Descargar CV de Bruno Toro Elgueta"
        >
          Descargar mi CV
        </a>
        <a
          className="social-btn"
          href="https://www.linkedin.com/in/bruno-toro-elgueta-768629264/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de LinkedIn de Bruno Toro Elgueta"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          className="social-btn"
          href="https://github.com/xStarH4ndx"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de GitHub de Bruno Toro Elgueta"
        >
          <FaGithub size={24} />
        </a>
      </div>

      <style>{`
        .header-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: 120px 20px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          text-align: left; /* Todo alineado a la izquierda */
        }

        .name {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          margin: 0 0 20px 0;
          line-height: 1.1;
        }

        .surname {
          color: #40E0D0;
        }

        .info {
          max-width: 650px;
        }

        .degree {
          font-size: clamp(1rem, 2.2vw, 1.6rem);
          font-weight: 600;
          margin: 6px 0;
          color: #d0d0d0;
        }

        .inspiration {
          font-size: 1.2rem;
          font-style: italic;
          margin-top: 15px;
          color: #b0b0b0;
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .download-btn {
          padding: 14px 28px;
          background: linear-gradient(135deg, #40E0D0, #3ccaca);
          color: #162447;
          font-weight: 700;
          border-radius: 30px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .download-btn:hover,
        .download-btn:focus {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(64, 224, 208, 0.4);
        }

        .social-btn {
          color: #d0d0d0;
          transition: color 0.2s ease, transform 0.15s ease;
        }

        .social-btn:hover,
        .social-btn:focus {
          color: #40E0D0;
          transform: translateY(-3px);
        }

        @media (max-width: 520px) {
          .header-content { padding: 80px 14px; gap: 25px; }
          .download-btn { padding: 10px 20px; font-size: 0.95rem; }
          .cta-buttons { gap: 15px; }
          .degree { font-size: 1rem; }
          .inspiration { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default HeaderContent;
