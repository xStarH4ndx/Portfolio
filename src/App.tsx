import React from 'react';
import Layout from './components/layout';
import Proyectos from './sections/Proyectos';
import Habilidades from './sections/Habilidades';
import Contacto from './sections/Contacto';
import Educacion from './sections/Educacion';
import { Box } from '@mui/material';
import Header from './sections/Header';
import SobreMi from './sections/SobreMi';


const App: React.FC = () => {
  return (
    <Layout>
      <Box id="header" sx={{ py: 6 }}>
        <Header />
      </Box>
      <Box id="sobre-mi">
        <SobreMi />
      </Box>
      <Box id="proyectos">
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
