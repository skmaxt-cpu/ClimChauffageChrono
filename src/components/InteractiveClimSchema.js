"use client";

import { useState } from 'react';

const MODULES = {
  groupe: {
    id: 'groupe',
    title: 'Groupe Extérieur (Pompe à Chaleur)',
    icon: '🌀',
    role: "Le cœur du système. Il capte les calories de l'air extérieur (en mode chauffage) ou rejette la chaleur de la maison (en mode climatisation).",
    details: [
      "Compresseur Inverter haute performance",
      "Échangeur de chaleur traité anti-corrosion",
      "Ventilateur hélicoïde silencieux"
    ],
    color: '#005A9C'
  },
  gainable: {
    id: 'gainable',
    title: 'Climatisation Gainable (Invisible)',
    icon: '💨',
    role: "Installée dans les combles ou faux-plafonds, elle distribue l'air traité de façon totalement invisible et silencieuse à travers des gaines isolées.",
    details: [
      "100% invisible (seuls les diffuseurs sont visibles)",
      "Silence de fonctionnement inégalé",
      "Régulation pièce par pièce (système Airzone en option)"
    ],
    color: '#00B4D8'
  },
  split: {
    id: 'split',
    title: 'Unité Murale (Split)',
    icon: '❄️',
    role: "Fixée en hauteur, c'est la solution classique et polyvalente. Elle permet un contrôle indépendant de la température dans chaque pièce de vie.",
    details: [
      "Installation rapide et économique",
      "Filtration avancée de l'air (anti-poussière et allergènes)",
      "Balayage d'air 3D pour une diffusion homogène"
    ],
    color: '#4A90E2'
  },
  console: {
    id: 'console',
    title: 'Unité Console (Bas de paroi)',
    icon: '🌡️',
    role: "Posée au sol ou fixée en bas de mur, elle est idéale en remplacement de radiateurs et offre un excellent confort en mode chauffage.",
    details: [
      "Double flux d'air (soufflage haut et bas)",
      "Encombrement réduit (idéal sous les fenêtres)",
      "Confort thermique optimal au niveau du sol"
    ],
    color: '#E67E22'
  },
  liaisons: {
    id: 'liaisons',
    title: 'Liaisons Frigorifiques Isolées',
    icon: '🔗',
    role: "Tubes en cuivre de qualité frigorifique enveloppés d'un isolant thermique. Ils assurent le transport du fluide frigorigène (R32) entre l'extérieur et l'intérieur.",
    details: [
      "Cuivre déshydraté de haute pureté",
      "Isolation thermique étanche pour éviter la condensation",
      "Protection extérieure anti-UV et intempéries"
    ],
    color: '#10B981'
  }
};

export default function InteractiveClimSchema() {
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
        .module-group.active-gainable .hotspot-center { stroke: #00B4D8; fill: #00B4D8; }
        .module-group.active-split .hotspot-center { stroke: #4A90E2; fill: #4A90E2; }
        .module-group.active-console .hotspot-center { stroke: #E67E22; fill: #E67E22; }
        .module-group.active-liaisons .hotspot-center { stroke: #10B981; fill: #10B981; }

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
          {/* IMAGE DE FOND CLIMATISATION */}
          <image href="/schema-clim.png" width="1000" height="1000" preserveAspectRatio="xMidYMid slice" />

          {/* 1. GROUPE EXTERIEUR */}
          <g 
            className={`module-group ${activeModuleId === 'groupe' ? 'active active-groupe' : ''}`}
            onMouseEnter={() => setActiveModuleId('groupe')}
            onMouseLeave={() => setActiveModuleId(null)}
            onClick={(e) => { e.stopPropagation(); setActiveModuleId('groupe'); }}
            transform="translate(150, 780)"
          >
            <rect x="-80" y="-80" width="160" height="160" fill="transparent" cursor="pointer" />
            <circle r="25" className="hotspot-pulse" stroke="#005A9C" />
            <circle r="12" className="hotspot-center" stroke="#005A9C" />
          </g>

          {/* 2. CONSOLE (Ground Floor) */}
          <g 
            className={`module-group ${activeModuleId === 'console' ? 'active active-console' : ''}`}
            onMouseEnter={() => setActiveModuleId('console')}
            onMouseLeave={() => setActiveModuleId(null)}
            onClick={(e) => { e.stopPropagation(); setActiveModuleId('console'); }}
            transform="translate(330, 700)"
          >
            <rect x="-60" y="-50" width="120" height="100" fill="transparent" cursor="pointer" />
            <circle r="25" className="hotspot-pulse" stroke="#E67E22" />
            <circle r="12" className="hotspot-center" stroke="#E67E22" />
          </g>

          {/* 3. SPLIT (First Floor) */}
          <g 
            className={`module-group ${activeModuleId === 'split' ? 'active active-split' : ''}`}
            onMouseEnter={() => setActiveModuleId('split')}
            onMouseLeave={() => setActiveModuleId(null)}
            onClick={(e) => { e.stopPropagation(); setActiveModuleId('split'); }}
            transform="translate(300, 350)"
          >
            <rect x="-80" y="-40" width="160" height="80" fill="transparent" cursor="pointer" />
            <circle r="25" className="hotspot-pulse" stroke="#4A90E2" />
            <circle r="12" className="hotspot-center" stroke="#4A90E2" />
          </g>

          {/* 4. GAINABLE (Attic) */}
          <g 
            className={`module-group ${activeModuleId === 'gainable' ? 'active active-gainable' : ''}`}
            onMouseEnter={() => setActiveModuleId('gainable')}
            onMouseLeave={() => setActiveModuleId(null)}
            onClick={(e) => { e.stopPropagation(); setActiveModuleId('gainable'); }}
            transform="translate(550, 200)"
          >
            <rect x="-80" y="-60" width="160" height="120" fill="transparent" cursor="pointer" />
            <circle r="25" className="hotspot-pulse" stroke="#00B4D8" />
            <circle r="12" className="hotspot-center" stroke="#00B4D8" />
          </g>

          {/* 5. LIAISONS FRIGORIFIQUES */}
          <g 
            className={`module-group ${activeModuleId === 'liaisons' ? 'active active-liaisons' : ''}`}
            onMouseEnter={() => setActiveModuleId('liaisons')}
            onMouseLeave={() => setActiveModuleId(null)}
            onClick={(e) => { e.stopPropagation(); setActiveModuleId('liaisons'); }}
            transform="translate(200, 600)"
          >
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
              Passez votre souris (ou touchez) les différents points lumineux du schéma pour découvrir le rôle de chaque équipement d'une installation de climatisation réversible.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
