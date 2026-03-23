import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registro.css';

const Registro = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        password: '',
        confirmarPassword: '',
        aceptaTerminos: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmarPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        console.log("Registrando usuario:", formData);
    };

    return (
        <div className="registro-page-container d-flex align-items-center justify-content-center">
            <div className="registro-card shadow-lg">
                <div className="text-center mb-4">
                    <h2 className="fw-bold display-6">Crear Cuenta</h2>
                    <p className="text-muted">Únete a Porter y disfruta de beneficios exclusivos</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="mb-4 text-start">
                        <label className="form-label fw-bold small">Nombre Completo <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            name="nombre"
                            className="form-control custom-input"
                            placeholder="Tu nombre completo"
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className="mb-4 text-start">
                        <label className="form-label fw-bold small">Correo Electrónico <span className="text-danger">*</span></label>
                        <input
                            type="email"
                            name="email"
                            className="form-control custom-input"
                            placeholder="tu@email.com"
                            onChange={handleChange}
                            required
                        />
                    </div>

 
                    <div className="mb-4 text-start">
                        <label className="form-label fw-bold small">Teléfono <span className="text-danger">*</span></label>
                        <input
                            type="tel"
                            name="telefono"
                            className="form-control custom-input"
                            placeholder="+54 381 XXX-XXXX"
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className="mb-3 text-start">
                        <label className="form-label fw-bold small">Contraseña <span className="text-danger">*</span></label>
                        <div className="input-group">
                            <input
                                type="password"
                                name="password"
                                className="form-control custom-input border-end-0"
                                placeholder="Mínimo 8 caracteres"
                                onChange={handleChange}
                                required
                            />
                            <span className="input-group-text bg-white border-start-0 custom-input">
                                <i className="bi bi-eye text-muted"></i>
                            </span>
                        </div>
                        <small className="text-muted mt-1 d-block" style={{ fontSize: '0.8rem' }}>
                            Debe contener mayúsculas, minúsculas y números
                        </small>
                    </div>

                    <div className="mb-4 text-start">
                        <label className="form-label fw-bold small">Confirmar Contraseña <span className="text-danger">*</span></label>
                        <div className="input-group">
                            <input
                                type="password"
                                name="confirmarPassword"
                                className="form-control custom-input border-end-0"
                                placeholder="Repite tu contraseña"
                                onChange={handleChange}
                                required
                            />
                            <span className="input-group-text bg-white border-start-0 custom-input">
                                <i className="bi bi-eye text-muted"></i>
                            </span>
                        </div>
                    </div>


                    <div className="mb-4 d-flex align-items-start gap-2 text-start">
                        <input
                            type="checkbox"
                            name="aceptaTerminos"
                            className="form-check-input mt-1 custom-checkbox"
                            id="terminos"
                            onChange={handleChange}
                            required
                        />
                        <label className="form-check-label small" htmlFor="terminos">
                            Acepto los <span className="link-porter">términos y condiciones</span> y la <span className="link-porter">política de privacidad</span> <span className="text-danger">*</span>
                        </label>
                    </div>

                    <button type="submit" className="btn btn-porter-main w-100 py-3 fw-bold mb-4">
                        Registrarse
                    </button>

                    <div className="text-center">
                        <p className="text-muted small">
                            ¿Ya tienes una cuenta? <Link to="/login" className="link-porter fw-bold">Inicia sesión aquí</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registro;