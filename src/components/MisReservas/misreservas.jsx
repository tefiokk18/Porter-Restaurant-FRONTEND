import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authcontext';
import './MisReservas.css'; // Asegurate de que el nombre del archivo CSS sea correcto

const MisReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, loading: authLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchReservas = async () => {
      if (authLoading) return;
      if (!user || !user.token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:4000/api/mis-reservas', {
          method: 'GET',
          headers: { 
            'x-token': user.token,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setReservas(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Error al obtener reservas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservas();
  }, [user, authLoading]);

  if (authLoading || loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px' }}>
        <p>Buscando tus reservas en Porter...</p>
      </div>
    );
  }

  return (
    <div className="reservas-container">
      {/* Encabezado Estilo Admin */}
      <h1 className="titulo-seccion">Mis Reservas</h1>
      <p className="subtitulo-seccion">
        Hola <strong>{user?.nombre || 'Pia'}</strong>, aquí podés gestionar tus próximas visitas.
      </p>

      {reservas.length === 0 ? (
        <div className="reserva-card" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div className="info-reserva">
            <h3>No tenés reservas activas</h3>
            <p className="fecha-reserva">¡Te esperamos pronto para compartir una buena cerveza!</p>
          </div>
        </div>
      ) : (
        <div className="lista-reservas">
          {reservas.map((res) => (
            <div key={res._id} className="reserva-card">
              
              <div className="info-reserva">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                  <h2 style={{ margin: 0 }}>{res.nombreCompleto}</h2>
                  <span className={`badge badge-${res.estado?.toLowerCase() || 'pendiente'}`}>
                    {res.estado || 'PENDIENTE'}
                  </span>
                </div>
                
                <div className="detalles-grid">
                  <div className="detalle-item">
                    <span>📅</span> 
                    {new Date(res.fecha).toLocaleDateString('es-AR', { 
                      weekday: 'long', 
                      day: 'numeric', 
                      month: 'long' 
                    })}
                  </div>
                  <div className="detalle-item">
                    <span>⏰</span> {res.horario} hs
                  </div>
                  <div className="detalle-item">
                    <span>📍</span> Sucursal {res.sucursal}
                  </div>
                  <div className="detalle-item">
                    <span>👥</span> {res.comensales} personas
                  </div>
                </div>
              </div>

              <div className="acciones-reserva">
                <button className="btn-detalles">Ver Detalles</button>
                <button className="btn-cancelar-link">Cancelar Reserva</button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MisReservas;