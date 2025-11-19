import React from 'react';
import { Button } from '@/components/ui/button';
import { ICONS, HERO } from '@/features/home/constants';

const { PlayCircle, Download, Smartphone } = ICONS;

export default function Hero({ isVisible }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${HERO.mockupImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section
      id="inicio"
      className={`hero-section ${isVisible ? 'fade-in' : ''}`}
      style={backgroundStyle}
    >
      <div className="hero-content hero-full">
        <div className="hero-text hero-centered">
          <h1 className="hero-title hero-title-light">
            Tu Sabiduría Anime tiene Recompensa
          </h1>
          <p className="hero-description hero-description-light">
            Únete a la tripulación más apasionada del anime. Responde preguntas,
            demuestra tu conocimiento y gana increíbles premios reales.
          </p>
          <div className="hero-buttons hero-buttons-centered">
            <Button className="cta-primary">
              <PlayCircle className="w-5 h-5 mr-2" />
              ¡Jugar Ahora!
            </Button>
            <Button className="cta-secondary">
              <Download className="w-5 h-5 mr-2" />
              Descarga la App Oficial
            </Button>
          </div>
          <div className="app-badge app-badge-light">
            <Smartphone className="w-5 h-5 mr-2" />
            <span>Descarga la Aplicación Oficial de Binks Crew</span>
          </div>
        </div>
      </div>
    </section>
  );
}
