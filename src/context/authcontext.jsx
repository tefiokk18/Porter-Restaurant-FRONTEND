import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [ingresos, setIngresos] = useState([]);

  const login = (userData) => {
    const emailLower = userData.email?.toLowerCase() || "";
    const esAdmin = emailLower.endsWith('@porter.com') || emailLower.includes('admin');

    const usuarioFinal = {
      ...userData,
      rol: esAdmin ? 'admin' : (userData.rol || 'user')
    };

    setUser(usuarioFinal);
    setIngresos(prev => {
      const existe = prev.find(u => u.email === usuarioFinal.email);
      if (existe) return prev;
      return [...prev, usuarioFinal];
    });

    localStorage.setItem('usuario', JSON.stringify(usuarioFinal));
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      const parsedUser = JSON.parse(usuarioGuardado);
      setUser(parsedUser);
      setIngresos([parsedUser]);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, ingresos, setIngresos }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};