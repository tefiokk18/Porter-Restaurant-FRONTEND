import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './registro.css';

const Registro = () => {
    const navigate = useNavigate();
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmarPassword) {
            return Swal.fire("Error", "Las contraseñas no coinciden", "error");
        }

        if (!formData.aceptaTerminos) {
            return Swal.fire("Atención", "Debes aceptar los términos y condiciones", "info");
        }

        try {
           
            const URL = 'http://localhost:4000/api/registro';
            const response = await axios.post(URL, {
                nombre: formData.nombre,
                email: formData.email,
                telefono: formData.telefono,
                password: formData.password,
                rol: "user"
            });

  
            Swal.fire({
                title: "¡Registro Exitoso!",
                text: "Tu cuenta ha sido creada. Ahora puedes iniciar sesión.",
                icon: "success",
                confirmButtonColor: "#00796b"
            }).then(() => {
                navigate('/login'); 
            });

        } catch (error) {
            console.error("Error en registro:", error);
            const mensajeError = error.response?.data?.mensaje || "Hubo un problema con el servidor";
            Swal.fire("Error al registrar", mensajeError, "error");
        }
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
                            value={formData.nombre}
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
                            value={formData.email}
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
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label className="form-label fw-bold small">Contraseña <span className="text-danger">*</span></label>
                        <input
                            type="password"
                            name="password"
                            className="form-control custom-input"
                            placeholder="Mínimo 8 caracteres"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4 text-start">
                        <label className="form-label fw-bold small">Confirmar Contraseña <span className="text-danger">*</span></label>
                        <input
                            type="password"
                            name="confirmarPassword"
                            className="form-control custom-input"
                            placeholder="Repite tu contraseña"
                            value={formData.confirmarPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4 d-flex align-items-start gap-2 text-start">
                        <input
                            type="checkbox"
                            name="aceptaTerminos"
                            className="form-check-input mt-1 custom-checkbox"
                            id="terminos"
                            checked={formData.aceptaTerminos}
                            onChange={handleChange}
                            required
                        />
                        <label className="form-check-label small" htmlFor="terminos">
                            Acepto los <span className="link-porter">términos y condiciones</span> <span className="text-danger">*</span>
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