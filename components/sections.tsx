'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag, Search, Menu, MessageCircle } from 'lucide-react';
import { collections, heroSlides, promoBar } from '@/lib/content';
import { Logo } from './Logo';

export function TopBar() { return <div className="bg-wine text-ivory text-sm py-2 overflow-hidden"><div className="animate-marquee whitespace-nowrap">{promoBar.join(' ✦ ')}</div></div>; }

export function Navbar() {
  return <header className="sticky top-0 z-40 backdrop-blur-md bg-ivory/80 border-b border-champagne/40"><nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between"><Logo small /><ul className="hidden md:flex gap-8 text-sm"><li>Colecciones</li><li>Más vendidos</li><li>Regalos</li><li>Testimonios</li></ul><div className="flex gap-3"><Search size={18}/><ShoppingBag size={18}/><Menu className="md:hidden" size={18}/></div></nav></header>;
}

export function Hero() { const slide = heroSlides[0]; return <section className="relative min-h-[75vh]"><Image src={slide.image} alt={slide.title} fill className="object-cover"/><div className="absolute inset-0 bg-gradient-to-r from-wine/70 to-transparent"/><div className="relative z-10 max-w-7xl mx-auto px-4 pt-24"><motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="text-4xl md:text-6xl font-serifLuxury text-ivory max-w-xl">{slide.title}</motion.h1><p className="text-ivory/90 mt-4 max-w-lg">{slide.subtitle}</p><button className="mt-8 px-6 py-3 rounded-full bg-champagne text-wine font-medium">{slide.cta}</button></div></section>; }

export function CollectionGrid() { return <section className="max-w-7xl mx-auto px-4 py-16"><h2 className="text-3xl font-serifLuxury mb-8">Colecciones destacadas</h2><div className="grid md:grid-cols-3 gap-6">{collections.map((item)=><motion.article whileHover={{y:-6}} key={item.name} className="rounded-3xl p-6 bg-white/60 backdrop-blur border border-champagne/25 shadow-premium"><Logo small /><h3 className="font-serifLuxury text-2xl mt-4">{item.name}</h3><p className="mt-2 text-wine/80">{item.desc}</p><p className="mt-4 text-champagne font-semibold">{item.price}</p></motion.article>)}</div></section>; }

export function MoreSections(){return <section className="max-w-7xl mx-auto px-4 pb-24 grid gap-8 md:grid-cols-2"><div className="glass p-8 rounded-3xl"><h3 className="text-2xl font-serifLuxury">Testimonios</h3><p className="mt-3">“Una experiencia emocional incomparable, detalles impecables.”</p></div><div className="glass p-8 rounded-3xl"><h3 className="text-2xl font-serifLuxury">Newsletter</h3><p className="mt-3">Recibe campañas, novedades y descuentos premium.</p><input className="mt-4 w-full rounded-xl border p-3" placeholder="Tu correo"/></div></section>}

export function FloatingWhatsApp(){return <a href="https://wa.me/000000000" className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full p-4 shadow-xl"><MessageCircle/></a>}

export function Footer(){return <footer className="bg-wine text-ivory py-12"><div className="max-w-7xl mx-auto px-4"><Logo/><p className="mt-3 text-ivory/80">Florería boutique premium internacional.</p></div></footer>}
