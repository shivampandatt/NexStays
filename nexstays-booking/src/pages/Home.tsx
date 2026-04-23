import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Calendar, Users, Star, MapPin, CheckCircle, Wifi, MonitorPlay, Coffee, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ROOMS = [
  {
    id: 1,
    name: 'Executive Suite',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['King Bed', 'City View', 'Free Wi-Fi', 'Room Service'],
  },
  {
    id: 2,
    name: 'Premium Deluxe',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Queen Bed', 'Balcony', 'Breakfast Included', 'Mini Bar'],
    popular: true,
  },
  {
    id: 3,
    name: 'Smart Studio',
    price: '$99',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Smart Controls', 'Work Desk', 'Fast Wi-Fi', 'Coffee Maker'],
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="NEXSTAYS Premium Hotel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight/70 bg-gradient-to-t from-midnight to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center sm:items-start text-center sm:text-left mt-[-10vh]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 mb-6 w-fit mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold">Experience the future of travel</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white max-w-3xl mb-4"
          >
            Stay Smart. <br/> Stay <span className="text-electric">Nexstays.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-8 leading-relaxed"
          >
            Tech-driven premium stays for modern travelers. Discover a new standard of luxury, comfort, and convenience.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/rooms"><Button size="lg">Book Now</Button></Link>
            <Link to="/about"><Button variant="glass" size="lg">Explore Rooms</Button></Link>
          </motion.div>
        </div>

        {/* Booking Widget (Overlapping Hero) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 px-4 translate-y-1/2 z-20"
        >
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-2 md:p-3 flex flex-col md:flex-row gap-2 items-center">
            <div className="w-full relative flex items-center px-4 py-3 md:border-r border-white/10">
              <Calendar className="text-gold mr-3 opacity-80" size={20} />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-1">Check-in - Check-out</span>
                <span className="font-medium text-sm">Select Dates</span>
              </div>
            </div>
            <div className="w-full relative flex items-center px-4 py-3 border-t md:border-t-0 border-white/10">
              <Users className="text-gold mr-3 opacity-80" size={20} />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-1">Guests</span>
                <span className="font-medium text-sm">2 Adults, 1 Room</span>
              </div>
            </div>
            <Button size="lg" className="w-full md:w-auto shrink-0 md:min-w-[180px] h-14 rounded-xl shadow-inner font-bold tracking-tight">Search Vacancy</Button>
          </div>
        </motion.div>
      </section>

      {/* TRUST STRIP */}
      <section className="pt-32 pb-16 bg-midnight text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gold mb-2">
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
            </div>
            <h4 className="text-2xl font-bold font-heading">4.8/5</h4>
            <p className="text-white/60 text-sm">Average Rating</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold font-heading text-white mb-1">50K+</h4>
            <p className="text-white/60 text-sm">Happy Guests</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold font-heading text-white mb-1">25+</h4>
            <p className="text-white/60 text-sm">Prime Locations</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold font-heading text-white mb-1 flex items-center justify-center"><MapPin className="text-electric mr-1" /> India</h4>
            <p className="text-white/60 text-sm">Nationwide Presence</p>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 bg-midnight relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-electric/20 rounded-[2rem] blur-xl" />
            <img 
              src="https://images.unsplash.com/photo-1542314831-c6a4d14d8379?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Lobby layout" 
              className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-electric font-semibold tracking-wider text-sm uppercase mb-3">About Nexstays</h3>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Redefining modern hospitality.</h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We blend smart design, modern technology, and unparalleled comfort to give you a stay experience like no other. Whether you're here for an important business trip or a leisure getaway, NEXSTAYS ensures your stay is seamless, hygienic, and highly memorable.
            </p>
            <Link to="/about"><Button variant="outline">Learn More</Button></Link>
          </div>
        </div>
      </section>

      {/* ROOMS SHOWCASE */}
      <section className="py-24 bg-[#081324] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-electric font-semibold tracking-wider text-sm uppercase mb-3">Our Accommodations</h3>
            <h2 className="font-heading text-4xl md:text-5xl font-bold flex items-center justify-center flex-col">
              Premium Rooms & Suites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.map((room) => (
              <motion.div 
                key={room.id}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white/10 to-transparent rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-electric/50 transition-colors shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  {room.popular && (
                    <div className="absolute top-4 right-4 z-10 bg-gold text-midnight text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 z-10 glass px-3 py-1 rounded-full text-xs font-semibold text-white/90 bg-black/40 border border-white/20">
                    {room.price} / night
                  </div>
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-electric transition-colors">{room.name}</h3>
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {room.features.map(f => (
                      <li key={f} className="text-xs text-white/70 bg-white/5 px-2 py-1 rounded-md">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/rooms">
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE NEXSTAYS */}
      <section className="py-24 bg-midnight" id="amenities">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Why Choose NEXSTAYS</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Experiencing stays designed around comfort, hygiene, and cutting-edge technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: 'Smart Check-in', desc: 'Seamless app-based check-in and digital room keys.' },
              { icon: Shield, title: 'Hygienic Rooms', desc: 'Medical-grade cleaning to ensure ultimate safety.' },
              { icon: Coffee, title: 'Fully Furnished', desc: 'Premium bedding, ergonomic workspaces, and luxury fittings.' },
              { icon: Wifi, title: 'Fast Wi-Fi', desc: 'Enterprise-grade connectivity for remote work.' },
              { icon: MonitorPlay, title: 'Smart Entertainment', desc: '4K Smart TVs with casting and included streaming apps.' },
              { icon: Users, title: '24/7 Support', desc: 'On-demand concierge and immediate room service.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/5 flex flex-col items-start hover:bg-white/10 transition-colors shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gold mb-6 border border-white/5">
                  <feature.icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA ENHANCED */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-electric/10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 glass-dark p-12 lg:p-20 rounded-[3rem] border border-electric/30 electric-glow">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">Ready for a seamless stay experience?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">Book directly with us for the best rates, complimentary upgrades, and exclusive perks.</p>
          <Link to="/rooms">
            <Button size="lg" className="text-lg px-12 py-5 rounded-full">Book Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
