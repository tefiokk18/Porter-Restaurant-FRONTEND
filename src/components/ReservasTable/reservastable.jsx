import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ReservasTable = () => {
  const [reservas, setReservas] = useState([]);
  const [reservaEditada, setReservaEditada] = useState(null); 
  const [mostrarModal, setMostrarModal] = useState(false);   

  const URL = 'http://localhost:4000/api/reservas';

  useEffect(() => {
    const obtenerReservas = async () => {
      try {
        const respuesta = await axios.get(URL);
        setReservas(respuesta.data);
      } catch (error) {
        console.error("Error al traer las reservas", error);
      }
    };
    obtenerReservas();
  }, []);

  const eliminarReserva = async (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${URL}/${id}`);
          setReservas(reservas.filter(res => res._id !== id));

          Swal.fire("¡Eliminado!", "La reserva ha sido borrada con éxito.", "success");
        } catch (error) {
          console.error("No se pudo eliminar", error);
          Swal.fire("Error", "No se pudo eliminar la reserva del servidor.", "error");
        }
      }
    });
  };

  const guardarCambios = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}/${reservaEditada._id}`, reservaEditada);

      setReservas(reservas.map(res => res._id === reservaEditada._id ? reservaEditada : res));

      setMostrarModal(false);
      Swal.fire("¡Actualizado!", "Los datos se guardaron correctamente", "success");
    } catch (error) {
      console.error("Error al editar", error);
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
            <th>FECHA</th>
            <th>HORA</th>
            <th>COMENSALES</th>
            <th>ESTADO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {reservas.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
                No hay reservas registradas.
              </td>
            </tr>
          ) : (
            reservas.map((reserva) => (
              <tr key={reserva._id}>
                <td>{reserva._id.substring(reserva._id.length - 5)}</td>
                <td className="client-cell">
                  <span className="client-name">{reserva.cliente}</span>
                  <span className="client-email">{reserva.email}</span>
                </td>
                <td>{reserva.fecha}</td>
                <td>{reserva.hora}</td>
                <td>{reserva.comensales}</td>
                <td>
                  <span className={`status-badge ${reserva.estado ? reserva.estado.toLowerCase() : ''}`}>
                    {reserva.estado}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => {
                      setReservaEditada(reserva);
                      setMostrarModal(true);
                    }}
                  >
                    ✏️
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => eliminarReserva(reserva._id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {mostrarModal && (
        <div className="modal-custom">
          <div className="modal-content">
            <h3>Editar Reserva</h3>
            <form onSubmit={guardarCambios}>
              <div className="form-group">
                <label>Nombre del Cliente:</label>
                <input
                  type="text"
                  value={reservaEditada.cliente}
                  onChange={(e) => setReservaEditada({ ...reservaEditada, cliente: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Estado de la Reserva:</label>
                <select
                  value={reservaEditada.estado}
                  onChange={(e) => setReservaEditada({ ...reservaEditada, estado: e.target.value })}
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="Confirmada">Confirmada</option>
                  <option value="Cancelada">Cancelada</option>
                </select>
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn-save">Guardar Cambios</button>
                <button type="button" onClick={() => setMostrarModal(false)} className="btn-cancel">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservasTable;