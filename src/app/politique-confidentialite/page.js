export const metadata = {
  title: 'Politique de Confidentialité (RGPD) - Clim Chrono',
  description: 'Politique de confidentialité et de protection des données personnelles de Clim Chrono, conforme au RGPD.',
};

export default function PolitiqueConfidentialite() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', paddingBottom: '5rem' }} className="container">
      <h1 className="text-center" style={{ marginBottom: '1rem' }}>Politique de <span className="text-secondary">Confidentialité</span></h1>
      <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
        Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679), nous nous engageons à protéger vos données personnelles.
      </p>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>1. Responsable du traitement</h2>
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p>Le responsable du traitement des données collectées sur ce site est :</p>
            <p><strong>Clim Chrono</strong><br/>
            [Adresse à compléter]<br/>
            Email : cvcchrono@gmail.com<br/>
            Téléphone : 07 58 93 92 18</p>
          </div>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>2. Données collectées</h2>
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p>Nous collectons les données suivantes, uniquement lorsque vous les fournissez via nos formulaires :</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Données d'identification :</strong> Nom, prénom</li>
              <li><strong>Données de contact :</strong> Adresse email, numéro de téléphone</li>
              <li><strong>Données relatives à votre demande :</strong> Type d'intervention souhaitée, date préférée, message libre</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>Nous ne collectons <strong>aucune donnée sensible</strong> (données de santé, opinions politiques, données biométriques, etc.).</p>
          </div>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>3. Finalités du traitement</h2>
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
            <div style={{ background: 'var(--surface-alt)', borderRadius: 'var(--radius-sm)', padding: '1.5rem', marginTop: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--surface)' }}>
                    <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-main)' }}>Finalité</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-main)' }}>Base légale</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-main)' }}>Durée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--surface)' }}>
                    <td style={{ padding: '0.5rem' }}>Traitement de votre demande de devis ou de réservation</td>
                    <td style={{ padding: '0.5rem' }}>Exécution de mesures précontractuelles</td>
                    <td style={{ padding: '0.5rem' }}>3 ans après le dernier contact</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--surface)' }}>
                    <td style={{ padding: '0.5rem' }}>Gestion de la relation client (suivi d'intervention)</td>
                    <td style={{ padding: '0.5rem' }}>Exécution du contrat</td>
                    <td style={{ padding: '0.5rem' }}>Durée de la relation contractuelle + 5 ans</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem' }}>Envoi de rappels d'entretien annuel</td>
                    <td style={{ padding: '0.5rem' }}>Intérêt légitime</td>
                    <td style={{ padding: '0.5rem' }}>Jusqu'à opposition de votre part</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>4. Destinataires des données</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Vos données personnelles sont destinées exclusivement à l'équipe Clim Chrono. Elles ne sont <strong>jamais vendues, cédées ou partagées</strong> avec des tiers à des fins commerciales. 
            Seuls peuvent y accéder : le responsable de traitement, les techniciens assignés à votre intervention, et le cas échéant, notre hébergeur web (dans le cadre strict du stockage sécurisé).
          </p>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>5. Vos droits (RGPD)</h2>
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données :</p>
            <div className="grid grid-2" style={{ gap: '1rem', marginTop: '1rem' }}>
              <div style={{ background: 'var(--surface)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-alt)' }}>
                <strong style={{ color: 'var(--text-main)' }}>📋 Droit d'accès</strong>
                <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>Obtenir la confirmation que vos données sont traitées et en recevoir une copie.</p>
              </div>
              <div style={{ background: 'var(--surface)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-alt)' }}>
                <strong style={{ color: 'var(--text-main)' }}>✏️ Droit de rectification</strong>
                <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>Demander la correction de données inexactes ou incomplètes.</p>
              </div>
              <div style={{ background: 'var(--surface)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-alt)' }}>
                <strong style={{ color: 'var(--text-main)' }}>🗑️ Droit à l'effacement</strong>
                <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>Demander la suppression de vos données personnelles ("droit à l'oubli").</p>
              </div>
              <div style={{ background: 'var(--surface)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-alt)' }}>
                <strong style={{ color: 'var(--text-main)' }}>🚫 Droit d'opposition</strong>
                <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>Vous opposer à tout moment au traitement de vos données pour motif légitime.</p>
              </div>
              <div style={{ background: 'var(--surface)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-alt)' }}>
                <strong style={{ color: 'var(--text-main)' }}>📦 Droit à la portabilité</strong>
                <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>Recevoir vos données dans un format structuré et les transmettre à un autre responsable.</p>
              </div>
              <div style={{ background: 'var(--surface)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-alt)' }}>
                <strong style={{ color: 'var(--text-main)' }}>⏸️ Droit à la limitation</strong>
                <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>Demander la suspension temporaire du traitement de vos données.</p>
              </div>
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              Pour exercer ces droits, contactez-nous à : <strong>cvcchrono@gmail.com</strong> en joignant un justificatif d'identité.<br/>
              Nous nous engageons à vous répondre sous <strong>30 jours maximum</strong>.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) :<br/>
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>www.cnil.fr</a> – 3, Place de Fontenoy – TSA 80715 – 75334 Paris Cedex 07
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>6. Cookies</h2>
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p>Ce site utilise uniquement des <strong>cookies strictement nécessaires</strong> au bon fonctionnement du site. Aucun cookie de pistage publicitaire ou de profilage n'est déposé sans votre consentement explicite.</p>
            <div style={{ background: 'var(--surface-alt)', borderRadius: 'var(--radius-sm)', padding: '1.5rem', marginTop: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--surface)' }}>
                    <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-main)' }}>Cookie</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-main)' }}>Type</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-main)' }}>Durée</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-main)' }}>Finalité</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.5rem' }}>chrono_cookie_consent</td>
                    <td style={{ padding: '0.5rem' }}>Fonctionnel</td>
                    <td style={{ padding: '0.5rem' }}>12 mois</td>
                    <td style={{ padding: '0.5rem' }}>Mémoriser votre choix de consentement aux cookies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '1rem' }}>Vous pouvez à tout moment gérer vos préférences de cookies via les paramètres de votre navigateur ou en nous contactant.</p>
          </div>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>7. Sécurité des données</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour assurer la sécurité et la confidentialité de vos données personnelles, 
            notamment contre la destruction accidentelle ou illicite, la perte, l'altération, la divulgation ou l'accès non autorisé. 
            Le site est sécurisé par un certificat SSL (HTTPS).
          </p>
        </section>

        <div style={{ background: 'var(--surface-alt)', padding: '1.5rem', borderRadius: 'var(--radius-md)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </div>
  );
}
