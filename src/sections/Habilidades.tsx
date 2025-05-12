import React from 'react';
import { Paper, Typography, Box, Chip, Stack } from '@mui/material';

const habilidades = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'Docker',
  'HTML',
  'CSS',
  'Tailwind CSS',
];

const Habilidades: React.FC = () => {
  return (
    <Paper sx={{p: 4,mb: 4,}}>
      <Typography variant="h4" component="h2" gutterBottom>
        Habilidades
      </Typography>

      <Typography variant="body1" gutterBottom>
        Estas son algunas de las tecnologías con las que he trabajado y con las que me siento cómodo desarrollando soluciones:
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {habilidades.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              color="primary"
              variant="outlined"
            />
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};

export default Habilidades;
