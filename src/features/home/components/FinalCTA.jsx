import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Smartphone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="cta-final-section">
      <div className="cta-final-content">
        <h2 className="cta-final-title">¡Únete a la Tripulación!</h2>
        <p className="cta-final-description">
          Miles de fanáticos del anime ya están ganando premios increíbles. No
          te quedes fuera de esta aventura épica.
        </p>
        <Button className="cta-final-button">
          <Download className="w-6 h-6 mr-3" />
          Descarga Binks Crew Ahora
        </Button>
        <p className="official-app-text">
          <Smartphone className="w-4 h-4 inline mr-2" />
          Aplicación Oficial de Binks Crew - Disponible para iOS y Android
        </p>
      </div>
    </section>
  );
}
