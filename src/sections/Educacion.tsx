import React from 'react'


const Educacion: React.FC = () => {
    return (
        <div id="educacion" style={{ padding: '20px', marginTop: '100px' }}>
            <h2 style={{ color: '#382860' }}>Educación</h2>
            <p style={{ color: '#382860' }}>
                Aquí puedes ver mi formación académica y cursos relevantes que he realizado.
            </p>
            <ul style={{ color: '#382860' }}>
                <li>Ingeniería en Sistemas - Universidad XYZ (2015 - 2020)</li>
                <li>Curso de React - Platzi (2021)</li>
                <li>Curso de Node.js - Udemy (2022)</li>
            </ul>
        </div>
    )
}

export default Educacion