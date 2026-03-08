import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const GradientBlobBackground = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden bg-theme pointer-events-none transition-all duration-700`}>
      {/* Dynamic Background Gradients */}
      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#1e1b4b_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#0f172a_0%,transparent_50%)]" />
      </div>

      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${!isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#bae6fd44_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#f1f5f9_0%,transparent_50%)]" />
      </div>
      
      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, -50, 50, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full ${isDarkMode ? 'mix-blend-screen opacity-60' : 'mix-blend-multiply opacity-30'} transition-all duration-700`}
      />
      
      <motion.div
        animate={{
          x: [0, -150, 0, 150, 0],
          y: [0, -100, 100, -100, 0],
          scale: [1, 0.8, 1.2, 1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-blue/20 blur-[120px] rounded-full ${isDarkMode ? 'mix-blend-screen opacity-50' : 'mix-blend-multiply opacity-20'} transition-all duration-700`}
      />
      
      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 150, -150, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/15 blur-[100px] rounded-full ${isDarkMode ? 'mix-blend-screen opacity-40' : 'mix-blend-multiply opacity-15'} transition-all duration-700`}
      />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
    </div>
  );
};

export default GradientBlobBackground;
