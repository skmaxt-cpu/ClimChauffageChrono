import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Generate static params for all known blog posts to statically generate them at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Article non trouvé' };

  return {
    title: `${post.title} - Blog Chrono Clim`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // A very simple markdown-like to HTML parser for our hardcoded content
  const renderContent = (content) => {
    return content.split('\\n').map((line, index) => {
      if (line.startsWith('### ')) {
        return <h3 key={index} style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem' }}>{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('- **')) {
        const parts = line.replace('- **', '').split('** : ');
        return <li key={index} style={{ marginBottom: '0.5rem' }}><strong>{parts[0]}</strong> : {parts[1]}</li>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} style={{ marginBottom: '0.5rem' }}>{line.replace('- ', '')}</li>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} style={{ fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.5rem' }}>{line.replaceAll('**', '')}</p>;
      }
      if (line.trim() === '') return <br key={index} />;
      
      // Inline bold parsing
      let parsedLine = line;
      if (parsedLine.includes('**')) {
        const parts = parsedLine.split('**');
        return (
          <p key={index} style={{ marginBottom: '1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
            {parts.map((part, i) => i % 2 === 1 ? <strong key={i} style={{ color: 'var(--text-main)' }}>{part}</strong> : part)}
          </p>
        );
      }

      return <p key={index} style={{ marginBottom: '1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>{line}</p>;
    });
  };

  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', paddingBottom: '5rem' }} className="container">
      
      {/* Breadcrumb */}
      <nav style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>
        <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Accueil</Link>
        <span style={{ margin: '0 0.5rem', color: 'var(--surface-alt)' }}>/</span>
        <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
        <span style={{ margin: '0 0.5rem', color: 'var(--surface-alt)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>{post.category}</span>
      </nav>

      <article style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ 
            background: 'var(--surface-alt)', 
            color: 'var(--primary)', 
            padding: '0.4rem 1rem', 
            borderRadius: 'var(--radius-full)',
            fontWeight: '600',
            fontSize: '0.9rem',
            display: 'inline-block',
            marginBottom: '1.5rem'
          }}>
            {post.category}
          </span>
          <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', lineHeight: '1.2' }}>{post.title}</h1>
          <div style={{ color: 'var(--text-muted)' }}>
            Publié le {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        {/* Hero Image */}
        <img 
          src={post.image} 
          alt={post.title} 
          style={{ 
            width: '100%', 
            height: 'auto', 
            maxHeight: '450px',
            objectFit: 'cover', 
            borderRadius: 'var(--radius-lg)', 
            marginBottom: '3rem',
            boxShadow: 'var(--shadow-md)'
          }} 
        />

        {/* Content */}
        <div style={{ fontSize: '1.1rem' }}>
          {renderContent(post.content)}
        </div>

        {/* Footer CTA */}
        <div style={{ 
          marginTop: '4rem', 
          padding: '3rem', 
          background: 'var(--surface-alt)', 
          borderRadius: 'var(--radius-md)',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Vous avez un projet ou besoin d'un conseil ?</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Nos experts sont à votre disposition pour réaliser un devis gratuit et personnalisé.</p>
          <a href="/reservation" className="btn btn-primary">Prendre rendez-vous avec un expert</a>
        </div>

      </article>
    </div>
  );
}
