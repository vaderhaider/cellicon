
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Menu, X, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Accessories', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1120]/90 backdrop-blur-lg border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-cyan-500 rounded-xl group-hover:rotate-12 transition-transform">
              <Smartphone className="w-6 h-6 text-[#0B1120]" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">Cell<span className="text-cyan-400">icon</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-cyan-400 ${location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/book" className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-[#0B1120] rounded-full font-bold transition-all transform hover:scale-105 neon-glow">
              Book a Repair
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-300">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-[#0B1120] border-b border-slate-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-semibold ${location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/book" className="w-full text-center py-4 bg-cyan-500 text-[#0B1120] rounded-2xl font-bold">
              Book a Repair
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#070B14] border-t border-slate-800 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="p-2 bg-cyan-500 rounded-xl">
                  <Smartphone className="w-6 h-6 text-[#0B1120]" />
                </div>
                <span className="text-2xl font-extrabold text-white">Cell<span className="text-cyan-400">icon</span></span>
              </Link>
              <p className="text-slate-400 leading-relaxed">
                Your premier destination for professional mobile repairs and premium tech accessories. Fast, reliable, and guaranteed quality.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-slate-400 hover:text-cyan-400 transition-colors">{link.name}</Link>
                  </li>
                ))}
                <li><Link to="/media-kit" className="text-slate-400 hover:text-cyan-400 transition-colors">Media Kit</Link></li>
                <li><Link to="/book" className="text-slate-400 hover:text-cyan-400 transition-colors font-bold text-cyan-500">Book Repair</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Store Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-cyan-500 shrink-0" />
                  <span>123 Tech Avenue, Suite 400<br />Silicon Valley, CA 94000</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <Mail className="w-5 h-5 text-cyan-500 shrink-0" />
                  <span>support@cellicon.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Opening Hours</h4>
              <ul className="space-y-3">
                <li className="flex justify-between text-slate-400">
                  <span>Mon - Fri:</span>
                  <span className="text-white">9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between text-slate-400">
                  <span>Saturday:</span>
                  <span className="text-white">10:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between text-slate-400">
                  <span>Sunday:</span>
                  <span className="text-cyan-500 font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Cellicon Repair Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
