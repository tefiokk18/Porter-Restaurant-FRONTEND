import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authcontext'; // 1. Importamos el hook
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); // 2. Obtenemos user y la función logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/home'); // Redirigimos al inicio tras cerrar sesión
  };

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
            <Link to="/home">Inicio</Link>
            <Link to="/aboutus">Quienes Somos</Link>
            <Link to="/galeria">Galeria</Link>
            <Link to="/reservas">Reservas</Link>
            <Link to="/contacto">Contacto</Link>
          </ul>

          <div className="nav-actions">
            <div className="vertical-line"></div>

            {/* 3. Lógica Condicional */}
            {user ? (
              <div className="user-logged-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                
                {/* Si es Admin, mostramos el acceso al panel */}
                {user.role === 'admin' && (
                  <>
                    <Link to="/reservas" className="nav-link-logged">
                      <span className="icon">📅</span> Mis Reservas
                    </Link>
                    <Link to="/admin" className="nav-link-logged" style={{ fontWeight: 'bold' }}>
                      <span className="icon">⚙️</span> Admin
                    </Link>
                  </>
                )}

                <span className="user-welcome">Hola, {user.email.split('@')[0]}</span>
                
                <button onClick={handleLogout} className="btn-logout">
                  <span className="icon">↪</span> Salir
                </button>
              </div>
            ) : (
              <>
                {/* Si NO hay usuario, mostramos Login y Registro */}
                <Link to="/login" className="btn-login" style={{ textDecoration: 'none' }}>
                  <span className="icon-user">👤</span> Iniciar Sesión
                </Link>

                <Link to="/registro" className="btn-register" style={{ textDecoration: 'none' }}>
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;