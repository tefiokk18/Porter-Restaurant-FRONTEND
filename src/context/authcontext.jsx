import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 


  useEffect(() => {

    setUser(null); 
    setLoading(false);
  }, []);

  const login = (email) => {
    if (email.endsWith('@porter.com') || email.includes('admin')) {
      setUser({ email: email, role: 'admin' });
    } else {
      setUser({ email: email, role: 'user' });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);