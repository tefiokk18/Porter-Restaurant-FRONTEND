import React from 'react';
import { useAuth } from '../../context/authcontext';

const UsuariosTable = () => {
  const { ingresos } = useAuth(); 

  return (
    <div className="table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>EMAIL</th>
            <th>ROL</th>
            <th>ESTADO</th>
          </tr>
        </thead>
        <tbody>
          {ingresos.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>
                No hay sesiones de usuarios activas.
              </td>
            </tr>
          ) : (
            ingresos.map((u, index) => {
              const displayId = u._id || u.id || `USR-${index}`;
   
              const userRole = u.rol || u.role;
              const isAdmin = userRole === 'admin';

              return (
                <tr key={displayId}>
                  <td className="id-cell">
                    #{displayId.toString().slice(-4).toUpperCase()}
                  </td>
                  <td className="user-name-cell">
                    <div className="d-flex align-items-center">
                      <div className={`avatar-circle ${isAdmin ? 'bg-admin' : 'bg-user'}`}>
                        {u.nombre?.charAt(0).toUpperCase()}
                      </div>
                      <span className="ms-2">{u.nombre}</span>
                    </div>
                  </td>
                  <td className="user-email-cell">{u.email}</td>
                  <td>
                    <span className={`role-badge ${isAdmin ? 'role-admin' : 'role-user'}`}>
                      {isAdmin ? '🛡️ Administrador' : '👤 Cliente'}
                    </span>
                  </td>
                  <td>
                    <span className="status-online">● En línea</span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsuariosTable;