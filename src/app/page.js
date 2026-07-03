'use client';

import { useState } from 'react';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function Home() {
  const [surface, setSurface] = useState(100);
  const [currentHeating, setCurrentHeating] = useState('gaz');
  
  const calculateSavings = () => {
    let baseCost = 0;
    if (currentHeating === 'gaz') baseCost = surface * 18;
    if (currentHeating === 'fioul') baseCost = surface * 22;
    if (currentHeating === 'electrique') baseCost = surface * 25;
    
    // Pompe à chaleur divisera environ la facture par 3
    const newCost = baseCost / 3;
    return Math.round(baseCost - newCost);
  };

  return (
    <div style={{ paddingTop: '140px' }}>
      {/* Hero Section */}
      <section className="section" style={{ 
        position: 'relative', 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/hero-ac.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: -1
        }} />
        
        <div className="container grid grid-2 animate-fade-in-up" style={{ alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              L'excellence du <span className="text-secondary">confort thermique.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Installation de climatisations haut de gamme, entretien expert et dépannage rapide. Les plus grandes marques à votre service.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="/reservation" className="btn btn-primary">Prendre Rendez-vous</a>
              <a href="#simulator" className="btn btn-secondary">Simuler mes économies</a>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.5rem' }}>dès 1 690€ <span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>TTC</span></h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Climatisation installée</p>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.5rem' }}>120€ <span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>TTC</span></h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Entretien complet</p>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.5rem' }}>Gratuit</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Devis dépannage</p>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <img src="/hero-ac.png" alt="Premium Air Conditioning" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            <div className="glass-panel" style={{ 
              position: 'absolute', 
              bottom: '-20px', 
              left: '-20px', 
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
              <div>
                <p style={{ margin: 0, fontWeight: 600 }}>Partenaire Certifié</p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Daikin, Mitsubishi, Panasonic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section id="simulator" className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2>Combien pouvez-vous <span className="text-accent">économiser</span> ?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Remplacer votre ancien système de chauffage par une pompe à chaleur moderne (air/air ou air/eau) peut réduire drastiquement vos factures énergétiques.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ Consommation divisée par 3</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ Rafraîchissement en été</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ Éligible aux aides de l'État</li>
            </ul>
          </div>
          
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Simulateur de rentabilité</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Surface de votre logement ({surface} m²)</label>
              <input 
                type="range" 
                min="30" max="300" step="5"
                value={surface} 
                onChange={(e) => setSurface(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary)' }}
              />
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Chauffage actuel</label>
              <select 
                value={currentHeating} 
                onChange={(e) => setCurrentHeating(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-alt)' }}
              >
                <option value="gaz">Chaudière Gaz</option>
                <option value="fioul">Chaudière Fioul</option>
                <option value="electrique">Radiateurs Électriques</option>
              </select>
            </div>
            
            <div style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center', border: '1px dashed var(--primary-light)' }}>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>Économie estimée :</p>
              <h2 className="text-secondary" style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>~{calculateSavings()} € / an</h2>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>*Estimation non contractuelle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section text-center">
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>Notre Expertise CVC</h2>
          <div className="grid grid-2" style={{ maxWidth: '900px', margin: '0 auto', gap: '3rem' }}>
            <a href="/climatisation" className="glass-panel" style={{ display: 'block', textDecoration: 'none', transition: 'transform 0.3s', overflow: 'hidden' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src="/expertise_clim.png" alt="Climatisation moderne dans un salon" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ color: 'var(--secondary)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>❄️ Climatisation & PAC</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Installation, entretien et dépannage de vos climatisations réversibles et pompes à chaleur. Confort garanti été comme hiver.</p>
                <span className="text-secondary" style={{ display: 'inline-block', marginTop: '1.5rem', fontWeight: 'bold' }}>En savoir plus →</span>
              </div>
            </a>
            
            <a href="/chauffage" className="glass-panel" style={{ display: 'block', textDecoration: 'none', transition: 'transform 0.3s', overflow: 'hidden' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src="/expertise_chauffage.png" alt="Chaudière moderne installée" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>🔥 Chauffage & Eau Chaude</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Pose de chaudières à Gaz THPE, dépannage de ballons d'eau chaude et entretien obligatoire. Sécurité et rendement optimal.</p>
                <span className="text-accent" style={{ display: 'inline-block', marginTop: '1.5rem', fontWeight: 'bold' }}>En savoir plus →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Guarantees */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Pourquoi choisir <span className="text-primary">Chrono Clim</span> ?</h2>
          <div className="grid grid-3">
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📜</div>
              <h4 style={{ color: 'var(--text-main)' }}>Certifications RGE</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Artisans qualifiés RGE QualiPAC et Qualigaz. Vous garantissant des travaux dans les normes et l'accès aux aides d'État (MaPrimeRénov').</p>
            </div>
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
              <h4 style={{ color: 'var(--text-main)' }}>Assurance Décennale</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Toutes nos installations sont couvertes par une assurance responsabilité civile et décennale pour votre tranquillité d'esprit pendant 10 ans.</p>
            </div>
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
              <h4 style={{ color: 'var(--text-main)' }}>Intervention 48h</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>En cas de panne totale de chauffage ou de fuite grave, nous nous engageons à intervenir sous 48h ouvrées. Devis gratuit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Satisfaction Client - Chiffres clés */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #003d6b 100%)', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Notre satisfaction client en chiffres</h2>
          <p style={{ opacity: 0.8, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Des résultats concrets qui témoignent de notre engagement au quotidien.
          </p>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '3rem', color: 'var(--secondary)', margin: '0' }}>98%</h2>
              <p style={{ opacity: 0.85, margin: '0.5rem 0 0 0' }}>Clients satisfaits</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', color: 'var(--secondary)', margin: '0' }}>+1 200</h2>
              <p style={{ opacity: 0.85, margin: '0.5rem 0 0 0' }}>Installations réalisées</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', color: 'var(--secondary)', margin: '0' }}>&lt;48h</h2>
              <p style={{ opacity: 0.85, margin: '0.5rem 0 0 0' }}>Délai d'intervention</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', color: 'var(--secondary)', margin: '0' }}>4.9/5</h2>
              <p style={{ opacity: 0.85, margin: '0.5rem 0 0 0' }}>Note Google Avis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section text-center">
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Prêt à améliorer votre <span className="text-secondary">confort</span> ?</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Que ce soit pour une nouvelle installation, un entretien annuel ou un dépannage urgent, notre équipe est à votre disposition.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/reservation" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Réserver en ligne</a>
            <a href="tel:0758939218" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>📞 07 58 93 92 18</a>
          </div>
        </div>
      </section>
    </div>
  );
}
