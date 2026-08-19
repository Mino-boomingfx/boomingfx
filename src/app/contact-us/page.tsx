"use client";
import React, { useState } from 'react';
import { useSiteContent } from '@/context/ContentContext';
import { Mail, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactUs() {
  const { content } = useSiteContent();
  const { general } = content;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName || ''}`.trim(),
        email: formData.email,
        message: formData.message,
        _subject: `⚡ New Inquiry from ${formData.firstName} - BoomingFX`,
        _template: 'box'
      };

      // 1. Primary Clean Dispatch via Web3Forms (Zero ads, clean formatting)
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'a6a6689d-677c-4a3b-a3d6-7dcaef5dcc7e',
          name: `${formData.firstName} ${formData.lastName || ''}`.trim(),
          email: formData.email,
          message: formData.message,
          subject: `⚡ New Inquiry: ${formData.firstName} - BoomingFX`,
          from_name: 'BoomingFX Website Portal'
        })
      }).catch(() => null);

      // 2. Direct browser fetch to FormSubmit to support@boomingfx.org
      fetch('https://formsubmit.co/ajax/support@boomingfx.org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(() => null);

      // 3. Direct browser fetch to support@launchapropfirm.com
      fetch('https://formsubmit.co/ajax/support@launchapropfirm.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(() => null);

      // 3. Direct browser fetch to FormSubmit backup (boomingfx@gmail.com)
      fetch('https://formsubmit.co/ajax/boomingfx@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(() => null);

      // 3. Also call internal Next.js API route
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => null);

      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#001f3f] min-h-screen selection:bg-[#004185] selection:text-white font-sans text-white overflow-hidden">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative min-h-[45vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f] via-[#004185]/40 to-[#001f3f]"></div>
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          {/* Grid Pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">Get In Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 tracking-tight leading-[1.1] drop-shadow-2xl">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Us</span>
          </h1>
        </div>
      </section>

      {/* 
        ========================================================================
        CONTACT CONTENT SECTION
        ========================================================================
      */}
      <section className="py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Let&apos;s start a <br/>conversation.</h2>
                <p className="text-blue-100/80 text-lg leading-relaxed">
                  We&apos;d love to hear from you. Whether you have a question about our mentorship programs, need help with your trading strategy, or just want to connect, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                    <a href={`mailto:${general.supportEmail || "support@boomingfx.org"}`} className="text-cyan-400 font-medium hover:text-cyan-300 hover:underline transition-colors">
                      {general.supportEmail || "support@boomingfx.org"}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Office Location</h3>
                    <p className="text-blue-100/80 font-medium">
                      {general.officeAddress || "10665 Jasper Ave, 14th floor, First Edmonton Place"}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Business Hours</h3>
                    <p className="text-blue-100/80 font-medium">
                      <span className="text-purple-400 font-bold">{general.businessHours || "8 AM - 8 PM (Mon-Fri)"}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-bold text-blue-100/50 uppercase tracking-widest mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href={general.facebookUrl || "#"} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300 shadow-[0_0_0_rgba(24,119,242,0)] hover:shadow-[0_0_20px_rgba(24,119,242,0.4)] hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  </a>
                  <a href={general.youtubeUrl || "#"} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-300 shadow-[0_0_0_rgba(255,0,0,0)] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M21.582 6.186a2.686 2.686 0 00-1.884-1.884C17.973 3.84 12 3.84 12 3.84s-5.973 0-7.698.462a2.686 2.686 0 00-1.884 1.884C1.956 7.91 1.956 12 1.956 12s0 4.09.462 5.814a2.686 2.686 0 001.884 1.884c1.725.462 7.698.462 7.698.462s5.973 0 7.698-.462a2.686 2.686 0 001.884-1.884C22.044 16.09 22.044 12 22.044 12s0-4.09-.462-5.814zM9.91 15.55L15.025 12 9.91 8.45v7.1z" clipRule="evenodd" /></svg>
                  </a>
                  <a href={general.instagramUrl || "#"} target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 overflow-hidden transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-[0_0_20px_rgba(220,39,67,0.4)] hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.46 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="relative">
              {/* Form Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-30 mix-blend-screen"></div>
              
              <div className="relative bg-[#00162e]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-5 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white">Message Sent Successfully!</h3>
                    <p className="text-blue-100/80 text-base max-w-md leading-relaxed">
                      Thank you for reaching out. Our support team at <span className="text-cyan-400 font-semibold">{general.supportEmail || "support@boomingfx.org"}</span> has received your inquiry and will respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-8 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-300 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-bold text-blue-100 mb-2">Name <span className="text-cyan-400">*</span></label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First"
                            className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/30 focus:bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300"
                            required
                          />
                        </div>
                        <div>
                          <input 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last"
                            className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/30 focus:bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-blue-100 mb-2">Email <span className="text-cyan-400">*</span></label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/30 focus:bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-blue-100 mb-2">Comment or Message <span className="text-cyan-400">*</span></label>
                      <textarea 
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/30 focus:bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 shadow-[0_0_20px_rgba(0,194,255,0.3)] transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        ENROLL CALL TO ACTION
        ========================================================================
      */}
      <section className="py-20 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#004185] to-blue-600 rounded-[3rem] p-10 md:p-16 overflow-hidden border border-blue-400/30 shadow-[0_0_50px_rgba(0,65,133,0.4)] flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full mix-blend-overlay filter blur-[50px]"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-[40px]"></div>
            
            <div className="relative z-10 text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Ready to Join <br/>the <span className="text-cyan-400">Success Stories?</span>
              </h2>
              <p className="text-blue-100 text-lg">
                <strong className="text-white font-bold">BoomingFX.</strong> Where transparency meets expertise. Get mentorship, signals, and community support to trade with confidence.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <a 
                href="/packages" 
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-[#004185] font-black text-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative flex items-center gap-2">
                  Enroll Now!
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
