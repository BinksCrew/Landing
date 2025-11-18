import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Download, PlayCircle, Gift, Trophy, Smartphone, HelpCircle } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const prizes = [
    {
      image: 'https://images.unsplash.com/photo-1735720422405-9fd845c48c8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNvbGxlY3RpYmxlc3xlbnwwfHx8fDE3NjM0OTQyMjR8MA&ixlib=rb-4.1.0&q=85',
      title: 'Figuras Coleccionables',
      description: 'Figuras exclusivas de tus personajes favoritos'
    },
    {
      image: 'https://images.unsplash.com/photo-1736083246433-6469582524db?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxhbmltZSUyMGNvbGxlY3RpYmxlc3xlbnwwfHx8fDE3NjM0OTQyMjR8MA&ixlib=rb-4.1.0&q=85',
      title: 'Peluches Únicos',
      description: 'Adorables peluches de anime'
    },
    {
      image: 'https://images.unsplash.com/photo-1735720518793-804614ff5c48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxhbmltZSUyMGNvbGxlY3RpYmxlc3xlbnwwfHx8fDE3NjM0OTQyMjR8MA&ixlib=rb-4.1.0&q=85',
      title: 'Llaveros Premium',
      description: 'Llaveros de edición limitada'
    }
  ];

  const steps = [
    {
      icon: <Download className="w-12 h-12" />,
      title: 'Descarga la App',
      description: 'Obtén la aplicación oficial de Binks Crew gratis'
    },
    {
      icon: <HelpCircle className="w-12 h-12" />,
      title: 'Responde Preguntas',
      description: 'Demuestra tu conocimiento sobre anime'
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Acumula Puntos',
      description: 'Cada respuesta correcta suma a tu puntaje'
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: 'Gana Premios',
      description: 'Canjea tus puntos por increíbles recompensas'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_7f9ec7a5-bcab-466d-af05-ca3523901379/artifacts/vucut7zv_Gemini_Generated_Image_enuix0enuix0enui%20%281%29%20%281%29.png" 
              alt="Binks Crew Logo" 
              className="logo-image"
            />
            <span className="logo-text">Binks Crew</span>
          </div>
          <nav className="nav-menu">
            <button onClick={() => scrollToSection('inicio')} className="nav-link">Inicio</button>
            <button onClick={() => scrollToSection('como-jugar')} className="nav-link">¿Cómo jugar?</button>
            <button onClick={() => scrollToSection('premios')} className="nav-link">Premios</button>
            <Button className="download-btn-header">
              <Download className="w-4 h-4 mr-2" />
              Descargar App
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Tu Sabiduría Anime tiene Recompensa
            </h1>
            <p className="hero-description">
              Únete a la tripulación más apasionada del anime. Responde preguntas, demuestra tu conocimiento y gana increíbles premios reales.
            </p>
            <div className="hero-buttons">
              <Button className="cta-primary">
                <PlayCircle className="w-5 h-5 mr-2" />
                ¡Jugar Ahora!
              </Button>
              <Button className="cta-secondary">
                <Download className="w-5 h-5 mr-2" />
                Descarga la App Oficial
              </Button>
            </div>
            <div className="app-badge">
              <Smartphone className="w-5 h-5 mr-2" />
              <span>Descarga la Aplicación Oficial de Binks Crew</span>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1629697777394-e0b3103903bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzYzNDk0MjM3fDA&ixlib=rb-4.1.0&q=85" 
              alt="Binks Crew App Mockup" 
              className="mockup-image"
            />
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section id="como-jugar" className="section-container">
        <h2 className="section-title">¿Cómo jugar?</h2>
        <p className="section-subtitle">Cuatro pasos simples para comenzar tu aventura</p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <Card key={index} className="step-card">
              <div className="step-icon">
                {step.icon}
              </div>
              <div className="step-number">Paso {index + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Prizes Section */}
      <section id="premios" className="section-container prizes-section">
        <h2 className="section-title">Nuestros Premios</h2>
        <p className="section-subtitle">Recompensas reales para verdaderos fanáticos del anime</p>
        <div className="prizes-grid">
          {prizes.map((prize, index) => (
            <Card key={index} className="prize-card">
              <div className="prize-image-container">
                <img src={prize.image} alt={prize.title} className="prize-image" />
              </div>
              <div className="prize-content">
                <h3 className="prize-title">{prize.title}</h3>
                <p className="prize-description">{prize.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-final-section">
        <div className="cta-final-content">
          <h2 className="cta-final-title">¡Únete a la Tripulación!</h2>
          <p className="cta-final-description">
            Miles de fanáticos del anime ya están ganando premios increíbles. No te quedes fuera de esta aventura épica.
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_7f9ec7a5-bcab-466d-af05-ca3523901379/artifacts/vucut7zv_Gemini_Generated_Image_enuix0enuix0enui%20%281%29%20%281%29.png" 
              alt="Binks Crew Logo" 
              className="footer-logo"
            />
            <p className="footer-tagline">Tu sabiduría anime, recompensada</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <a href="#" className="footer-link">Términos y Condiciones</a>
              <a href="#" className="footer-link">Política de Privacidad</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Redes Sociales</h4>
              <a href="#" className="footer-link">Instagram</a>
              <a href="#" className="footer-link">Twitter</a>
              <a href="#" className="footer-link">Discord</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Binks Crew. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;