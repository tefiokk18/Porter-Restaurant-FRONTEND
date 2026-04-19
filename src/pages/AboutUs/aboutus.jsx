import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <section className="about-hero">
                <h1>Sobre Nosotros</h1>
                <p>El equipo detrás de la innovación para la experiencia gastronómica en Porter.</p>
            </section>

            <section className="about-content">
                <div className="about-text">
                    <h2>Nuestra Misión</h2>
                    <p>
                        Desarrollamos este sistema de gestión de reservas con el objetivo de optimizar la organización y mejorar la experiencia de los clientes de
                        <strong> Porter Brew House</strong> en Tucumán. Queremos simplificar el proceso para que más personas puedan disfrutar de su excelente servicio y ambiente.
                    </p>
                </div>

                <div className="team-grid">
                    <div className="team-card">
                        <div className="avatar-container">
                            <div className="avatar-placeholder">L</div>
                        </div>
                        <h3>Luciana Roldán Vicecci</h3>
                        <span>Estudiante de Ingeniería en Sistemas</span>
                        <p>Especializada en arquitectura de sistemas, base de datos y lógica de backend.</p>
                    </div>

                    <div className="team-card">
                        <div className="avatar-container">
                            <div className="avatar-placeholder">P</div>
                        </div>
                        <h3>Pía Juárez Aban</h3>
                        <span>Estudiante de Desarrollo de Software</span>
                        <p>Enfocada en el diseño de interfaces (UI/UX), desarrollo frontend interactivo y animaciones.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;