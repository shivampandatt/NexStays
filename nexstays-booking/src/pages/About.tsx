import React from 'react';

export default function About() {
  return (
    <div className="w-full pt-32 pb-24 bg-midnight min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-center">About NEXSTAYS</h1>
        <div className="w-24 h-1 bg-electric mx-auto mb-12 rounded-full" />
        
        <p className="text-xl text-white/80 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
          We established NEXSTAYS to solve a simple problem: the modern traveler needs more than just a bed. They need seamless tech, impeccable hygiene, and intuitive design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Beautiful architecture" 
            className="rounded-3xl border border-white/10 shadow-2xl"
          />
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              To redefine the modern hospitality experience by integrating smart technology with elegant luxury, ensuring every stay is completely frictionless and deeply restorative.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-electric mt-2" />
                <p className="text-white/80">Innovation in every touchpoint, from booking to styling.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-electric mt-2" />
                <p className="text-white/80">Commitment to supreme hygiene and personal safety standards.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-electric mt-2" />
                <p className="text-white/80">Uncomplicated, invisible service that anticipates needs.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
