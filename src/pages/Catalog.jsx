import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Chip } from "@material-tailwind/react";
import { Search, Info, MessageSquare, Printer, Zap, Shapes, Activity, Loader2 } from 'lucide-react';
import { GlowCard, AnimatedSection } from '../components/AnimatedSection';

const productsData = [
  { id: 1, name: "Mechanical Gear Assembly", category: "Industrial", price: "Custom", image: "https://images.unsplash.com/photo-1579442082815-32e69785834b?q=80&w=2000&auto=format&fit=crop", color: "blue", icon: <Printer /> },
  { id: 2, name: "Abstract Sculptural Vase", category: "Art", price: "Custom", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop", color: "purple", icon: <Shapes /> },
  { id: 3, name: "Custom Drone Chassis", category: "Tech", price: "Custom", image: "https://images.unsplash.com/photo-1581093583449-80d0d8be9f6a?q=80&w=2000&auto=format&fit=crop", color: "cyan", icon: <Zap /> },
  { id: 4, name: "Miniature Hero Figure", category: "Art", price: "Custom", image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2000&auto=format&fit=crop", color: "pink", icon: <Shapes /> },
  { id: 5, name: "Orthopedic Splint Proto", category: "Medical", price: "Custom", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop", color: "blue", icon: <Activity /> },
  { id: 6, name: "Keyboard Keycaps Set", category: "Tech", price: "Custom", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2000&auto=format&fit=crop", color: "cyan", icon: <Zap /> },
];

const Catalog = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const categories = ["All", "Industrial", "Art", "Tech", "Medical"];

  // Mock "API Fetching" effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = productsData.filter(p => {
        const matchesCategory = filter === "All" || p.category === filter;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 600); // 600ms delay to feel like a real request

    return () => clearTimeout(timer);
  }, [filter, searchQuery]);

  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-[#030014]">
      {/* Background Blurs */}
      <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-neon-blue/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-neon-purple/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="mb-16 text-left">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Precision <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-12 font-light">
            Explore our advanced 3D printing capabilities. Search by project name or filter by industry.
          </p>
          
          <div className="flex flex-col xl:flex-row gap-8 items-start xl:items-center justify-between">
            {/* Filter Pills */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap lg:flex-nowrap gap-2 p-1.5 glass-dark rounded-2xl w-full lg:w-auto border border-white/5 order-2 xl:order-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 relative w-full lg:w-auto text-center ${
                    filter === cat ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                  {filter === cat && (
                    <motion.div
                      layoutId="catActive"
                      className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple -z-10 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    />
                  )}
                </button>
              ))}
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full xl:max-w-md group order-1 xl:order-2">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-neon-cyan transition-colors">
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search capabilities (e.g. Gear, Medical, Tech)..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all font-medium text-sm"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Product Grid */}
        <div className="relative min-h-[400px]">
          {isLoading && (
            <div className="absolute inset-x-0 top-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 opacity-30 pointer-events-none grayscale">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-[500px] glass-dark rounded-[2.5rem] animate-pulse" />
              ))}
            </div>
          )}

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-opacity duration-300 ${isLoading ? 'opacity-20' : 'opacity-100'}`}>
            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p, idx) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <GlowCard className="p-0 h-full flex flex-col border border-white/5 hover:border-white/20" glowColor={p.color === 'pink' ? 'neon-pink' : `neon-${p.color}`}>
                      <div className="relative overflow-hidden aspect-[4/3] rounded-t-[2.5rem]">
                        <motion.img 
                          src={p.image} 
                          alt={p.name}
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.8 }}
                          className="w-full h-full object-cover shadow-2xl"
                        />
                        <div className="absolute top-5 left-5">
                          <Chip 
                            value={p.category} 
                            className="bg-black/60 backdrop-blur-xl text-white border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase" 
                          />
                        </div>
                      </div>
                      
                      <div className="p-5 md:p-8 flex flex-col flex-grow text-left">
                        <div className="flex items-center gap-3 mb-4 text-neon-cyan">
                          {p.icon && <div className="scale-75 md:scale-100">{p.icon}</div>}
                          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Precision Print</span>
                        </div>
                        
                        <h5 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 line-clamp-1 leading-tight">
                          {p.name}
                        </h5>
                        <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-10 flex-grow font-light leading-relaxed">
                          Advanced additive manufacturing utilizing specific material properties for optimized performance and aesthetics.
                        </p>
                        
                        <div className="flex items-center justify-between gap-3 md:gap-4 mt-auto">
                          <Button 
                            onClick={() => window.location.href = `mailto:sales@tamsimision.com?subject=Quote Request: ${p.name}`}
                            className="flex-grow py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl bg-white text-black font-black text-xs md:text-sm hover:bg-gray-200 transition-all active:scale-95 flex items-center justify-center gap-2"
                          >
                            Request Quote <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          </Button>
                          <div className="relative group/tooltip">
                            <button className="p-3 md:p-4 rounded-xl md:rounded-2xl glass-dark border border-white/10 hover:border-white/30 text-white transition-all">
                              <Info className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                            
                            {/* Custom Animated Tooltip */}
                            <div className="absolute bottom-full right-0 mb-6 opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-all duration-500 translate-y-3 group-hover/tooltip:translate-y-0 z-50 scale-90 group-hover/tooltip:scale-100 origin-bottom-right">
                              <div className="bg-[#0a0a0b] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] px-4 py-3.5 rounded-2xl min-w-[180px] md:min-w-[220px] backdrop-blur-3xl relative overflow-visible">
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neon-cyan/20 pointer-events-none" />
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_10px_#22d3ee]" />
                                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] text-white">Spec Table</span>
                                </div>
                                <p className="text-[11px] md:text-[12px] text-gray-400 font-light leading-relaxed">
                                  Precision: 0.05mm <br />
                                  Material: Industrial Polymers <br />
                                  Finish: High-Fidelity
                                </p>
                                <div className="absolute top-[99%] right-6 border-[8px] border-transparent border-t-[#0a0a0b]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                ))
              ) : (
                !isLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full py-20 text-center"
                  >
                    <div className="glass-dark border border-white/10 p-12 rounded-[2.5rem] inline-block">
                      <Search className="w-16 h-16 text-gray-600 mx-auto mb-6 opacity-20" />
                      <h3 className="text-2xl font-black text-white mb-2">No matching services found</h3>
                      <p className="text-gray-400 font-light">Try adjusting your search query or industry filters.</p>
                      <Button 
                        variant="text" 
                        color="white" 
                        className="mt-6 hover:text-neon-cyan"
                        onClick={() => { setSearchQuery(""); setFilter("All"); }}
                      >
                        Reset All Filters
                      </Button>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
