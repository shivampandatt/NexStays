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
    description: 'Our most luxurious offering. Spacious suite with a separate living area, panoramic city views, and premium amenities tailored for maximum comfort.',
    features: ['King Size Bed', 'Panoramic City View', 'Fast Wi-Fi', 'Room Service', 'Mini Bar', 'Bathtub'],
    capacity: 2,
    urgency: 'Only 1 room left',
  },
  {
    id: 2,
    name: 'Premium Deluxe',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Perfect balance of luxury and value. Features a private balcony, plush queen bed, and a modern bathroom with a rain shower.',
    features: ['Queen Size Bed', 'Private Balcony', 'Breakfast Included', 'Work Desk', 'Rain Shower'],
    capacity: 2,
    urgency: null,
  },
  {
    id: 3,
    name: 'Smart Studio',
    price: '$99',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Designed for the modern traveler. Compact but packed with smart home controls, fast wifi, and ergonomic workspaces.',
    features: ['Smart Room Controls', 'Ergonomic Desk', 'Fast Wi-Fi', 'Coffee Maker', 'Netflix included'],
    capacity: 2,
    urgency: 'Selling fast',
  },
  {
    id: 4,
    name: 'Family Connect',
    price: '$249',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Two interconnected rooms giving your family space while staying close. Includes kid-friendly amenities and extra bedding.',
    features: ['2 Queen Beds', 'Interconnected Rooms', 'Kid-friendly', '2 Bathrooms', 'Breakfast Included'],
    capacity: 4,
    urgency: 'Only 2 rooms left',
  }
];

export default function Rooms() {
  return (
    <div className="w-full pt-20 bg-midnight min-h-screen">
      {/* HEADER */}
      <section className="bg-[#081324] py-16 border-b border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Explore Our Rooms</h1>
          <p className="text-white/70 text-lg">Find the perfect space for your stay, designed for comfort and crafted with modern tech.</p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-20 z-30 glass-dark border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-4 w-full md:w-auto">
            <select className="bg-midnight border border-white/20 rounded-lg px-4 py-2 text-white/90 outline-none focus:border-electric">
              <option>Price Range</option>
              <option>$0 - $100</option>
              <option>$100 - $200</option>
              <option>$200+</option>
            </select>
            <select className="bg-midnight border border-white/20 rounded-lg px-4 py-2 text-white/90 outline-none focus:border-electric">
              <option>Room Type</option>
              <option>Suite</option>
              <option>Deluxe</option>
              <option>Studio</option>
            </select>
          </div>
          <div className="w-full md:w-auto flex items-center gap-4">
            <span className="text-white/60 text-sm hidden md:inline">Showing {ROOMS.length} rooms</span>
          </div>
        </div>
      </section>

      {/* ROOM LISTINGS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          {ROOMS.map((room) => (
            <div key={room.id} className="glass-dark border border-white/10 rounded-3xl overflow-hidden flex flex-col lg:flex-row group hover:border-electric/30 transition-colors">
              {/* Image Section */}
              <div className="w-full lg:w-[45%] relative h-[300px] lg:h-auto overflow-hidden">
                {room.urgency && (
                  <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {room.urgency}
                  </div>
                )}
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-[55%] p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-heading font-bold mb-2 group-hover:text-electric transition-colors">{room.name}</h2>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-1"><Users size={16} /> Up to {room.capacity} Guests</span>
                      <span className="flex items-center gap-1 text-gold"><Star size={16} fill="currentColor" /> 4.9 reviews</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-white block">{room.price}</span>
                    <span className="text-sm text-white/50">per night</span>
                  </div>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {room.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wider">Room Features</h4>
                  <ul className="flex flex-wrap gap-2">
                    {room.features.map(f => (
                      <li key={f} className="text-sm text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2">
                        <CheckCircle size={14} className="text-electric" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                  <Button className="w-full sm:w-auto flex-1 text-lg">Book Now</Button>
                  <Button variant="outline" className="w-full sm:w-auto flex-1">View Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
