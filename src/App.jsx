import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Reservas from './pages/Reservas/reservas'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;