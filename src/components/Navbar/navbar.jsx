import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/authcontext';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/home');
  };

  const closeMenu = () => setIsOpen(false);

  const isAdmin = 
    user?.rol === 'ADMIN_ROLE' || 
    user?.rol === 'admin' || 
    user?.role === 'admin' ||
    user?.email?.toLowerCase().endsWith('@porter.com');

  const nombreAMostrar = user?.nombre || user?.email?.split('@')[0] || "Usuario";

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/home" onClick={closeMenu} className="brand-link">
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
            <li><Link to="/home" onClick={closeMenu} className={location.pathname === '/home' ? 'active' : ''}>Inicio</Link></li>
            <li><Link to="/aboutus" onClick={closeMenu} className={location.pathname === '/aboutus' ? 'active' : ''}>Nosotros</Link></li>
            <li><Link to="/galeria" onClick={closeMenu} className={location.pathname === '/galeria' ? 'active' : ''}>Galería</Link></li>
            <li><Link to="/reservas" onClick={closeMenu} className={location.pathname === '/reservas' ? 'active' : ''}>Reservas</Link></li>
            <li><Link to="/contacto" onClick={closeMenu} className={location.pathname === '/contacto' ? 'active' : ''}>Contacto</Link></li>
          </ul>

      
          <div className="nav-actions-wrapper">
            {user ? (
              <div className="user-logged-actions">
                {isAdmin ? (
                  <Link to="/admin" onClick={closeMenu} className="btn-nav-action admin-style">
                    ⚙️ Panel Admin
                  </Link>
                ) : (
                  <Link to="/mis-reservas" onClick={closeMenu} className="btn-nav-action user-style">
                    📅 Mis Reservas
                  </Link>
                )}
                
                <span className="user-welcome">Hola, <strong>{nombreAMostrar}</strong></span>

                <button onClick={handleLogout} className="btn-logout">
                  ↪ Salir
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" onClick={closeMenu} className="btn-login">Iniciar Sesión</Link>
                <Link to="/registro" onClick={closeMenu} className="btn-register">Registrarse</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;