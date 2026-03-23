import React, { useState } from 'react';
import './Registro.css';

const Registro = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registrando usuario:", formData);
    };

    return (
        <div className="registro-container">
            <form className="registro-form" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Crear Cuenta</h2>
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input type="text" name="nombre" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" name="password" className="form-control" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-success w-100">Registrarse</button>
            </form>
        </div>
    );
};

export default Registro;