import React, { useState } from 'react';

const ReservasTable = () => {
  const [reservas, setReservas] = useState([]);

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
              <tr key={reserva.id}>
                <td>{reserva.id}</td>
                <td className="client-cell">
                  <span className="client-name">{reserva.cliente}</span>
                  <span className="client-email">{reserva.email}</span>
                </td>
                <td>{reserva.fecha}</td>
                <td>{reserva.hora}</td>
                <td>{reserva.comensales}</td>
                <td>
                  <span className={`status-badge ${reserva.estado === 'Confirmada' ? 'status-confirmed' : 'status-pending'}`}>
                    {reserva.estado}
                  </span>
                </td>
                <td className="actions-cell">
                  <button className="btn-action btn-edit">✏️</button>
                  <button className="btn-action btn-delete">🗑️</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReservasTable;