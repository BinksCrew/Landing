import React from 'react';
import { Card } from '@/components/ui/card';

export default function StepsSection({ steps }) {
  return (
    <section id="como-jugar" className="section-container">
      <h2 className="section-title">¿Cómo jugar?</h2>
      <p className="section-subtitle">
        Cuatro pasos simples para comenzar tu aventura
      </p>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <Card key={index} className="step-card">
            <div className="step-icon">{step.icon}</div>
            <div className="step-number">Paso {index + 1}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
