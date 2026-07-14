export const metadata = {
  title: 'Mentions Légales - Clim Chrono',
  description: 'Mentions légales du site Clim Chrono, expert en chauffage, climatisation et pompes à chaleur.',
};

export default function MentionsLegales() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', paddingBottom: '5rem' }} className="container">
      <h1 className="text-center" style={{ marginBottom: '3rem' }}>Mentions <span className="text-secondary">Légales</span></h1>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>1. Éditeur du site</h2>
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p><strong>Raison sociale :</strong> Clim Chrono</p>
            <p><strong>Forme juridique :</strong> [À compléter - ex: SARL, SAS, Auto-entrepreneur]</p>
            <p><strong>Capital social :</strong> [À compléter]</p>
            <p><strong>Siège social :</strong> [Adresse à compléter]</p>
            <p><strong>SIRET :</strong> [Numéro SIRET à compléter]</p>
            <p><strong>RCS :</strong> [Ville et numéro RCS à compléter]</p>
            <p><strong>Numéro de TVA intracommunautaire :</strong> [À compléter]</p>
            <p><strong>Directeur de la publication :</strong> [Nom du gérant à compléter]</p>
            <p><strong>Téléphone :</strong> 07 58 93 92 18</p>
            <p><strong>Email :</strong> cvcchrono@gmail.com</p>
          </div>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>2. Qualifications professionnelles</h2>
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p>Clim Chrono est titulaire des certifications et qualifications suivantes :</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>RGE QualiPAC</strong> – Qualification pour l'installation de pompes à chaleur.</li>
              <li><strong>Qualigaz</strong> – Habilitation pour les travaux sur les installations de gaz.</li>
              <li><strong>Attestation de capacité fluides frigorigènes</strong> – Manipulation des fluides conformément à la réglementation européenne (F-Gas).</li>
            </ul>
            <p style={{ marginTop: '1rem' }}><strong>Assurance responsabilité civile professionnelle et décennale :</strong></p>
            <p>Compagnie : [Nom de l'assureur à compléter]<br/>
            Numéro de contrat : [À compléter]<br/>
            Couverture géographique : France métropolitaine</p>
          </div>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>3. Hébergement</h2>
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p><strong>Hébergeur :</strong> [Nom de l'hébergeur à compléter - ex: Vercel, OVH, etc.]</p>
            <p><strong>Adresse :</strong> [Adresse de l'hébergeur à compléter]</p>
            <p><strong>Téléphone :</strong> [Téléphone de l'hébergeur à compléter]</p>
          </div>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>4. Propriété intellectuelle</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. 
            Toute reproduction, représentation, modification, publication, transmission, ou dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable de Clim Chrono.
          </p>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>5. Limitation de responsabilité</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. 
            Clim Chrono ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications, soit de l'apparition d'un bug ou d'une incompatibilité.
          </p>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>6. Médiation de la consommation</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, en cas de litige, le consommateur peut recourir gratuitement au service de médiation. 
            Le médiateur de la consommation est : [Nom et coordonnées du médiateur à compléter].<br/>
            Site internet du médiateur : [URL à compléter]
          </p>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--surface-alt)', paddingBottom: '0.5rem' }}>7. Droit applicable</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <div style={{ background: 'var(--surface-alt)', padding: '1.5rem', borderRadius: 'var(--radius-md)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <strong>Note :</strong> Les champs marqués [À compléter] doivent être renseignés avec vos informations légales réelles avant la mise en production du site. 
          Ces mentions légales sont conformes aux obligations de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
        </div>
      </div>
    </div>
  );
}
