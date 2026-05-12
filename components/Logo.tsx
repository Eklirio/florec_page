'use client';
import { motion } from 'framer-motion';

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      className={`relative inline-flex items-center gap-2 font-serifLuxury ${small ? 'text-lg' : 'text-2xl'}`}
    >
      <span className="logo-glow">Flore C Detalles</span>
    </motion.div>
  );
}
