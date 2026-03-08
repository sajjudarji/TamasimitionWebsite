import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioProjects } from '../data/portfolioData';
import { AnimatedSection, GlowCard } from '../components/AnimatedSection';

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", "Toys", "Models", "Home Decor"];

  const filteredProjects = portfolioProjects.filter(p => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-theme relative">
      <div className="container mx-auto relative z-10">
        <AnimatedSection className="mb-16 text-left">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-theme">
            Precision <span className="text-gradient">Services</span>
          </h1>
          <p className="text-theme-muted text-lg max-w-2xl mb-12 font-light leading-relaxed">
            Explore our advanced 3D printing capabilities. Search by project name or filter by industry to find the perfect solution for your needs.
          </p>
          
          <div className="flex flex-col xl:flex-row gap-8 items-start xl:items-center justify-between">
            {/* Filter Pills */}
            <div className="flex overflow-x-auto scrollbar-hide gap-3 p-2 bg-black/20 backdrop-blur-xl rounded-2xl w-full xl:w-auto border border-white/5 flex-nowrap touch-pan-x">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 relative min-w-fit flex-shrink-0 text-center whitespace-nowrap ${
                    filter === cat ? 'text-white' : 'text-theme-muted hover:text-theme'
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {filter === cat && (
                    <motion.div
                      layoutId="catActivePortfolio"
                      className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full xl:max-w-md group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-theme-muted group-focus-within:text-neon-cyan transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search (e.g. Toys, Models, Home Decor)..."
                className="w-full pl-12 pr-4 py-4.5 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl text-theme outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all font-bold text-sm tracking-tight"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlowCard className="p-0 h-full flex flex-col overflow-hidden group border border-white/5 hover:border-neon-cyan/30 transition-all duration-500" glowColor={`neon-${project.color}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-black/60 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-lg border border-white/10 text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow text-left">
                    <h3 className="text-2xl font-black text-theme mb-3 group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-theme-muted text-sm font-light leading-relaxed mb-8 line-clamp-2">
                      {project.subtitle}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        to={`/portfolio/${project.id}`}
                        className="inline-flex items-center gap-2 group/link text-xs font-black uppercase tracking-[0.2em] text-neon-blue hover:text-neon-cyan transition-colors"
                      >
                        View Details 
                        <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
            
            {/* Submit Project Card */}
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full"
            >
              <div className="h-full min-h-[400px] rounded-[2.5rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center p-8 text-center glass group hover:border-neon-cyan/30 transition-all cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-black">+</span>
                </div>
                <h3 className="text-2xl font-black text-theme mb-3">Submit Project</h3>
                <p className="text-theme-muted font-light text-sm max-w-[200px] leading-relaxed">
                  Have a vision? Let's bring it to life through additive manufacturing.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
