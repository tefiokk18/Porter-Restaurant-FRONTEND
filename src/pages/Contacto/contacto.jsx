import React from 'react';
import './contacto.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contacto = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("¡Mensaje enviado! Nos pondremos en contacto pronto.");
    };

    return (
        <div className="contacto-page">
            {/* Hero Section */}
            <div className="container-fluid p-0">
                <div className="contacto-hero-img d-flex flex-column justify-content-center align-items-center text-white text-center">
                    <div className="hero-overlay"></div>
                    <div className="position-relative z-3">
                        <h1 className="display-4 fw-bold">Contacto</h1>
                        <p className="lead">Estamos aquí para atenderte</p>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-5">
                    {/* Columna de Información */}
                    <div className="col-lg-5 col-md-12">
                        <h2 className="mb-5 fw-bold text-start">Información de Contacto</h2>

                        <div className="info-section">
                            <div className="d-flex mb-4">
                                <div className="icon-box-celeste me-3"><i className="bi bi-geo-alt"></i></div>
                                <div className="text-start">
                                    <h5 className="fw-bold mb-1">Dirección</h5>
                                    <p className="text-muted">Ildefonso de las Muñecas 747, Barrio Norte.<br />San Miguel de Tucumán, Argentina</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="icon-box-celeste me-3"><i className="bi bi-telephone"></i></div>
                                <div className="text-start">
                                    <h5 className="fw-bold mb-1">Teléfono</h5>
                                    <p className="text-muted">+54 381 485-8001<br />+54 9 381 123-4567 (WhatsApp)</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="icon-box-celeste me-3"><i className="bi bi-envelope"></i></div>
                                <div className="text-start">
                                    <h5 className="fw-bold mb-1">Correo Electrónico</h5>
                                    <p className="text-muted">info@porter.com<br />reservas@porter.com</p>
                                </div>
                            </div>

                            <div className="d-flex mb-5">
                                <div className="icon-box-celeste me-3"><i className="bi bi-clock"></i></div>
                                <div className="text-start">
                                    <h5 className="fw-bold mb-1">Horarios de Atención</h5>
                                    <p className="text-muted">
                                        Lun - Vie: 19:00 - 01:00<br />
                                        Sábado: 12:00 - 03:00 <br />
                                        Domingo: 19:00 - 01:00
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mapa - He puesto la ubicación real de Muñecas 747 */}
                        <div className="map-wrapper-porter shadow-sm rounded-4 overflow-hidden border mt-2" style={{ height: '300px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4684941656554!2d-65.2052441!3d-26.825048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c11f7157849%3A0x6b779a523a5477c!2sIldefonso%20de%20las%20Mu%C3%B1ecas%20747%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Porter Brew House"
                            ></iframe>
                        </div>
                    </div>

                    {/* Columna del Formulario */}
                    <div className="col-lg-7 col-md-12">
                        <div className="form-container-porter p-4 bg-white rounded-4 shadow-sm border">
                            <h2 className="mb-5 fw-bold text-start">Envíanos un Mensaje</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4 text-start">
                                    <label className="form-label fw-bold small text-uppercase">Nombre Completo <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control porter-input" placeholder="Tu nombre completo" required />
                                </div>
                                <div className="mb-4 text-start">
                                    <label className="form-label fw-bold small text-uppercase">Correo Electrónico <span className="text-danger">*</span></label>
                                    <input type="email" className="form-control porter-input" placeholder="tu@email.com" required />
                                </div>
                                <div className="mb-4 text-start">
                                    <label className="form-label fw-bold small text-uppercase">Teléfono <span className="text-danger">*</span></label>
                                    <input type="tel" className="form-control porter-input" placeholder="+54 381 XXX-XXXX" required />
                                </div>
                                <div className="mb-4 text-start">
                                    <label className="form-label fw-bold small text-uppercase">Mensaje <span className="text-danger">*</span></label>
                                    <textarea className="form-control porter-input" rows="6" placeholder="¿En qué podemos ayudarte?" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-porter-enviar w-100 py-3 fw-bold mt-2">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;