import Link from 'next/link';
import Image from 'next/image';
import InteractivePacSchema from '@/components/InteractivePacSchema';

export const metadata = {
  title: 'Expert Chauffage & Chaudière Gaz - Clim Chrono',
  description: 'Pose, entretien et dépannage de chaudières à gaz et ballons d\'eau chaude. Assurez votre sécurité et réduisez vos factures avec Clim Chrono.',
  alternates: {
    canonical: 'https://www.chronoclim.fr/chauffage',
  },
};

export default function Chauffage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', paddingBottom: '5rem' }} className="container">
      <h1 className="text-center" style={{ marginBottom: '1rem' }}>Expertise <span className="text-accent">Chauffage & Eau Chaude</span></h1>
      <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
        Ne laissez pas le froid gâcher votre confort. Nos techniciens chauffagistes interviennent pour la pose, l'entretien et le dépannage de vos pompes à chaleur, chaudières à gaz et ballons d'eau chaude.
      </p>

      {/* =========================================
          SECTION 1 : POMPE A CHALEUR AIR/EAU
      ========================================= */}
      <div style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', borderBottom: '2px solid #10B981', paddingBottom: '1rem' }}>
          <span style={{ fontSize: '2.5rem' }}>🍃</span>
          <h2 style={{ margin: 0, color: '#10B981', fontSize: '2rem' }}>La Pompe à Chaleur Air/Eau (PAC)</h2>
        </div>

        {/* Avantages PAC Air/Eau */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 className="text-center" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Pourquoi remplacer votre chaudière par une PAC Air/Eau ?</h3>
          <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem auto', fontSize: '1.05rem' }}>
            La Pompe à Chaleur (PAC) Air/Eau est la solution de rénovation énergétique par excellence pour remplacer une vieille chaudière au fioul ou au gaz. Elle s'adapte à votre réseau de chauffage existant et offre des avantages imbattables.
          </p>
          
          <style dangerouslySetInnerHTML={{__html: `
            .premium-card {
              position: relative;
              background: var(--surface);
              border: 1px solid var(--surface-alt);
              border-radius: var(--radius-lg);
              padding: 2.5rem 2rem;
              overflow: hidden;
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              z-index: 1;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            }
            .premium-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.1);
              border-color: var(--primary);
            }
            .premium-card::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; height: 4px;
              background: linear-gradient(90deg, var(--primary), var(--secondary));
              transform: scaleX(0);
              transform-origin: left;
              transition: transform 0.4s ease;
            }
            .premium-card:hover::before {
              transform: scaleX(1);
            }
            .card-number {
              position: absolute;
              bottom: -20px;
              right: 10px;
              font-size: 8rem;
              font-weight: 900;
              color: var(--text-main);
              opacity: 0.04;
              z-index: -1;
              line-height: 1;
              transition: all 0.4s ease;
            }
            .premium-card:hover .card-number {
              color: var(--primary);
              opacity: 0.08;
              transform: scale(1.05) translateX(-10px);
            }
            .card-title {
              font-size: 1.25rem;
              font-weight: 700;
              color: var(--text-main);
              margin-bottom: 1rem;
            }
            .card-text {
              color: var(--text-muted);
              font-size: 0.95rem;
              line-height: 1.6;
              margin: 0;
            }
            .premium-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
              gap: 2rem;
            }
          `}} />

          <div className="premium-grid">
            <div className="premium-card">
              <div className="card-number">01</div>
              <h4 className="card-title">Économies Drastiques</h4>
              <p className="card-text">
                Pour 1 kWh consommé, la PAC restitue jusqu'à 4 kWh de chaleur. Votre facture de chauffage s'effondre littéralement (jusqu'à -70% vs gaz/fioul).
              </p>
            </div>
            
            <div className="premium-card">
              <div className="card-number">02</div>
              <h4 className="card-title">Zéro Carbone</h4>
              <p className="card-text">
                Oubliez les cuves à fioul et les rejets polluants. Vous passez à une énergie d'avenir, valorisant immédiatement la note DPE de votre bien.
              </p>
            </div>
            
            <div className="premium-card">
              <div className="card-number">03</div>
              <h4 className="card-title">Zéro Travaux Lourds</h4>
              <p className="card-text">
                La PAC Air/Eau se raccorde en lieu et place de votre chaudière. Vous conservez toute votre installation de radiateurs existante intacte.
              </p>
            </div>
            
            <div className="premium-card">
              <div className="card-number">04</div>
              <h4 className="card-title">Primes d'État</h4>
              <p className="card-text">
                C'est le système le plus subventionné via MaPrimeRénov' et CEE. L'investissement initial est très largement amorti par ces aides massives.
              </p>
            </div>
          </div>
        </div>

        {/* Schéma Interactif d'Installation PAC */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 className="text-center" style={{ marginBottom: '1rem' }}>Visualisez votre future Pompe à Chaleur Air/Eau</h3>
          <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.05rem' }}>
            Découvrez le rôle de chaque équipement d'une installation de Pompe à Chaleur Air/Eau complète à travers notre schéma interactif.
          </p>
          <InteractivePacSchema />
        </div>

        {/* Nos Marques Partenaires PAC */}
        <div style={{ marginBottom: '5rem', textAlign: 'center', padding: '3rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '3px' }}>
            Partenaire certifié des leaders mondiaux de la Pompe à Chaleur
          </h3>
          <style dangerouslySetInnerHTML={{__html: `
            .brands-container {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 4rem;
              flex-wrap: wrap;
              opacity: 0.6;
              filter: grayscale(100%);
              transition: all 0.3s ease;
            }
            .brands-container:hover {
              opacity: 1;
              filter: grayscale(0%);
            }
          `}} />
          <div className="brands-container">
            <span style={{ fontSize: '1.8rem', fontWeight: '900', fontFamily: 'Arial, sans-serif', color: '#0097e6', letterSpacing: '1px' }}>DAIKIN</span>
            <span style={{ fontSize: '1.6rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#e84118' }}>MITSUBISHI<br/><span style={{ fontSize: '0.8rem', color: '#353b48' }}>ELECTRIC</span></span>
            <span style={{ fontSize: '1.8rem', fontWeight: 'normal', fontFamily: 'Helvetica, sans-serif', color: '#0033a0' }}>Panasonic</span>
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#273c75' }}>ATLANTIC</span>
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#c23616', fontStyle: 'italic' }}>HITACHI</span>
          </div>
        </div>

        {/* Aides de l'Etat */}
        <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--accent)' }}>
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Financez votre projet PAC avec les Aides de l'État</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                En tant qu'artisan certifié <strong>RGE (Reconnu Garant de l'Environnement)</strong>, Clim Chrono vous fait bénéficier de subventions majeures pour le remplacement de votre chaudière énergivore par une Pompe à Chaleur.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)' }}>
                <li>💶 <strong>MaPrimeRénov'</strong> : Aide de l'ANAH calculée en fonction de vos revenus.</li>
                <li>💶 <strong>Prime CEE (Coup de pouce)</strong> : Prime énergie versée par les fournisseurs.</li>
                <li>💶 <strong>TVA réduite à 5,5%</strong> : Appliquée directement sur notre devis et facturation.</li>
              </ul>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Nous simplifions vos démarches</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                L'administratif vous fait peur ? Notre équipe vous accompagne de A à Z dans la constitution et le dépôt de vos dossiers de subvention pour que vous puissiez toucher vos primes sans tracas.
              </p>
              <span style={{ display: 'inline-block', background: '#e8f5e9', color: '#2e7d32', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: 'bold', fontSize: '0.9rem' }}>Accompagnement 100% Inclus</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 2 : CHAUDIERE A GAZ (THPE)
      ========================================= */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', borderBottom: '2px solid var(--accent)', paddingBottom: '1rem' }}>
          <span style={{ fontSize: '2.5rem' }}>🔥</span>
          <h2 style={{ margin: 0, color: 'var(--accent)', fontSize: '2rem' }}>La Chaudière à Gaz (THPE)</h2>
        </div>

        {/* Remplacement Chaudière / Pose */}
        <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem', borderTop: '4px solid var(--accent)' }}>
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h3 style={{ color: 'var(--accent)' }}>Installation & Remplacement</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Une chaudière de plus de 15 ans consomme beaucoup plus de gaz et présente un risque accru de pannes. Passer à une <strong>Chaudière à Très Haute Performance Énergétique (THPE)</strong> ou à condensation est le meilleur moyen de sécuriser votre hiver si la PAC n'est pas possible.
              </p>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Pourquoi faire appel à nous ?</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}>✅ <strong>Économies</strong> : Les modèles THPE réduisent vos factures de gaz jusqu'à 30%.</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>✅ <strong>Désembouage inclus</strong> : Avant toute pose, nous nettoyons votre réseau de radiateurs.</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>✅ <strong>Ballons d'eau chaude</strong> : Nous installons également des chauffe-eaux électriques stéatites.</li>
              </ul>
              <a href="/reservation?type=devis-chauffage" className="btn" style={{ marginTop: '2rem', background: 'var(--accent)', color: 'white' }}>Demander un devis Chaudière</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <Image src="/chaudiere_moderne.png" alt="Chaudière moderne THPE" width={600} height={400} priority style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
              <div style={{ background: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Protocole d'installation</h4>
                <ol style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                  <li>Visite technique et évaluation des besoins.</li>
                  <li>Dépose de l'ancienne chaudière.</li>
                  <li>Rinçage et désembouage du réseau.</li>
                  <li>Pose de la nouvelle chaudière THPE.</li>
                  <li>Mise en service et test de combustion.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Entretien */}
        <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', borderTop: '4px solid var(--secondary)' }}>
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h3 style={{ color: 'var(--secondary)' }}>📋 L'Entretien Annuel Obligatoire</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                En France, l'entretien annuel des chaudières à gaz est <strong>une obligation légale</strong>. Il doit être réalisé par un professionnel qualifié qui vous délivrera une attestation conforme (nécessaire pour votre assurance).
              </p>
              
              <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Que comprend notre visite d'entretien ?</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🧹 <strong>Nettoyage complet</strong> du corps de chauffe, du brûleur et de l'extracteur.</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>⚙️ <strong>Vérification</strong> des organes de sécurité (vase d'expansion, soupape).</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🧪 <strong>Analyse des gaz</strong> : Mesure du taux de monoxyde de carbone (CO) pour garantir votre sécurité.</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>💡 <strong>Réglage de la combustion</strong> : Optimisation pour consommer le moins de gaz possible.</li>
              </ul>
              
              <div style={{ background: '#d4edda', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #c3e6cb', color: '#155724', marginBottom: '2rem' }}>
                <strong>Le saviez-vous ?</strong> Une chaudière non entretenue voit son risque de panne multiplié par 5, et sa durée de vie divisée par 2.
              </div>

              <a href="/reservation?type=entretien-chauffage" className="btn btn-secondary" style={{ width: '100%' }}>Réserver mon entretien gaz (dès 120€ TTC)</a>
            </div>
            <div>
              <Image src="/chauffage_entretien.png" alt="Entretien Chaudière" width={400} height={300} style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
            </div>
          </div>
        </div>

        {/* Dépannage */}
        <div className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--text-main)' }}>
          <h3 style={{ color: 'var(--text-main)' }}>🚨 Dépannage Urgent (Gaz & Eau Chaude)</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
            Plus de chauffage en plein hiver ? Douche froide inattendue ? Une fuite sous le ballon d'eau chaude ou la chaudière se met en erreur ? Notre équipe intervient en priorité.
          </p>

          <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>Les urgences que nous gérons le plus souvent :</h4>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>❄️ Plus d'eau chaude au robinet</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                  <strong>Notre action :</strong> S'il s'agit d'un chauffe-eau électrique, nous testons la résistance et le thermostat. Nous remplaçons la pièce défectueuse ou le groupe de sécurité s'il fuit.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>🛑 La chaudière affiche un code d'erreur</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                  <strong>Notre action :</strong> Mise en sécurité. Les causes sont multiples : défaut d'allumage, pompe bloquée (circulateur). Nous identifions le code et réparons le composant en défaut.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>📉 Baisse de pression constante</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                  <strong>Notre action :</strong> Signe d'une fuite ou d'un vase d'expansion dégonflé/percé. Nous regonflons le vase à l'azote ou le remplaçons pour stabiliser la pression.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>🌡️ Certains radiateurs restent froids</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                  <strong>Notre action :</strong> Si la purge ne suffit pas, le réseau est emboué. Nous effectuons un désembouage hydrodynamique pour rétablir la circulation dans tous les radiateurs.
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h5 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>⚠️ Odeur de gaz ou détecteur qui sonne</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                  <strong>Notre action :</strong> <strong style={{ color: '#d32f2f' }}>Urgence absolue.</strong> Coupez le gaz, ouvrez les fenêtres et appelez-nous. Nous effectuons une recherche de fuite et réparons le raccord.
                </p>
              </div>

              <a href="/reservation?type=depannage-chauffage" className="btn" style={{ background: 'var(--text-main)', color: 'white', width: '100%' }}>Urgence Dépannage</a>
            </div>
            
            <div>
              <Image src="/chauffage_depannage.png" alt="Dépannage Chaudière et Chauffage" width={400} height={300} style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
