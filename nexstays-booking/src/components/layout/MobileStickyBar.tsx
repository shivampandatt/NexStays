import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileStickyBar() {
  return (
    <>
      {/* Floating WhatsApp Button (Desktop + Mobile) */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-24 md:bottom-8 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 glass-dark z-40 border-t border-white/10 flex items-stretch h-16">
        <a href="tel:+15551234567" className="flex-1 flex flex-col items-center justify-center gap-1 text-white/80 hover:text-electric transition-colors active:bg-white/5">
          <Phone size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
        </a>
        
        <div className="w-px bg-white/10 my-2" />
        
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="flex-1 flex flex-col items-center justify-center gap-1 text-white/80 hover:text-[#25D366] transition-colors active:bg-white/5">
          <MessageCircle size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">WhatsApp</span>
        </a>
        
        <Link to="/rooms" className="flex-[1.5] bg-electric electric-glow flex items-center justify-center gap-2 text-white font-semibold transition-colors">
          <CalendarCheck size={20} />
          <span className="text-sm tracking-wide">Book Now</span>
        </Link>
      </div>
    </>
  );
}
