import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050d17] pt-20 pb-24 md:pb-10 border-t border-white/5 relative z-10 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-electric flex items-center justify-center font-heading font-bold text-2xl text-white">
                N
              </div>
              <span className="font-heading font-bold text-xl tracking-wider text-white">
                NEXSTAYS
              </span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Tech-driven premium stays for modern travelers. Redefining hospitality with smart technology and luxurious comfort.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-electric transition-colors hover:bg-white/10">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-electric transition-colors hover:bg-white/10">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-electric transition-colors hover:bg-white/10">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/rooms" className="text-white/60 hover:text-electric transition-colors">Our Rooms</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-electric transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-white/60 hover:text-electric transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-electric transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Policies</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-white/60 hover:text-electric transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-electric transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-electric transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-electric transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-white/60">
                <MapPin className="text-electric shrink-0" size={20} />
                <span>123 Nexus Blvd, Tech District, Metro City 10001</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="text-electric shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="text-electric shrink-0" size={20} />
                <span>hello@nexstays.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} NEXSTAYS. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Designed for Modern Travelers
          </p>
        </div>
      </div>
    </footer>
  );
}
