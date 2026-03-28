import React from 'react';
import './contacto.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contacto = () => {
    return (
        <div className="contacto-page">
            <div className="container-fluid p-0">
                <div className="contacto-hero-img d-flex flex-column justify-content-center align-items-center text-white text-center">
                    <h1 className="display-4 fw-bold">Contacto</h1>
                    <p className="lead">Estamos aquí para atenderte</p>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-5">

                    <div className="col-lg-5 col-md-12">
                        <h2 className="mb-5 fw-bold text-start">Información de Contacto</h2>

                        <div className="d-flex mb-4">
                            <div className="icon-box-celeste me-3"><i className="bi bi-geo-alt"></i></div>
                            <div className="text-start">
                                <h5 className="fw-bold mb-1">Dirección</h5>
                                <p className="text-muted">Av. Juan Domingo Perón 1750, Yerba Buena, Tucumán<br />Ildefonso de las Muñecas 749, T4000 San Miguel de Tucumán, Capital</p>
                            </div>
                        </div>

                        <div className="d-flex mb-4">
                            <div className="icon-box-celeste me-3"><i className="bi bi-telephone"></i></div>
                            <div className="text-start">
                                <h5 className="fw-bold mb-1">Teléfono</h5>
                                <p className="text-muted">+54 9 0381 484-0812 (Suc. YB)<br />+54 9 0381 485-8001 (Suc. Centro)</p>
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
                                    Lun - Vie: 19:00 - 01:00
                                    Sábado: 12:00 - 00:00, 19:00 - 03:00 <br />
                                    Domingo: 19:00 - 01:00
                                </p>
                            </div>
                        </div>

                        <div className="map-placeholder-box rounded-3 d-flex align-items-center justify-content-center text-muted">
                            Mapa de Google Maps aquí
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <h2 className="mb-5 fw-bold text-start">Envíanos un Mensaje</h2>
                        <form className="p-1">
                            <div className="mb-4 text-start">
                                <label className="form-label fw-bold">Nombre Completo <span className="text-danger">*</span></label>
                                <input type="text" className="form-control porter-input" placeholder="Tu nombre completo" required />
                            </div>
                            <div className="mb-4 text-start">
                                <label className="form-label fw-bold">Correo Electrónico <span className="text-danger">*</span></label>
                                <input type="email" className="form-control porter-input" placeholder="tu@email.com" required />
                            </div>
                            <div className="mb-4 text-start">
                                <label className="form-label fw-bold">Teléfono <span className="text-danger">*</span></label>
                                <input type="tel" className="form-control porter-input" placeholder="+54 381 XXX-XXXX" required />
                            </div>
                            <div className="mb-4 text-start">
                                <label className="form-label fw-bold">Mensaje <span className="text-danger">*</span></label>
                                <textarea className="form-control porter-input" rows="5" placeholder="¿En qué podemos ayudarte?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-porter-enviar w-100 py-3 fw-bold mt-2">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contacto;