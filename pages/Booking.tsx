
import React, { useState } from 'react';
import { BookingStep } from '../types';
import { Smartphone, CheckCircle2, ChevronRight, ChevronLeft, Calendar, User, Sparkles, Loader2 } from 'lucide-react';
import { getSmartDiagnostic } from '../services/geminiService';

const Booking: React.FC = () => {
  const [step, setStep] = useState<BookingStep>(BookingStep.DeviceSelect);
  const [formData, setFormData] = useState({
    device: '',
    issue: '',
    description: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });
  const [diagnostic, setDiagnostic] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const runDiagnostic = async () => {
    if (!formData.description) return;
    setIsAnalyzing(true);
    const result = await getSmartDiagnostic(formData.description);
    setDiagnostic(result);
    setIsAnalyzing(false);
  };

  const devices = ['iPhone 15/14/13', 'iPhone 12/11/X', 'Samsung S24/S23/S22', 'Samsung A Series', 'Google Pixel 8/7/6', 'iPad / Tablet', 'Other Device'];
  const issues = ['Cracked Screen', 'Battery Health', 'Charging Problems', 'Water Damage', 'Camera Failure', 'Speaker/Mic Issue', 'Software/Lockout', 'Other'];

  return (
    <div className="pb-24 pt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Tracker */}
        <div className="mb-12 flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 -z-10"></div>
          {[0, 1, 2, 3, 4].map((s) => (
            <div 
              key={s} 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-4 ${step >= s ? 'bg-cyan-500 text-[#0B1120] border-cyan-500 shadow-lg shadow-cyan-500/20' : 'bg-[#0B1120] text-slate-500 border-slate-800'}`}
            >
              {step > s ? <CheckCircle2 size={20} /> : s + 1}
            </div>
          ))}
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          {step === BookingStep.DeviceSelect && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white mb-2">Select Your Device</h2>
                <p className="text-slate-400">Which device are we bringing back to life today?</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {devices.map(d => (
                  <button
                    key={d}
                    onClick={() => { setFormData({ ...formData, device: d }); handleNext(); }}
                    className={`p-6 text-left rounded-2xl border transition-all flex items-center justify-between group ${formData.device === d ? 'border-cyan-500 bg-cyan-500/10' : 'border-slate-800 bg-slate-900 hover:border-slate-700'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                        <Smartphone className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-lg font-bold text-white">{d}</span>
                    </div>
                    <ChevronRight className="text-slate-600 group-hover:text-cyan-500 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === BookingStep.IssueSelect && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white mb-2">What's the issue?</h2>
                <p className="text-slate-400">Select the primary problem and give us a few details.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {issues.map(i => (
                  <button
                    key={i}
                    onClick={() => setFormData({ ...formData, issue: i })}
                    className={`p-4 text-center rounded-2xl border transition-all text-sm font-bold ${formData.issue === i ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'}`}
                  >
                    {i}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <label className="block text-white font-bold">Additional Details (Optional)</label>
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us more about how it happened..."
                  className="w-full h-32 bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-all resize-none"
                />
                <button 
                  onClick={runDiagnostic}
                  disabled={isAnalyzing || !formData.description}
                  className="w-full py-3 bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-600/30 transition-all disabled:opacity-50"
                >
                  {isAnalyzing ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={18} />}
                  Run Smart Diagnostic (AI)
                </button>

                {diagnostic && (
                  <div className="p-6 bg-slate-950/50 border border-slate-800 rounded-2xl animate-in zoom-in-95 duration-300">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold mb-3 text-sm">
                      <Sparkles size={14} /> PROBABLE DIAGNOSTIC
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{diagnostic}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <button onClick={handleBack} className="flex-1 py-4 bg-slate-800 text-white rounded-2xl font-bold flex items-center justify-center gap-2">
                  <ChevronLeft size={20} /> Back
                </button>
                <button onClick={handleNext} disabled={!formData.issue} className="flex-[2] py-4 bg-cyan-500 text-[#0B1120] rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-50">
                  Continue <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {step === BookingStep.DateTime && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white mb-2">When should we expect you?</h2>
                <p className="text-slate-400">Choose a convenient time for your drop-off.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block text-white font-bold flex items-center gap-2">
                    <Calendar size={18} className="text-cyan-500" /> Select Date
                  </label>
                  <input 
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-cyan-500 [color-scheme:dark]"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-white font-bold flex items-center gap-2">
                    <Clock size={18} className="text-cyan-500" /> Select Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="">Select a time...</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button onClick={handleBack} className="flex-1 py-4 bg-slate-800 text-white rounded-2xl font-bold">Back</button>
                <button onClick={handleNext} disabled={!formData.date || !formData.time} className="flex-[2] py-4 bg-cyan-500 text-[#0B1120] rounded-2xl font-bold">
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === BookingStep.ContactInfo && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white mb-2">Final Details</h2>
                <p className="text-slate-400">How should we contact you about your repair?</p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button onClick={handleBack} className="flex-1 py-4 bg-slate-800 text-white rounded-2xl font-bold">Back</button>
                <button onClick={handleNext} disabled={!formData.name || !formData.email || !formData.phone} className="flex-[2] py-4 bg-cyan-500 text-[#0B1120] rounded-2xl font-bold">
                  Confirm Appointment
                </button>
              </div>
            </div>
          )}

          {step === BookingStep.Confirmation && (
            <div className="text-center space-y-8 animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-500/20">
                <CheckCircle2 size={48} />
              </div>
              <div>
                <h2 className="text-4xl font-extrabold text-white mb-4">You're all set!</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  We've received your booking for your <span className="text-white font-bold">{formData.device}</span>. 
                  See you on <span className="text-cyan-400 font-bold">{formData.date}</span> at <span className="text-cyan-400 font-bold">{formData.time}</span>.
                </p>
              </div>
              <div className="p-8 bg-slate-950/50 border border-slate-800 rounded-[2rem] text-left max-w-sm mx-auto space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Service:</span>
                  <span className="text-white font-bold">{formData.issue}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Booking Ref:</span>
                  <span className="text-white font-bold">CEL-{Math.floor(Math.random()*9000)+1000}</span>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-800 text-xs text-center text-slate-500">
                  Confirmation sent to {formData.email}
                </div>
              </div>
              <button 
                onClick={() => window.location.href = '#/'}
                className="px-12 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-all"
              >
                Return Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Local icons
const Mail = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const Phone = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const Clock = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default Booking;
