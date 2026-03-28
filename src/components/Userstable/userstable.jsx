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
          </tr>
        </thead>
        <tbody>
          {ingresos.length === 0 ? (
            <tr><td colSpan="4" style={{textAlign: 'center', padding: '20px'}}>No hay usuarios logueados aún.</td></tr>
          ) : (
            ingresos.map((u) => (
              <tr key={u.id}>
                <td>{u.id.toString().slice(-4)}</td>
                <td className="user-name-cell">{u.nombre}</td>
                <td className="user-email-cell">{u.email}</td>
                <td>
                  <span className={`role-badge ${u.role === 'admin' ? 'role-admin' : 'role-user'}`}>
                    {u.role === 'admin' ? 'Administrador' : 'Usuario'}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsuariosTable;