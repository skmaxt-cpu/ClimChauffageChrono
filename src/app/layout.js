import './globals.css';
import CookieBanner from '@/components/CookieBanner';
import ReservationModal from '@/components/ReservationModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileMenu from '@/components/MobileMenu';

import { headers } from 'next/headers';
import Script from 'next/script';
export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const isChauffage = host.includes('chauffagechrono');
  const siteName = isChauffage ? 'Chauffage Chrono' : 'Clim Chrono';
  const url = isChauffage ? 'https://www.chauffagechrono.fr' : 'https://www.climchrono.fr';
  const logo = isChauffage ? '/logo_chauffage.png' : '/logo.png';

  return {
    metadataBase: new URL(url),
    title: {
      default: `${siteName} | Climatisation, Chauffage & Dépannage Paris`,
      template: `%s | ${siteName}`,
    },
    description: 'Expert installation, entretien et dépannage de climatisation, pompe à chaleur et chaudière en Île-de-France. Intervention sous 24h, devis gratuit.',
    keywords: ['climatisation', 'chauffage', 'CVC', 'pompe à chaleur', 'chaudière gaz', 'ballon eau chaude', 'dépannage chauffage', 'entretien climatisation', 'installation PAC', siteName, 'Île-de-France', 'climatiseur réversible'],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url: url,
      siteName: siteName,
      title: `${siteName} | Climatisation, Chauffage & Dépannage Paris`,
      description: 'Expert installation, entretien et dépannage de climatisation, pompe à chaleur et chaudière en Île-de-France. Intervention sous 24h, devis gratuit.',
      images: [
        {
          url: logo,
          width: 600,
          height: 200,
          alt: `${siteName} - Expert Chauffage et Climatisation`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteName} | Climatisation, Chauffage & Dépannage Paris`,
      description: 'Expert installation, entretien et dépannage de climatisation, pompe à chaleur et chaudière en Île-de-France. Intervention sous 24h, devis gratuit.',
      images: [logo],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const isChauffage = host.includes('chauffagechrono');
  const siteName = isChauffage ? 'Chauffage Chrono' : 'Clim Chrono';
  const logoSrc = isChauffage ? '/logo_chauffage.png' : '/logo.png';
  const url = isChauffage ? 'https://www.chauffagechrono.fr' : 'https://www.climchrono.fr';
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NZ4M8QD6');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZ4M8QD6"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/*End Google Tag Manager (noscript) */}
        <Script
          id="json-ld-layout"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Clim Chrono",
              "description": "Expert en installation, entretien et dépannage de climatisations, pompes à chaleur, chaudières gaz et ballons d'eau chaude en Île-de-France.",
              "url": "https://www.chronoclim.fr",
              "logo": "https://www.chronoclim.fr/logo.png",
              "image": "https://www.chronoclim.fr/logo.png",
              "telephone": "+33758939218",
              "email": "cvcchrono@gmail.com",
              "priceRange": "€€",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "19:00"
                }
              ],
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 48.8566,
                  "longitude": 2.3522
                },
                "geoRadius": "50000"
              },
              "sameAs": [],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services CVC",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Installation Climatisation & Pompe à Chaleur",
                      "description": "Installation de climatisations réversibles et pompes à chaleur air/air et air/eau."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Entretien & Dépannage Chaudière Gaz",
                      "description": "Entretien annuel réglementaire et dépannage rapide de chaudières gaz à condensation."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Installation Ballon d'Eau Chaude",
                      "description": "Remplacement et installation de ballons d'eau chaude sanitaire thermodynamiques et électriques."
                    }
                  }
                ]
              }
            })
          }}
        />
        <nav className="navbar" style={{ alignItems: 'center' }}>
          <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/">
              <img src={logoSrc} alt={`${siteName} Logo`} style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
            </a>
          </div>
          <div className="nav-links">
            <a href="/">Accueil</a>
            <a href="/climatisation">Climatisation</a>
            <a href="/chauffage">Chauffage</a>
            <a href="/tarifs">Tarifs</a>
            <a href="/faq">FAQ</a>
            <a href="/blog">Blog</a>
            <a href="/zones-intervention">Zones</a>
            <a href="/reservation" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Réserver en ligne</a>
          </div>
          <MobileMenu />
        </nav>

        <main>
          {children}
        </main>

        <footer style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#f8fafc', marginTop: '4rem', padding: '5rem 0 2rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

              {/* Brand & Social */}
              <div>
                <div style={{ background: 'white', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                  <img src={logoSrc} alt={`${siteName} Logo`} style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  L'avant-garde du confort thermique. Experts en installation et maintenance de systèmes de climatisation et chauffage haute performance en Île-de-France.
                </p>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
                  <a href="#" className="social-icon" aria-label="Facebook">f</a>
                  <a href="#" className="social-icon" aria-label="Instagram">ig</a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>Nos Services</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <li><a href="/climatisation" className="footer-link">Climatisation & PAC</a></li>
                  <li><a href="/chauffage" className="footer-link">Chaudière Gaz THPE</a></li>
                  <li><a href="/tarifs" className="footer-link">Contrats d'entretien</a></li>
                  <li><a href="/chauffage" className="footer-link">Dépannage d'urgence</a></li>
                </ul>
              </div>

              {/* Liens utiles */}
              <div>
                <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>Ressources utiles</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <li><a href="/blog" className="footer-link">Blog & Conseils pratiques</a></li>
                  <li><a href="/faq" className="footer-link">Questions fréquentes (FAQ)</a></li>
                  <li><a href="/tarifs" className="footer-link">Grille tarifaire transparente</a></li>
                  <li><a href="/reservation" style={{ color: 'var(--secondary)', fontWeight: 600, display: 'inline-block', marginTop: '0.5rem' }}>Obtenir un devis gratuit →</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>Nous contacter</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: '#94a3b8', fontSize: '0.95rem' }}>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>📞</span>
                    <strong style={{ color: 'white', fontSize: '1.1rem' }}>07 58 93 92 18</strong>
                  </p>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>✉️</span>
                    <a href="mailto:cvcchrono@gmail.com" className="footer-link">cvcchrono@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Zones d'intervention SEO */}
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.05)',
              paddingTop: '2rem',
              marginBottom: '2rem'
            }}>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>Zones d'intervention en Île-de-France</h4>
              <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                <strong>Paris (75) :</strong> Paris 1er, Paris 2e, Paris 3e, Paris 4e, Paris 5e, Paris 6e, Paris 7e, Paris 8e, Paris 9e, Paris 10e, Paris 11e, Paris 12e, Paris 13e, Paris 14e, Paris 15e, Paris 16e, Paris 17e, Paris 18e, Paris 19e, Paris 20e. <br />
                <strong>Seine-et-Marne (77) :</strong> Meaux, Chelles, Melun, Pontault-Combault, Savigny-le-Temple, Bussy-Saint-Georges, Villeparisis, Roissy-en-Brie, Dammarie-les-Lys, Montereau-Fault-Yonne, Lagny-sur-Marne, Ozoir-la-Ferrière, Bussy-Saint-Martin, Torcy. <br />
                <strong>Yvelines (78) :</strong> Versailles, Sartrouville, Mantes-la-Jolie, Saint-Germain-en-Laye, Poissy, Montigny-le-Bretonneux, Conflans-Sainte-Honorine, Les Mureaux, Houilles, Plaisir, Chatou, Le Chesnay-Rocquencourt, Guyancourt, Élancourt, Rambouillet. <br />
                <strong>Essonne (91) :</strong> Évry-Courcouronnes, Corbeil-Essonnes, Massy, Savigny-sur-Orge, Sainte-Geneviève-des-Bois, Viry-Châtillon, Athis-Mons, Palaiseau, Yerres, Draveil, Ris-Orangis, Vigneux-sur-Seine, Brunoy, Les Ulis, Montgeron, Brétigny-sur-Orge. <br />
                <strong>Hauts-de-Seine (92) :</strong> Boulogne-Billancourt, Nanterre, Asnières-sur-Seine, Colombes, Courbevoie, Rueil-Malmaison, Issy-les-Moulineaux, Levallois-Perret, Antony, Neuilly-sur-Seine, Clichy, Clamart, Montrouge, Suresnes, Meudon, Puteaux, Gennevilliers, Bagneux. <br />
                <strong>Seine-Saint-Denis (93) :</strong> Saint-Denis, Montreuil, Aulnay-sous-Bois, Aubervilliers, Drancy, Noisy-le-Grand, Pantin, Le Blanc-Mesnil, Épinay-sur-Seine, Bondy, Bobigny, Sevran, Saint-Ouen-sur-Seine, Rosny-sous-Bois, Livry-Gargan, Noisy-le-Sec. <br />
                <strong>Val-de-Marne (94) :</strong> Vitry-sur-Seine, Créteil, Champigny-sur-Marne, Saint-Maur-des-Fossés, Ivry-sur-Seine, Maisons-Alfort, Villejuif, Fontenay-sous-Bois, Vincennes, Alfortville, Choisy-le-Roi, Le Perreux-sur-Marne, L'Haÿ-les-Roses, Villeneuve-Saint-Georges, Thiais, Nogent-sur-Marne. <br />
                <strong>Val-d'Oise (95) :</strong> Argenteuil, Cergy, Garges-lès-Gonesse, Franconville, Pontoise, Bezons, Ermont, Villiers-le-Bel, Goussainville, Taverny, Herblay-sur-Seine, Sannois, Eaubonne, Saint-Ouen-l'Aumône, Cormeilles-en-Parisis, Deuil-la-Barre, Montmorency, Saint-Gratien.
              </p>
            </div>

            {/* Bottom Bar */}
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.85rem',
              color: '#64748b'
            }}>
              <div>&copy; {new Date().getFullYear()} Clim Chrono. Tous droits réservés.</div>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="/mentions-legales" className="footer-link">Mentions légales</a>
                <a href="/politique-confidentialite" className="footer-link">Politique de confidentialité</a>
                <a href="/admin" className="footer-link">Accès Pro</a>
              </div>
            </div>
          </div>
        </footer>
        <CookieBanner />
        <ReservationModal />
        <WhatsAppButton />
      </body>
    </html>
  );
}
