import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/authcontext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    ); 
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const isAdmin = 
    user.rol === 'admin' || 
    user.role === 'admin' || 
    user.email?.toLowerCase().endsWith('@porter.com');

  if (!isAdmin) {
    console.warn("Acceso denegado: El usuario no es administrador.");
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;