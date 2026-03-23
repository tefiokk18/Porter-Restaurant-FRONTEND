import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';


import Home from './components/Home/home';
import Reservas from './pages/Reservas/reservas';
import Login from './components/Login/login';
import Registro from './components/Registro/registro';
import Galeria from './components/Galeria/galeria';
import Contacto from './components/Contacto/contacto';
import AboutUs from './components/AboutUs/aboutus';

function App() {
  return (
    <Router>
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <AboutUs />
            </>
          } />


          <Route path="/reservas" element={<Reservas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />


          <Route path="/quienes-somos" element={<AboutUs />} />


          <Route path="*" element={
            <div className="container text-center py-5">
              <h2 className="display-4 fw-bold">404</h2>
              <p className="lead">Página no encontrada</p>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;