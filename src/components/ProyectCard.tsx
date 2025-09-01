import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Stack, Button, CardActions } from "@mui/material";
import type { Proyect } from "../types/ProyectObject";

interface ProyectoCardProps {
  proyecto: Proyect;
}

const ProyectoCard: React.FC<ProyectoCardProps> = ({ proyecto }) => {
  const handleVerMas = () => {
    console.log("Detalles del proyecto:", proyecto);
  };

  return (
    <Card sx={{ maxWidth: 500, m: 2, borderRadius: 3, boxShadow: 3 }}>
      {proyecto.imagen !== "vacio" && (
        <CardMedia
          component="img"
          height="180"
          image={proyecto.imagen}
          alt={proyecto.nombre}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {proyecto.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {proyecto.descripcion}
        </Typography>
        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
          {proyecto.tecnologias.map((tec) => (
            <Chip key={tec} label={tec} variant="outlined" />
          ))}
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={handleVerMas}>
          Ver más detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProyectoCard;
