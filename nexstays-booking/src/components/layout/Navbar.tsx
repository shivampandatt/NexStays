import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/#amenities' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5',
          isScrolled ? 'bg-midnight/80 backdrop-blur-sm py-4' : 'bg-midnight/50 backdrop-blur-sm py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center border-2 border-electric relative overflow-hidden group-hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-electric to-transparent opacity-20"></div>
              <span className="font-heading font-bold text-xl tracking-tighter text-white relative z-10">
                N
              </span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight uppercase text-white">
              Nexstays
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-electric',
                  location.pathname === link.path ? 'text-electric' : 'text-white/80'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/rooms">
              <Button size="sm">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-electric transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-midnight/95 backdrop-blur-md pt-24 px-6 pb-6 flex flex-col h-screen"
          >
            <div className="flex flex-col gap-6 items-center w-full">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading font-semibold text-white/90 hover:text-electric"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-white/10 my-4" />
              <Link to="/rooms" className="w-full" onClick={() => setIsOpen(false)}>
                <Button className="w-full py-4 text-lg">Book Now</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
