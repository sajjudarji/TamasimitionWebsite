import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Printer, Box, Zap, Shapes, Sparkles, ShieldCheck, 
  Cpu, FileText, PhoneCall, 
   Clock, MousePointer2 
} from 'lucide-react';
import { AnimatedSection, GlowCard } from '../components/AnimatedSection';
import heroPrinter from "../assets/hero_printer.png";

const Home = () => {
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const stats = [
    { label: "Print Accuracy", value: "99.8%" },
    { label: "Projects Completed", value: "500+" },
    { label: "Parts Printed", value: "12k+" },
    { label: "Customer Support", value: "24/7" },
  ];

  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 overflow-hidden">
        {/* Background Blur Shapes */}
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-neon-cyan/20 blur-[150px] rounded-full pointer-events-none animate-pulse" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-deep-teal/10 blur-[200px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start md:items-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/20 text-xs font-semibold uppercase tracking-widest text-neon-cyan w-fit mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Leading 3D Printing Excellence
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tight text-white text-left">
              Precision 3D <br />
              <span className="text-gradient">Printing Solutions</span> <br />
              for Tomorrow
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 md:mb-12 font-light leading-relaxed text-left">
              High-performance additive manufacturing for engineers, designers, and innovators. 
              Bring your most complex visions to life with extreme precision.
            </p>
            
            <div className="flex flex-col md:flex-row w-full md:w-auto gap-5">
              <button 
                onClick={() => navigate('/catalog')}
                className="w-full md:w-auto glass border border-white/10 px-10 py-4 md:py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all text-white active:scale-95"
              >
                Explore Services
              </button>
            </div>
          </motion.div>

          {/* Hero Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative z-10 p-4 rounded-[40px] glow-border transition-all duration-500 overflow-hidden bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/20">
              <img 
                src={heroPrinter} 
                alt="Futuristic 3D Printer" 
                className="w-full max-w-lg h-auto rounded-[30px] shadow-2xl"
              />
              {/* Floating glass elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 -right-10 w-24 h-24 glass border border-white/30 rounded-2xl hidden lg:block"
              />
            </div>
            {/* Soft Glow behind image */}
            <div className="absolute -inset-10 bg-neon-blue/20 blur-[100px] rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection id="services" className="py-32 px-6 container mx-auto">
        <div className="text-center mb-24">
          <Typography variant="small" className="text-neon-cyan uppercase tracking-widest font-black mb-4 block">
            Our Expertise
          </Typography>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              title: "Custom 3D Printing", 
              items: ["Prototyping", "Functional parts", "Rapid manufacturing"], 
              icon: <Printer className="w-10 h-10" />,
              color: "neon-blue"
            },
            { 
              title: "Rapid Prototyping", 
              items: ["Fast iteration", "Product testing", "Design validation"], 
              icon: <Zap className="w-10 h-10" />,
              color: "neon-purple"
            },
            { 
              title: "Product Design Support", 
              items: ["CAD modeling", "Design optimization", "Manufacturing consultation"], 
              icon: <Shapes className="w-10 h-10" />,
              color: "neon-cyan"
            }
          ].map((service, i) => (
            <GlowCard key={i} delay={i * 0.1} glowColor={service.color} className="flex flex-col h-full border border-white/5 hover:border-white/20 transition-all">
              <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit border border-white/10 text-neon-cyan shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-6 text-white">{service.title}</h3>
              <ul className="space-y-4 mb-8">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-400 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan group-hover/item:scale-150 transition-all" />
                    <span className="group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-white/10 group-hover:border-white/30 transition-colors">
                <button className="flex items-center gap-2 text-sm font-bold text-neon-cyan hover:gap-4 transition-all uppercase tracking-widest">
                  View Service <MousePointer2 className="w-4 h-4" />
                </button>
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      {/* Why Choose Section & Stats */}
      <section id="about" className="py-32 px-6 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div>
              <Typography variant="small" className="text-neon-cyan uppercase tracking-widest font-black mb-4 block">
                Why Tamsimision?
              </Typography>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                Engineered for <br />
                <span className="text-gradient">Extreme Precision</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
            </div>

            <div className="grid gap-8">
              {[
                { title: "Quality Guaranteed", icon: <ShieldCheck className="w-6 h-6" /> },
                { title: "Fast Turnaround", icon: <Clock className="w-6 h-6" /> },
                { title: "Professional Precision", icon: <Box className="w-6 h-6" /> },
                { title: "Advanced Technology", icon: <Cpu className="w-6 h-6" /> }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6 items-center p-6 glass-dark rounded-3xl border border-white/5 hover:border-white/20 transition-all hover:translate-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-neon-cyan border border-white/10">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{feature.feature} {feature.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 relative">
            {/* Background blur for stats */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none" />
            
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-8 glass-card border border-white/10 hover:border-neon-cyan/50 text-center flex flex-col items-center justify-center min-h-[220px]"
              >
                <div className="text-4xl font-black text-white mb-3 tracking-tighter shadow-neon">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                   {stat.label}
                </div>
                {/* Glow dot */}
                <div className="mt-4 w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 container mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[30px] md:rounded-[50px] overflow-hidden p-8 md:p-24 text-left md:text-center border border-white/20"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#0d9488]/30 to-[#0ea5e9]/20 -z-10" />
          <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10" />
          
          {/* Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />

          <Sparkles className="w-12 md:w-16 h-12 md:h-16 text-neon-cyan mb-8 md:mx-auto md:mb-10 animate-bounce" />
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 md:mb-10 leading-tight">
            Ready to <span className="text-gradient">print your vision?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl md:mx-auto mb-10 md:mb-16 font-light">
            Upload your CAD files today and get an instant quote for your project. 
            High performance, rapid turnaround, guaranteed quality.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-start md:justify-center items-stretch md:items-center">
            <label className="w-full md:w-auto cursor-pointer">
              <input type="file" className="hidden" onChange={(e) => console.log(e.target.files[0])} />
              <div className="w-full bg-white text-black px-10 py-4 md:py-5 rounded-[20px] md:rounded-3xl font-black text-lg md:text-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-3 active:scale-95">
                Upload CAD File <FileText className="w-6 h-6" />
              </div>
            </label>
            <button 
              onClick={() => window.location.href = 'mailto:sales@tamsimision.com'}
              className="w-full md:w-auto glass border border-white/20 text-white px-10 py-4 md:py-5 rounded-[20px] md:rounded-3xl font-black text-lg md:text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Contact Sales <PhoneCall className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const Typography = ({ variant, children, className }) => {
  if (variant === 'small') {
    return <span className={`font-bold tracking-widest uppercase ${className}`}>{children}</span>;
  }
  return <div className={className}>{children}</div>;
};

export default Home;

