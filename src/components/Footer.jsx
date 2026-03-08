import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { 
  Printer, Instagram, Twitter, Linkedin, Facebook 
} from 'lucide-react';
import { Typography } from '@material-tailwind/react';

const Footer = () => {
  return (
    <footer className="footer-gradient pt-20 pb-16 px-6 border-t border-white/5 relative overflow-hidden bg-[#030014]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-neon-blue/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 mb-16 items-start">
          <div className="col-span-1 lg:col-span-2 lg:row-span-1 row-span-3">
             <Link to="/" className="flex items-center gap-2 mb-6 group">
                <img 
                  src={logo} 
                  alt="Tamasination3D" 
                  className="h-24 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                />
             </Link>
             <Typography className="text-gray-500 font-light mb-8 max-w-xs">
               Precision additive manufacturing for the digital age. Bringing high-fidelity prototypes to your doorstep.
             </Typography>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan/50 hover:bg-white/10 transition-all border border-white/5">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">Portfolio</Link></li>
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">Career</Link></li>
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">News</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">3D Printing</Link></li>
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">Prototyping</Link></li>
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">CAD Design</Link></li>
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">Materials</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">Privacy</Link></li>
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">Terms</Link></li>
              <li><Link to="#" className="hover:text-neon-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm font-light">
            &copy; 2026 Tamsimision 3D. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm font-light">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
