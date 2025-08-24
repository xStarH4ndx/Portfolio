import React from "react";
import { Grid } from "@mui/material";
import Informacion from "../components/abaout me/Informacion";
import developerTeam from "../assets/developer-team.png"; // Ajusta la ruta según la ubicación de tu archivo


const SobreMi: React.FC = () => {
  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      justifyContent="center"
      sx={{
        maxWidth: "1070px",   // límite de ancho
        margin: "0 auto",    // lo centra en la página
        padding: 2,
      }}
    >
      {/* Columna Izquierda */}
      <Grid>
        <Informacion />
      </Grid>

      {/* Columna Derecha */}
      <Grid display="flex" justifyContent="center">
        <img 
            src={developerTeam} 
            alt="Equipo de Desarrolladores" 
            style={{ width: "500px", height: "500px", objectFit: "contain" }} 
        />
      </Grid>
    </Grid>
  );
};

export default SobreMi;
