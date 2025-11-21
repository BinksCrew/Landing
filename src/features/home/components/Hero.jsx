import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ICONS } from '@/features/home/constants';

const { PlayCircle } = ICONS;

export default function Hero({ isVisible }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 2);
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className={`hero-section ${isVisible ? 'fade-in' : ''}`}
    >
      <div
        className="hero-background"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/hero.webp)`,
          opacity: currentImage === 0 ? 1 : 0,
        }}
      />
      <div
        className="hero-background"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/heromovie.webp)`,
          opacity: currentImage === 1 ? 1 : 0,
        }}
      />
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
          </div>
          <div className="store-badges">
            <a
              href="https://github.com/BinksCrew/App/raw/main/binkscrew.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="store-link"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Disponible en Google Play"
                className="store-badge-google"
              />
            </a>
            <a
              href="https://github.com/BinksCrew/App/raw/main/binkscrew.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="store-link"
            >
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                alt="Descargar en App Store"
                className="store-badge-apple"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
