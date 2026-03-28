import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ingresos, setIngresos] = useState([]); 
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

  const logout = () => setUser(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, ingresos }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);