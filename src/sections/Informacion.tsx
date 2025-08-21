import { Typography, Paper } from '@mui/material';
import React from 'react';

const Informacion: React.FC = () => {
  return (
    <Paper sx={{p: 4, mx: 'auto', maxWidth: 900, px: '20px' }}>
        <Typography variant="h4" component="h4" gutterBottom>
            Sobre Mi
        </Typography>
        <Typography 
            variant="body1" 
            gutterBottom
            sx={{ 
                textAlign: 'justify',
                lineHeight: 1.6
            }}
        >
            Soy una persona <span style={{color: '#00dbff', fontWeight: 'bold'}}>responsable</span> y <span style={{color: '#00dbff', fontWeight: 'bold'}}>creativa</span> con 
            excelente capacidad de <span style={{color: '#00dbff', fontWeight: 'bold'}}>comunicación</span> y 
            fácil <span style={{color: '#00dbff', fontWeight: 'bold'}}>adaptación</span> al cambio. 
            Orientado al <span style={{color: '#ffde59', fontWeight: 'bold'}}>trabajo en equipo</span> con 
            habilidades de <span style={{color: '#00dbff', fontWeight: 'bold'}}>liderazgo</span> y 
            capacidad para gestionar tareas eficientemente.
        </Typography>
    </Paper>
  );
}

export default Informacion;