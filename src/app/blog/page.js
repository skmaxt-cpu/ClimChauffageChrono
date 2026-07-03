import { blogPosts } from '@/data/blogPosts';
import Link from 'next/link';

export const metadata = {
  title: 'Blog CVC : Conseils Chauffage et Climatisation - Chrono Clim',
  description: 'Découvrez tous nos conseils d\'experts pour optimiser votre confort thermique, réduire vos factures et entretenir vos équipements de chauffage et climatisation.',
  alternates: {
    canonical: 'https://www.chronoclim.fr/blog',
  },
};

export default function BlogIndex() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', paddingBottom: '5rem' }} className="container">
      <h1 className="text-center" style={{ marginBottom: '1rem' }}>Notre <span className="text-primary">Blog</span></h1>
      <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
        Conseils d'experts, actualités réglementaires et astuces pour optimiser votre confort thermique et vos factures énergétiques.
      </p>

      <div className="grid grid-3" style={{ gap: '2rem' }}>
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
            <article className="hover-lift" style={{ 
              background: 'var(--surface)', 
              borderRadius: 'var(--radius-md)', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-sm)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <img 
                src={post.image} 
                alt={post.title} 
                style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.85rem' }}>
                  <span style={{ 
                    background: 'var(--surface-alt)', 
                    color: 'var(--primary)', 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: 'var(--radius-full)',
                    fontWeight: '600'
                  }}>
                    {post.category}
                  </span>
                  <time style={{ color: 'var(--text-muted)' }}>
                    {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: '1.4' }}>
                  {post.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {post.excerpt}
                </p>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'inline-block', marginTop: 'auto' }}>
                  Lire l'article →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
