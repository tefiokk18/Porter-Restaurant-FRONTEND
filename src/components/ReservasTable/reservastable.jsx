import React from 'react';

const ReservasTable = () => {
  const reservas = [
    { id: 1, cliente: 'Juan Pérez', email: 'juan@email.com', fecha: '19/3/2026', hora: '20:00', comensales: 4, estado: 'Confirmada' },
    { id: 2, cliente: 'Juan Pérez', email: 'juan@email.com', fecha: '24/3/2026', hora: '21:00', comensales: 2, estado: 'Pendiente' },
  ];

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
          {reservas.map((reserva) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservasTable;