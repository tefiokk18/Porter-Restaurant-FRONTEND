import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authcontext';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); 

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const respuesta = await fetch('http://localhost:4000/api/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await respuesta.json();

            if (respuesta.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('usuario', JSON.stringify({ nombre: data.nombre, rol: data.rol }));
                localStorage.setItem('rol', data.rol);


                login(data.nombre);

                console.log("Login exitoso. Rol:", data.rol);


                if (data.rol === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/home');
                }
            } else {

                setError(data.mensaje || "Credenciales incorrectas");
            }
        } catch (err) {
            console.error("Error en la conexión:", err);
            setError("No se pudo conectar con el servidor. Revisá que el backend esté corriendo.");
        }
    };

    return (
        <div className="login-page-wrapper d-flex align-items-center justify-content-center">
            <div className="login-card shadow-lg">
                <div className="text-center mb-4">
                    <h2 className="fw-bold display-6">Iniciar Sesión</h2>
                </div>


                {error && (
                    <div className="alert alert-danger text-center py-2 small" role="alert">
                        {error}
                    </div>
                )}

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