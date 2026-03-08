import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import GlassNavbar from './components/GlassNavbar';
import Footer from './components/Footer';
import GradientBlobBackground from './components/GradientBlobBackground';
import CursorFollower from './components/CursorFollower';

// Pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen selection:bg-neon-purple selection:text-white">
      {/* Global UI Elements */}
      <CursorFollower />
      <GradientBlobBackground />
      <GlassNavbar />
      
      {/* Page Content with Transitions */}
      <main className="relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            
            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
