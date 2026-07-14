'use client';

import { useState, useEffect, useCallback } from 'react';

export default function ReservationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    timeSlot: '',
    type: 'devis-clim',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  // Intercept all clicks on reservation links
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href*="/reservation"]');
      if (link) {
        e.preventDefault();
        // Extract type from URL params
        const url = new URL(link.href, window.location.origin);
        const type = url.searchParams.get('type');
        if (type) {
          setFormData(prev => ({ ...prev, type }));
        }
        setIsOpen(true);
        setStep(1);
        setStatus('idle');
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        setFormData({ name: '', email: '', phone: '', address: '', timeSlot: '', type: 'devis-clim', date: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const typeLabels = {
    'devis-clim': '❄️ Devis Mono Split',
    'devis-bisplit': '❄️ Devis Bi-Split',
    'devis-trisplit': '❄️ Devis Tri-Split',
    'devis-quadrisplit': '❄️ Devis Quadri-Split',
    'entretien-clim': '❄️ Entretien Clim/PAC',
    'depannage-clim': '❄️ Dépannage Clim/PAC',
    'devis-chauffage': '🔥 Devis Chaudière/Ballon',
    'entretien-chauffage': '🔥 Entretien Chaudière Gaz',
    'depannage-chauffage': '🔥 Dépannage Chauffage',
    'depannage': '🚨 Dépannage Urgent',
  };

  if (!isOpen) return null;

  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'modalFadeIn 0.3s ease',
        padding: '1rem'
      }}
    >
      <div style={{
        background: 'white',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '520px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
        animation: 'modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative'
      }}>

        {/* Close button */}
        <button 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'var(--surface-alt)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            transition: 'all 0.2s',
            zIndex: 1
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = '#e0e0e0'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'var(--surface-alt)'; }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
          padding: '2rem 2rem 1.5rem',
          borderRadius: '20px 20px 0 0',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'white', margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>
            {status === 'success' ? '✅ Demande envoyée !' : 'Réserver en ligne'}
          </h2>
          {status !== 'success' && (
            <p style={{ margin: 0, opacity: 0.85, fontSize: '0.9rem' }}>
              Remplissez le formulaire, nous vous rappelons sous 24h.
            </p>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: '2rem' }}>
          
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
                Votre demande a bien été enregistrée.<br/>
                Notre équipe vous recontactera <strong>sous 24h</strong> pour confirmer votre créneau.
              </p>
              <button 
                onClick={() => setIsOpen(false)} 
                className="btn btn-primary" 
                style={{ width: '100%' }}
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {/* Step indicator */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{
                  flex: 1,
                  height: '4px',
                  borderRadius: '2px',
                  background: 'var(--primary)',
                  transition: 'all 0.3s'
                }} />
                <div style={{
                  flex: 1,
                  height: '4px',
                  borderRadius: '2px',
                  background: step >= 2 ? 'var(--primary)' : 'var(--surface-alt)',
                  transition: 'all 0.3s'
                }} />
              </div>

              {step === 1 && (
                <>
                  <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-main)' }}>1. Votre intervention</p>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Type d'intervention *</label>
                    <select 
                      required 
                      name="type" 
                      value={formData.type} 
                      onChange={handleChange} 
                      style={{ 
                        width: '100%', 
                        padding: '0.8rem 1rem', 
                        borderRadius: '10px', 
                        border: '2px solid var(--surface-alt)', 
                        fontSize: '0.95rem',
                        transition: 'border-color 0.2s',
                        outline: 'none',
                        background: 'white'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--surface-alt)'}
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

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Date souhaitée</label>
                      <input 
                        type="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        style={{ 
                          width: '100%', 
                          padding: '0.8rem 1rem', 
                          borderRadius: '10px', 
                          border: '2px solid var(--surface-alt)', 
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--surface-alt)'}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Créneau</label>
                      <select 
                        name="timeSlot" 
                        value={formData.timeSlot} 
                        onChange={handleChange} 
                        style={{ 
                          width: '100%', 
                          padding: '0.8rem 1rem', 
                          borderRadius: '10px', 
                          border: '2px solid var(--surface-alt)', 
                          fontSize: '0.95rem',
                          outline: 'none',
                          background: 'white'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--surface-alt)'}
                      >
                        <option value="">Peu importe</option>
                        <option value="matin">Matin (8h-12h)</option>
                        <option value="apres-midi">Après-midi (13h-17h)</option>
                        <option value="fin-journee">Fin de journée (17h-19h)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Description (optionnel)</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows="3" 
                      placeholder="Décrivez votre besoin ou le problème rencontré..."
                      style={{ 
                        width: '100%', 
                        padding: '0.8rem 1rem', 
                        borderRadius: '10px', 
                        border: '2px solid var(--surface-alt)', 
                        fontSize: '0.95rem',
                        resize: 'vertical',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--surface-alt)'}
                    />
                  </div>

                  <button 
                    type="button" 
                    onClick={() => setStep(2)} 
                    className="btn btn-primary" 
                    style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}
                  >
                    Continuer →
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-main)' }}>2. Vos coordonnées</p>
                  
                  {/* Selected service recap */}
                  <div style={{ 
                    background: 'var(--surface-alt)', 
                    padding: '0.8rem 1rem', 
                    borderRadius: '10px', 
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span>{typeLabels[formData.type] || formData.type}</span>
                    <button 
                      type="button" 
                      onClick={() => setStep(1)} 
                      style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}
                    >
                      Modifier
                    </button>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Nom complet *</label>
                    <input 
                      required 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Jean Dupont"
                      style={{ 
                        width: '100%', 
                        padding: '0.8rem 1rem', 
                        borderRadius: '10px', 
                        border: '2px solid var(--surface-alt)', 
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--surface-alt)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Téléphone *</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="06 12 34 56 78"
                      style={{ 
                        width: '100%', 
                        padding: '0.8rem 1rem', 
                        borderRadius: '10px', 
                        border: '2px solid var(--surface-alt)', 
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--surface-alt)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="jean@email.com"
                      style={{ 
                        width: '100%', 
                        padding: '0.8rem 1rem', 
                        borderRadius: '10px', 
                        border: '2px solid var(--surface-alt)', 
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--surface-alt)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Adresse d'intervention *</label>
                    <input 
                      required 
                      type="text" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleChange} 
                      placeholder="12 rue de la Paix, 75002 Paris"
                      style={{ 
                        width: '100%', 
                        padding: '0.8rem 1rem', 
                        borderRadius: '10px', 
                        border: '2px solid var(--surface-alt)', 
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--surface-alt)'}
                    />
                  </div>

                  {/* RGPD consent */}
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                    <input type="checkbox" required style={{ marginTop: '3px', accentColor: 'var(--primary)' }} />
                    <span>J'accepte que mes données soient traitées conformément à la <a href="/politique-confidentialite" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>politique de confidentialité</a> de Clim Chrono.</span>
                  </label>

                  {status === 'error' && (
                    <div style={{ color: '#d32f2f', fontSize: '0.9rem', background: '#ffeaea', padding: '0.8rem', borderRadius: '8px' }}>
                      ⚠️ Une erreur est survenue, veuillez réessayer.
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <button 
                      type="button" 
                      onClick={() => setStep(1)} 
                      className="btn btn-secondary" 
                      style={{ flex: 1, padding: '0.9rem' }}
                    >
                      ← Retour
                    </button>
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'} 
                      className="btn btn-primary" 
                      style={{ flex: 2, padding: '0.9rem', fontSize: '1rem' }}
                    >
                      {status === 'submitting' ? '⏳ Envoi...' : '✓ Confirmer'}
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}} />
    </div>
  );
}
