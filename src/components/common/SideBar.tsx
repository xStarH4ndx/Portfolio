import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import perfil from '../../assets/perfil.jpg';
import foto from '../../assets/sinfondoplaya.png';

const sections = [
  { id: 'header', label: 'BRUNO TORO' },
  { id: 'sobre-mi', label: 'SOBRE MI' },
  { id: 'proyectos', label: 'PROYECTOS' },
  { id: 'educacion', label: 'EDUCACIÓN' },
  { id: 'habilidades', label: 'HABILIDADES' },
  { id: 'contacto', label: 'CONTACTO' },
];

const SideBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('header');

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Actualiza la sección activa al hacer scroll
    }
  };

  const handleScrollChange = () => {
    let found = false;
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section && !found) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(id);
          found = true;
        }
      }
    });

    // Marca "header" como activo si el usuario está muy arriba
    if (window.scrollY < 100) {
      setActiveSection('header');
    }
  };

  useEffect(() => {
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
        sx={{ width: 200, height: 200, mt: 20, mb: 4, borderRadius: '50%' }}
      />

      {/* Botones del menú */}
      {sections.map(({ id, label }) => (
        <Button
          key={id}
          variant="text"
          color="inherit"
          fullWidth
          onClick={() => handleScroll(id)}
          sx={{
            color: activeSection === id ? '#40E0D0' : 'white', // Activa el color turquesa
            mb: 1,
          }}
        >
          {label}
        </Button>
      ))}

      {/* Imagen decorativa */}
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
