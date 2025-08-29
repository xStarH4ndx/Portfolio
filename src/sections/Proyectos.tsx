import React from 'react'
import { Card, CardContent, CardActions, Button, Typography, Box, Container, Chip } from '@mui/material'
import { listaProyectos, Proyect } from '../types/cardProyect'

const Proyectos: React.FC = () => {
    const handleVerDetalles = (nombreProyecto: string) => {
        console.log("ver mas", nombreProyecto);
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#ffff', mb: 3 }}>
                Proyectos
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#fff', mb: 4 }}>
                Aquí puedes ver algunos de mis proyectos más destacados. Cada uno de ellos refleja mi pasión por la programación y el diseño.
            </Typography>
            
            <Box 
                sx={{ 
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 3
                }}
            >
                {listaProyectos.map((proyecto: Proyect, index: number) => (
                    <Box key={index}>
                        <Card 
                            sx={{ 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: 3,
                                '&:hover': {
                                    boxShadow: 6,
                                    transform: 'translateY(-4px)',
                                    transition: 'all 0.3s ease'
                                }
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    {proyecto.nombre}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    {proyecto.descripcion}
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    {proyecto.tecnologias.map((tech: string, techIndex: number) => (
                                        <Chip 
                                            key={techIndex} 
                                            label={tech} 
                                            variant="outlined" 
                                            size="small" 
                                            sx={{ mr: 1, mb: 1 }}
                                        />
                                    ))}
                                </Box>
                            </CardContent>
                            <CardActions sx={{ p: 2, pt: 0 }}>
                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    onClick={() => handleVerDetalles(proyecto.nombre)}
                                    fullWidth
                                >
                                    Ver Detalles
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}

export default Proyectos