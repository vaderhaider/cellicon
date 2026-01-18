
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, ChevronRight, Star, Smartphone } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';
import * as Icons from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-wide animate-pulse">
                <ShieldCheck size={16} />
                CERTIFIED TECHNICIANS
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
                Fast. Reliable. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Affordable Repairs.
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Expert mobile repairs in minutes. From shattered screens to dying batteries, we bring your devices back to life with premium parts and guaranteed quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/book" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#0B1120] rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2">
                  Book a Repair <ChevronRight size={20} />
                </Link>
                <Link to="/services" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center">
                  View All Services
                </Link>
              </div>
              <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-[#0B1120]" alt="customer" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-[#0B1120] flex items-center justify-center text-xs font-bold text-white">+2k</div>
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-400 mb-0.5"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                  <p className="text-slate-400 font-medium">Trusted by 5,000+ local customers</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#0F172A] rounded-[2rem] p-4 border border-slate-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                  alt="Repair Service" 
                  className="rounded-[1.5rem] w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-10 left-10 right-10 p-6 bg-[#0B1120]/80 backdrop-blur-md rounded-2xl border border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-cyan-400 text-xs font-bold mb-1 tracking-widest uppercase">Currently Repairing</p>
                      <h3 className="text-white font-bold text-lg">iPhone 15 Pro Max</h3>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">In Progress</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-900/50 py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: 'Same Day Repair', desc: 'Most in 45 min' },
              { icon: Award, title: '90-Day Warranty', desc: 'Guaranteed parts' },
              { icon: ShieldCheck, title: 'Certified Pros', desc: 'Expert technicians' },
              { icon: Smartphone, title: 'All Brands', desc: 'iPhone, Android & more' }
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2">
                <badge.icon className="w-8 h-8 text-cyan-500 mb-2" />
                <h4 className="text-white font-bold">{badge.title}</h4>
                <p className="text-slate-500 text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-white mb-6">Repair Services</h2>
              <p className="text-lg text-slate-400">Professional solutions for every device mishap. We use high-precision tools and premium components to ensure your mobile device returns to its prime condition.</p>
            </div>
            <Link to="/services" className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center gap-2 group">
              View all services <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => {
              const IconComp = (Icons as any)[service.icon] || Icons.HelpCircle;
              return (
                <div key={service.id} className="group p-8 bg-slate-900/50 rounded-3xl border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-2">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform">
                    <IconComp size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-bold text-slate-500">Starting from</span>
                    <span className="text-cyan-400 font-extrabold">{service.priceRange.split(' - ')[0]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#070B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">What Our Customers Say</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Don't just take our word for it. We've helped thousands of customers stay connected.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-8 bg-slate-900/30 rounded-3xl border border-slate-800">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.comment}"</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/${t.id}/100/100`} className="w-12 h-12 rounded-full object-cover" alt={t.name} />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-slate-500 text-xs">{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="max-w-2xl relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1120] mb-8">Ready to fix your device? Visit us today.</h2>
              <p className="text-xl text-[#0B1120]/80 font-medium mb-12">No appointment needed for basic diagnostic checks. Open Mon-Sat at Silicon Valley Plaza.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-[#0B1120] text-white rounded-2xl font-bold hover:bg-[#0B1120]/90 transition-all">
                  Get Directions
                </Link>
                <Link to="/book" className="px-8 py-4 bg-white/20 backdrop-blur-md text-[#0B1120] border border-white/20 rounded-2xl font-bold hover:bg-white/30 transition-all">
                  Schedule Repair
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
