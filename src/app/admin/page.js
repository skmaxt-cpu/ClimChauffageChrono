'use client';

import { useState, useEffect } from 'react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { // Mot de passe simple pour le prototype
      setIsAuthenticated(true);
      fetchReservations();
    } else {
      alert('Mot de passe incorrect');
    }
  };

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/reservations');
      const data = await res.json();
      setReservations(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await fetch(`/api/reservations/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      fetchReservations(); // Refresh
    } catch (error) {
      console.error(error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ paddingTop: '140px', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={handleLogin} className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)' }}>Accès Pro</h2>
          <input 
            type="password" 
            placeholder="Mot de passe" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-alt)' }}
          />
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Se Connecter</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh' }} className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Tableau de <span className="text-secondary">Bord</span></h1>
        <button onClick={() => setIsAuthenticated(false)} className="btn btn-secondary">Déconnexion</button>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', overflowX: 'auto' }}>
        {loading ? (
          <p>Chargement des données...</p>
        ) : reservations.length === 0 ? (
          <p>Aucune réservation pour le moment.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--surface-alt)' }}>
                <th style={{ padding: '1rem' }}>Date de création</th>
                <th style={{ padding: '1rem' }}>Client</th>
                <th style={{ padding: '1rem' }}>Type</th>
                <th style={{ padding: '1rem' }}>Date souhaitée</th>
                <th style={{ padding: '1rem' }}>Statut</th>
                <th style={{ padding: '1rem' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map(res => (
                <tr key={res.id} style={{ borderBottom: '1px solid var(--surface-alt)' }}>
                  <td style={{ padding: '1rem' }}>{new Date(res.createdAt).toLocaleDateString()}</td>
                  <td style={{ padding: '1rem' }}>
                    <strong>{res.name}</strong><br/>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{res.phone} | {res.email}</span>
                  </td>
                  <td style={{ padding: '1rem', textTransform: 'capitalize' }}>{res.type}</td>
                  <td style={{ padding: '1rem' }}>{res.date || 'Non spécifiée'}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '0.2rem 0.6rem', 
                      borderRadius: 'var(--radius-full)', 
                      fontSize: '0.8rem',
                      background: res.status === 'Confirmé' ? '#d4edda' : res.status === 'Traité' ? '#e2e3e5' : '#fff3cd',
                      color: res.status === 'Confirmé' ? '#155724' : res.status === 'Traité' ? '#383d41' : '#856404'
                    }}>
                      {res.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => updateStatus(res.id, 'Confirmé')} className="btn" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem', background: '#28a745', color: 'white' }}>Confirmer</button>
                    <button onClick={() => updateStatus(res.id, 'Traité')} className="btn" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem', background: '#6c757d', color: 'white' }}>Archiver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
