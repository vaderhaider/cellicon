
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Filter, ShoppingBag, Search, ChevronDown } from 'lucide-react';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeDevice, setActiveDevice] = useState<string>('All');

  const filteredProducts = PRODUCTS.filter(p => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory;
    const deviceMatch = activeDevice === 'All' || p.deviceType === activeDevice;
    return catMatch && deviceMatch;
  });

  const categories = ['All', 'Case', 'Charger', 'Protector', 'Audio'];
  const devices = ['All', 'iPhone', 'Samsung', 'Pixel', 'Universal'];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-20 pb-16 bg-[#070B14] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-2">Tech Accessories</h1>
              <p className="text-slate-400">Premium protection and power for your mobile lifestyle.</p>
            </div>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full md:w-80 bg-slate-900 border border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 space-y-8 shrink-0">
              <div>
                <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                  <Filter size={18} className="text-cyan-500" /> Filter by Category
                </h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-cyan-500 text-[#0B1120]' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                  <Smartphone size={18} className="text-cyan-500" /> Device Compatibility
                </h3>
                <div className="space-y-2">
                  {devices.map(dev => (
                    <button
                      key={dev}
                      onClick={() => setActiveDevice(dev)}
                      className={`w-full text-left px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeDevice === dev ? 'bg-cyan-500 text-[#0B1120]' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                    >
                      {dev}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-3xl">
                <h4 className="text-cyan-400 font-bold mb-2">In-Store Pickup</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">Reserve online and pick up in 30 minutes at our tech hub.</p>
                <div className="text-[10px] font-extrabold text-cyan-500 uppercase tracking-widest">FAST & CONVENIENT</div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-8">
                <p className="text-slate-500 font-medium">Showing {filteredProducts.length} results</p>
                <div className="flex items-center gap-2 text-slate-300 font-bold cursor-pointer hover:text-white">
                  Sort: Newest <ChevronDown size={16} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/5">
                    <div className="relative aspect-square overflow-hidden bg-slate-800">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-tighter rounded-full ${product.inStock ? 'bg-green-500 text-[#0B1120]' : 'bg-red-500 text-white'}`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      {product.inStock && (
                        <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                          <button className="w-full bg-white text-[#0B1120] font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-xl hover:bg-cyan-500 transition-colors">
                            <ShoppingBag size={18} /> Reserve Now
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-bold text-cyan-500 mb-2 uppercase tracking-widest">{product.category} • {product.deviceType}</div>
                      <h3 className="text-white font-bold text-lg mb-4 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-white">${product.price.toFixed(2)}</span>
                        <div className="flex text-yellow-400">
                          <Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="py-24 text-center">
                  <ShoppingBag size={64} className="text-slate-700 mx-auto mb-6" />
                  <h3 className="text-white text-2xl font-bold mb-2">No items found</h3>
                  <p className="text-slate-500">Try adjusting your filters to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Local components to satisfy types
const Smartphone = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
  </svg>
);
const Star = ({ size, fill }: { size: number, fill: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default Shop;
