'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient mesh animé - Couleurs violet/purple/pink */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 120% 100% at 50% 0%, rgba(147, 51, 234, 0.15), transparent 50%), radial-gradient(ellipse 100% 100% at 0% 50%, rgba(236, 72, 153, 0.12), transparent 50%), radial-gradient(ellipse 100% 100% at 100% 50%, rgba(168, 85, 247, 0.12), transparent 50%)',
            'radial-gradient(ellipse 120% 100% at 50% 0%, rgba(236, 72, 153, 0.15), transparent 50%), radial-gradient(ellipse 100% 100% at 0% 50%, rgba(168, 85, 247, 0.12), transparent 50%), radial-gradient(ellipse 100% 100% at 100% 50%, rgba(147, 51, 234, 0.12), transparent 50%)',
            'radial-gradient(ellipse 120% 100% at 50% 0%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(ellipse 100% 100% at 0% 50%, rgba(147, 51, 234, 0.12), transparent 50%), radial-gradient(ellipse 100% 100% at 100% 50%, rgba(236, 72, 153, 0.12), transparent 50%)',
            'radial-gradient(ellipse 120% 100% at 50% 0%, rgba(147, 51, 234, 0.15), transparent 50%), radial-gradient(ellipse 100% 100% at 0% 50%, rgba(236, 72, 153, 0.12), transparent 50%), radial-gradient(ellipse 100% 100% at 100% 50%, rgba(168, 85, 247, 0.12), transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Particules flottantes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${Math.random() * 500 + 250}px`,
              height: `${Math.random() * 500 + 250}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: [
                'rgba(147, 51, 234, 0.08)',
                'rgba(236, 72, 153, 0.08)',
                'rgba(168, 85, 247, 0.08)',
                'rgba(192, 132, 252, 0.08)',
                'rgba(219, 39, 119, 0.08)',
                'rgba(139, 92, 246, 0.08)',
              ][i % 6],
            }}
            animate={{
              x: [0, Math.random() * 120 - 60, 0],
              y: [0, Math.random() * 120 - 60, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 12 + 18,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2.5,
            }}
          />
        ))}
      </div>


    </div>
  );
}
