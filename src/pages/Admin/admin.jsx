import React, { useState } from 'react';
import ReservasTable from '../../components/ReservasTable/reservastable.jsx';
import UsuariosTable from '../../components/Userstable/userstable';
import './admin.css'; 

const AdminPanel = () => {

  const [tabActiva, setTabActiva] = useState('reservas');

  const totalReservas = 2;
  const totalUsuarios = 2;

  return (
    <div className="admin-panel-container">
      <h1 className="admin-title">Panel de Administración</h1>

      <div className="admin-tabs">
        <button 
          className={`tab-item ${tabActiva === 'reservas' ? 'active' : ''}`}
          onClick={() => setTabActiva('reservas')}
        >
          <span className="icon-calendar">📅</span> Reservas ({totalReservas})
        </button>
        <button 
          className={`tab-item ${tabActiva === 'usuarios' ? 'active' : ''}`}
          onClick={() => setTabActiva('usuarios')}
        >
          <span className="icon-user">👥</span> Usuarios ({totalUsuarios})
        </button>
      </div>

      <div className="admin-table-content">
        {tabActiva === 'reservas' && <ReservasTable />}
        {tabActiva === 'usuarios' && <UsuariosTable />}
      </div>
    </div>
  );
};

export default AdminPanel;