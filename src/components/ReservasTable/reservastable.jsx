import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ReservasTable = () => {
  const [reservas, setReservas] = useState([]);
  const [reservaEditada, setReservaEditada] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const URL = 'http://localhost:4000/api/reservas';

  const obtenerConfig = () => {
    const token = localStorage.getItem('token');
    return { headers: { 'x-token': token } };
  };

  const obtenerReservas = async () => {
    try {
      const config = obtenerConfig();
      if (!config.headers['x-token']) return;
      const respuesta = await axios.get(URL, config);
      setReservas(respuesta.data.reservas || respuesta.data);
    } catch (error) {
      console.error("Error al traer las reservas", error);
    }
  };

  useEffect(() => {
    obtenerReservas();
  }, []);

  const eliminarReserva = async (id) => {
    const result = await Swal.fire({
      title: "¿Eliminar esta reserva?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: "Sí, borrar"
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${URL}/${id}`, obtenerConfig());
        setReservas(reservas.filter(res => res._id !== id));
        Swal.fire("¡Eliminado!", "La reserva fue removida.", "success");
      } catch (error) {
        Swal.fire("Error", "No tienes permisos o el servidor falló", "error");
      }
    }
  };

  const guardarCambios = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}/${reservaEditada._id}`, reservaEditada, obtenerConfig());
      
      setReservas(reservas.map(res => res._id === reservaEditada._id ? reservaEditada : res));
      setMostrarModal(false);
      Swal.fire("Actualizado", "La reserva se modificó correctamente", "success");
    } catch (error) {
      Swal.fire("Error", "No se pudieron guardar los cambios", "error");
    }
  };

  return (
    <div className="table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>CLIENTE</th>
            <th>FECHA / HORA</th>
            <th>PERSONAS</th>
            <th>ESTADO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {reservas.length === 0 ? (
            <tr><td colSpan="6" style={{textAlign: 'center', padding: '20px'}}>No hay reservas.</td></tr>
          ) : (
            reservas.map((res) => (
              <tr key={res._id}>
                <td className="small-id">#{res._id.slice(-4).toUpperCase()}</td>
                <td><strong>{res.nombre || res.cliente}</strong></td>
                <td>{res.fecha} - {res.horario || res.hora} hs</td>
                <td style={{textAlign: 'center'}}>{res.personas || res.cantidad || 1}</td>
                <td>
                  <span className={`status-badge ${res.estado?.toLowerCase()}`}>
                    {res.estado}
                  </span>
                </td>
                <td className="actions-cell">
                  <button className="btn-edit" title="Editar" onClick={() => { setReservaEditada({...res}); setMostrarModal(true); }}>✏️</button>
                  <button className="btn-delete" title="Eliminar" onClick={() => eliminarReserva(res._id)}>🗑️</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {mostrarModal && reservaEditada && (
        <div className="modal-custom-overlay">
          <div className="modal-custom-card">
            <div className="modal-header">
              <h3>Editar Reserva #{reservaEditada._id.slice(-4)}</h3>
              <button className="close-x" onClick={() => setMostrarModal(false)}>&times;</button>
            </div>
            <form onSubmit={guardarCambios} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Nombre del Cliente:</label>
                  <input
                    type="text"
                    value={reservaEditada.nombre || reservaEditada.cliente || ''}
                    onChange={(e) => setReservaEditada({ ...reservaEditada, nombre: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Personas:</label>
                  <input
                    type="number"
                    min="1"
                    value={reservaEditada.personas || reservaEditada.cantidad || 1}
                    onChange={(e) => setReservaEditada({ ...reservaEditada, personas: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Fecha:</label>
                  <input
                    type="date"
                    value={reservaEditada.fecha}
                    onChange={(e) => setReservaEditada({ ...reservaEditada, fecha: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Hora:</label>
                  <input
                    type="time"
                    value={reservaEditada.horario || reservaEditada.hora}
                    onChange={(e) => setReservaEditada({ ...reservaEditada, horario: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Estado de la Reserva:</label>
                <select
                  className={`select-status ${reservaEditada.estado?.toLowerCase()}`}
                  value={reservaEditada.estado}
                  onChange={(e) => setReservaEditada({ ...reservaEditada, estado: e.target.value })}
                >
                  <option value="Pendiente">🟡 Pendiente</option>
                  <option value="Confirmada">🟢 Confirmada</option>
                  <option value="Cancelada">🔴 Cancelada</option>
                </select>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={() => setMostrarModal(false)}>Descartar</button>
                <button type="submit" className="btn-save">Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservasTable;