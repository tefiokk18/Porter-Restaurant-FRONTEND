import React, { useState, useContext } from 'react';
// IMPORTANTE: Si tu archivo está en src/pages/reservas/Reservas.jsx 
// y tu contexto en src/context/authcontext.jsx, la ruta es esta:
import { AuthContext } from '../../context/authcontext'; 
import './reservas.css';

const Reservas = () => {
  // 1. EXTRAEMOS LOS DATOS DEL CONTEXTO
  // Agregamos un valor por defecto {} para que no explote si el context falla
  const auth = useContext(AuthContext) || {};
  const { user, loading: authLoading } = auth;
  
  const [showModal, setShowModal] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  const [formData, setFormData] = useState({
    fecha: '',
    horario: '',
    comensales: 2,
    sucursal: '',
    nombreCompleto: '',
    email: '',
    telefono: '',
    notas: ''
  });

  // 2. PROTECCIÓN CONTRA PANTALLA BLANCA
  if (authLoading) {
    return <div className="text-center py-20">Cargando datos de usuario...</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "comensales" ? Number(value) : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensajeError(""); 

    if (!user || !user.token) {
      setMensajeError("Debes iniciar sesión para realizar una reserva.");
      return;
    }

    try {
      const respuesta = await fetch('http://localhost:4000/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-token': user.token 
        },
        body: JSON.stringify(formData)
      });

      const resultado = await respuesta.json();

      if (respuesta.ok) {
        setShowModal(true);
        setFormData({
          fecha: '', horario: '', comensales: 2, sucursal: '',
          nombreCompleto: '', email: '', telefono: '', notas: ''
        });
      } else {
        setMensajeError(resultado.mensaje || "Error al procesar la reserva.");
      }
    } catch (error) {
      setMensajeError("Error de conexión con el servidor (Puerto 4000).");
    }
  };

  return (
    <div className="reservas-page">
      <section className="reservas-hero">
        <div className="hero-content">
          <h1>Reservas</h1>
          <p>Asegura tu mesa en Porter</p>
        </div>
      </section>

      <section className="form-section">
        <div className="form-card">
          <h2>Reserva tu Mesa</h2>
          <p className="form-subtitle">Completa los datos para coordinar tu visita</p>

          {mensajeError && (
            <div style={{ background: '#e74c3c', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '15px', textAlign: 'center' }}>
              {mensajeError}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>📅 Fecha *</label>
                <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>🕒 Horario *</label>
                <select name="horario" value={formData.horario} onChange={handleChange} required>
                  <option value="">Seleccionar</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                  <option value="23:00">23:00</option>
                </select>
              </div>
              <div className="form-group">
                <label>👥 Comensales *</label>
                <select name="comensales" value={formData.comensales} onChange={handleChange} required>
                  {[2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} personas</option>)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>📍 Sucursal *</label>
              <div className="radio-group">
                <label><input type="radio" name="sucursal" value="Yerba Buena" checked={formData.sucursal === "Yerba Buena"} onChange={handleChange} required /> Yerba Buena</label>
                <label><input type="radio" name="sucursal" value="Centro" checked={formData.sucursal === "Centro"} onChange={handleChange} required /> Centro</label>
              </div>
            </div>

            <div className="form-group">
              <label>Nombre Completo *</label>
              <input type="text" name="nombreCompleto" value={formData.nombreCompleto} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Correo Electrónico *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Teléfono *</label>
                <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
              </div>
            </div>

            <button type="submit" className="btn-confirm">Confirmar Reserva</button>
          </form>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay-reserva">
          <div className="modal-content-reserva">
            <h3>¡Reserva Registrada!</h3>
            <button onClick={() => setShowModal(false)}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservas;