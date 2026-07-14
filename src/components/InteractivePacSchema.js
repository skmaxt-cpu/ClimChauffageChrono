"use client";

import { useState } from 'react';

const MODULES = {
  groupe: {
    id: 'groupe',
    title: 'Groupe Extérieur (PAC)',
    icon: '🌀',
    role: "Capte les calories gratuites présentes dans l'air extérieur pour les transférer vers le circuit d'eau de la maison.",
    details: [
      "Ventilateur ultra-silencieux",
      "Technologie Inverter pour optimiser la consommation",
      "Fonctionnement garanti même par grand froid (-20°C)"
    ],
    color: '#005A9C'
  },
  hydrobox: {
    id: 'hydrobox',
    title: 'Module Intérieur (Hydrobox)',
    icon: '⚙️',
    role: "Fait le lien entre le groupe extérieur et votre réseau de chauffage. Il régule la température de l'eau envoyée dans les circuits.",
    details: [
      "Échangeur de chaleur haute performance",
      "Interface de contrôle et régulation intelligente",
      "Appoint électrique de secours intégré"
    ],
    color: '#E67E22'
  },
  ballon: {
    id: 'ballon',
    title: "Ballon d'Eau Chaude Sanitaire",
    icon: '🚿',
    role: "Stocke l'eau chaude sanitaire (ECS) pour toute la famille, chauffée de manière ultra-économique par la pompe à chaleur.",
    details: [
      "Cuve en acier inoxydable ou émaillé",
      "Excellente isolation thermique pour éviter les pertes",
      "Capacité adaptée (de 190L à 300L)"
    ],
    color: '#00B4D8'
  },
  plancher: {
    id: 'plancher',
    title: 'Plancher Chauffant / Rafraîchissant',
    icon: '👣',
    role: "Réseau de tubes intégrés dans la dalle. Offre le summum du confort thermique avec une chaleur douce et homogène répartie sur tout le sol.",
    details: [
      "Température très basse (économies maximales)",
      "Totalement invisible (gain de place)",
      "Réversible : rafraîchit la maison en été"
    ],
    color: '#EF4444'
  },
  radiateur: {
    id: 'radiateur',
    title: 'Radiateur Basse Température',
    icon: '🌡️',
    role: "Diffuse rapidement la chaleur dans les pièces à l'étage. Parfaitement compatible avec les pompes à chaleur modernes.",
    details: [
      "Montée en température rapide",
      "Robinet thermostatique pour régulation par pièce",
      "Idéal en rénovation"
    ],
    color: '#F59E0B'
  },
  solaire: {
    id: 'solaire',
    title: 'Panneaux Solaires (Optionnel)',
    icon: '☀️',
    role: "Produisent de l'électricité ou de l'eau chaude grâce à l'énergie solaire, couplés à la PAC pour réduire votre facture proche de zéro.",
    details: [
      "Énergie 100% renouvelable et gratuite",
      "Autoconsommation pour alimenter la Pompe à Chaleur",
      "Valorisation de votre patrimoine immobilier"
    ],
    color: '#10B981'
  }
};

