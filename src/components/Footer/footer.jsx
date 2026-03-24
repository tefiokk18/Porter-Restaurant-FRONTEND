import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-container">
                <div className="porter-info">
                    <div className="logo-container">
                        <img 
                            src="/imagenes/logo-porter.png" 
                            alt="Porter Logo" 
                            className="logo-brand-img" 
                        />
                        <h3>Porter</h3>
                    </div>
                    <span>Una experiencia gastronómica única en el corazón de Tucumán.</span>
                </div>

                <div className="footer-column">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li>Quiénes Somos</li>
                        <li>Galería</li>
                        <li>Reservas</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Contacto</h4>
                    <ul>
                        <li>Dirección: Tucumán, Argentina</li>
                        <li>Teléfono: +54 381 485-8001</li>
                        <li>Email: info@porter.com</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Horarios</h4>
                    <ul>
                        <li>Lun - Vie: 19:00 - 01:00</li>
                        <li>Sábado: 12:00 - 00:00, 19:00 - 03:00</li>
                        <li>Domingo: 19:00 - 01:00</li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>© 2026 Porter Restaurant. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;