import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { LOGO } from '@/features/home/constants';

export default function Header({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            onClick={() => onNavigate('inicio')}
            className={`nav-link ${scrolled ? 'nav-link-dark' : 'nav-link-light'}`}
          >
            Inicio
          </button>
          <button
            onClick={() => onNavigate('como-jugar')}
            className={`nav-link ${scrolled ? 'nav-link-dark' : 'nav-link-light'}`}
          >
            ¿Cómo jugar?
          </button>
          <button
            onClick={() => onNavigate('premios')}
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
      </div>
    </header>
  );
}
