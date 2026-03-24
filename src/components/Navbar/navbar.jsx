import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <img src="/public/imagenes/logo-porter.png" alt="Porter Logo" className="logo-img" />
          <h1 className="brand-name">Porter Brew House</h1>
        </div>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-content ${isOpen ? 'is-active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#" className="active">Inicio</a></li>
            <Link to="/aboutus">Quienes Somos</Link>
            <Link to="/galeria">Galeria</Link>
            <Link to="/reservas">Reservas</Link>
            <Link to="/contacto">Contacto</Link>
          </ul>

          <div className="nav-actions">
            <div className="vertical-line"></div>
            <button className="btn-login">
              <span className="icon-user">👤</span> Iniciar Sesión
            </button>
            <button className="btn-register">Registrarse</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;