export default function InteractivePacSchema() {
  const [activeModuleId, setActiveModuleId] = useState(null);

  const activeModule = activeModuleId ? MODULES[activeModuleId] : null;

  return (
    <div className="schema-container">
      <style dangerouslySetInnerHTML={{__html: `
        .schema-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
          margin: 4rem 0;
        }

        @media (max-width: 992px) {
          .schema-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .schema-svg-wrapper {
          background: #f8fafc;
          border-radius: var(--radius-md);
          border: 1px solid #e2e8f0;
          overflow: hidden;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.03);
          position: relative;
          aspect-ratio: 1 / 1;
        }

        .schema-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .hotspot-pulse {
          fill: none;
          stroke-width: 3;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .hotspot-center {
          fill: white;
          stroke-width: 3;
          cursor: pointer;
          transition: transform 0.2s, fill 0.2s;
        }

        .module-group:hover .hotspot-center, .module-group.active .hotspot-center {
          transform: scale(1.3);
          fill: var(--primary);
        }

        .module-group.active-groupe .hotspot-center { stroke: #005A9C; fill: #005A9C; }
        .module-group.active-hydrobox .hotspot-center { stroke: #E67E22; fill: #E67E22; }
        .module-group.active-ballon .hotspot-center { stroke: #00B4D8; fill: #00B4D8; }
        .module-group.active-plancher .hotspot-center { stroke: #EF4444; fill: #EF4444; }
        .module-group.active-radiateur .hotspot-center { stroke: #F59E0B; fill: #F59E0B; }
        .module-group.active-solaire .hotspot-center { stroke: #10B981; fill: #10B981; }

        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(3.5); opacity: 0; }
        }

        .info-card {
          background: var(--surface);
          border: 1px solid var(--surface-alt);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: sticky;
          top: 100px;
          min-height: 400px;
        }

        .info-card.empty-state {
          align-items: center;
          text-align: center;
          color: var(--text-muted);
          background: transparent;
          border: 2px dashed #cbd5e1;
          box-shadow: none;
        }

        .info-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .info-icon {
          font-size: 3rem;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          border-radius: 20px;
          flex-shrink: 0;
        }

        .info-title {
          font-size: 1.5rem;
          margin: 0;
          color: var(--text-main);
          line-height: 1.2;
        }

        .info-role {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .info-details-title {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #94a3b8;
          margin-bottom: 1rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
        }

        .info-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .info-list li::before {
          content: '✓';
          color: white;
          background: var(--primary);
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 0.7rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}} />

      <div className="schema-svg-wrapper">
        <svg 
          viewBox="0 0 1000 1000" 
          className="schema-svg"
          onClick={(e) => {
            if (e.target.tagName === 'svg' || e.target.tagName === 'image') {
              setActiveModuleId(null);
            }
          }}
        >
          {/* IMAGE DE FOND - L'utilisateur doit la placer dans public/schema-3d.png */}
          <image href="/schema-3d.png" width="1000" height="1000" preserveAspectRatio="xMidYMid slice" />

          {/* 1. GROUPE EXTERIEUR (Bottom Left) */}
          <g 
            className={`module-group ${activeModuleId === 'groupe' ? 'active active-groupe' : ''}`}
            onMouseEnter={() => setActiveModuleId('groupe')}
            onMouseLeave={() => setActiveModuleId(null)}
            onClick={(e) => { e.stopPropagation(); setActiveModuleId('groupe'); }}
            transform="translate(220, 720)"
          >
            {/* Zone de clic invisible pour être sûr que le hover marche bien sur l'objet complet */}
            <rect x="-100" y="-120" width="200" height="240" fill="transparent" cursor="pointer" />
            <circle r="25" className="hotspot-pulse" stroke="#005A9C" />
            <circle r="12" className="hotspot-center" stroke="#005A9C" />
          </g>

          {/* 2. HYDROBOX (Middle Wall) */}
          <g 
            className={`module-group ${activeModuleId === 'hydrobox' ? 'active active-hydrobox' : ''}`}
            onMouseEnter={() => setActiveModuleId('hydrobox')}
            onMouseLeave={() => setActiveModuleId(null)}
            onClick={(e) => { e.stopPropagation(); setActiveModuleId('hydrobox'); }}
            transform="translate(520, 600)"
          >
            <rect x="-60" y="-100" width="120" height="200" fill="transparent" cursor="pointer" />
            <circle r="25" className="hotspot-pulse" stroke="#E67E22" />
            <circle r="12" className="hotspot-center" stroke="#E67E22" />
          </g>

          {/* 3. BALLON EAU CHAUDE (Middle Right) */}
          <g 
            className={`module-group ${activeModuleId === 'ballon' ? 'active active-ballon' : ''}`}
            onMouseEnter={() => setActiveModuleId('ballon')}
            onMouseLeave={() => setActiveModuleId(null)}
            onClick={(e) => { e.stopPropagation(); setActiveModuleId('ballon'); }}
            transform="translate(630, 660)"
          >
            <rect x="-40" y="-80" width="80" height="160" fill="transparent" cursor="pointer" />
            <circle r="25" className="hotspot-pulse" stroke="#00B4D8" />
            <circle r="12" className="hotspot-center" stroke="#00B4D8" />
          </g>

          {/* 4. PLANCHER CHAUFFANT (Bottom Right Floor) */}
          <g 
            className={`module-group ${activeModuleId === 'plancher' ? 'active active-plancher' : ''}`}
            onMouseEnter={() => setActiveModuleId('plancher')}
            onMouseLeave={() => setActiveModuleId(null)}
            onClick={(e) => { e.stopPropagation(); setActiveModuleId('plancher'); }}
            transform="translate(700, 820)"
          >
            <polygon points="-150,0 50,-50 150,0 -50,50" fill="transparent" cursor="pointer" />
            <circle r="25" className="hotspot-pulse" stroke="#EF4444" />
            <circle r="12" className="hotspot-center" stroke="#EF4444" />
          </g>

          {/* 5. RADIATEUR (Top Floor) */}
          <g 
            className={`module-group ${activeModuleId === 'radiateur' ? 'active active-radiateur' : ''}`}
            onMouseEnter={() => setActiveModuleId('radiateur')}
            onMouseLeave={() => setActiveModuleId(null)}
            onClick={(e) => { e.stopPropagation(); setActiveModuleId('radiateur'); }}
            transform="translate(560, 420)"
          >
            <rect x="-80" y="-60" width="160" height="120" fill="transparent" cursor="pointer" />
            <circle r="25" className="hotspot-pulse" stroke="#F59E0B" />
            <circle r="12" className="hotspot-center" stroke="#F59E0B" />
          </g>

          {/* 6. SOLAIRE (Roof) */}
          <g 
            className={`module-group ${activeModuleId === 'solaire' ? 'active active-solaire' : ''}`}
            onMouseEnter={() => setActiveModuleId('solaire')}
            onMouseLeave={() => setActiveModuleId(null)}
            onClick={(e) => { e.stopPropagation(); setActiveModuleId('solaire'); }}
            transform="translate(550, 180)"
          >
            <polygon points="-80,30 -40,-40 80,-20 40,50" fill="transparent" cursor="pointer" />
            <circle r="25" className="hotspot-pulse" stroke="#10B981" />
            <circle r="12" className="hotspot-center" stroke="#10B981" />
          </g>

        </svg>
      </div>

      <div>
        {activeModule ? (
          <div className="info-card animate-fade-in-up" key={activeModule.id}>
            <div className="info-header">
              <div className="info-icon" style={{ color: activeModule.color }}>
                {activeModule.icon}
              </div>
              <h3 className="info-title" style={{ color: activeModule.color }}>
                {activeModule.title}
              </h3>
            </div>
            
            <p className="info-role">
              {activeModule.role}
            </p>
            
            <div className="info-details-title">Points Clés</div>
            <ul className="info-list">
              {activeModule.details.map((detail, idx) => (
                <li key={idx}>
                  <style dangerouslySetInnerHTML={{__html: `
                    .info-list li:nth-child(${idx + 1})::before {
                      background-color: ${activeModule.color};
                    }
                  `}} />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="info-card empty-state">
            <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}>🖱️</div>
            <h3>Explorez l'installation</h3>
            <p>
              Passez votre souris (ou touchez) les différents points lumineux du schéma pour découvrir le rôle de chaque équipement de votre pompe à chaleur.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
