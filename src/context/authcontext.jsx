import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Context object
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ingresos, setIngresos] = useState([]); 
  const [reservasGlobales, setReservasGlobales] = useState([]);
  const [loading, setLoading] = useState(true);

  const login = (email) => {
    const isAdmin = email.endsWith('@porter.com') || email.includes('admin');
    const newUserData = { 
      id: Date.now(), 
      nombre: email.split('@')[0], 
      email: email, 
      role: isAdmin ? 'admin' : 'user' 
    };
    setUser(newUserData);
    setIngresos(prev => [...prev, newUserData]);
  };

  const agregarReserva = (nuevaReserva) => {
    setReservasGlobales(prev => [...prev, { ...nuevaReserva, id: Date.now() }]);
  };

  const logout = () => setUser(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, ingresos, reservasGlobales, agregarReserva }}>
      {children}
    </AuthContext.Provider>
  );
};

// 2. THIS IS THE MISSING PIECE: Export the custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};