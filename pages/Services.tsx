
import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { CheckCircle2, AlertTriangle, Cpu, Smartphone, Tablet, Watch } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-20 pb-16 bg-[#070B14] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Expert Repairs for <span className="text-cyan-400">Every Device</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">We provide comprehensive technical solutions for smartphones, tablets, and wearables with industry-leading turn-around times.</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'iPhone', icon: Smartphone, count: '100+ Models' },
              { label: 'Samsung', icon: Smartphone, count: '80+ Models' },
              { label: 'iPad/Tablets', icon: Tablet, count: '50+ Models' },
              { label: 'Pixel/Other', icon: Cpu, count: 'All Brands' }
            ].map((cat, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-center hover:border-cyan-500/50 transition-all cursor-pointer group">
                <cat.icon className="w-8 h-8 text-cyan-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold mb-1">{cat.label}</h3>
                <p className="text-slate-500 text-xs uppercase tracking-wider font-bold">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {SERVICES.map((service) => {
              const IconComp = (Icons as any)[service.icon] || Icons.HelpCircle;
              return (
                <div key={service.id} className="bg-slate-900/50 rounded-[2.5rem] p-10 border border-slate-800 flex flex-col md:flex-row gap-8 hover:bg-slate-900/80 transition-all">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400">
                      <IconComp size={32} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full">{service.category}</span>
                    </div>
                    <p className="text-slate-400 mb-6 text-lg">{service.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      <li className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle2 size={14} className="text-green-500" /> Premium Parts</li>
                      <li className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle2 size={14} className="text-green-500" /> 90-Day Warranty</li>
                      <li className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle2 size={14} className="text-green-500" /> Professional Lab</li>
                      <li className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle2 size={14} className="text-green-500" /> Data Safety</li>
                    </ul>
                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                      <span className="text-slate-400 font-semibold">Price range:</span>
                      <span className="text-xl font-extrabold text-white">{service.priceRange}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warranty Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/20 blur-xl rounded-full"></div>
              <div className="w-32 h-32 bg-cyan-500 rounded-full flex items-center justify-center text-[#0B1120] relative">
                <Icons.Verified size={64} />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-white mb-4">Cellicon Quality Guarantee</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We stand behind every screw we turn and every part we install. All our repairs come with a standard 90-day warranty. If the part we replaced fails due to a defect, we'll replace it again for free. No questions asked.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="px-4 py-2 bg-slate-800 rounded-xl text-slate-300 text-sm font-bold flex items-center gap-2">
                <Icons.FileText size={16} /> Warranty Policy
              </div>
              <div className="px-4 py-2 bg-slate-800 rounded-xl text-slate-300 text-sm font-bold flex items-center gap-2">
                <Icons.HelpCircle size={16} /> FAQ
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
