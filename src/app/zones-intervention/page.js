export const metadata = {
  title: 'Zones d\'intervention Île-de-France - Chrono Clim',
  description: 'Chrono Clim intervient dans toute l\'Île-de-France (Paris 75, Seine-et-Marne 77, Yvelines 78, Essonne 91, Hauts-de-Seine 92, Seine-Saint-Denis 93, Val-de-Marne 94, Val-d\'Oise 95).',
  alternates: {
    canonical: 'https://www.chronoclim.fr/zones-intervention',
  },
};

export default function ZonesIntervention() {
  const departments = [
    {
      num: '75',
      name: 'Paris',
      desc: 'Intervention rapide dans tous les arrondissements parisiens pour l\'installation et le dépannage de votre climatisation et chauffage.',
      cities: ['Paris 1er', 'Paris 2e', 'Paris 3e', 'Paris 4e', 'Paris 5e', 'Paris 6e', 'Paris 7e', 'Paris 8e', 'Paris 9e', 'Paris 10e', 'Paris 11e', 'Paris 12e', 'Paris 13e', 'Paris 14e', 'Paris 15e', 'Paris 16e', 'Paris 17e', 'Paris 18e', 'Paris 19e', 'Paris 20e']
    },
    {
      num: '77',
      name: 'Seine-et-Marne',
      desc: 'Nos techniciens couvrent la majorité des grandes communes de Seine-et-Marne pour vous assurer un confort thermique optimal.',
      cities: ['Meaux', 'Chelles', 'Melun', 'Pontault-Combault', 'Savigny-le-Temple', 'Bussy-Saint-Georges', 'Villeparisis', 'Roissy-en-Brie', 'Dammarie-les-Lys', 'Montereau-Fault-Yonne', 'Lagny-sur-Marne', 'Ozoir-la-Ferrière', 'Bussy-Saint-Martin', 'Torcy']
    },
    {
      num: '78',
      name: 'Yvelines',
      desc: 'Experts en pompes à chaleur et chaudières gaz dans les Yvelines, pour les particuliers et professionnels.',
      cities: ['Versailles', 'Sartrouville', 'Mantes-la-Jolie', 'Saint-Germain-en-Laye', 'Poissy', 'Montigny-le-Bretonneux', 'Conflans-Sainte-Honorine', 'Les Mureaux', 'Houilles', 'Plaisir', 'Chatou', 'Le Chesnay-Rocquencourt', 'Guyancourt', 'Élancourt', 'Rambouillet']
    },
    {
      num: '91',
      name: 'Essonne',
      desc: 'Devis gratuit et intervention sous 24h/48h dans l\'Essonne pour tous vos projets de rénovation énergétique.',
      cities: ['Évry-Courcouronnes', 'Corbeil-Essonnes', 'Massy', 'Savigny-sur-Orge', 'Sainte-Geneviève-des-Bois', 'Viry-Châtillon', 'Athis-Mons', 'Palaiseau', 'Yerres', 'Draveil', 'Ris-Orangis', 'Vigneux-sur-Seine', 'Brunoy', 'Les Ulis', 'Montgeron', 'Brétigny-sur-Orge']
    },
    {
      num: '92',
      name: 'Hauts-de-Seine',
      desc: 'Une prestation haut de gamme adaptée aux appartements et maisons des Hauts-de-Seine.',
      cities: ['Boulogne-Billancourt', 'Nanterre', 'Asnières-sur-Seine', 'Colombes', 'Courbevoie', 'Rueil-Malmaison', 'Issy-les-Moulineaux', 'Levallois-Perret', 'Antony', 'Neuilly-sur-Seine', 'Clichy', 'Clamart', 'Montrouge', 'Suresnes', 'Meudon', 'Puteaux', 'Gennevilliers', 'Bagneux']
    },
    {
      num: '93',
      name: 'Seine-Saint-Denis',
      desc: 'Dépannage d\'urgence et installation de systèmes CVC performants en Seine-Saint-Denis.',
      cities: ['Saint-Denis', 'Montreuil', 'Aulnay-sous-Bois', 'Aubervilliers', 'Drancy', 'Noisy-le-Grand', 'Pantin', 'Le Blanc-Mesnil', 'Épinay-sur-Seine', 'Bondy', 'Bobigny', 'Sevran', 'Saint-Ouen-sur-Seine', 'Rosny-sous-Bois', 'Livry-Gargan', 'Noisy-le-Sec']
    },
    {
      num: '94',
      name: 'Val-de-Marne',
      desc: 'Partenaires de votre confort thermique dans le Val-de-Marne, de l\'entretien à l\'installation complète.',
      cities: ['Vitry-sur-Seine', 'Créteil', 'Champigny-sur-Marne', 'Saint-Maur-des-Fossés', 'Ivry-sur-Seine', 'Maisons-Alfort', 'Villejuif', 'Fontenay-sous-Bois', 'Vincennes', 'Alfortville', 'Choisy-le-Roi', 'Le Perreux-sur-Marne', 'L\'Haÿ-les-Roses', 'Villeneuve-Saint-Georges', 'Thiais', 'Nogent-sur-Marne']
    },
    {
      num: '95',
      name: 'Val-d\'Oise',
      desc: 'Notre équipe se déplace partout dans le Val-d\'Oise pour installer votre climatisation réversible.',
      cities: ['Argenteuil', 'Cergy', 'Garges-lès-Gonesse', 'Franconville', 'Pontoise', 'Bezons', 'Ermont', 'Villiers-le-Bel', 'Goussainville', 'Taverny', 'Herblay-sur-Seine', 'Sannois', 'Eaubonne', 'Saint-Ouen-l\'Aumône', 'Cormeilles-en-Parisis', 'Deuil-la-Barre', 'Montmorency', 'Saint-Gratien']
    }
  ];

  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', paddingBottom: '4rem' }} className="container">
      {/* Script SEO LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Climatisation et Chauffage",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Chrono Clim",
              "telephone": "+33758939218",
              "email": "contact@chronoclim.fr"
            },
            "areaServed": [
              { "@type": "State", "name": "Île-de-France" },
              { "@type": "City", "name": "Paris" },
              { "@type": "City", "name": "Boulogne-Billancourt" },
              { "@type": "City", "name": "Versailles" },
              { "@type": "City", "name": "Argenteuil" },
              { "@type": "City", "name": "Montreuil" },
              { "@type": "City", "name": "Saint-Denis" },
              { "@type": "City", "name": "Créteil" },
              { "@type": "City", "name": "Nanterre" },
              { "@type": "City", "name": "Vitry-sur-Seine" }
            ]
          })
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .zone-card {
          background: var(--surface);
          border: 1px solid var(--surface-alt);
          border-radius: var(--radius-md);
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .zone-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
      `}} />

      <h1 className="text-center" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>
        Nos Zones d'Intervention en <span className="text-secondary">Île-de-France</span>
      </h1>
      
      <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 4rem auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Vous cherchez un installateur de climatisation ou un chauffagiste fiable ? 
        <strong> Chrono Clim</strong> intervient rapidement sur l'ensemble de la région francilienne. 
        Découvrez ci-dessous les principales villes où nous opérons.
      </p>

      {/* Boutons d'action SEO */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
        <a href="/climatisation" className="btn btn-secondary">Installation Climatisation</a>
        <a href="/chauffage" className="btn btn-secondary">Installation Chauffage</a>
        <a href="/reservation?type=devis-clim" className="btn btn-primary">Devis Gratuit en Ligne</a>
      </div>

      <div className="grid grid-2" style={{ gap: '2.5rem' }}>
        {departments.map((dep) => (
          <div key={dep.num} className="zone-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {dep.num}
              </div>
              <h2 style={{ margin: 0, fontSize: '1.4rem' }}>{dep.name}</h2>
            </div>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              {dep.desc}
            </p>
            
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--primary)' }}>Villes d'intervention :</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {dep.cities.map((city, idx) => (
                  <span key={idx} style={{
                    background: 'var(--surface-alt)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    color: 'var(--text-main)',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}>
                    {city}
                  </span>
                ))}
                <span style={{
                    background: 'transparent',
                    padding: '0.3rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic'
                  }}>
                    et environs...
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SEO Content Block at bottom */}
      <div style={{ marginTop: '5rem', background: 'var(--surface)', padding: '3rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--surface-alt)' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Pourquoi choisir Chrono Clim en Île-de-France ?</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          La région Île-de-France présente des défis spécifiques en matière de climatisation et de chauffage (appartements haussmanniens, normes de copropriété, maisons en périphérie). Notre entreprise <strong>Chrono Clim</strong> possède l'expertise locale pour adapter nos installations à chaque configuration. 
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          Que vous soyez situé en plein cœur de <strong>Paris</strong>, dans les zones résidentielles des <strong>Yvelines</strong> ou dans le dynamisme des <strong>Hauts-de-Seine</strong>, nous vous garantissons des délais d'intervention records, des <a href="/tarifs" style={{color: 'var(--primary)', textDecoration: 'underline'}}>tarifs transparents</a>, et une pose réalisée par des techniciens frigoristes certifiés.
        </p>
      </div>

    </div>
  );
}
