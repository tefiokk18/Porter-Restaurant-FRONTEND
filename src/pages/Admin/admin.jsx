import React, { useState } from 'react';
import ReservasTable from '../../components/ReservasTable/reservastable.jsx';
import UsuariosTable from '../../components/Userstable/userstable';
import { useAuth } from '../../context/authcontext';
import './admin.css';

const AdminPanel = () => {
  const [tabActiva, setTabActiva] = useState('reservas');
  const { reservasGlobales, ingresos } = useAuth();

  return (
    <div className="admin-panel-container">
      <h1 className="admin-title">Panel de Administración</h1>

      <div className="admin-tabs">
        <button
          className={`tab-item ${tabActiva === 'reservas' ? 'active' : ''}`}
          onClick={() => setTabActiva('reservas')}
        >
          <span className="icon-calendar">📅</span> Reservas ({reservasGlobales?.length || 0})
        </button>
        <button
          className={`tab-item ${tabActiva === 'usuarios' ? 'active' : ''}`}
          onClick={() => setTabActiva('usuarios')}
        >

          <span className="icon-user">👥</span> Usuarios ({ingresos?.length || 0})

        </button>
      </div>

      <div className="admin-table-content shadow-lg">
        {tabActiva === 'reservas' && <ReservasTable adminMode={true} />}
        {tabActiva === 'usuarios' && <UsuariosTable />}
      </div>
    </div>
  );
};

export default AdminPanel;