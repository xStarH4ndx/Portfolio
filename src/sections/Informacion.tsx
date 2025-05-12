import { Typography, Paper } from '@mui/material';
import React from 'react';

const Informacion: React.FC = () => {
  return (
    <Paper sx={{p: 4, mx: 'auto', maxWidth:800 }}>
        <Typography variant="h4" component="h1" gutterBottom>
            Sobre Mi
        </Typography>
        <Typography variant="body1" gutterBottom>
            Soy un desarrollador web apasionado por la creación de aplicaciones modernas y eficientes. 
            Tengo experiencia en una variedad de tecnologías y siempre estoy buscando aprender más y mejorar mis habilidades.
        </Typography>
    </Paper>
  );
}

export default Informacion;