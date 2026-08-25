import React, { useState } from 'react';
import { X, Calendar, Clock, PhoneCall, CheckCircle2, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNote?: string;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose, initialNote = '' }) => {
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteType, setWebsiteType] = useState('Business Website');
  const [notes, setNotes] = useState(initialNote);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const days = [
    { label: 'Today', sub: 'Urgent Slot' },
    { label: 'Tomorrow', sub: 'Recommended' },
    { label: 'Thursday', sub: 'Open' },
    { label: 'Friday', sub: 'Open' },
    { label: 'Monday', sub: 'Next Week' },
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM', '07:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsBooked(true);
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#16A7B7', '#5B4CD4', '#202020', '#27C93F']
      });
    } catch (err) {
      // ignore
    }
  };

  const handleClose = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div className="bg-[#FAFAF8] w-full max-w-xl rounded-[28px] sm:rounded-[36px] border border-[#E2E2E2] shadow-2xl overflow-hidden my-auto relative">
        
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-[#E8E8E8] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#E6F7F9] text-[#16A7B7] flex items-center justify-center">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#202020]">
                Book a 15-Min Discovery Call
              </h3>
              <p className="text-[11px] text-[#777]">
                Free strategy & consultation for your website
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-[#F0F0F0] hover:bg-[#E0E0E0] text-[#202020] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {isBooked ? (
            <div className="text-center py-8 space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-[#E6F7F9] text-[#16A7B7] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-[#202020]">
                  Call Confirmed for {selectedDay} at {selectedTime}!
                </h4>
                <p className="text-xs sm:text-sm text-[#666] max-w-md mx-auto">
                  A Google Meet invitation has been generated for <strong className="text-[#202020]">{name}</strong> at <span className="text-[#16A7B7] font-semibold">{email}</span>.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#E5E5E5] text-left text-xs space-y-2">
                <div className="flex justify-between text-[#555]">
                  <span>Project Category:</span>
                  <strong className="text-[#202020]">{websiteType}</strong>
                </div>
                <div className="flex justify-between text-[#555]">
                  <span>Direct WhatsApp Sync:</span>
                  <strong className="text-[#16A7B7]">{phone || '+91 Direct Call'}</strong>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={handleClose}
                  className="bg-[#202020] hover:bg-[#16A7B7] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Day Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#444] uppercase tracking-wider block">
                  1. Select Preferred Day
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {days.map((d) => (
                    <button
                      type="button"
                      key={d.label}
                      onClick={() => setSelectedDay(d.label)}
                      className={`p-2.5 rounded-xl text-center border text-xs font-bold transition-all cursor-pointer ${
                        selectedDay === d.label
                          ? 'bg-[#16A7B7] text-white border-[#16A7B7] shadow-sm'
                          : 'bg-white text-[#444] border-[#E0E0E0] hover:border-[#16A7B7]'
                      }`}
                    >
                      <span className="block">{d.label}</span>
                      <span className={`text-[9px] font-normal block ${selectedDay === d.label ? 'text-white/80' : 'text-[#888]'}`}>
                        {d.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#444] uppercase tracking-wider block">
                  2. Select Time (IST / Your Local Time)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-1 rounded-xl text-center border text-xs font-bold transition-all cursor-pointer ${
                        selectedTime === time
                          ? 'bg-[#202020] text-white border-[#202020] shadow-sm'
                          : 'bg-white text-[#555] border-[#E0E0E0] hover:border-[#202020]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 pt-2 border-t border-[#EDEDED]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#555] uppercase block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-[#DDD] focus:border-[#16A7B7] rounded-xl px-3 py-2 text-xs text-[#202020] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#555] uppercase block mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@business.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-[#DDD] focus:border-[#16A7B7] rounded-xl px-3 py-2 text-xs text-[#202020] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#555] uppercase block mb-1">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-[#DDD] focus:border-[#16A7B7] rounded-xl px-3 py-2 text-xs text-[#202020] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#555] uppercase block mb-1">
                      Website Category
                    </label>
                    <select
                      value={websiteType}
                      onChange={(e) => setWebsiteType(e.target.value)}
                      className="w-full bg-white border border-[#DDD] focus:border-[#16A7B7] rounded-xl px-3 py-2 text-xs text-[#202020] outline-none cursor-pointer"
                    >
                      <option value="Business Website">Business Website</option>
                      <option value="E-Commerce / Shopify">E-Commerce / Shopify</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Kids & Activity Hub">Kids & Activity Hub</option>
                      <option value="Restaurant / Dining">Restaurant / Dining</option>
                      <option value="Website Redesign">Website Redesign</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#555] uppercase block mb-1">
                    Quick Project Note (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Planning a redesign for our clinic website..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-white border border-[#DDD] focus:border-[#16A7B7] rounded-xl px-3 py-2 text-xs text-[#202020] outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#16A7B7] hover:bg-[#0E8F9F] text-white text-xs sm:text-sm font-bold py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Confirm Free 15-Min Call</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};
