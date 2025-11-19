import React from 'react';
import { LOGO } from '@/features/home/constants';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={LOGO} alt="Binks Crew Logo" className="footer-logo" />
          <p className="footer-tagline">Tu sabiduría anime, recompensada</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">Legal</h4>
            <a href="#" className="footer-link">
              Términos y Condiciones
            </a>
            <a href="#" className="footer-link">
              Política de Privacidad
            </a>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Redes Sociales</h4>
            <a href="#" className="footer-link">
              Instagram
            </a>
            <a href="#" className="footer-link">
              Twitter
            </a>
            <a href="#" className="footer-link">
              Discord
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} Binks Crew. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
