import React, { useState } from 'react';
import './reservas.css';

const Reservas = () => {
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

    try {

      const respuesta = await fetch('http://localhost:4000/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
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
        e.target.reset();
      } else {
        setMensajeError(resultado.mensaje || "Hubo un error en los datos.");
      }
    } catch (error) {
      setMensajeError("No se pudo conectar con el servidor. Revisá tu conexión.");
    }
  };

  const closeModal = () => setShowModal(false);

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
          <p className="form-subtitle">Completa el formulario y nos pondremos en contacto contigo para confirmar</p>


          {mensajeError && <div className="alert alert-danger" style={{ color: 'red', marginBottom: '15px' }}>{mensajeError}</div>}

          <form className="booking-form" onSubmit={handleSubmit}>
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
                  <option value="00:00">00:00</option>
                </select>
              </div>
              <div className="form-group">
                <label>👥 Comensales *</label>
                <select name="comensales" value={formData.comensales} onChange={handleChange} required>
                  <option value="2">2 personas</option>
                  <option value="4">4 personas</option>
                  <option value="6">6 personas</option>
                  <option value="8">8 personas</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="label-sucursal">📍 Seleccionar Sucursal *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="sucursal" value="Yerba Buena" onChange={handleChange} required /> Yerba Buena
                </label>
                <label className="radio-label">
                  <input type="radio" name="sucursal" value="Centro" onChange={handleChange} required /> Centro
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Nombre Completo *</label>
              <input type="text" name="nombreCompleto" placeholder="Tu nombre completo" value={formData.nombreCompleto} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Correo Electrónico *</label>
                <input type="email" name="email" placeholder="tu@email.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Teléfono *</label>
                <input type="tel" name="telefono" placeholder="+54 381 XXX-XXXX" value={formData.telefono} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label>Solicitudes Especiales (Opcional)</label>
              <textarea name="notas" value={formData.notas} onChange={handleChange} placeholder="Alergias, preferencias de mesa..." rows="3"></textarea>
            </div>

            <button type="submit" className="btn-confirm">Confirmar Reserva</button>
          </form>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay-reserva">
          <div className="modal-content-reserva shadow-lg text-center">
            <div className="modal-icon-success">✔️</div>
            <h3 className="fw-bold mb-3">Reserva Registrada</h3>
            <p className="text-muted">Tu solicitud ha sido enviada con éxito. Te contactaremos pronto.</p>
            <button className="btn-close-modal-reserva" onClick={closeModal}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservas;