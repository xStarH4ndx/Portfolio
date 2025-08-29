import React from "react"


const listaProyectos= [
    {
        nombre: "Proyecto 1",
        descripcion: "Descripción del Proyecto 1",
        tecnologias: ["React", "TypeScript"],
        imagen: "vacio"
    },
    {
        nombre: "Proyecto 2",
        descripcion: "Descripción del Proyecto 2",
        tecnologias: ["Node.js", "Express"],
        imagen: "vacio"
    },
    {
        nombre: "Proyecto 3",
        descripcion: "Descripción del Proyecto 3",
        tecnologias: ["MongoDB", "Mongoose"],
        imagen: "vacio"
    }
]

interface Proyect {
    nombre: string;
    descripcion: string;
    tecnologias: string[];
    imagen?: string;
}

export { listaProyectos };
export type { Proyect };

    