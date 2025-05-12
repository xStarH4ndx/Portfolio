import React from 'react';
import { Box } from '@mui/material';
import SideBar from './common/SideBar';
import foto from '../assets/sinfondoplaya.png'

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar fijo */}
      <SideBar />

      {/* Contenido scrollable */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: '250px' }, // ancho igual al sidebar
          height: 'auto',
          overflowY: 'auto',
          p: 4,
        }}
      >
        {children}
      </Box>
      
    </Box>
  );
};

export default Layout;
