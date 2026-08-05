'use client';

import { useState, useEffect, useRef } from 'react';
import { SYMPLA_URL } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on click outside or ESC key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Palestrantes', href: '/#palestrantes' },
    { label: 'Programação', href: '/#programacao' },
    { label: 'Ingressos', href: '/#ingressos' },
    { label: 'Seja Patrocinador', href: '/patrocinadores' },
    { label: 'FAQ', href: '/#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      suppressHydrationWarning
      className={`sticky top-0 z-50 transition-all duration-300 px-[clamp(16px,4vw,48px)] ${
        scrolled ? 'shadow-md bg-[#FDFBF7]/95 backdrop-blur-md py-1.5 md:py-2' : 'bg-[#FDFBF7]/90 backdrop-blur-sm py-2 md:py-2.5'
      }`}
      style={{
        borderBottom: '1px solid rgba(139,30,63,0.12)',
      }}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
        {/* Logo Area */}
        <a href="/" className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#8B1E3F] rounded-md p-1 flex-none">
          <img
            src="/assets/logo-icon.png"
            alt="Dia das Mulheres Poderosas Logo"
            className="flex-none object-contain transition-transform duration-200 group-hover:scale-105"
            style={{ height: '68px', width: 'auto', maxHeight: '68px' }}
          />
          <span
            className="text-[16px] sm:text-[18px] md:text-[19px] font-bold leading-[1.15] tracking-[0.02em] whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display', serif", color: '#6B1730' }}
          >
            Dia das<br />Mulheres Poderosas
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Navegação principal">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-semibold transition-colors duration-200 hover:text-[#8B1E3F] focus:outline-none focus:ring-2 focus:ring-[#8B1E3F] rounded-sm px-1 py-0.5"
              style={{ color: '#3D1220' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={SYMPLA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[14px] font-bold tracking-[0.02em] px-6 py-3 rounded-md transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B1E3F]"
            style={{
              backgroundColor: '#8B1E3F',
              color: '#FDFBF7',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#6B1730')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#8B1E3F')}
          >
            Garantir Meu Ingresso
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="p-2.5 rounded-lg text-[#3D1220] hover:bg-[#8B1E3F]/10 focus:outline-none focus:ring-2 focus:ring-[#8B1E3F] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-dropdown-menu"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-[#FDFBF7] border-b border-[rgba(139,30,63,0.15)] shadow-xl transition-all duration-300 animate-in slide-in-from-top-2"
        >
          <nav className="flex flex-col p-5 gap-3 max-w-[1240px] mx-auto" aria-label="Navegação mobile">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="text-[15px] font-semibold py-2.5 px-3 rounded-lg text-[#3D1220] hover:bg-[#8B1E3F]/10 hover:text-[#8B1E3F] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SYMPLA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="mt-2 text-center text-[15px] font-bold py-3.5 px-5 rounded-lg shadow-md transition-colors"
              style={{
                backgroundColor: '#8B1E3F',
                color: '#FDFBF7',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#6B1730')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#8B1E3F')}
            >
              Garantir Meu Ingresso
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
