'use client';

import { useState, useEffect, useCallback } from 'react';

const reviews = [
  {
    name: "Sophie L.",
    service: "Installation Climatisation",
    stars: 5,
    text: "Installation d'un système multi-splits Daikin dans notre maison. L'équipe était ponctuelle, le travail très propre, aucune gaine apparente. Je recommande Chrono Clim à 100% !",
  },
  {
    name: "Marc D.",
    service: "Dépannage Chauffage",
    stars: 5,
    text: "Ma chaudière est tombée en panne un dimanche de décembre. Le technicien Chrono Clim est venu dès le lundi matin et a changé la pièce défectueuse en 1h. Super réactifs !",
  },
  {
    name: "Jean-Claude M.",
    service: "Entretien Annuel PAC",
    stars: 5,
    text: "Le technicien d'entretien prend toujours le temps de bien nettoyer les filtres et de vérifier les pressions de ma pompe à chaleur. Contrat annuel très honnête.",
  },
  {
    name: "Isabelle R.",
    service: "Installation Chaudière Gaz",
    stars: 5,
    text: "Remplacement de notre vieille chaudière par une condensation. Résultat : -30% sur notre facture de gaz dès le premier hiver ! L'équipe nous a aussi aidés pour MaPrimeRénov'.",
  },
  {
    name: "Thomas P.",
    service: "Dépannage Climatisation",
    stars: 5,
    text: "Notre clim ne produisait plus de froid en pleine canicule. Le technicien a trouvé une micro-fuite, rechargé le gaz et tout refonctionne parfaitement. Intervention rapide et propre.",
  },
  {
    name: "Catherine B.",
    service: "Installation Gainable",
    stars: 5,
    text: "Nous avons opté pour un système gainable dans notre maison neuve. Le résultat est bluffant : aucun appareil visible, un silence total et une température homogène partout.",
  },
  {
    name: "Laurent G.",
    service: "Dépannage Ballon Eau Chaude",
    stars: 4,
    text: "Plus d'eau chaude un samedi matin. Appel à Chrono Clim, intervention le lundi avec remplacement du groupe de sécurité. Technicien sympathique et tarif raisonnable.",
  },
  {
    name: "Nathalie F.",
    service: "Entretien Chaudière Gaz",
    stars: 5,
    text: "Entretien annuel réalisé avec soin. Le technicien a pris le temps de m'expliquer l'analyse de combustion et m'a donné des conseils pour optimiser mon thermostat. Très pro.",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % (reviews.length - 2));
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length - 2) % (reviews.length - 2));
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <h2 className="text-center" style={{ marginBottom: '0.5rem' }}>Ce que disent nos clients</h2>
        <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Plus de 200 avis vérifiés — Note moyenne : <strong style={{ color: '#FFD700' }}>4.9 / 5 ★</strong>
        </p>

        <div 
          style={{ position: 'relative' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel track */}
          <div style={{
            display: 'flex',
            transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
            transform: `translateX(-${current * (100 / 3)}%)`,
            gap: '1.5rem'
          }}>
            {reviews.map((review, index) => (
              <div 
                key={index} 
                style={{ 
                  minWidth: 'calc(33.333% - 1rem)', 
                  padding: '2rem',
                  background: 'var(--surface)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--surface-alt)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.3s'
                }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.15rem', color: '#FFD700', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
                </div>

                {/* Quote */}
                <p style={{ 
                  color: 'var(--text-muted)', 
                  fontStyle: 'italic', 
                  lineHeight: '1.7',
                  flex: 1,
                  fontSize: '0.95rem',
                  margin: '0 0 1.5rem 0'
                }}>
                  "{review.text}"
                </p>

                {/* Author */}
                <div style={{ borderTop: '1px solid var(--surface-alt)', paddingTop: '1rem' }}>
                  <h5 style={{ margin: 0, color: 'var(--text-main)' }}>{review.name}</h5>
                  <span style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>{review.service}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={prev}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'white',
              border: '1px solid var(--surface-alt)',
              boxShadow: 'var(--shadow-md)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: 'var(--primary)',
              transition: 'all 0.2s',
              zIndex: 2
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--primary)'; }}
          >
            ‹
          </button>
          <button 
            onClick={next}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'white',
              border: '1px solid var(--surface-alt)',
              boxShadow: 'var(--shadow-md)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: 'var(--primary)',
              transition: 'all 0.2s',
              zIndex: 2
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--primary)'; }}
          >
            ›
          </button>
        </div>

        {/* Dots indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {Array.from({ length: reviews.length - 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: current === i ? '24px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: 'none',
                background: current === i ? 'var(--primary)' : 'var(--surface-alt)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
