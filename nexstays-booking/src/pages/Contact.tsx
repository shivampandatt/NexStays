import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full pt-32 pb-24 bg-midnight min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-electric/5 mix-blend-screen blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-white/70 text-lg">We're here to help make your stay perfect.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Contact Info (Left) */}
          <div className="flex flex-col gap-10">
            <div className="glass p-8 rounded-3xl mb-4">
              <h3 className="text-2xl font-bold font-heading mb-6">Contact Information</h3>
              <ul className="flex flex-col gap-8">
                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center text-electric shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Our Location</h4>
                    <p className="text-white/60 mt-1">123 Nexus Blvd, Tech District<br />Metro City, 10001, India</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center text-electric shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Direct Line</h4>
                    <p className="text-white/60 mt-1">+1 (555) 123-4567<br />Mon-Sun: 24/7 Support</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center text-electric shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Email Us</h4>
                    <p className="text-white/60 mt-1">booking@nexstays.com<br />support@nexstays.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="glass-dark border border-white/10 p-8 md:p-12 rounded-3xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold font-heading mb-8">Send a Message</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/80">First Name</label>
                  <input type="text" className="bg-midnight/50 border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/80">Last Name</label>
                  <input type="text" className="bg-midnight/50 border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/80">Email Address</label>
                <input type="email" className="bg-midnight/50 border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/80">Message</label>
                <textarea rows={4} className="bg-midnight/50 border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors resize-none" placeholder="How can we help?"></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full mt-2">Send Message</Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
