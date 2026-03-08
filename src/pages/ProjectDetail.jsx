import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioProjects } from '../data/portfolioData';
import { ArrowLeft, Clock, Zap, ArrowRight, ShieldCheck, Box, Cpu } from 'lucide-react';
import { AnimatedSection, GlowCard } from '../components/AnimatedSection';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-theme text-theme">
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Project Not Found</h2>
          <Button onClick={() => navigate('/portfolio')}>Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-theme relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 flex items-center gap-4 text-theme-muted text-xs font-black uppercase tracking-[0.2em]">
          <Link to="/portfolio" className="hover:text-neon-blue transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Portfolio
          </Link>
          <span className="opacity-20">/</span>
          <span className="text-theme opacity-60">{project.title}</span>
        </div>

        {/* Hero Banner Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] md:rounded-[60px] overflow-hidden mb-20 aspect-[16/6] min-h-[400px]"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 max-w-4xl text-left">
             <span className="bg-neon-blue text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em] px-6 py-2.5 rounded-full mb-8 inline-block shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                {project.category} Engineering
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-8">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mb-12 leading-relaxed opacity-90">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/5 shadow-2xl">
                   <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                      <Box className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                      <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1.5">Material</div>
                      <div className="text-white text-base font-black uppercase">{project.stats.material}</div>
                   </div>
                </div>

                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/5 shadow-2xl">
                   <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple">
                      <Clock className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                      <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1.5">Print Time</div>
                      <div className="text-white text-base font-black uppercase">{project.stats.printTime}</div>
                   </div>
                </div>
              </div>
          </div>
        </motion.div>

        {/* Project Content Breakdown */}
        <div className="grid lg:grid-cols-3 gap-16 mb-24">
           {/* Left Column: Overview & Details */}
           <div className="lg:col-span-2 text-left">
              <AnimatedSection className="mb-20">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
                    <h2 className="text-3xl font-black text-theme uppercase tracking-tighter shadow-neon-sm">Project Overview</h2>
                 </div>
                 <Typography className="text-xl md:text-2xl text-theme max-w-3xl font-light mb-8 leading-relaxed opacity-90">
                    {project.overview}
                 </Typography>
                 <Typography className="text-lg text-theme-muted max-w-3xl font-light mb-12 leading-relaxed italic opacity-80 border-l-2 border-neon-purple pl-8">
                    {project.fullDescription}
                 </Typography>

                 {/* Feature Tag Grid */}
                 <div className="flex flex-wrap gap-3">
                   {project.features.map((feature, i) => (
                      <span key={i} className="px-6 py-3 rounded-xl bg-black/10 border border-white/5 text-theme-muted text-xs font-black uppercase tracking-widest hover:border-neon-cyan transition-colors hover:text-theme cursor-default">
                         {feature}
                      </span>
                   ))}
                 </div>
              </AnimatedSection>

              {/* Specification Grid */}
              <AnimatedSection>
                 <div className="grid md:grid-cols-3 gap-6">
                    {Object.entries(project.specs).map(([key, value], i) => (
                       <GlowCard key={i} className="p-8 border border-white/5 group text-left" glowColor="neon-cyan">
                          <div className="text-[10px] text-theme-muted font-black uppercase tracking-[0.25em] mb-4 opacity-60">
                             {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                          <div className="text-lg font-black text-theme group-hover:text-neon-cyan transition-colors truncate">
                             {value}
                          </div>
                       </GlowCard>
                    ))}
                 </div>
              </AnimatedSection>
           </div>

           {/* Right Column: CTA & Result Card */}
           <div className="flex flex-col gap-10">
              <GlowCard delay={0.2} glowColor="neon-purple" className="flex flex-col p-10 text-left border border-white/10 group">
                 <div className="w-14 h-14 rounded-2xl bg-neon-cyan/20 flex items-center justify-center text-neon-cyan mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-7 h-7" />
                 </div>
                 <h2 className="text-2xl font-black text-theme mb-6">Precision Result</h2>
                 <p className="text-theme-muted font-light leading-relaxed italic mb-8 border-l-2 border-white/5 pl-6 opacity-80">
                    "Tamasination delivered a part that not only looked professional but performed exactly to our R&D specifications. The gear engagement is remarkably smooth."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-theme-muted overflow-hidden flex-shrink-0">
                       <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="Client" />
                    </div>
                    <div>
                       <div className="text-sm font-black text-theme uppercase tracking-widest">Marcus Chen</div>
                       <div className="text-[10px] text-theme-muted uppercase tracking-widest opacity-60">Director of Robotics, ZenTech</div>
                    </div>
                 </div>
              </GlowCard>

              <GlowCard delay={0.3} glowColor="neon-blue" className="bg-neon-blue/10 backdrop-blur-2xl p-10 text-left border border-neon-blue/20 group">
                 <h2 className="text-2xl font-black text-theme mb-4">Start your project</h2>
                 <p className="text-theme-muted text-sm font-light mb-8 leading-relaxed">
                    Need a custom component with industrial-grade precision?
                 </p>
                 <button className="w-full bg-neon-blue text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all flex items-center justify-center gap-3 group/btn">
                    Request Quote <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                 </button>
              </GlowCard>
           </div>
        </div>

        {/* Process Gallery Section */}
        <AnimatedSection className="mb-32">
           <div className="flex items-center gap-4 mb-12 justify-center lg:justify-start">
              <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
              <h2 className="text-4xl font-black text-theme uppercase tracking-tighter">Process Gallery</h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-10">
              {project.gallery.map((img, i) => (
                 <div key={i} className="group relative rounded-[40px] overflow-hidden aspect-[16/9] border border-white/5">
                    <img src={img} alt={`Process ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="text-xs font-black text-white uppercase tracking-[0.3em]">0{i+1}. {i === 0 ? "CAD SIMULATION & DESIGN" : "FINAL FUNCTIONAL PRINT"}</span>
                    </div>
                 </div>
              ))}
           </div>
        </AnimatedSection>

        {/* Bottom CTA Block */}
        <AnimatedSection className="py-24 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
           <div>
              <h2 className="text-5xl font-black text-theme mb-4 tracking-tighter">Ready to build?</h2>
              <p className="text-theme-muted text-xl font-light opacity-80">Our engineers are standing by to review your blueprints.</p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              <button 
                onClick={() => navigate('/portfolio')}
                className="px-10 py-5 rounded-2xl border border-white/10 text-theme font-black hover:bg-white/5 transition-all text-sm uppercase tracking-widest whitespace-nowrap"
              >
                 Back to Portfolio
              </button>
              <button className="px-10 py-5 rounded-2xl bg-neon-blue text-white font-black shadow-neon text-sm uppercase tracking-widest whitespace-nowrap hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all">
                 Request Similar Project
              </button>
           </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

const Typography = ({ children, className }) => (
  <p className={className}>{children}</p>
);

const Button = ({ children, onClick, className }) => (
  <button 
    onClick={onClick}
    className={`px-8 py-4 bg-neon-blue text-white rounded-2xl font-black uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95 ${className}`}
  >
    {children}
  </button>
);

export default ProjectDetail;
