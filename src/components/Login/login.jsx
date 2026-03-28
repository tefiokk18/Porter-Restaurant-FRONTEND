import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importamos useNavigate
import { useAuth } from '../../context/authcontext'; // Importamos tu contexto
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { login } = useAuth(); // Extraemos la función login del contexto
    const navigate = useNavigate(); // Hook para redireccionar

    const handleSubmit = (e) => {
        e.preventDefault();

        login(email);

        if (email.includes('admin') || email.endsWith('@porter.com')) {
            console.log("Acceso concedido: Redirigiendo a Panel de Admin...");
            navigate('/admin');
        } else {
            console.log("Acceso concedido: Redirigiendo a Home...");
            navigate('/home');
        }
    };

    return (
        <div className="login-page-wrapper d-flex align-items-center justify-content-center">
            <div className="login-card shadow-lg">
                <div className="text-center mb-4">
                    <h2 className="fw-bold display-6">Iniciar Sesión</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4 text-start">
                        <label className="form-label fw-bold small">Correo Electrónico</label>
                        <input
                            type="email"
                            className="form-control custom-input-login"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4 text-start">
                        <label className="form-label fw-bold small">Contraseña</label>
                        <input
                            type="password"
                            className="form-control custom-input-login"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-porter-login w-100 py-3 fw-bold mb-3">
                        Ingresar
                    </button>

                    <div className="text-center mt-4">
                        <p className="mb-0 text-muted small">
                            ¿No tienes una cuenta? <Link to="/registro" className="registro-link-verde fw-bold">Regístrate aquí</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;