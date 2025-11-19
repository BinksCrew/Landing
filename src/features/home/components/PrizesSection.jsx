import React from 'react';
import { Card } from '@/components/ui/card';

export default function PrizesSection({ prizes }) {
  return (
    <section id="premios" className="section-container prizes-section">
      <h2 className="section-title">Nuestros Premios</h2>
      <p className="section-subtitle">
        Recompensas reales para verdaderos fanáticos del anime
      </p>
      <div className="prizes-grid">
        {prizes.map((prize, index) => (
          <Card key={index} className="prize-card">
            <div className="prize-image-container">
              <img
                src={prize.image}
                alt={prize.title}
                className="prize-image"
              />
            </div>
            <div className="prize-content">
              <h3 className="prize-title">{prize.title}</h3>
              <p className="prize-description">{prize.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
