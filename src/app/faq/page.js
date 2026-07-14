'use client';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour installer une climatisation réversible ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'installation d'un système mono-split prend généralement une journée. Pour un système multi-splits ou gainable, l'intervention peut durer entre 2 et 4 jours selon la complexité du chantier."
      }
    },
    {
      "@type": "Question",
      "name": "Quand dois-je remplacer ma vieille chaudière à gaz ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La durée de vie moyenne d'une chaudière à gaz est de 15 ans. Si votre chaudière tombe souvent en panne, consomme anormalement ou fait des bruits inhabituels, il est conseillé de la remplacer par un modèle à très haute performance énergétique (condensation) ou par une pompe à chaleur."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi l'entretien annuel est-il obligatoire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'entretien annuel est obligatoire par décret pour toutes les chaudières et pour les pompes à chaleur/climatisations contenant plus de 2kg de fluide frigorigène. Il garantit votre sécurité, prévient les pannes, optimise le rendement et prolonge la durée de vie de l'appareil."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les marques avec lesquelles vous travaillez ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous travaillons principalement avec les leaders du marché comme Daikin, Mitsubishi Electric et Atlantic pour vous garantir une fiabilité et des performances optimales."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les aides de l'État pour l'installation d'une pompe à chaleur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En tant qu'artisan RGE, nos installations sont éligibles à MaPrimeRénov', aux primes CEE (Certificats d'Économies d'Énergie) et à l'éco-PTZ. Le montant dépend de vos revenus et du matériel choisi."
      }
    },
    {
      "@type": "Question",
      "name": "À quelle fréquence faut-il nettoyer les filtres de sa climatisation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En plus de l'entretien annuel par un professionnel, nous recommandons de dépoussiérer et laver les filtres de vos unités intérieures tous les 2 à 3 mois à l'eau tiède."
      }
    },
    {
      "@type": "Question",
      "name": "Proposez-vous des facilités de paiement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous accompagnons nos clients pour le financement de leurs installations neuves. Nous pouvons vous guider vers les aides de l'État (MaPrimeRénov', CEE) et proposons des règlements échelonnés."
      }
    }
  ]
};

export default function FAQ() {
  const faqs = [
    {
      question: "Combien de temps faut-il pour installer une climatisation réversible ?",
      answer: "L'installation d'un système mono-split (une unité intérieure et une unité extérieure) prend généralement une journée. Pour un système multi-splits ou gainable, l'intervention peut durer entre 2 et 4 jours selon la complexité du chantier.",
      category: "Climatisation"
    },
    {
      question: "Quand dois-je remplacer ma vieille chaudière à gaz ?",
      answer: "La durée de vie moyenne d'une chaudière à gaz est de 15 ans. Si votre chaudière tombe souvent en panne, consomme anormalement ou fait des bruits inhabituels, il est conseillé de la remplacer par un modèle à très haute performance énergétique (condensation) ou par une pompe à chaleur.",
      category: "Chauffage"
    },
    {
      question: "Pourquoi l'entretien annuel est-il obligatoire ?",
      answer: "L'entretien annuel est obligatoire par décret pour toutes les chaudières (gaz, fioul, bois) et pour les pompes à chaleur/climatisations contenant plus de 2kg de fluide frigorigène. Il garantit votre sécurité, prévient les pannes, optimise le rendement (jusqu'à 12% d'économies d'énergie) et prolonge la durée de vie de l'appareil.",
      category: "Entretien"
    },
    {
      question: "Intervenez-vous pour le dépannage de ballons d'eau chaude ?",
      answer: "Oui, nous dépannons et remplaçons tous les types de ballons d'eau chaude (chauffe-eau électrique, thermodynamique). Si vous n'avez plus d'eau chaude ou constatez une fuite, notre équipe intervient rapidement pour un diagnostic gratuit.",
      category: "Dépannage"
    },
    {
      question: "Quelles sont les marques avec lesquelles vous travaillez ?",
      answer: "Nous travaillons principalement avec les leaders du marché comme Daikin, Mitsubishi Electric et Atlantic pour vous garantir une fiabilité et des performances optimales.",
      category: "Équipement"
    },
    {
      question: "Quelles sont les aides de l'État pour l'installation d'une pompe à chaleur ?",
      answer: "En tant qu'artisan RGE, nos installations sont éligibles à MaPrimeRénov', aux primes CEE (Certificats d'Économies d'Énergie) et à l'éco-PTZ. Le montant dépend de vos revenus et du matériel choisi.",
      category: "Tarifs"
    },
    {
      question: "À quelle fréquence faut-il nettoyer les filtres de sa climatisation ?",
      answer: "En plus de l'entretien annuel par un professionnel, nous recommandons de dépoussiérer et laver les filtres de vos unités intérieures tous les 2 à 3 mois à l'eau tiède pour maintenir une bonne qualité d'air et éviter une surconsommation.",
      category: "Entretien"
    },
    {
      question: "Proposez-vous des facilités de paiement ?",
      answer: "Oui, nous accompagnons nos clients pour le financement de leurs installations neuves (Climatisation, Chaudière à Très Haute Performance, Pompe à chaleur). Nous pouvons vous guider vers les aides de l'État (MaPrimeRénov', CEE) et proposons des règlements échelonnés.",
      category: "Tarifs"
    }
  ];

  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', paddingBottom: '5rem' }} className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="text-center" style={{ marginBottom: '1rem', fontSize: '3rem' }}>
        Foire Aux <span className="text-secondary">Questions</span>
      </h1>
      <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
        Toutes les réponses à vos questions concernant l'installation, l'entretien et le dépannage de vos équipements thermiques.
      </p>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {faqs.map((faq, index) => (
          <details key={index} className="faq-details" style={{
            background: 'var(--surface)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--surface-alt)',
            overflow: 'hidden',
            transition: 'var(--transition)'
          }}>
            <summary style={{
              padding: '1.5rem 2rem',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1.1rem',
              color: 'var(--text-main)',
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              userSelect: 'none'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-main)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ 
                  background: 'var(--surface-alt)', 
                  color: 'var(--primary)', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: 'var(--radius-full)', 
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {faq.category}
                </span>
                {faq.question}
              </div>
              <span className="faq-icon" style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}>+</span>
            </summary>
            
            <div style={{ 
              padding: '0 2rem 1.5rem 2rem', 
              color: 'var(--text-muted)', 
              lineHeight: '1.7',
              borderTop: '1px solid var(--surface-alt)',
              marginTop: '0.5rem',
              paddingTop: '1rem'
            }}>
              {faq.answer}
            </div>
          </details>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        details.faq-details[open] summary .faq-icon {
          transform: rotate(45deg);
          color: var(--secondary);
        }
        details.faq-details[open] {
          box-shadow: var(--shadow-md) !important;
          border-color: var(--primary-light) !important;
        }
        details.faq-details summary::-webkit-details-marker {
          display: none;
        }
      `}} />

      <div className="text-center" style={{ marginTop: '5rem', background: 'var(--glass-bg)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
        <h3 style={{ marginBottom: '1rem' }}>Vous ne trouvez pas votre réponse ?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Notre équipe est à votre disposition pour toute demande spécifique.</p>
        <a href="/reservation" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Demander un devis ou réserver</a>
      </div>
    </div>
  );
}
