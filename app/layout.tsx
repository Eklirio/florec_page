import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import '@/styles/animations.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Flore C Detalles | Florería Boutique Premium',
  description: 'Arreglos florales de lujo con experiencia emocional y estilo internacional.',
  keywords: ['florería premium', 'arreglos florales', 'Flore C Detalles', 'luxury flowers']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-ivory text-wine`}>{children}</body>
    </html>
  );
}
