import { Link } from 'react-router-dom';
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
                    <p>Una experiencia gastronómica única en el corazón de Tucumán.</p>
                </div>

                <div className="footer-column">
                    <h4>Enlaces Rápidos</h4>
                    <ul className="footer-links">
                        <li>
                            <Link to="/aboutus" className="footer-link-item">Quiénes Somos</Link>
                        </li>
                        <li>
                            <Link to="/galeria" className="footer-link-item">Galería</Link>
                        </li>
                        <li>
                            <Link to="/reservas" className="footer-link-item">Reservas</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Contacto</h4>
                    <ul className="footer-contact-info">
                        <li>📍 Tucumán, Argentina</li>
                        <li>📞 +54 381 485-8001</li>
                        <li>✉️ info@porter.com</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Horarios</h4>
                    <ul className="footer-hours">
                        <li>Lun - Vie: 19:00 - 01:00</li>
                        <li>Sáb: 12:00 - 00:00 / 19:00 - 03:00</li>
                        <li>Dom: 19:00 - 01:00</li>
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