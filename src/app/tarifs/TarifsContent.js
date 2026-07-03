'use client';

import { useState } from 'react';

export default function TarifsContent() {
  const [activeTab, setActiveTab] = useState('clim'); // 'clim' or 'chauffage'

  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', paddingBottom: '4rem' }} className="container">
      <h1 className="text-center" style={{ marginBottom: '1rem' }}>Nos <span className="text-secondary">Tarifs Transparents</span></h1>
      <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
        Chez Chrono Clim, pas de mauvaise surprise. Nos tarifs sont clairs, compétitifs et étudiés pour vous offrir le meilleur rapport qualité/prix.
      </p>

      {/* TABS */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
        <button 
          onClick={() => setActiveTab('clim')}
          style={{
            padding: '0.8rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            borderRadius: 'var(--radius-full)',
            border: activeTab === 'clim' ? '2px solid var(--primary)' : '2px solid var(--surface-alt)',
            background: activeTab === 'clim' ? 'var(--primary)' : 'transparent',
            color: activeTab === 'clim' ? 'white' : 'var(--text-main)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          ❄️ Climatisation
        </button>
        <button 
          onClick={() => setActiveTab('chauffage')}
          style={{
            padding: '0.8rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            borderRadius: 'var(--radius-full)',
            border: activeTab === 'chauffage' ? '2px solid var(--accent)' : '2px solid var(--surface-alt)',
            background: activeTab === 'chauffage' ? 'var(--accent)' : 'transparent',
            color: activeTab === 'chauffage' ? 'white' : 'var(--text-main)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          🔥 Chauffage & Eau Chaude
        </button>
      </div>

      {/* TAB CONTENT: CLIMATISATION */}
      {activeTab === 'clim' && (
        <div style={{ animation: 'fadeIn 0.4s ease' }}>
          <h2 style={{ marginBottom: '2rem', color: 'var(--primary)', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>Climatisation Réversible — Mono Split</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Une unité intérieure + une unité extérieure. Idéal pour climatiser une pièce (chambre, salon, bureau). Fourniture et pose incluses, matériel grande marque.
          </p>
          <div className="grid grid-3" style={{ marginBottom: '4rem' }}>
            {/* Mono Split 2.5kW */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--surface-alt)', display: 'inline-block', padding: '0.3rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
                  Pièce jusqu'à 25 m²
                </div>
                <h3 style={{ margin: 0 }}>Mono Split 2,5 kW</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Chambre · Bureau · Petit salon</p>
                <h2 className="text-primary" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>à partir de 1 690€<span style={{ fontSize: '1rem' }}> TTC</span></h2>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ Matériel grande marque inclus</li>
                <li>✓ Pose par frigoriste certifié</li>
                <li>✓ Mise en service et réglages</li>
                <li>✓ Garantie 5 ans pièces</li>
                <li>✓ Liaison frigorifique jusqu'à 5m</li>
              </ul>
              <a href="/reservation?type=devis-clim" className="btn btn-primary" style={{ width: '100%' }}>Demander un devis</a>
            </div>

            {/* Mono Split 3.5kW */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', border: '2px solid var(--secondary)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--secondary)', color: 'white', padding: '0.2rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                LE PLUS DEMANDÉ
              </div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--surface-alt)', display: 'inline-block', padding: '0.3rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '1rem' }}>
                  Pièce jusqu'à 35 m²
                </div>
                <h3 style={{ margin: 0 }}>Mono Split 3,5 kW</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Salon · Séjour · Grand bureau</p>
                <h2 className="text-secondary" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>à partir de 1 890€<span style={{ fontSize: '1rem' }}> TTC</span></h2>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ Matériel grande marque inclus</li>
                <li>✓ Pose par frigoriste certifié</li>
                <li>✓ Mise en service et réglages</li>
                <li>✓ Garantie 5 ans pièces</li>
                <li>✓ Liaison frigorifique jusqu'à 5m</li>
              </ul>
              <a href="/reservation?type=devis-clim" className="btn btn-secondary" style={{ width: '100%', borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>Demander un devis</a>
            </div>

            {/* Mono Split 5kW */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--surface-alt)', display: 'inline-block', padding: '0.3rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '1rem' }}>
                  Pièce jusqu'à 50 m²
                </div>
                <h3 style={{ margin: 0 }}>Mono Split 5 kW</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Grand salon · Espace ouvert · Commerce</p>
                <h2 className="text-accent" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>à partir de 2 390€<span style={{ fontSize: '1rem' }}> TTC</span></h2>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ Matériel grande marque inclus</li>
                <li>✓ Pose par frigoriste certifié</li>
                <li>✓ Mise en service et réglages</li>
                <li>✓ Garantie 5 ans pièces</li>
                <li>✓ Liaison frigorifique jusqu'à 5m</li>
              </ul>
              <a href="/reservation?type=devis-clim" className="btn" style={{ width: '100%', background: 'var(--accent)', color: 'white' }}>Demander un devis</a>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem', color: 'var(--primary)', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>Climatisation Réversible — Multi Split</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Une unité extérieure + plusieurs unités intérieures. La solution idéale pour climatiser plusieurs pièces avec un seul groupe. Fourniture et pose incluses.
          </p>
          <div className="grid grid-3" style={{ marginBottom: '4rem' }}>
            {/* Bi-Split */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--surface-alt)', display: 'inline-block', padding: '0.3rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
                  2 pièces
                </div>
                <h3 style={{ margin: 0 }}>Bi-Split</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>1 groupe extérieur + 2 unités intérieures</p>
                <h2 className="text-primary" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>à partir de 3 490€<span style={{ fontSize: '1rem' }}> TTC</span></h2>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ 2 unités intérieures murales</li>
                <li>✓ Puissances adaptées à chaque pièce</li>
                <li>✓ Pose complète et mise en service</li>
                <li>✓ Garantie 5 ans pièces</li>
                <li>✓ Liaisons frigorifiques incluses</li>
              </ul>
              <a href="/reservation?type=devis-clim" className="btn btn-primary" style={{ width: '100%' }}>Demander un devis</a>
            </div>

            {/* Tri-Split */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', border: '2px solid var(--secondary)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--secondary)', color: 'white', padding: '0.2rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                MEILLEUR RAPPORT QUALITÉ/PRIX
              </div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--surface-alt)', display: 'inline-block', padding: '0.3rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '1rem' }}>
                  3 pièces
                </div>
                <h3 style={{ margin: 0 }}>Tri-Split</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>1 groupe extérieur + 3 unités intérieures</p>
                <h2 className="text-secondary" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>à partir de 4 790€<span style={{ fontSize: '1rem' }}> TTC</span></h2>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ 3 unités intérieures murales</li>
                <li>✓ Puissances adaptées à chaque pièce</li>
                <li>✓ Pose complète et mise en service</li>
                <li>✓ Garantie 5 ans pièces</li>
                <li>✓ Liaisons frigorifiques incluses</li>
              </ul>
              <a href="/reservation?type=devis-clim" className="btn btn-secondary" style={{ width: '100%', borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>Demander un devis</a>
            </div>

            {/* Quadri-Split */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--surface-alt)', display: 'inline-block', padding: '0.3rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '1rem' }}>
                  4 pièces
                </div>
                <h3 style={{ margin: 0 }}>Quadri-Split</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>1 groupe extérieur + 4 unités intérieures</p>
                <h2 className="text-accent" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>à partir de 5 990€<span style={{ fontSize: '1rem' }}> TTC</span></h2>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ 4 unités intérieures murales</li>
                <li>✓ Puissances adaptées à chaque pièce</li>
                <li>✓ Pose complète et mise en service</li>
                <li>✓ Garantie 5 ans pièces</li>
                <li>✓ Liaisons frigorifiques incluses</li>
              </ul>
              <a href="/reservation?type=devis-clim" className="btn" style={{ width: '100%', background: 'var(--accent)', color: 'white' }}>Demander un devis</a>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem', color: 'var(--primary)', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>Climatisation Réversible — Gainable</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            La solution la plus discrète et esthétique. L'unité intérieure est cachée dans les combles ou le faux plafond, seules les grilles de soufflage sont visibles.
          </p>
          <div className="grid grid-1" style={{ marginBottom: '4rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ background: 'var(--surface-alt)', display: 'inline-block', padding: '0.3rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
                Maison Entière ou Bureaux
              </div>
              <h3 style={{ margin: 0 }}>Système Gainable</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '600px', marginTop: '1rem' }}>
                Confort optimal dans toutes les pièces de la maison avec contrôle indépendant de la température par zone.
              </p>
              <h2 className="text-primary" style={{ fontSize: '2.5rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>Sur Devis</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', margin: '2rem 0', color: 'var(--text-main)' }}>
                <li>✓ Discrétion absolue (uniquement grilles visibles)</li>
                <li>✓ Diffusion très douce de l'air</li>
                <li>✓ Contrôle pièce par pièce possible</li>
                <li>✓ Idéal pour construction neuve ou rénovation</li>
              </ul>
              <a href="/reservation?type=devis-clim" className="btn btn-primary" style={{ width: '100%', maxWidth: '300px' }}>Demander une étude gratuite</a>
            </div>
          </div>

          <h2 style={{ marginBottom: '2rem', color: 'var(--primary)', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>Entretien & Dépannage Climatisation</h2>
          <div className="grid grid-2" style={{ marginBottom: '4rem' }}>
            {/* Entretien PAC */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', border: '2px solid var(--secondary)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--secondary)', color: 'white', padding: '0.2rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                LE PLUS POPULAIRE
              </div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ margin: 0 }}>Entretien Clim/PAC</h3>
                <p style={{ color: 'var(--text-muted)' }}>Pour une durée de vie optimale</p>
                <h2 className="text-secondary" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>à partir de 120€<span style={{ fontSize: '1rem' }}> TTC</span></h2>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ Nettoyage complet (filtres, échangeurs)</li>
                <li>✓ Vérification des pressions de gaz</li>
                <li>✓ Test d'étanchéité</li>
                <li>✓ Attestation d'entretien fournie</li>
              </ul>
              <a href="/reservation?type=entretien-clim" className="btn btn-secondary" style={{ width: '100%', borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>Réserver mon entretien</a>
            </div>

            {/* Dépannage PAC */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ margin: 0 }}>Dépannage Climatisation</h3>
                <p style={{ color: 'var(--text-muted)' }}>Intervention rapide sur panne</p>
                <h2 className="text-accent" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>Gratuit</h2>
                <p style={{ margin: 0, fontSize: '0.8rem' }}>(Le devis de réparation)</p>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ Déplacement rapide (&lt; 48h)</li>
                <li>✓ Diagnostic précis de la panne</li>
                <li>✓ Devis gratuit sans engagement</li>
                <li>✓ Réparation toutes marques</li>
              </ul>
              <a href="/reservation?type=depannage" className="btn" style={{ width: '100%', background: 'var(--accent)', color: 'white' }}>Urgence Dépannage</a>
            </div>
          </div>

          {/* Détail des contrats d'entretien Clim */}
          <div style={{ marginTop: '3rem', background: 'var(--surface-alt)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <h2 className="text-center" style={{ marginBottom: '1.5rem' }}>Les Garanties de notre Contrat d'Entretien Climatisation</h2>
            <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
              Souscrire à un contrat d'entretien annuel chez Chrono Clim, c'est la garantie d'une tranquillité d'esprit totale. Nos visites préventives couvrent 10 points de contrôle stricts.
            </p>
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--surface)' }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>❄️ Les 10 points de contrôle</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <li>1. Nettoyage et désinfection de la batterie de l'unité intérieure</li>
                <li>2. Nettoyage de la carrosserie et des filtres à air</li>
                <li>3. Contrôle de l'écoulement des eaux de condensation (bacs et pompes)</li>
                <li>4. Dépoussiérage et nettoyage de l'unité extérieure</li>
                <li>5. Vérification des fixations et supports</li>
                <li>6. Contrôle des intensités absorbées par le compresseur</li>
                <li>7. Relevé des températures (soufflage / reprise)</li>
                <li>8. Vérification des pressions du fluide frigorigène</li>
                <li>9. Contrôle de l'étanchéité du circuit frigorifique</li>
                <li>10. Vérification du bon fonctionnement des télécommandes</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: CHAUFFAGE */}
      {activeTab === 'chauffage' && (
        <div style={{ animation: 'fadeIn 0.4s ease' }}>
          <h2 style={{ marginBottom: '2rem', color: 'var(--accent)', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>Chauffage : Chaudière Gaz & Chauffe-eau</h2>
          <div className="grid grid-2" style={{ marginBottom: '4rem' }}>
            {/* Installation Chaudière Gaz */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ margin: 0 }}>Installation Chaudière</h3>
                <p style={{ color: 'var(--text-muted)' }}>Gaz à Condensation (THPE)</p>
                <h2 className="text-primary" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>à partir de 2 890€<span style={{ fontSize: '1rem' }}> TTC</span></h2>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ Fourniture et pose incluses</li>
                <li>✓ Modèle Très Haute Performance</li>
                <li>✓ Désembouage de l'installation</li>
                <li>✓ Déduction des aides de l'État (CEE / MaPrimeRénov)</li>
              </ul>
              <a href="/reservation?type=devis-chauffage" className="btn btn-primary" style={{ width: '100%' }}>Demander un devis</a>
            </div>

            {/* Installation Chauffe-eau */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ margin: 0 }}>Remplacement Ballon</h3>
                <p style={{ color: 'var(--text-muted)' }}>Chauffe-eau Électrique (150L - 200L)</p>
                <h2 className="text-primary" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>à partir de 990€<span style={{ fontSize: '1rem' }}> TTC</span></h2>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ Fourniture du ballon (Thermor/Atlantic)</li>
                <li>✓ Vidange et dépose de l'ancien ballon</li>
                <li>✓ Pose, raccordement et mise en eau</li>
                <li>✓ Mise en déchetterie incluse</li>
              </ul>
              <a href="/reservation?type=devis-chauffage" className="btn btn-primary" style={{ width: '100%' }}>Demander un devis</a>
            </div>

            {/* Entretien Chaudière */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ margin: 0 }}>Entretien Gaz</h3>
                <p style={{ color: 'var(--text-muted)' }}>Visite annuelle obligatoire</p>
                <h2 className="text-secondary" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>à partir de 120€<span style={{ fontSize: '1rem' }}> TTC</span></h2>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ Nettoyage brûleur et corps de chauffe</li>
                <li>✓ Contrôle des sécurités</li>
                <li>✓ Mesure du monoxyde de carbone</li>
                <li>✓ Attestation conforme fournie</li>
              </ul>
              <a href="/reservation?type=entretien-chauffage" className="btn btn-secondary" style={{ width: '100%', borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>Réserver mon entretien</a>
            </div>

            {/* Dépannage Chauffage */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ margin: 0 }}>Dépannage Urgent</h3>
                <p style={{ color: 'var(--text-muted)' }}>Plus d'eau chaude ou de chauffage ?</p>
                <h2 className="text-accent" style={{ fontSize: '2rem', marginTop: '1rem', whiteSpace: 'nowrap' }}>Gratuit</h2>
                <p style={{ margin: 0, fontSize: '0.8rem' }}>(Le devis de réparation)</p>
              </div>
              <ul style={{ listStyle: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <li>✓ Recherche de fuite (gaz/eau)</li>
                <li>✓ Remplacement résistance / thermostat</li>
                <li>✓ Changement de pièces défectueuses</li>
                <li>✓ Déplacement prioritaire</li>
              </ul>
              <a href="/reservation?type=depannage-chauffage" className="btn" style={{ width: '100%', background: 'var(--accent)', color: 'white' }}>Urgence Dépannage</a>
            </div>
          </div>

          {/* Détail des contrats d'entretien Chauffage */}
          <div style={{ marginTop: '3rem', background: 'var(--surface-alt)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <h2 className="text-center" style={{ marginBottom: '1.5rem' }}>Les Garanties de notre Contrat d'Entretien Chaudière</h2>
            <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
              L'entretien annuel de votre chaudière gaz est obligatoire. Nos visites préventives couvrent 10 points de contrôle stricts pour votre sécurité.
            </p>
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--surface)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem', borderBottom: '1px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>🔥 Les 10 points de contrôle</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <li>1. Nettoyage du brûleur et de la veilleuse</li>
                <li>2. Nettoyage du corps de chauffe et de l'extracteur</li>
                <li>3. Contrôle du circulateur (pompe)</li>
                <li>4. Vérification et réglage des organes de régulation</li>
                <li>5. Vérification des dispositifs de sécurité</li>
                <li>6. Contrôle du vase d'expansion et gonflage si nécessaire</li>
                <li>7. Vérification de l'étanchéité des circuits de gaz et d'eau</li>
                <li>8. Mesure de la température de l'eau chaude sanitaire</li>
                <li>9. Analyse des gaz de combustion et mesure du monoxyde de carbone</li>
                <li>10. Réglage de la combustion pour un rendement optimal</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
