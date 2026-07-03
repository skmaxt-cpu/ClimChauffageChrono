export const metadata = {
  title: 'Expert Chauffage & Chaudière Gaz - Chrono Clim',
  description: 'Pose, entretien et dépannage de chaudières à gaz et ballons d\'eau chaude. Assurez votre sécurité et réduisez vos factures avec Chrono Clim.',
  alternates: {
    canonical: 'https://www.chronoclim.fr/chauffage',
  },
};

export default function Chauffage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', paddingBottom: '5rem' }} className="container">
      <h1 className="text-center" style={{ marginBottom: '1rem' }}>Expertise <span className="text-accent">Chauffage & Eau Chaude</span></h1>
      <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
        Ne laissez pas le froid gâcher votre confort. Nos techniciens chauffagistes interviennent pour la pose, l'entretien réglementaire et le dépannage de vos chaudières à gaz et ballons d'eau chaude.
      </p>

      {/* Remplacement Chaudière / Pose */}
      <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem', borderTop: '4px solid var(--accent)' }}>
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ color: 'var(--accent)' }}>🔥 Installation & Remplacement</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Une chaudière de plus de 15 ans consomme beaucoup plus de gaz et présente un risque accru de pannes. Passer à une <strong>Chaudière à Très Haute Performance Énergétique (THPE)</strong> ou à condensation est le meilleur moyen de sécuriser votre hiver.
            </p>
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Pourquoi faire appel à nous ?</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem' }}>✅ <strong>Économies massives</strong> : Les modèles THPE ont un rendement supérieur à 100%, réduisant vos factures de gaz jusqu'à 30%.</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>✅ <strong>Désembouage inclus</strong> : Avant toute pose, nous nettoyons votre réseau de radiateurs pour garantir un fonctionnement optimal de la nouvelle chaudière.</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>✅ <strong>Ballons d'eau chaude</strong> : Nous installons également des chauffe-eaux électriques stéatites (anti-calcaire) et thermodynamiques.</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>✅ <strong>Aides financières</strong> : Nous vous accompagnons pour monter vos dossiers (MaPrimeRénov', CEE) et alléger la facture.</li>
            </ul>
            <a href="/reservation?type=devis-chauffage" className="btn" style={{ marginTop: '2rem', background: 'var(--accent)', color: 'white' }}>Demander une étude gratuite</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <img src="/chaudiere_moderne.png" alt="Chaudière moderne THPE" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
            <div style={{ background: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Notre protocole d'installation</h3>
              <ol style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                <li>Visite technique et évaluation des besoins.</li>
                <li>Recommandation du modèle.</li>
                <li>Dépose de l'ancienne chaudière.</li>
                <li>Rinçage et désembouage du réseau.</li>
                <li>Pose de la nouvelle chaudière.</li>
                <li>Mise en service et test de combustion.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Aides de l'Etat */}
      <div style={{ marginBottom: '4rem', background: '#f8f9fa', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--accent)' }}>
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
          <div>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Financez votre projet avec les Aides de l'État</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              En tant qu'artisan certifié <strong>RGE (Reconnu Garant de l'Environnement)</strong>, Chrono Clim vous fait bénéficier de subventions majeures pour le remplacement de votre chaudière énergivore par un modèle THPE ou une Pompe à Chaleur.
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

      {/* Entretien */}
      <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', borderTop: '4px solid var(--secondary)' }}>
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ color: 'var(--secondary)' }}>📋 L'Entretien Annuel Obligatoire</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              En France, l'entretien annuel des chaudières à gaz est <strong>une obligation légale</strong>. Il doit être réalisé par un professionnel qualifié qui vous délivrera une attestation conforme (nécessaire pour votre assurance).
            </p>
            
            <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Que comprend notre visite d'entretien ?</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🧹 <strong>Nettoyage complet</strong> du corps de chauffe, du brûleur et de l'extracteur.</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>⚙️ <strong>Vérification</strong> des organes de sécurité (vase d'expansion, soupape).</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🧪 <strong>Analyse des gaz</strong> : Mesure du taux de monoxyde de carbone (CO) pour garantir votre sécurité.</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>💡 <strong>Réglage de la combustion</strong> : Optimisation pour consommer le moins de gaz possible (-8 à -12%).</li>
            </ul>
            
            <div style={{ background: '#d4edda', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #c3e6cb', color: '#155724', marginBottom: '2rem' }}>
              <strong>Le saviez-vous ?</strong> Une chaudière non entretenue voit son risque de panne multiplié par 5, et sa durée de vie divisée par 2.
            </div>

            <a href="/reservation?type=entretien-chauffage" className="btn btn-secondary" style={{ width: '100%' }}>Réserver mon entretien (dès 120€ TTC)</a>
          </div>
          <div>
            <img src="/chauffage_entretien.png" alt="Entretien Chaudière" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
          </div>
        </div>
      </div>

      {/* Dépannage */}
      <div className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--text-main)' }}>
        <h2 style={{ color: 'var(--text-main)' }}>🚨 Dépannage Urgent</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Plus de chauffage en plein hiver ? Douche froide inattendue ? Une fuite sous le ballon d'eau chaude ou la chaudière se met en erreur ? Notre équipe intervient en priorité.
        </p>

        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Les urgences que nous gérons le plus souvent :</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>❄️ Plus d'eau chaude au robinet</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> S'il s'agit d'un chauffe-eau électrique, nous testons la résistance (souvent entartrée) et le thermostat. Nous remplaçons la pièce défectueuse ou le groupe de sécurité s'il fuit abondamment.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>🛑 La chaudière affiche un code d'erreur et se coupe</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> C'est la mise en sécurité. Les causes sont multiples : défaut d'allumage, pompe bloquée (circulateur), ou problème de tirage. Nous identifions le code, débloquons la pompe ou remplaçons la carte mère/sonde en défaut.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>📉 Baisse de pression constante</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> Vous devez remettre de l'eau tous les jours ? C'est le signe d'une fuite sur le réseau ou d'un vase d'expansion dégonflé/percé. Nous regonflons le vase à l'azote ou le remplaçons pour stabiliser la pression.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>🔥 La chaudière fait un bruit de claquement à l'allumage</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> C'est un retard d'allumage : le gaz s'accumule avant de s'enflammer d'un coup. Cela peut venir d'électrodes d'allumage encrassées ou mal positionnées. Nous nettoyons ou remplaçons les électrodes et vérifions le réglage du brûleur.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>🌡️ Certains radiateurs restent froids</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> Si la purge ne suffit pas, c'est que le réseau est emboué (des boues de corrosion bloquent la circulation). Nous effectuons un désembouage chimique ou hydrodynamique pour rétablir la circulation dans tous les radiateurs.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>💧 Fuite sous le ballon d'eau chaude</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> Si la fuite vient du groupe de sécurité, un remplacement suffit. Si la cuve est percée (corrosion interne), le ballon doit être remplacé. Nous vous proposons un nouveau chauffe-eau stéatite anti-calcaire avec pose le jour même si possible.
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>⚠️ Odeur de gaz ou détecteur qui sonne</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> <strong style={{ color: '#d32f2f' }}>Urgence absolue.</strong> Coupez le gaz, ouvrez les fenêtres et appelez-nous immédiatement. Nous effectuons une recherche de fuite avec un détecteur professionnel, sécurisons l'installation et réparons le raccord défectueux.
              </p>
            </div>

            <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '2rem' }}>Devis de réparation 100% Gratuit</p>

            <a href="/reservation?type=depannage-chauffage" className="btn" style={{ background: 'var(--text-main)', color: 'white', width: '100%' }}>Urgence Dépannage Chauffage</a>
          </div>
          
          <div>
            <img src="/chauffage_depannage.png" alt="Dépannage Chaudière et Chauffage" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
