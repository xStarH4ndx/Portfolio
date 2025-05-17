import React from 'react';

const Header: React.FC = () => {
  return (
    <div
      id="header"
      style={{
        padding: '60px 20px',
        marginTop: '100px',
        background: 'linear-gradient(135deg, #7F00FF, #E100FF)',
        color: 'white',
        textAlign: 'center',
        borderRadius: '0 0 30px 30px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        ¡Hola, soy <span style={{ color: '#40E0D0' }}>Bruno Toro</span>!
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
        Soy un <strong>desarrollador web</strong> apasionado por crear aplicaciones modernas y eficientes.
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        Aquí encontrarás algunos de mis <strong>proyectos</strong> y <strong>habilidades</strong>.
      </p>
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>¡Bienvenido a mi portafolio!</p>

      <a
        href="./CV_Bruno_Toro.pdf"
        style={{
          display: 'inline-block',
          marginTop: '30px',
          padding: '12px 25px',
          backgroundColor: '#40E0D0',
          color: '#382860',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '30px',
          textDecoration: 'none',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#3ccaca')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#40E0D0')}
      >
        Descargar mi CV
      </a>
    </div>
  );
};

export default Header;
