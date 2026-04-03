import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authcontext';

const MisReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, loading: authLoading } = useContext(AuthContext); // Traemos loading del context

  useEffect(() => {
    const obtenerReservas = async () => {
      // 1. Si el AuthContext todavía está cargando el localStorage, esperamos
      if (authLoading) return;

      // 2. Si terminó de cargar y NO hay usuario, dejamos de cargar y salimos
      if (!user) {
        setLoading(false);
        return;
      }

      // 3. Si hay usuario pero no tiene token (revisar Login)
      if (!user.token) {
        console.error("Usuario encontrado pero sin TOKEN. Revisa el Login.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:4000/api/reservas/mis-reservas', {
          headers: { 
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setReservas(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Error en la petición:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerReservas();
  }, [user, authLoading]); // Se ejecuta cuando cambia el usuario o el estado de carga del auth

  if (authLoading || loading) {
    return <div className="text-center py-20">Cargando tus reservas...</div>;
  }

  if (!user) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Debes iniciar sesión para ver tus reservas.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Mis Reservas</h1>
      {reservas.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400">No se encontraron reservas para {user.email}.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reservas.map((reserva) => (
            <div key={reserva._id} className="p-6 bg-white border rounded-xl shadow-sm flex justify-between items-center">
              <div>
                <span className="text-xs font-bold uppercase px-2 py-1 rounded bg-amber-100 text-amber-700">
                  {reserva.status || 'pendiente'}
                </span>
                <h3 className="text-xl font-semibold mt-2">
                  {reserva.fecha ? new Date(reserva.fecha).toLocaleDateString() : 'Sin fecha'}
                </h3>
                <p className="text-gray-600">{reserva.horario} hs — {reserva.comensales} personas</p>
                <p className="text-xs text-gray-400">Sucursal: {reserva.sucursal}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MisReservas;