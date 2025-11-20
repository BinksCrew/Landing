import React from 'react';
import { Card } from '@/components/ui/card';

export default function PrizesSection({ prizes }) {
  return (
    <section id="premios" className="prizes-section">
      <div className="prizes-container">
        <h2 className="prizes-title">Nuestros Premios</h2>
        <p className="prizes-subtitle">
          Recompensas reales para verdaderos fanáticos del anime
        </p>
        <div className="prizes-showcase">
          {prizes.map((prize, index) => (
            <Card key={index} className={`prize-card prize-card-${index + 1}`}>
              <div className="prize-glow"></div>
              <div className="prize-image-container">
                <img
                  src={prize.image}
                  alt={prize.title}
                  className="prize-image"
                />
                <div className="prize-overlay">
                  <div className="prize-badge">¡Exclusivo!</div>
                </div>
              </div>
              <div className="prize-content">
                <h3 className="prize-title">{prize.title}</h3>
                <p className="prize-description">{prize.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
