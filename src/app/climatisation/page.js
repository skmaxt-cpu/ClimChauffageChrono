export const metadata = {
  title: 'Expert Climatisation & Pompes à Chaleur - Chrono Clim',
  description: 'Installation, entretien et dépannage de climatisations réversibles et pompes à chaleur. Découvrez notre expertise et les avantages d\'un matériel bien entretenu.',
  alternates: {
    canonical: 'https://www.chronoclim.fr/climatisation',
  },
};

export default function Climatisation() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', paddingBottom: '5rem' }} className="container">
      <h1 className="text-center" style={{ marginBottom: '1rem' }}>Expertise <span className="text-secondary">Climatisation & PAC</span></h1>
      <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
        De l'étude de votre projet à l'installation, en passant par la maintenance annuelle et le dépannage d'urgence, 
        Chrono Clim est votre partenaire de confiance pour un confort thermique absolu en toute saison.
      </p>

      {/* Installation & Remplacement */}
      <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ color: 'var(--primary)' }}>❄️ Installation & Remplacement</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Nous concevons des installations sur-mesure (Mono-split, Multi-splits, Gainable invisible) pour s'adapter parfaitement à l'esthétique de votre intérieur.
            </p>
            <h4 style={{ marginBottom: '1rem' }}>Pourquoi nous choisir ?</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem' }}>✅ <strong>Partenaire des leaders mondiaux</strong> : Daikin, Mitsubishi Electric, Panasonic.</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>✅ <strong>Esthétique soignée</strong> : Finitions invisibles, goulottes profilées, unités intérieures design.</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>✅ <strong>Bilan thermique offert</strong> : Nous calculons précisément la puissance nécessaire pour éviter la surconsommation.</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>✅ <strong>Installateurs certifiés</strong> : Manipulation des fluides frigorigènes dans le plus strict respect des normes environnementales.</li>
            </ul>
            <a href="/reservation?type=devis-clim" className="btn btn-primary" style={{ marginTop: '2rem' }}>Demander un devis gratuit</a>
          </div>
          <div>
            <img src="/hero-ac.png" alt="Installation Climatisation" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
          </div>
        </div>
      </div>

      {/* Split vs Gainable */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 className="text-center" style={{ marginBottom: '2rem' }}>Quelle technologie pour votre intérieur ?</h3>
        <div className="grid grid-2" style={{ gap: '2rem' }}>
          <div style={{ background: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Mural (Split & Multi-splits)</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
              La solution la plus rapide à installer et la plus économique. Une unité intérieure est fixée en haut d'un mur pour rafraîchir ou chauffer la pièce.
            </p>
            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>✓ Idéal pour rénovation</li>
              <li>✓ Contrôle indépendant par pièce</li>
              <li>✓ Filtres facilement accessibles</li>
              <li>✓ Design de plus en plus épuré</li>
            </ul>
          </div>
          <div style={{ background: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Climatisation Gainable</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
              Le système premium par excellence. L'unité est cachée dans les combles ou un faux-plafond. Seules de discrètes grilles de ventilation sont visibles.
            </p>
            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>✓ Esthétique 100% invisible</li>
              <li>✓ Silence de fonctionnement absolu</li>
              <li>✓ Flux d'air réparti uniformément</li>
              <li>✓ Température homogène dans toute la maison</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dimensionnement */}
      <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', borderTop: '4px solid var(--primary-light)' }}>
        <h2 style={{ color: 'var(--primary)' }}>📐 Le Dimensionnement : la Clé d'une Installation Réussie</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
          Installer une climatisation trop puissante ou sous-dimensionnée est l'erreur la plus courante — et la plus coûteuse. 
          Un appareil surdimensionné effectuera des cycles courts (il se coupe et se relance sans cesse), ce qui <strong>use prématurément le compresseur</strong> et <strong>augmente la consommation</strong>. 
          À l'inverse, un appareil sous-dimensionné tournera en continu sans jamais atteindre la température souhaitée.
        </p>
        
        <h4 style={{ color: 'var(--text-main)', marginBottom: '1.5rem' }}>Comment dimensionne-t-on correctement ?</h4>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Chez Chrono Clim, nous réalisons un <strong>bilan thermique complet et gratuit</strong> avant chaque installation. Ce bilan prend en compte tous les paramètres qui influencent les besoins en puissance :
        </p>

        <div className="grid grid-3" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'var(--surface-alt)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📏</div>
            <h5 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>Surface & Volume</h5>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>La superficie de chaque pièce et la hauteur sous plafond déterminent le volume d'air à traiter.</p>
          </div>
          <div style={{ background: 'var(--surface-alt)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🧱</div>
            <h5 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>Isolation & Vitrage</h5>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Le niveau d'isolation des murs, du toit et le type de vitrage (simple, double, triple) influencent fortement les déperditions.</p>
          </div>
          <div style={{ background: 'var(--surface-alt)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>☀️</div>
            <h5 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>Exposition & Apports</h5>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>L'orientation des fenêtres (sud, ouest…), le nombre d'occupants et les équipements électriques génèrent de la chaleur supplémentaire.</p>
          </div>
        </div>

        <div style={{ background: '#e3f2fd', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid #bbdefb', marginBottom: '2rem' }}>
          <h5 style={{ color: 'var(--primary)', margin: '0 0 0.5rem 0' }}>💡 Exemple concret</h5>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
            Pour un séjour de 30 m² bien isolé, avec double vitrage et une exposition Est, la puissance recommandée se situe autour de <strong>3,5 kW</strong> (environ 12 000 BTU). 
            Si ce même séjour est mal isolé avec une grande baie vitrée plein Sud, il faudra monter à <strong>5 kW</strong> (17 000 BTU) pour compenser les apports solaires.
          </p>
        </div>

        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
          <strong>C'est pourquoi nous ne vendons jamais "à la surface".</strong> Notre technicien se déplace gratuitement chez vous pour évaluer tous ces critères et vous recommander le modèle et la puissance exacte adaptés à votre logement. Résultat : un confort optimal, une consommation maîtrisée et un matériel qui dure dans le temps.
        </p>

        <a href="/reservation?type=devis-clim" className="btn btn-primary" style={{ width: '100%' }}>Demander mon bilan thermique gratuit</a>
      </div>

      {/* Entretien */}
      <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', borderTop: '4px solid var(--secondary)' }}>
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div style={{ order: 2 }}>
            <h2 style={{ color: 'var(--secondary)' }}>✨ L'Importance de l'Entretien</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Une climatisation ou une pompe à chaleur nécessite un soin particulier pour fonctionner de manière optimale. L'entretien régulier n'est pas qu'une recommandation, c'est un investissement.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                <h4 style={{ color: 'var(--primary)', margin: 0 }}>🌬️ Qualité de l'air intérieur</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>Nous nettoyons en profondeur les filtres et désinfectons les échangeurs pour éliminer bactéries, moisissures et allergènes.</p>
              </div>
              <div style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                <h4 style={{ color: 'var(--primary)', margin: 0 }}>💰 Économies d'énergie (jusqu'à -25%)</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>Un système encrassé consomme beaucoup plus pour produire le même froid ou chaud. Un nettoyage régulier garantit un rendement maximal.</p>
              </div>
              <div style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                <h4 style={{ color: 'var(--primary)', margin: 0 }}>⏳ Longévité de l'appareil</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>La vérification des pressions de gaz et le contrôle des organes électriques préviennent l'usure prématurée du compresseur.</p>
              </div>
            </div>
            
            <a href="/reservation?type=entretien-clim" className="btn btn-secondary" style={{ marginTop: '2rem', width: '100%' }}>Réserver un entretien (dès 120€ TTC)</a>
          </div>
          <div style={{ order: 1 }}>
            <img src="/clim_entretien.png" alt="Entretien Climatisation" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
          </div>
        </div>
      </div>

      {/* Dépannage */}
      <div className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--text-main)' }}>
        <h2 style={{ color: 'var(--text-main)' }}>🚨 Dépannage Rapide</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Votre climatisation fuit ? Elle ne produit plus de froid ou fait un bruit anormal ? Notre équipe intervient dans les plus brefs délais pour résoudre votre problème.
        </p>

        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Les pannes courantes que nous résolvons :</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>💧 L'unité intérieure fuit ou goutte</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> C'est souvent le bac à condensats qui est bouché ou la pompe de relevage qui est défectueuse. Nous débouchons l'évacuation, désinfectons le bac et remplaçons la pompe si nécessaire.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>🔥 La clim souffle de l'air tiède (plus de froid)</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> Cela indique généralement un manque de gaz (fluide frigorigène) dû à une micro-fuite, ou un compresseur en sécurité. Nous effectuons une recherche de fuite réglementaire, réparons le raccord et rechargeons en gaz.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>🔊 Bruit de claquement ou voyant qui clignote</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> Les clignotements correspondent à des codes d'erreur précis de la carte mère. Nous interrogeons la machine avec nos outils de diagnostic pour identifier la pièce défectueuse (sonde, ventilateur, carte) et la remplaçons.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>🌀 Le ventilateur de l'unité extérieure ne tourne plus</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> Le moteur du ventilateur peut être grillé, ou le condensateur de démarrage est HS. On le voit souvent après un orage. Nous testons le condensateur au multimètre et remplaçons le moteur ou le condensateur défaillant.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>🧊 Du givre se forme sur l'unité extérieure (même en été)</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> C'est le signe d'un manque de fluide frigorigène ou d'un filtre complètement colmaté qui empêche l'échange thermique. Nous nettoyons les échangeurs, vérifions les pressions et rechargeons en gaz si nécessaire après recherche de fuite.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>📡 La télécommande ne répond plus</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> Si le changement de piles ne suffit pas, c'est le récepteur infrarouge de l'unité intérieure ou la carte de commande qui est en cause. Nous testons la réception IR et remplaçons le composant défectueux.
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>💨 Mauvaises odeurs au démarrage</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Notre action :</strong> Des moisissures et bactéries se sont développées sur l'échangeur et dans le bac à condensats. Nous effectuons un nettoyage complet avec un produit bactéricide professionnel et désinfectons l'ensemble du circuit d'air.
              </p>
            </div>

            <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ffeeba', color: '#856404', marginBottom: '2rem' }}>
              <strong>Le saviez-vous ?</strong> Le diagnostic et le devis de réparation sont 100% gratuits et sans engagement chez Chrono Clim.
            </div>

            <a href="/reservation?type=depannage-clim" className="btn" style={{ background: 'var(--text-main)', color: 'white', width: '100%' }}>Urgence Dépannage</a>
          </div>
          
          <div>
            <img src="/clim_depannage.png" alt="Dépannage Climatisation" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
