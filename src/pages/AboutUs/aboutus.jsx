import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-section py-5" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="display-5 fw-bold mb-4">Nuestra Historia</h2>
                        <p className="lead text-muted">
                            Desde 2010, Porter Restaurant ofrece una experiencia gastronómica
                            única en el corazón de San Miguel de Tucumán.
                        </p>
                        <p>
                            Nuestra misión es combinar técnicas tradicionales con ingredientes
                            de la más alta calidad para crear platos que cuentan una historia
                            en cada bocado.
                        </p>
                        <div className="mt-4">
                            <span className="badge bg-dark p-2 me-2">Calidad Premium</span>
                            <span className="badge bg-dark p-2">Chef Profesional</span>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-img-container shadow-lg">
                            <img
                                src="/imagenes/fondoaboutus.jpg"
                                alt="Cocina de Porter"
                                className="img-fluid rounded-3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;