import { motion } from 'framer-motion';

export const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export const GlowCard = ({ children, className = "", delay = 0, glowColor = "neon-purple" }) => {
  const colorMap = {
    'neon-purple': { bg: 'bg-neon-purple/10', hover: 'group-hover:bg-neon-purple/20', ring: 'ring-neon-purple/30', shadow: 'shadow-[0_0_30px_rgba(168,85,247,0.1)]' },
    'neon-blue': { bg: 'bg-neon-blue/10', hover: 'group-hover:bg-neon-blue/20', ring: 'ring-neon-blue/30', shadow: 'shadow-[0_0_30px_rgba(14,165,233,0.1)]' },
    'neon-cyan': { bg: 'bg-neon-cyan/10', hover: 'group-hover:bg-neon-cyan/20', ring: 'ring-neon-cyan/30', shadow: 'shadow-[0_0_30px_rgba(34,211,238,0.1)]' },
    'neon-pink': { bg: 'bg-neon-pink/10', hover: 'group-hover:bg-neon-pink/20', ring: 'ring-neon-pink/30', shadow: 'shadow-[0_0_30px_rgba(236,72,153,0.1)]' },
  };

  const colors = colorMap[glowColor] || colorMap['neon-purple'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`glass-dark p-8 rounded-3xl relative group glow-card ${className}`}
    >
      {/* Background Clipped Layer */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className={`absolute -top-24 -right-24 w-48 h-48 ${colors.bg} blur-3xl ${colors.hover} transition-all duration-300`} />
      </div>
      
      {/* Subtle border glow overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none ring-1 ${colors.ring} ring-inset ${colors.shadow}`} />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
