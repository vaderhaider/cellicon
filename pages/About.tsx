
import React from 'react';
import { Target, Users, Shield, Zap, History, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#070B14]/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1542173151-057884855f1b?auto=format&fit=crop&q=80&w=2000" 
          className="absolute top-0 left-0 w-full h-full object-cover" 
          alt="Workshop" 
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8">Engineering Trust <br /><span className="text-cyan-400">Since 2018</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Cellicon was founded on a simple premise: Everyone deserves high-quality, honest technology repair without the premium price tag.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-30 -mt-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Repairs Completed', val: '15,000+' },
              { label: 'Happy Customers', val: '12,500+' },
              { label: 'Years Experience', val: '10+' },
              { label: 'Expert Techs', val: '8' }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl text-center">
                <div className="text-3xl font-black text-cyan-400 mb-2">{stat.val}</div>
                <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-bold mb-6">
                <Target size={16} /> OUR MISSION
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-8">Revitalizing your tech for a sustainable future.</h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                In a world of disposable electronics, Cellicon stands for longevity. We believe in repairing over replacing, helping you save money while reducing electronic waste.
              </p>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Our technicians are Level 3 certified, meaning they don't just swap parts—they understand the micro-electronics that power your digital life.
              </p>
              <div className="space-y-4">
                {[
                  'Transparent Pricing - No hidden diagnostic fees.',
                  'Quality First - We only use grade-A or OEM parts.',
                  'Data Security - Your privacy is our top priority.',
                  'Community Driven - Locally owned and operated.'
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-white font-semibold">
                    <Zap size={18} className="text-cyan-500" /> {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/abt1/600/800" className="rounded-3xl h-full object-cover" alt="Team" />
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/abt2/600/400" className="rounded-3xl w-full" alt="Lab" />
                <img src="https://picsum.photos/seed/abt3/600/400" className="rounded-3xl w-full" alt="Storefront" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">Why Choose Cellicon?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We differentiate ourselves through precision engineering and unmatched customer service.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Certified Techs', desc: 'Our team undergoes continuous training on the latest Apple and Android hardware releases.' },
              { icon: History, title: 'Proven Track Record', desc: 'Over 5 years of serving the Silicon Valley area with consistently high customer ratings.' },
              { icon: MapPin, title: 'Local Expertise', desc: 'We understand the local market and keep parts in stock for the most popular regional models.' }
            ].map((box, i) => (
              <div key={i} className="p-10 bg-[#0B1120] rounded-[2.5rem] border border-slate-800 hover:border-cyan-500/30 transition-all text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mx-auto mb-8">
                  <box.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{box.title}</h3>
                <p className="text-slate-400 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
