import React, { useState } from 'react';
import { Box, Button, Divider } from '@mui/material';
import perfil from '../../assets/perfil.jpg';
import foto from '../../assets/sinfondoplaya.png';

const sections = [
  { id: 'sobre-mi', label: 'SOBRE MI' },
  { id: 'proyectos', label: 'PROYECTOS' },
  { id: 'educacion', label: 'EDUCACIÓN' },
  { id: 'habilidades', label: 'HABILIDADES' },
  { id: 'contacto', label: 'CONTACTO' },
];

const SideBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Actualiza la sección activa al hacer scroll
    }
  };

  // Detecta cuál es la sección visible en el viewport
  const handleScrollChange = () => {
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(id);
        }
      }
    });
  };

  // Escucha el evento de scroll
  React.useEffect(() => {
    window.addEventListener('scroll', handleScrollChange);
    return () => {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);

  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        bgcolor: '#2C204A',
        color: 'white',
        p: 3,
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1300,
      }}
    >
      {/* Avatar */}
      <Box
        component="img"
        src={perfil}
        alt="Avatar"
        sx={{ width: 200, height: 200, mt: 20, mb: 2, borderRadius: '50%' }}
      />

      {/* Nombre como botón seleccionable */}
      <Button
        id="header"
        variant="text"
        color="inherit"
        fullWidth
        onClick={() => handleScroll('header')}
        sx={{
          fontSize: '1.2rem',
          color: activeSection === 'header' ? '#40E0D0' : 'white', // Cambia el color cuando "header" está activo
          mb: 1,
          textAlign: 'center',
        }}
      >
        BRUNO TORO
      </Button>

      <Divider sx={{ width: '100%', mb: 2 }} />

      {/* Botones del menú */}
      {sections.map(({ id, label }) => (
        <Button
          key={id}
          variant="text"
          color="inherit"
          fullWidth
          onClick={() => handleScroll(id)}
          sx={{
            color: activeSection === id ? '#40E0D0' : 'white', // Cambia el color cuando la sección está activa
            mb: 1,
          }}
        >
          {label}
        </Button>
      ))}
      {/* IMAGEN */}
      <Box
        component="img"
        src={foto}
        alt="Imagen de fondo"
        sx={{ width: 250, height: 400, mt: 0, mb: -8 }}
      />
    </Box>
  );
};

export default SideBar;
