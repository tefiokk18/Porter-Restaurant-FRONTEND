import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const guardado = localStorage.getItem('usuario');
    return guardado ? JSON.parse(guardado) : null;
  });

  const [loading, setLoading] = useState(true);
  const [ingresos, setIngresos] = useState([]);


  useEffect(() => {
    if (user) {
      setIngresos([user]);
    }
    setLoading(false);
  }, [user]);

  const login = (userData) => {

    if (!userData.token) {
      console.warn("Login realizado sin token. Verifica que el backend lo esté enviando.");
    }

    const emailLower = userData.email?.toLowerCase() || "";
    const esAdmin = emailLower.endsWith('@porter.com') || emailLower.includes('admin');

    const usuarioFinal = {
      ...userData,
      rol: esAdmin ? 'admin' : (userData.rol || 'user')
    };

    setUser(usuarioFinal);
 
    localStorage.setItem('usuario', JSON.stringify(usuarioFinal));
    
    setIngresos(prev => {
      const existe = prev.find(u => u.email === usuarioFinal.email);
      if (existe) return prev;
      return [...prev, usuarioFinal];
    });
  };

  const logout = () => {
    setUser(null);
    setIngresos([]);
    localStorage.removeItem('usuario'); 
  };

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