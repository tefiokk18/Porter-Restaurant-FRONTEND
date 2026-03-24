import React from 'react';
import './reservas.css';

const Reservas = () => {
  return (
    <div className="reservas-page">
      {/* Hero con fondo de imagen y overlay oscuro */}
      <section className="reservas-hero">
        <div className="hero-content">
          <h1>Reservas</h1>
          <p>Asegura tu mesa en Porter</p>
        </div>
      </section>

      {/* Sección del Formulario que se solapa con el hero */}
      <section className="form-section">
        <div className="form-card">
          <h2>Reserva tu Mesa</h2>
          <p className="form-subtitle">Completa el formulario y nos pondremos en contacto contigo para confirmar</p>
          
          <form className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <label>📅 Fecha *</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <label>🕒 Horario *</label>
                <select required>
                  <option value="">Seleccionar</option>
                  <option value="20:00">19:00</option>
                  <option value="21:00">20:00</option>
                  <option value="22:00">21:00</option>
                  <option value="20:00">22:00</option>
                  <option value="21:00">23:00</option>
                  <option value="22:00">00:00</option>
                </select>
              </div>
              <div className="form-group">
                <label>👥 Comensales *</label>
                <select required>
                  <option value="2">2 personas</option>
                  <option value="4">4 personas</option>
                  <option value="6">6 personas</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="label-sucursal">📍 Seleccionar Sucursal *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="sucursal" value="yerba-buena" required /> Yerba Buena
                </label>
                <label className="radio-label">
                  <input type="radio" name="sucursal" value="centro" required /> Centro
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Nombre Completo *</label>
              <input type="text" placeholder="Tu nombre completo" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Correo Electrónico *</label>
                <input type="email" placeholder="tu@email.com" required />
              </div>
              <div className="form-group">
                <label>Teléfono *</label>
                <input type="tel" placeholder="+54 381 XXX-XXXX" required />
              </div>
            </div>

            <div className="form-group">
              <label>Solicitudes Especiales (Opcional)</label>
              <textarea placeholder="Alergias, preferencias de mesa, ocasión especial, etc." rows="3"></textarea>
            </div>

            <button type="submit" className="btn-confirm">Confirmar Reserva</button>
            
            <div className="info-box">
              <p><span>Nota:</span> Las reservas están sujetas a disponibilidad. Nos pondremos en contacto contigo para confirmar tu reserva dentro de las próximas 24 horas.</p>
            </div>
          </form>
        </div>
      </section>

      {/* Información Importante al final */}
      <section className="info-extra">
        <h2 className="info-title">Información Importante</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Política de Cancelación</h3>
            <p>Solicitamos cancelar con al menos 24 horas de anticipación. Las cancelaciones tardías pueden estar sujetas a un cargo.</p>
          </div>
          <div className="info-card">
            <h3>Grupos Grandes</h3>
            <p>Para reservas de más de 12 personas, por favor contáctanos directamente al +54 381 XXX-XXXX.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservas;