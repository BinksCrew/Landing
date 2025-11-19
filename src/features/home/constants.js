import React from 'react';
import {
  Download,
  PlayCircle,
  Gift,
  Trophy,
  Smartphone,
  HelpCircle,
} from 'lucide-react';

export const PRIZES = [
  {
    image:
      'https://images.unsplash.com/photo-1735720422405-9fd845c48c8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNvbGxlY3RpYmxlc3xlbnwwfHx8fDE3NjM0OTQyMjR8MA&ixlib=rb-4.1.0&q=85',
    title: 'Figuras Coleccionables',
    description: 'Figuras exclusivas de tus personajes favoritos',
  },
  {
    image:
      'https://images.unsplash.com/photo-1736083246433-6469582524db?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxhbmltZSUyMGNvbGxlY3RpYmxlc3xlbnwwfHx8fDE3NjM0OTQyMjR8MA&ixlib=rb-4.1.0&q=85',
    title: 'Peluches Únicos',
    description: 'Adorables peluches de anime',
  },
  {
    image:
      'https://images.unsplash.com/photo-1735720518793-804614ff5c48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxhbmltZSUyMGNvbGxlY3RpYmxlc3xlbnwwfHx8fDE3NjM0OTQyMjR8MA&ixlib=rb-4.1.0&q=85',
    title: 'Llaveros Premium',
    description: 'Llaveros de edición limitada',
  },
];

export const STEPS = [
  {
    icon: <Download className="w-12 h-12" />,
    title: 'Descarga la App',
    description: 'Obtén la aplicación oficial de Binks Crew gratis',
  },
  {
    icon: <HelpCircle className="w-12 h-12" />,
    title: 'Responde Preguntas',
    description: 'Demuestra tu conocimiento sobre anime',
  },
  {
    icon: <Trophy className="w-12 h-12" />,
    title: 'Acumula Puntos',
    description: 'Cada respuesta correcta suma a tu puntaje',
  },
  {
    icon: <Gift className="w-12 h-12" />,
    title: 'Gana Premios',
    description: 'Canjea tus puntos por increíbles recompensas',
  },
];

export const HERO = {
  mockupImage: '/hero.webp',
};

export const LOGO =
  'https://customer-assets.emergentagent.com/job_7f9ec7a5-bcab-466d-af05-ca3523901379/artifacts/vucut7zv_Gemini_Generated_Image_enuix0enuix0enui%20%281%29%20%281%29.png';

export const ICONS = { PlayCircle, Download, Smartphone };
