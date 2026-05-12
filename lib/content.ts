export type HeroSlide = { title: string; subtitle: string; image: string; cta: string };

export const promoBar = [
  'Envío gratis en pedidos desde $120',
  'Campaña Día de la Madre: -20%',
  'Nuevos ingresos de rosas ecuatorianas'
];

export const heroSlides: HeroSlide[] = [
  {
    title: 'Colección Día de la Madre',
    subtitle: 'Experiencias florales que emocionan y celebran.',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1800&q=80',
    cta: 'Comprar colección'
  },
  {
    title: 'San Valentín Signature',
    subtitle: 'Diseños románticos con acabados de lujo.',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1800&q=80',
    cta: 'Reservar ahora'
  }
];

export const collections = [
  { name: 'Blush Couture', desc: 'Texturas suaves y elegantes.', price: '$89' },
  { name: 'Champagne Luxe', desc: 'Diseño premium internacional.', price: '$129' },
  { name: 'Wine Romance', desc: 'Profundo, femenino y sofisticado.', price: '$149' }
];
