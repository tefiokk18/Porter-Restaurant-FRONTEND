import { Link } from 'react-router-dom';
import React from 'react';
import './home.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Bienvenidos a Porter</h1>
        <p>Una experiencia gastronómica única en Tucumán</p>
        <div className="hero-buttons">
          <Link to="/reservas" className="btn btn-primary">
            <span className="bi bi-calendar-event"></span> Hacer una Reserva
          </Link>

          <Link to="/aboutus" className="btn btn-secondary">
            Conocer Más
          </Link>
        </div>
      </div>
    </section>
  );
};

const featuresData = [
  {
    icon: 'patch-check',
    title: 'Chef Profesional',
    description: 'Nuestros chefs crean platos excepcionales con ingredientes de primera calidad'
  },
  {
    icon: 'geo-alt',
    title: 'Ubicación Privilegiada',
    description: 'En el corazón de Tucumán, fácil acceso y ambiente acogedor'
  },
  {
    icon: 'clock',
    title: 'Horarios Flexibles',
    description: 'Abierto todos los días para almuerzo y cena'
  }
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="icon-container">
      <i className={`bi bi-${icon}`}></i>
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/public/imagenes/historia.png"
            alt="Nuestra Historia Chef"
          />
        </div>
        <div className="about-text">
          <h2>Nuestra Historia</h2>
          <p>
            Porter Restaurant nace con la visión de crear un espacio donde la excelencia culinaria
            se encuentre con la calidez de la hospitalidad tucumana.
          </p>
          <p>
            Cada plato cuenta una historia, cada ingrediente es cuidadosamente seleccionado
            para ofrecerte una experiencia gastronómica inolvidable.
          </p>
          <Link to="/aboutus">
            <button className="btn-about">Conoce más sobre nosotros</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "/public/imagenes/comida1.png",
    "/public/imagenes/comida2.png",
    "/public/imagenes/comida3.png"
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Galería</h2>
        <p>Un vistazo a nuestro restaurante y los platos que preparamos con amor</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Plato ${index + 1}`} />
          </div>
        ))}
      </div>

      <Link to="/galeria">
        <button className="btn-gallery">Ver Galería Completa</button>
      </Link>
    </section>
  );
};

const ReservationCTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>¿Listo para una experiencia inolvidable?</h2>
        <p>Reserva tu mesa hoy y déjate sorprender por nuestra cocina</p>
        <button className="btn-reserve-now">Reservar Ahora</button>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Gallery />

    </main>
  );
};
export default Home;