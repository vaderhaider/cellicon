
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-20 pb-16 bg-[#070B14] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Let's Get You <span className="text-cyan-400">Reconnected</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Have a question or need a custom quote? Our team is standing by to help you solve your tech problems.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-extrabold text-white">Contact Information</h2>
                <div className="grid gap-6">
                  <div className="flex items-start gap-6 p-6 bg-slate-900/50 rounded-3xl border border-slate-800">
                    <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Call Us</h4>
                      <p className="text-slate-400 mb-2">Mon-Sat, 9am - 7pm</p>
                      <a href="tel:5551234567" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">(555) 123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 p-6 bg-slate-900/50 rounded-3xl border border-slate-800">
                    <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">WhatsApp Support</h4>
                      <p className="text-slate-400 mb-2">Quick answers on the go</p>
                      <a href="#" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">Chat Now</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 p-6 bg-slate-900/50 rounded-3xl border border-slate-800">
                    <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Visit Store</h4>
                      <p className="text-slate-400">123 Tech Avenue, Suite 400<br />Silicon Valley, CA 94000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2">
                  <Clock className="text-cyan-400" size={18} /> Business Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-slate-400"><span className="font-medium">Monday - Friday</span> <span>9:00 AM - 7:00 PM</span></div>
                  <div className="flex justify-between text-slate-400"><span className="font-medium">Saturday</span> <span>10:00 AM - 5:00 PM</span></div>
                  <div className="flex justify-between text-slate-400 font-bold"><span className="text-red-400">Sunday</span> <span className="text-red-400">Closed</span></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full"></div>
              {submitted ? (
                <div className="text-center py-20 animate-in zoom-in-95">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h2 className="text-3xl font-extrabold text-white mb-4">Message Sent!</h2>
                  <p className="text-slate-400 mb-8">Thanks for reaching out. A technician will get back to you within 2 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-cyan-400 font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white font-bold text-sm">Full Name</label>
                      <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white font-bold text-sm">Email Address</label>
                      <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-bold text-sm">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-bold text-sm">Device Model</label>
                    <input type="text" placeholder="e.g. iPhone 15 Pro" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-bold text-sm">Your Message</label>
                    <textarea required className="w-full h-40 bg-slate-950 border border-slate-800 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500 transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-[#0B1120] font-bold text-lg rounded-2xl transition-all shadow-xl shadow-cyan-500/10 flex items-center justify-center gap-2">
                    Send Message <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto h-[450px] bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden relative group">
          <div className="absolute inset-0 grayscale contrast-125 opacity-40">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6392906223!2d-122.08385102344715!3d37.42206557207559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb92210338df1%3A0x33015187652e002!2sGoogleplex!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 p-6 bg-[#0B1120] border border-slate-800 rounded-3xl hidden md:block group-hover:shadow-2xl transition-all">
            <h4 className="text-white font-bold mb-1">Find us in Silicon Valley</h4>
            <p className="text-slate-400 text-sm">Near the tech headquarters, next to the park.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
