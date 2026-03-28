
import React from 'react';

const UsuariosTable = () => {
  const usuarios = [
    { id: 1, nombre: 'Admin Porter', email: 'admin@porter.com', telefono: '+54 381 111-1111', rol: 'Administrador' },
    { id: 2, nombre: 'Juan Pérez', email: 'juan@email.com', telefono: '+54 381 222-2222', rol: 'Usuario' },
  ];

  return (
    <div className="table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>EMAIL</th>
            <th>TELÉFONO</th>
            <th>ROL</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td className="user-name-cell">{user.nombre}</td>
              <td className="user-email-cell">{user.email}</td>
              <td>{user.telefono}</td>
              <td>
                <span className={`role-badge ${user.rol === 'Administrador' ? 'role-admin' : 'role-user'}`}>
                  {user.rol}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuariosTable;