import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';
import { LOGO } from '@/features/home/constants';

export default function Header({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    onNavigate(section);
    setIsMenuOpen(false); // Cerrar menú en móvil
  };

  return (
    <header
      className={`header ${scrolled ? 'header-white' : 'header-transparent'}`}
    >
      <div className="header-content">
        <div className="logo-container">
          <img src={LOGO} alt="Binks Crew Logo" className="logo-image" />
          <span className={`logo-text ${scrolled ? 'logo-text-dark' : ''}`}>
            Binks Crew
          </span>
        </div>
        <nav className="nav-menu">
          <button
            onClick={() => handleNavClick('inicio')}
            className={`nav-link ${scrolled ? 'nav-link-dark' : 'nav-link-light'}`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('como-jugar')}
            className={`nav-link ${scrolled ? 'nav-link-dark' : 'nav-link-light'}`}
          >
            ¿Cómo jugar?
          </button>
          <button
            onClick={() => handleNavClick('premios')}
            className={`nav-link ${scrolled ? 'nav-link-dark' : 'nav-link-light'}`}
          >
            Premios
          </button>
          <Button
            className={`download-btn-header ${scrolled ? 'download-btn-header-dark' : 'download-btn-header-light'}`}
          >
            <Download className="w-4 h-4 mr-2" />
            Descargar App
          </Button>
        </nav>
        <button
          className={`burger-menu ${isMenuOpen ? 'burger-menu-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => handleNavClick('inicio')}
            className="mobile-nav-link"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('como-jugar')}
            className="mobile-nav-link"
          >
            ¿Cómo jugar?
          </button>
          <button
            onClick={() => handleNavClick('premios')}
            className="mobile-nav-link"
          >
            Premios
          </button>
          <Button className="mobile-download-btn">
            <Download className="w-4 h-4 mr-2" />
            Descargar App
          </Button>
        </div>
      )}
    </header>
  );
}
