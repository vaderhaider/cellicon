
import React, { useState } from 'react';
import { Image, Sparkles, Download, Loader2, RefreshCw, Layers } from 'lucide-react';
import { generateBrandAsset } from '../services/geminiService';

interface Asset {
  id: string;
  title: string;
  prompt: string;
  url: string | null;
  loading: boolean;
}

const MediaKit: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([
    { id: '1', title: 'Modern Store Front', prompt: 'Modern minimalist storefront of a mobile repair shop named Cellicon with neon cyan signage at night', url: null, loading: false },
    { id: '2', title: 'Expert Repair Lab', prompt: 'Professional high-tech mobile repair laboratory with microscopic tools and a technician working on a futuristic smartphone', url: null, loading: false },
    { id: '3', title: 'Accessories Showcase', prompt: 'Premium display of high-end mobile phone cases and accessories with elegant studio lighting', url: null, loading: false },
    { id: '4', title: 'Brand Lifestyle', prompt: 'A happy customer receiving their perfectly repaired sleek smartphone from a professional staff member in a modern tech hub', url: null, loading: false },
  ]);

  const handleGenerate = async (id: string) => {
    const asset = assets.find(a => a.id === id);
    if (!asset) return;

    setAssets(prev => prev.map(a => a.id === id ? { ...a, loading: true } : a));

    try {
      const imageUrl = await generateBrandAsset(asset.prompt);
      setAssets(prev => prev.map(a => a.id === id ? { ...a, url: imageUrl, loading: false } : a));
    } catch (error) {
      console.error(error);
      setAssets(prev => prev.map(a => a.id === id ? { ...a, loading: false } : a));
      alert("Failed to generate image. Please check your API key.");
    }
  };

  return (
    <div className="pb-24">
      <section className="pt-20 pb-16 bg-[#070B14] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold mb-6">
            <Sparkles size={16} /> AI BRAND ENGINE
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Cellicon <span className="text-cyan-400">Media Kit</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Generate high-fidelity marketing assets and "screenshots" of the business vision using Gemini AI.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {assets.map((asset) => (
              <div key={asset.id} className="bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden flex flex-col">
                <div className="aspect-video bg-slate-950 relative flex items-center justify-center group">
                  {asset.url ? (
                    <>
                      <img src={asset.url} alt={asset.title} className="w-full h-full object-cover animate-in fade-in duration-700" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button 
                          onClick={() => handleGenerate(asset.id)}
                          className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all"
                        >
                          <RefreshCw size={24} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-12">
                      {asset.loading ? (
                        <div className="space-y-4 flex flex-col items-center">
                          <Loader2 className="w-12 h-12 text-cyan-500 animate-spin" />
                          <p className="text-cyan-400 font-bold animate-pulse uppercase tracking-widest text-xs">AI is painting your asset...</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Image size={48} className="text-slate-700 mx-auto" />
                          <p className="text-slate-500 font-medium italic">Asset not yet generated</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="p-8 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{asset.title}</h3>
                    <Layers size={20} className="text-slate-600" />
                  </div>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    Concept: {asset.prompt}
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => handleGenerate(asset.id)}
                      disabled={asset.loading}
                      className="flex-grow py-4 bg-cyan-500 text-[#0B1120] rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all disabled:opacity-50"
                    >
                      {asset.loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
                      {asset.url ? 'Regenerate' : 'Generate Asset'}
                    </button>
                    {asset.url && (
                      <a 
                        href={asset.url} 
                        download={`cellicon-${asset.title.toLowerCase().replace(/\s+/g, '-')}.png`}
                        className="p-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-all"
                      >
                        <Download size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-12 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] text-center">
          <h2 className="text-2xl font-bold text-white mb-4">How it works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            This tool uses **Gemini 2.5 Flash Image** to create bespoke high-resolution brand visuals. These "screenshots" represent the professional standard and atmosphere of the Cellicon business, perfect for sharing with stakeholders or social media.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MediaKit;
