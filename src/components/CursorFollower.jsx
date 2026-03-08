import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 1024) {
        setIsVisible(false);
      }
    };
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible && window.innerWidth >= 1024) setIsVisible(true);
    };
    
    const handleMouseOver = (e) => {
      // Check if target is a button, link, or card
      if (e.target.closest('button, a, .glow-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('resize', checkMobile);
    
    checkMobile(); // Initial check
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isVisible, mouseX, mouseY]);
  
  if (!isVisible) return null;
  
  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHovering ? 2 : 1,
        opacity: isHovering ? 0.6 : 0.4,
      }}
      className="fixed top-0 left-0 w-12 h-12 bg-neon-purple rounded-full pointer-events-none z-[9999] mix-blend-screen blur-xl shadow-[0_0_40px_rgba(168,85,247,0.6)]"
    >
      <div className="absolute inset-0 bg-neon-blue rounded-full opacity-40 animate-pulse mix-blend-overlay" />
    </motion.div>
  );
};

export default CursorFollower;
