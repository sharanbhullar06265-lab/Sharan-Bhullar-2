import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, MessageSquare, AlertCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactFormSectionProps {
  initialService?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    currentWebsite: '',
    serviceNeeded: initialService || 'Website Design & Development',
    budget: 'Standard ($1,000 - $3,000)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesOptions = [
    'Website Design & Development',
    'Website Redesign',
    'E-Commerce & Shopify Store',
    'Landing Page for Launch',
    'Custom Business Solution',
  ];

  const budgetOptions = [
    'Under $1,000 (Basic Site)',
    'Standard ($1,000 - $3,000)',
    'Growth ($3,000 - $6,000)',
    'Enterprise / Custom',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please fill in your name and email address.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable enquiry receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#16A7B7', '#5B4CD4', '#FFA45B', '#27C93F']
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      businessName: '',
      currentWebsite: '',
      serviceNeeded: 'Website Design & Development',
      budget: 'Standard ($1,000 - $3,000)',
      message: '',
    });
  };

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-10 sm:py-16">
      
      {/* Soft Lavender Rounded Container */}
      <div className="bg-[#F0EEFF] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 border border-[#D9D5FF] shadow-sm relative overflow-hidden">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D9D5FF] text-xs font-bold text-[#5B4CD4] tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#5B4CD4]" />
              <span>START A PROJECT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202020] tracking-tight">
              Tell Me About Your Project
            </h2>
            <p className="text-sm sm:text-base text-[#777777] max-w-xl mx-auto font-normal">
              Have an idea for a website? Send me a few details and I'll get back to you within 24 hours with a clear roadmap.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 border border-[#E0DCFB] shadow-sm">
            
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-[#E6F7F9] text-[#16A7B7] rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-[#202020]">
                    Enquiry Received!
                  </h3>
                  <p className="text-sm text-[#666] max-w-md mx-auto">
                    Thank you, <strong className="text-[#202020]">{formData.name}</strong>. I've received your project details for <strong className="text-[#202020]">{formData.businessName || 'your business'}</strong> and will email you back at <span className="text-[#16A7B7] font-semibold">{formData.email}</span> shortly.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#5B4CD4] hover:text-[#202020] bg-[#F0EEFF] px-4 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Send another inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMsg && (
                  <div className="p-3.5 rounded-2xl bg-[#FFF1F0] border border-[#FFCCC7] text-xs font-semibold text-[#CF1322] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#333333] uppercase tracking-wider block">
                      Your Name <span className="text-[#16A7B7]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAFAF8] focus:bg-white border border-[#E0E0E0] focus:border-[#16A7B7] rounded-2xl px-4 py-3 text-sm text-[#202020] placeholder-[#999] outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#333333] uppercase tracking-wider block">
                      Email Address <span className="text-[#16A7B7]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAFAF8] focus:bg-white border border-[#E0E0E0] focus:border-[#16A7B7] rounded-2xl px-4 py-3 text-sm text-[#202020] placeholder-[#999] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Business Name & Existing Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#333333] uppercase tracking-wider block">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lumina Academy / Savor Cafe"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-[#FAFAF8] focus:bg-white border border-[#E0E0E0] focus:border-[#16A7B7] rounded-2xl px-4 py-3 text-sm text-[#202020] placeholder-[#999] outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#333333] uppercase tracking-wider block">
                      Current Website (if any)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. www.mybusiness.com or New Project"
                      value={formData.currentWebsite}
                      onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                      className="w-full bg-[#FAFAF8] focus:bg-white border border-[#E0E0E0] focus:border-[#16A7B7] rounded-2xl px-4 py-3 text-sm text-[#202020] placeholder-[#999] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* What do you need & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#333333] uppercase tracking-wider block">
                      What Do You Need?
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full bg-[#FAFAF8] focus:bg-white border border-[#E0E0E0] focus:border-[#16A7B7] rounded-2xl px-4 py-3 text-sm text-[#202020] outline-none transition-all cursor-pointer"
                    >
                      {servicesOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#333333] uppercase tracking-wider block">
                      Expected Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#FAFAF8] focus:bg-white border border-[#E0E0E0] focus:border-[#16A7B7] rounded-2xl px-4 py-3 text-sm text-[#202020] outline-none transition-all cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#333333] uppercase tracking-wider block">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me a bit about your business, target launch timeline, or specific features you'd like on your website..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAFAF8] focus:bg-white border border-[#E0E0E0] focus:border-[#16A7B7] rounded-2xl px-4 py-3 text-sm text-[#202020] placeholder-[#999] outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#202020] hover:bg-[#16A7B7] text-white text-sm sm:text-base font-semibold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Project Details...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-[#777] mt-3">
                    No spam ever. 100% confidential. Replies within 24 hours.
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};
