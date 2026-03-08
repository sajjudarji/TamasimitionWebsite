import { motion } from 'framer-motion';
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { AnimatedSection, GlowCard } from '../components/AnimatedSection';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <Typography variant="h1" className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">
            Let's <span className="text-gradient">Print</span> Together
          </Typography>
          <Typography className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            Have a project in mind? Our engineering team is ready to bring your ideas to life. 
            Fill out the form below for a custom quote.
          </Typography>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {[
              { icon: <Mail className="w-6 h-6" />, title: "Email", info: "tamashnation3d@gmail.com", color: "blue" },
              { icon: <Phone className="w-6 h-6" />, title: "Phone", info: "+91 9967307506", color: "purple" },
              { icon: <MapPin className="w-6 h-6" />, title: "Studio", info: "Ovri Pada, Borivali (East)", color: "cyan" },
              { icon: <Clock className="w-6 h-6" />, title: "Availability", info: "24/7 Production 365 Days", color: "pink" }
            ].map((contact, i) => (
              <GlowCard key={i} delay={i * 0.1} className="p-6" glowColor={`neon-${contact.color}`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-neon-${contact.color}/10 text-neon-${contact.color}`}>
                    {contact.icon}
                  </div>
                  <div>
                    <Typography variant="small" className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      {contact.title}
                    </Typography>
                    <Typography className="text-white font-medium">
                      {contact.info}
                    </Typography>
                  </div>
                </div>
              </GlowCard>
            ))}
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group"
          >
            <form className="glass-dark p-10 rounded-[40px] border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-80 h-80 bg-neon-purple/5 blur-[100px] -z-10 group-hover:bg-neon-purple/10 transition-colors" />
               <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-blue/5 blur-[100px] -z-10 group-hover:bg-neon-blue/10 transition-colors" />
              
               <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col gap-4">
                    <label className="text-gray-400 text-sm ml-2 font-medium">Your Name</label>
                    <Input
                      color="blue"
                      placeholder="Alex Matrix"
                      className="!border-none !text-white bg-white/5 backdrop-blur-md rounded-2xl h-14 focus:ring-1 focus:ring-neon-blue p-4"
                      labelProps={{ className: "hidden" }}
                      containerProps={{ className: "min-w-0" }}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-gray-400 text-sm ml-2 font-medium">Email Address</label>
                    <Input
                      color="purple"
                      placeholder="alex@example.com"
                      className="!border-none !text-white bg-white/5 backdrop-blur-md rounded-2xl h-14 focus:ring-1 focus:ring-neon-purple p-4"
                      labelProps={{ className: "hidden" }}
                      containerProps={{ className: "min-w-0" }}
                    />
                  </div>
               </div>
               
               <div className="flex flex-col gap-4 mb-10">
                  <label className="text-gray-400 text-sm ml-2 font-medium">Project Description</label>
                  <Textarea
                    color="blue"
                    placeholder="Tell us about your 3D printing project..."
                    className="!border-none !text-white bg-white/5 backdrop-blur-md rounded-[30px] min-h-[160px] focus:ring-1 focus:ring-neon-cyan p-4"
                    labelProps={{ className: "hidden" }}
                  />
               </div>
               
               <Button
                 fullWidth
                 className="h-16 rounded-[20px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan active:scale-95 transition-all text-lg font-bold shadow-[0_10px_40px_-10px_rgba(168,85,247,0.5)] flex items-center justify-center gap-3 group"
               >
                 Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </Button>
            </form>
          </motion.div>
        </div>
        
        {/* Immersive Map Experience */}
        <AnimatedSection className="mt-32 h-[550px] relative rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)] group">
          {/* Base Dark Layer */}
          <div className="absolute inset-0 bg-black z-0" />
          
          {/* The High-Contrast Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.8143248671!2d-122.5076402!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1709384400000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.2)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Blur Frame Overlay */}
          <div className="absolute inset-0 pointer-events-none ring-[40px] ring-dark-900/40 ring-inset backdrop-blur-[2px] transition-all duration-700 group-hover:backdrop-blur-0" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-dark-900 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-dark-900 to-transparent" />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
