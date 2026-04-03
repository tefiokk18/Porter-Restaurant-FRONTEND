import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authcontext';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  const isAdmin =
    user?.rol === 'admin' ||
    user?.role === 'admin' ||
    user?.email?.toLowerCase().endsWith('@porter.com') ||
    user?.email?.toLowerCase().includes('stefadmin');

  const nombreAMostrar = user?.nombre || user?.email?.split('@')[0] || "Usuario";

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img src="/imagenes/logo-porter.png" alt="Porter Logo" className="logo-img" />
            <h1 className="brand-name">Porter Brew House</h1>
          </Link>
        </div>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-content ${isOpen ? 'is-active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/home">Inicio</Link></li>
            <li><Link to="/aboutus">Quienes Somos</Link></li>
            <li><Link to="/galeria">Galeria</Link></li>
            <li><Link to="/reservas">Reservas</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>

          <div className="nav-actions">
            <div className="vertical-line"></div>

            {user ? (
              <div className="user-logged-actions">
                <Link to="/mis-reservas" className="nav-link-logged">
                  <span className="icon-calendar">📅</span> Mis Reservas
                </Link>

                {isAdmin && (
                  <Link to="/admin" className="nav-admin-simple">
                    <span className="gear-icon-simple">⚙️</span>
                    <span className="admin-text-simple">Panel Admin</span>
                  </Link>
                )}
                
                <span className="user-welcome">Hola, <strong>{nombreAMostrar}</strong></span>

                <button onClick={handleLogout} className="btn-logout">
                  <span className="icon">↪</span> Salir
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn-login">
                  <span className="icon-user">👤</span> Iniciar Sesión
                </Link>

                <Link to="/registro" className="btn-register">
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;