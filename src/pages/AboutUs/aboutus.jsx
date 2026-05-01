import React from 'react';
import './aboutus.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <section className="about-hero">
                <h1>Sobre Mí</h1>
                <p>Conocé más sobre mi perfil, habilidades y enfoque en el mundo IT.</p>
            </section>

            <section className="about-content">
                <div className="about-text">
                    <h2>Mi Perfil Profesional</h2>
                    <p>
                        Soy una persona apasionada por la tecnología, con formación en ciberseguridad, redes y programación básica.
                        Me especializo en el desarrollo de soluciones prácticas orientadas a mejorar la experiencia de los usuarios
                        y optimizar procesos digitales.
                    </p>

                    <p>
                        Cuento con conocimientos en soporte técnico, gestión de sistemas y resolución de problemas, lo que me permite
                        adaptarme rápidamente a distintos entornos y desafíos. Me interesa especialmente el área de seguridad informática
                        y el desarrollo de herramientas que aporten valor real.
                    </p>

                    <p>
                        He participado en el desarrollo de proyectos como sistemas de gestión de reservas, enfocados en la eficiencia,
                        organización y facilidad de uso, buscando mejorar tanto la experiencia del cliente como la administración del servicio.
                    </p>

                    <p>
                        Me caracterizo por ser una persona proactiva, con aprendizaje constante y enfoque en la mejora continua.
                        Busco seguir creciendo en el área IT, incorporando nuevas tecnologías y enfrentando desafíos que impulsen
                        mi desarrollo profesional.
                    </p>
                </div>

                <div className="team-grid">
                    <div className="team-card">
                        <div className="avatar-container">
                            <div className="avatar-placeholder">T</div>
                        </div>
                        <h3>Tu Nombre</h3>
                        <span>Soporte Técnico & IT</span>
                        <p>Enfoque en ciberseguridad, redes, resolución de problemas y desarrollo de soluciones prácticas.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;