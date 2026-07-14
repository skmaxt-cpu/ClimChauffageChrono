'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem 0.85rem 2.8rem',
  borderRadius: 'var(--radius-md)',
  border: '2px solid var(--surface-alt)',
  fontSize: '0.95rem',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  outline: 'none',
  background: 'var(--surface)',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  fontWeight: 600,
  fontSize: '0.9rem',
  color: 'var(--text-main)',
};

const iconStyle = {
  position: 'absolute',
  left: '0.9rem',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '1.1rem',
  pointerEvents: 'none',
  opacity: 0.5,
};

function ReservationForm() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type') || 'devis-clim';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    type: typeParam,
    date: '',
    timeSlot: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    if (typeParam) {
      setFormData(prev => ({ ...prev, type: typeParam }));
    }
  }, [typeParam]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getFocusStyle = (fieldName) => ({
    ...inputStyle,
    borderColor: focusedField === fieldName ? 'var(--primary)' : 'var(--surface-alt)',
    boxShadow: focusedField === fieldName ? '0 0 0 3px rgba(37, 99, 235, 0.1)' : 'none',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', address: '', type: 'devis-clim', date: '', timeSlot: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <div style={{ 
          width: '80px', height: '80px', borderRadius: '50%', 
          background: 'linear-gradient(135deg, #10b981, #059669)', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem auto', fontSize: '2.5rem', color: 'white',
          animation: 'popIn 0.5s ease'
        }}>✓</div>
        <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Demande envoyée avec succès !</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', lineHeight: '1.7' }}>
          Merci pour votre confiance. Notre équipe vous recontactera dans les <strong>2 heures ouvrées</strong> pour confirmer votre rendez-vous.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Un SMS de confirmation vous sera envoyé.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => setStatus('idle')} className="btn btn-primary">Nouvelle demande</button>
          <a href="/" className="btn btn-secondary">Retour à l&apos;accueil</a>
        </div>
        <style>{`
          @keyframes popIn {
            0% { transform: scale(0); opacity: 0; }
            70% { transform: scale(1.15); }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Étape 1 */}
      <div style={{ background: 'var(--surface-alt)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', display: 'inline-block', alignSelf: 'flex-start', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary)' }}>
        Étape 1 — Vos coordonnées
      </div>

      <div className="grid grid-2" style={{ gap: '1.5rem' }}>
        <div>
          <label style={labelStyle}>Nom complet *</label>
          <div style={{ position: 'relative' }}>
            <span style={iconStyle}>👤</span>
            <input 
              required type="text" name="name" placeholder="Jean Dupont"
              value={formData.name} onChange={handleChange}
              onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
              style={getFocusStyle('name')}
            />
          </div>
        </div>
        <div>
          <label style={labelStyle}>Téléphone *</label>
          <div style={{ position: 'relative' }}>
            <span style={iconStyle}>📱</span>
            <input 
              required type="tel" name="phone" placeholder="06 12 34 56 78"
              value={formData.phone} onChange={handleChange}
              onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)}
              style={getFocusStyle('phone')}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: '1.5rem' }}>
        <div>
          <label style={labelStyle}>Email</label>
          <div style={{ position: 'relative' }}>
            <span style={iconStyle}>✉️</span>
            <input 
              type="email" name="email" placeholder="jean@email.com"
              value={formData.email} onChange={handleChange}
              onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
              style={getFocusStyle('email')}
            />
          </div>
        </div>
        <div>
          <label style={labelStyle}>Adresse d&apos;intervention *</label>
          <div style={{ position: 'relative' }}>
            <span style={iconStyle}>📍</span>
            <input 
              required type="text" name="address" placeholder="12 rue de la Paix, 75002 Paris"
              value={formData.address} onChange={handleChange}
              onFocus={() => setFocusedField('address')} onBlur={() => setFocusedField(null)}
              style={getFocusStyle('address')}
            />
          </div>
        </div>
      </div>

      {/* Étape 2 */}
      <div style={{ background: 'var(--surface-alt)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', display: 'inline-block', alignSelf: 'flex-start', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary)', marginTop: '1rem' }}>
        Étape 2 — Votre intervention
      </div>

      <div>
        <label style={labelStyle}>Type d&apos;intervention *</label>
        <div style={{ position: 'relative' }}>
          <span style={iconStyle}>🔧</span>
          <select 
            required name="type" value={formData.type} onChange={handleChange}
            onFocus={() => setFocusedField('type')} onBlur={() => setFocusedField(null)}
            style={{ ...getFocusStyle('type'), appearance: 'none', cursor: 'pointer' }}
          >
            <optgroup label="❄️ Climatisation — Installation">
              <option value="devis-clim">Devis Mono Split (dès 1 690€ TTC)</option>
              <option value="devis-bisplit">Devis Bi-Split (dès 3 490€ TTC)</option>
              <option value="devis-trisplit">Devis Tri-Split (dès 4 790€ TTC)</option>
              <option value="devis-quadrisplit">Devis Quadri-Split (dès 5 990€ TTC)</option>
            </optgroup>
            <optgroup label="❄️ Climatisation — Entretien & Dépannage">
              <option value="entretien-clim">Entretien Clim/PAC (120€ TTC)</option>
              <option value="depannage-clim">Dépannage Clim/PAC (devis gratuit)</option>
            </optgroup>
            <optgroup label="🔥 Chauffage & Eau Chaude">
              <option value="devis-chauffage">Devis Chaudière / Ballon (sur devis)</option>
              <option value="entretien-chauffage">Entretien Chaudière Gaz (120€ TTC)</option>
              <option value="depannage-chauffage">Dépannage Chauffage / Eau Chaude (devis gratuit)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: '1.5rem' }}>
        <div>
          <label style={labelStyle}>Date souhaitée</label>
          <div style={{ position: 'relative' }}>
            <span style={iconStyle}>📅</span>
            <input 
              type="date" name="date" value={formData.date} onChange={handleChange}
              onFocus={() => setFocusedField('date')} onBlur={() => setFocusedField(null)}
              style={getFocusStyle('date')}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        <div>
          <label style={labelStyle}>Créneau préféré</label>
          <div style={{ position: 'relative' }}>
            <span style={iconStyle}>🕐</span>
            <select 
              name="timeSlot" value={formData.timeSlot} onChange={handleChange}
              onFocus={() => setFocusedField('timeSlot')} onBlur={() => setFocusedField(null)}
              style={{ ...getFocusStyle('timeSlot'), appearance: 'none', cursor: 'pointer' }}
            >
              <option value="">Pas de préférence</option>
              <option value="matin">Matin (8h - 12h)</option>
              <option value="apres-midi">Après-midi (13h - 17h)</option>
              <option value="fin-journee">Fin de journée (17h - 19h)</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Précisions sur votre besoin <span style={{ fontWeight: 'normal', color: 'var(--text-muted)' }}>(optionnel)</span></label>
        <textarea 
          name="message" value={formData.message} onChange={handleChange} rows="3"
          placeholder="Ex: Appartement 3 pièces, 2ème étage avec ascenseur, besoin d'une clim dans le salon et la chambre..."
          onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
          style={{ 
            ...getFocusStyle('message'), 
            paddingLeft: '1rem',
            resize: 'vertical',
            fontFamily: 'inherit',
          }}
        />
      </div>

      {status === 'error' && (
        <div style={{ 
          color: '#dc2626', fontSize: '0.9rem', padding: '0.75rem 1rem', 
          background: '#fef2f2', borderRadius: 'var(--radius-sm)', 
          border: '1px solid #fecaca' 
        }}>
          ⚠️ Une erreur est survenue. Veuillez réessayer ou nous appeler au <strong>07 58 93 92 18</strong>.
        </div>
      )}

      <button 
        type="submit" disabled={status === 'submitting'} 
        className="btn btn-primary" 
        style={{ 
          marginTop: '0.5rem', width: '100%', padding: '1rem', 
          fontSize: '1.1rem', fontWeight: 700,
          opacity: status === 'submitting' ? 0.7 : 1,
          cursor: status === 'submitting' ? 'wait' : 'pointer',
        }}
      >
        {status === 'submitting' ? '⏳ Envoi en cours...' : '✅ Envoyer ma demande'}
      </button>

      <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
        🔒 Vos données sont sécurisées et ne seront jamais partagées. Réponse sous 2h ouvrées.
      </p>
    </form>
  );
}

export default function Reservation() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', paddingBottom: '4rem' }} className="container">
      <h1 className="text-center" style={{ marginBottom: '1rem' }}>Réserver en <span className="text-secondary">Ligne</span></h1>
      <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        Remplissez le formulaire ci-dessous et notre équipe vous recontactera dans les 2 heures pour confirmer votre créneau.
      </p>

      <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Une urgence ? Besoin d&apos;aide ?</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
            Notre équipe d&apos;assistance est disponible pour répondre à vos questions et organiser une intervention d&apos;urgence si nécessaire. N&apos;hésitez pas à nous appeler directement.
          </p>
          
          <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--surface-alt)', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📞</span>
              <div>
                <strong style={{ display: 'block' }}>Assistance Téléphonique</strong>
                <a href="tel:0758939218" style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none' }}>07 58 93 92 18</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>✉️</span>
              <div>
                <strong style={{ display: 'block' }}>Email</strong>
                <a href="mailto:cvcchrono@gmail.com" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>cvcchrono@gmail.com</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🕒</span>
              <div>
                <strong style={{ display: 'block' }}>Horaires d&apos;ouverture</strong>
                <span style={{ color: 'var(--text-muted)' }}>Lun - Ven : 8h00 - 19h00</span><br/>
                <span style={{ color: 'var(--text-muted)' }}>Samedi : Urgences uniquement</span>
              </div>
            </div>
          </div>

          <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ Devis 100% gratuit et sans engagement</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ Réponse garantie sous 2h ouvrées</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ Paiement sécurisé après intervention</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ Annulation gratuite jusqu&apos;à 24h avant</li>
          </ul>
        </div>

        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>📋 Formulaire de demande</h3>
          <Suspense fallback={<div>Chargement du formulaire...</div>}>
            <ReservationForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
