'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('chrono_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('chrono_cookie_consent', 'accepted');
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem('chrono_cookie_consent', 'refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: 'rgba(26, 32, 44, 0.97)',
      color: 'white',
      padding: '1.5rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
      backdropFilter: 'blur(10px)',
      borderTop: '2px solid var(--secondary)',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.2)'
    }}>
      <div style={{ maxWidth: '700px', fontSize: '0.9rem', lineHeight: '1.6' }}>
        <strong>🍪 Respect de votre vie privée</strong>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.85 }}>
          Ce site utilise uniquement des cookies fonctionnels nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de profilage n'est déposé. 
          En savoir plus dans notre <a href="/politique-confidentialite" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>politique de confidentialité</a>.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
        <button 
          onClick={refuse} 
          style={{
            background: 'transparent',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '9999px',
            padding: '0.6rem 1.5rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.borderColor = 'white'}
          onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
        >
          Refuser
        </button>
        <button 
          onClick={accept}
          style={{
            background: 'var(--secondary)',
            color: 'white',
            border: 'none',
            borderRadius: '9999px',
            padding: '0.6rem 1.5rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(0, 180, 216, 0.3)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
