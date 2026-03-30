import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 


import { AuthProvider } from '../src/context/authcontext';
import ProtectedRoute from './components/Protectroute/route'
import AdminPanel from './pages/Admin/admin'; 
// ------------------------------------------

import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

import Registro from './components/Registro/registro';
import Login from './components/Login/login';
import Home from './pages/Home/home';
import Reservas from './pages/Reservas/reservas';
import Galeria from './pages/Galeria/galeria';
import Contacto from './pages/Contacto/contacto';
import AboutUs from './pages/AboutUs/aboutus';

function App() {
  return (

    <AuthProvider>
      <Router>
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contacto" element={<Contacto />} />

            
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />

            <Route path="*" element={
              <div className="container text-center py-5">
                <h2 className="display-4 fw-bold mt-5">404</h2>
                <p className="lead">Lo sentimos, la página que buscas no existe.</p>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;