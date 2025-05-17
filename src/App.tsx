import React from 'react';
import Layout from './components/layout';
import Informacion from './sections/Informacion';
import Proyectos from './sections/Proyectos';
import Habilidades from './sections/Habilidades';
import Contacto from './sections/Contacto';
import Educacion from './sections/Educacion';
import { Box } from '@mui/material';
import Header from './sections/Header';

const App: React.FC = () => {
  return (
    <Layout>
      <Box id="header" sx={{ minHeight: '100vh', py: 6 }}>
        <Header />
      </Box>
      <Box id="sobre-mi" sx={{ minHeight: '100vh', py: 6 }}>
        <Informacion />
      </Box>
      <Box id="proyectos" sx={{ minHeight: '100vh', py: 6 }}>
        <Proyectos />
      </Box>
      <Box id="educacion" sx={{ minHeight: '100vh', py: 6 }}>
        <Educacion />
      </Box>
      <Box id="habilidades" sx={{ minHeight: '100vh', py: 6 }}>
        <Habilidades />
      </Box>
      <Box id="contacto" sx={{ minHeight: '100vh', py: 6 }}>
        <Contacto />
      </Box>
    </Layout>
  );
};

export default App;
