'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu principal"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
        <div className="mobile-nav-links">
          <Link href="/" onClick={closeMenu}>Accueil</Link>
          <Link href="/climatisation" onClick={closeMenu}>Climatisation</Link>
          <Link href="/chauffage" onClick={closeMenu}>Chauffage</Link>
          <Link href="/tarifs" onClick={closeMenu}>Tarifs</Link>
          <Link href="/faq" onClick={closeMenu}>FAQ</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/zones-intervention" onClick={closeMenu}>Zones</Link>
          <Link href="/reservation" className="btn btn-primary" onClick={closeMenu} style={{ marginTop: '1rem', width: 'fit-content' }}>
            Réserver en ligne
          </Link>
        </div>
      </div>
    </>
  );
}
