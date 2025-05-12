import React from "react";



const Contacto: React.FC = () => {
    return (
        <div id="contacto" style={{ padding: '20px', marginTop: '100px' }}>
            <h2 style={{ color: '#382860' }}>Contacto</h2>
            <p style={{ color: '#382860' }}>
                Si deseas ponerte en contacto conmigo, no dudes en enviarme un correo a:
                <a href="mailto:" style={{ color: '#382860' }}>
                </a>
            </p>
        </div>
    )
}

export default Contacto