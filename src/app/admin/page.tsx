"use client";
import React, { useState, useEffect } from 'react';
import { useSiteContent, SiteContentType } from '@/context/ContentContext';
import defaultContent from '@/data/siteContent.json';
import { 
  Save, 
  RotateCcw, 
  Download, 
  Upload, 
  Eye, 
  ExternalLink, 
  Lock, 
  Unlock, 
  Sparkles, 
  Plus, 
  Trash2, 
  DollarSign, 
  HelpCircle, 
  Star, 
  Settings, 
  Layers, 
  Check,
  Smartphone,
  Tablet,
  Monitor,
  Building,
  Mail,
  Link as LinkIcon
} from 'lucide-react';

const ADMIN_PASSWORD = "boomingfx2025"; // Client master passcode

export default function AdminPage() {
  const { content, updateContent, resetContent, isCustomized } = useSiteContent();
  const [formData, setFormData] = useState<SiteContentType>(content);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<'packages' | 'hero' | 'general' | 'faqs' | 'testimonials'>('packages');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [previewPage, setPreviewPage] = useState<string>('/');
  const [savedNotification, setSavedNotification] = useState(false);

  useEffect(() => {
    setFormData(content);
  }, [content]);

  useEffect(() => {
    const auth = sessionStorage.getItem("boomingfx_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("boomingfx_admin_auth", "true");
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("boomingfx_admin_auth");
  };

  const handleSave = () => {
    updateContent(formData);
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all content to the default website settings?")) {
      resetContent();
      setFormData(defaultContent);
      setSavedNotification(true);
      setTimeout(() => setSavedNotification(false), 3000);
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "boomingfx-site-content.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          setFormData(parsed);
          updateContent(parsed);
          alert("Content successfully imported and applied!");
        } catch (err) {
          alert("Invalid JSON file format.");
        }
      };
    }
  };

  // Helper to update deeply nested fields
  const updateGeneral = (field: string, val: string) => {
    setFormData(prev => ({
      ...prev,
      general: { ...prev.general, [field]: val }
    }));
  };

  const updateHero = (field: string, val: string) => {
    setFormData(prev => ({
      ...prev,
      hero: { ...prev.hero, [field]: val }
    }));
  };

  const updatePackagePlan = (index: number, field: string, val: any) => {
    setFormData(prev => {
      const newPlans = [...prev.packages.plans];
      newPlans[index] = { ...newPlans[index], [field]: val };
      return {
        ...prev,
        packages: { ...prev.packages, plans: newPlans }
      };
    });
  };

  const updatePackageOverview = (field: string, val: string) => {
    setFormData(prev => ({
      ...prev,
      packages: { ...prev.packages, [field]: val }
    }));
  };

  const addPlanFeature = (planIndex: number) => {
    const newFeature = prompt("Enter new feature bullet point:");
    if (newFeature && newFeature.trim()) {
      setFormData(prev => {
        const newPlans = [...prev.packages.plans];
        newPlans[planIndex].features.push(newFeature.trim());
        return {
          ...prev,
          packages: { ...prev.packages, plans: newPlans }
        };
      });
    }
  };

  const removePlanFeature = (planIndex: number, featureIndex: number) => {
    setFormData(prev => {
      const newPlans = [...prev.packages.plans];
      newPlans[planIndex].features = newPlans[planIndex].features.filter((_, idx) => idx !== featureIndex);
      return {
        ...prev,
        packages: { ...prev.packages, plans: newPlans }
      };
    });
  };

  const updateFaq = (index: number, field: 'question' | 'answer', val: string) => {
    setFormData(prev => {
      const newFaqs = [...prev.faqs];
      newFaqs[index] = { ...newFaqs[index], [field]: val };
      return { ...prev, faqs: newFaqs };
    });
  };

  const addFaq = () => {
    const newQ = prompt("Enter FAQ Question:");
    if (!newQ) return;
    const newA = prompt("Enter FAQ Answer:");
    if (!newA) return;

    setFormData(prev => ({
      ...prev,
      faqs: [
        ...prev.faqs,
        { id: Date.now(), question: newQ, answer: newA }
      ]
    }));
  };

  const removeFaq = (index: number) => {
    if (window.confirm("Delete this FAQ item?")) {
      setFormData(prev => ({
        ...prev,
        faqs: prev.faqs.filter((_, idx) => idx !== index)
      }));
    }
  };

  // ----------------------------------------------------
  // LOGIN SCREEN
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#001026] flex items-center justify-center p-4 font-sans text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,65,133,0.5),transparent)]"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-md bg-[#001b3a]/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 to-[#004185] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20">
              <Lock className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-2xl font-black text-white">BoomingFX CMS Studio</h1>
            <p className="text-blue-100/60 text-sm mt-1">Live Visual Editor &amp; Site Customizer</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">
                Admin Master Password
              </label>
              <input 
                type="password" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password (default: boomingfx2025)"
                className="w-full px-4 py-3.5 bg-black/40 border border-white/15 rounded-xl text-white placeholder-white/30 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-sm transition-all"
                required
              />
            </div>

            {authError && (
              <p className="text-red-400 text-xs font-semibold bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                Incorrect password. Please try again or use the default passcode.
              </p>
            )}

            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold rounded-xl hover:from-white hover:to-white transition-all shadow-[0_0_25px_rgba(34,211,238,0.4)] text-sm uppercase tracking-wider"
            >
              Enter Visual Editor
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-white/40">
            Default passcode: <code className="text-cyan-300 font-mono bg-white/5 px-2 py-1 rounded">boomingfx2025</code>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // ADMIN VISUAL EDITOR INTERFACE (ELEMENTOR-STYLE)
  // ----------------------------------------------------
  return (
    <div className="h-screen bg-[#001026] text-white flex flex-col font-sans overflow-hidden">
      
      {/* TOP HEADER BAR */}
      <header className="h-16 bg-[#001733] border-b border-white/10 px-6 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-xl bg-cyan-400 text-black font-black flex items-center justify-center text-lg shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            B
          </div>
          <div>
            <h1 className="font-extrabold text-sm tracking-wide flex items-center gap-2">
              BoomingFX Studio <span className="text-[10px] bg-cyan-400/20 text-cyan-300 px-2 py-0.5 rounded-full font-bold border border-cyan-400/30 uppercase">CMS Active</span>
            </h1>
            <p className="text-white/40 text-xs">Visual Customizer &amp; Content Management</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {savedNotification && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg animate-pulse">
              <Check className="w-4 h-4" /> Changes Applied Live!
            </div>
          )}

          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <Save className="w-4 h-4" />
            Save Live Changes
          </button>

          <button 
            onClick={handleReset}
            title="Reset to Factory Defaults"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all text-xs"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button 
            onClick={handleExport}
            title="Export / Backup Site Content"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all text-xs"
          >
            <Download className="w-4 h-4" />
          </button>

          <label 
            title="Import Site Content"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all text-xs cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            <input type="file" accept=".json" onChange={handleImport} className="hidden" />
          </label>

          <a 
            href="/" 
            target="_blank" 
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Site
          </a>

          <button 
            onClick={handleLogout}
            className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-xs transition-all"
            title="Log Out"
          >
            <Lock className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* WORKSPACE AREA (SPLIT-SCREEN) */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT EDITING PANEL (Elementor-Style Sidebar) */}
        <aside className="w-full lg:w-[480px] bg-[#001733] border-r border-white/10 flex flex-col shrink-0 z-20 overflow-hidden">
          
          {/* Navigation Tabs */}
          <div className="grid grid-cols-5 p-2 bg-black/40 border-b border-white/10 text-xs font-bold gap-1 shrink-0">
            <button 
              onClick={() => setActiveTab('packages')}
              className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'packages' ? 'bg-[#004185] text-cyan-300 shadow' : 'text-white/60 hover:text-white'}`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Pricing</span>
            </button>
            <button 
              onClick={() => setActiveTab('hero')}
              className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'hero' ? 'bg-[#004185] text-cyan-300 shadow' : 'text-white/60 hover:text-white'}`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Hero</span>
            </button>
            <button 
              onClick={() => setActiveTab('faqs')}
              className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'faqs' ? 'bg-[#004185] text-cyan-300 shadow' : 'text-white/60 hover:text-white'}`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>FAQs</span>
            </button>
            <button 
              onClick={() => setActiveTab('testimonials')}
              className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'testimonials' ? 'bg-[#004185] text-cyan-300 shadow' : 'text-white/60 hover:text-white'}`}
            >
              <Star className="w-4 h-4" />
              <span>Reviews</span>
            </button>
            <button 
              onClick={() => setActiveTab('general')}
              className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'general' ? 'bg-[#004185] text-cyan-300 shadow' : 'text-white/60 hover:text-white'}`}
            >
              <Settings className="w-4 h-4" />
              <span>General</span>
            </button>
          </div>

          {/* Form Content Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            
            {/* ----------------- TAB: PACKAGES & PRICING ----------------- */}
            {activeTab === 'packages' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h2 className="text-base font-extrabold text-white">Pricing &amp; Stripe Setup</h2>
                    <p className="text-xs text-blue-100/60">Edit plan costs, bullet points &amp; Stripe checkout links</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-bold text-cyan-300 uppercase">Headliner Overview Title</label>
                  <input 
                    type="text" 
                    value={formData.packages.overviewTitle}
                    onChange={(e) => updatePackageOverview('overviewTitle', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-sm text-white"
                  />
                  <label className="block text-xs font-bold text-cyan-300 uppercase">Headliner Subtitle</label>
                  <input 
                    type="text" 
                    value={formData.packages.overviewSubtitle}
                    onChange={(e) => updatePackageOverview('overviewSubtitle', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-sm text-white"
                  />
                  <label className="block text-xs font-bold text-cyan-300 uppercase">What You&apos;re Stepping Into Paragraph</label>
                  <textarea 
                    rows={4}
                    value={formData.packages.overviewText}
                    onChange={(e) => updatePackageOverview('overviewText', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-xs text-white"
                  />
                </div>

                {/* 3 Package Cards */}
                {formData.packages.plans.map((plan, pIdx) => (
                  <div key={plan.id} className="bg-black/30 border border-white/15 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-xs font-black text-cyan-400 uppercase">Plan #{pIdx + 1}: {plan.name}</span>
                      <input 
                        type="text" 
                        value={plan.badge}
                        onChange={(e) => updatePackagePlan(pIdx, 'badge', e.target.value)}
                        placeholder="Badge text"
                        className="px-2 py-1 bg-white/10 border border-white/10 rounded text-[10px] text-cyan-200"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-white/70 mb-1">Plan Name</label>
                        <input 
                          type="text" 
                          value={plan.name}
                          onChange={(e) => updatePackagePlan(pIdx, 'name', e.target.value)}
                          className="w-full px-3 py-2 bg-black/50 border border-white/15 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-white/70 mb-1">Price Display</label>
                        <input 
                          type="text" 
                          value={plan.price}
                          onChange={(e) => updatePackagePlan(pIdx, 'price', e.target.value)}
                          className="w-full px-3 py-2 bg-black/50 border border-white/15 rounded-lg text-xs font-bold text-emerald-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-white/70 mb-1">Tagline / Short Desc</label>
                      <input 
                        type="text" 
                        value={plan.tagline}
                        onChange={(e) => updatePackagePlan(pIdx, 'tagline', e.target.value)}
                        className="w-full px-3 py-2 bg-black/50 border border-white/15 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-cyan-300 mb-1 flex items-center gap-1">
                        <LinkIcon className="w-3.5 h-3.5" /> Stripe Payment Link
                      </label>
                      <input 
                        type="text" 
                        value={plan.stripeUrl}
                        onChange={(e) => updatePackagePlan(pIdx, 'stripeUrl', e.target.value)}
                        className="w-full px-3 py-2 bg-black/50 border border-cyan-400/40 rounded-lg text-xs text-cyan-200 font-mono"
                      />
                    </div>

                    {/* Features List */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-[11px] font-bold text-white/70">Features List ({plan.features.length})</label>
                        <button 
                          type="button" 
                          onClick={() => addPlanFeature(pIdx)}
                          className="text-[10px] bg-white/10 hover:bg-white/20 text-cyan-300 px-2 py-1 rounded flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" /> Add Feature
                        </button>
                      </div>
                      <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                        {plan.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 bg-white/5 p-1.5 rounded-lg text-xs">
                            <span className="text-white/40 text-[10px]">•</span>
                            <span className="flex-1 truncate text-[11px]">{feat}</span>
                            <button 
                              type="button" 
                              onClick={() => removePlanFeature(pIdx, fIdx)}
                              className="text-red-400 hover:text-red-300 p-1"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ----------------- TAB: HERO & HEADLINES ----------------- */}
            {activeTab === 'hero' && (
              <div className="space-y-5">
                <div className="border-b border-white/10 pb-3">
                  <h2 className="text-base font-extrabold text-white">Hero &amp; Landing Banners</h2>
                  <p className="text-xs text-blue-100/60">Customize your main homepage headline and buttons</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Pill Badge Text</label>
                  <input 
                    type="text" 
                    value={formData.hero.badge}
                    onChange={(e) => updateHero('badge', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Hero Main Title</label>
                  <input 
                    type="text" 
                    value={formData.hero.title}
                    onChange={(e) => updateHero('title', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-sm font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Hero Subtitle Paragraph</label>
                  <textarea 
                    rows={3}
                    value={formData.hero.subtitle}
                    onChange={(e) => updateHero('subtitle', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-1">Primary CTA Button</label>
                    <input 
                      type="text" 
                      value={formData.hero.ctaText}
                      onChange={(e) => updateHero('ctaText', e.target.value)}
                      className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-1">Button Link</label>
                    <input 
                      type="text" 
                      value={formData.hero.ctaLink}
                      onChange={(e) => updateHero('ctaLink', e.target.value)}
                      className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-lg text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Google Review Link</label>
                  <input 
                    type="text" 
                    value={formData.hero.googleReviewsLink}
                    onChange={(e) => updateHero('googleReviewsLink', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-cyan-400/40 rounded-xl text-xs text-cyan-200 font-mono"
                  />
                </div>
              </div>
            )}

            {/* ----------------- TAB: FAQS ----------------- */}
            {activeTab === 'faqs' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h2 className="text-base font-extrabold text-white">FAQ Management</h2>
                    <p className="text-xs text-blue-100/60">Add, edit, or delete questions and answers</p>
                  </div>
                  <button 
                    type="button" 
                    onClick={addFaq}
                    className="px-3 py-1.5 bg-cyan-400 text-black font-extrabold rounded-lg text-xs flex items-center gap-1 shadow"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Question
                  </button>
                </div>

                <div className="space-y-4">
                  {formData.faqs.map((faq, fIdx) => (
                    <div key={faq.id} className="bg-black/30 border border-white/15 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-300">Question #{fIdx + 1}</span>
                        <button 
                          type="button" 
                          onClick={() => removeFaq(fIdx)}
                          className="text-red-400 hover:text-red-300 text-xs p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <input 
                        type="text" 
                        value={faq.question}
                        onChange={(e) => updateFaq(fIdx, 'question', e.target.value)}
                        className="w-full px-3 py-2 bg-black/50 border border-white/15 rounded-lg text-xs font-bold"
                      />
                      <textarea 
                        rows={3}
                        value={faq.answer}
                        onChange={(e) => updateFaq(fIdx, 'answer', e.target.value)}
                        className="w-full px-3 py-2 bg-black/50 border border-white/15 rounded-lg text-xs text-white/80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----------------- TAB: TESTIMONIALS & REVIEWS ----------------- */}
            {activeTab === 'testimonials' && (
              <div className="space-y-5">
                <div className="border-b border-white/10 pb-3">
                  <h2 className="text-base font-extrabold text-white">Testimonials &amp; Reviews</h2>
                  <p className="text-xs text-blue-100/60">Configure review links and headings</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Section Title</label>
                  <input 
                    type="text" 
                    value={formData.testimonials.title}
                    onChange={(e) => setFormData(p => ({ ...p, testimonials: { ...p.testimonials, title: e.target.value } }))}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Google Review URL</label>
                  <input 
                    type="text" 
                    value={formData.testimonials.googleReviewUrl}
                    onChange={(e) => setFormData(p => ({ ...p, testimonials: { ...p.testimonials, googleReviewUrl: e.target.value } }))}
                    className="w-full px-3 py-2 bg-black/40 border border-cyan-400/40 rounded-xl text-xs text-cyan-200 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/70 mb-1">Active Slider Images (Count: {formData.testimonials.sliderImages.length})</label>
                  <div className="grid grid-cols-4 gap-2 bg-black/30 p-3 rounded-xl border border-white/10 max-h-48 overflow-y-auto">
                    {formData.testimonials.sliderImages.map((img, i) => (
                      <div key={i} className="relative bg-white/5 rounded p-1 text-center">
                        <img src={img} alt={`Testimonial ${i+1}`} className="w-full h-12 object-cover rounded" />
                        <span className="text-[9px] text-white/60 block mt-0.5">#{i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ----------------- TAB: GENERAL ----------------- */}
            {activeTab === 'general' && (
              <div className="space-y-5">
                <div className="border-b border-white/10 pb-3">
                  <h2 className="text-base font-extrabold text-white">General &amp; Contact Info</h2>
                  <p className="text-xs text-blue-100/60">Manage company contact info and social links</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Support Email</label>
                  <input 
                    type="email" 
                    value={formData.general.supportEmail}
                    onChange={(e) => updateGeneral('supportEmail', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Office Location</label>
                  <input 
                    type="text" 
                    value={formData.general.officeAddress}
                    onChange={(e) => updateGeneral('officeAddress', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Business Hours</label>
                  <input 
                    type="text" 
                    value={formData.general.businessHours}
                    onChange={(e) => updateGeneral('businessHours', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-sm"
                  />
                </div>

                <div className="pt-3 border-t border-white/10 space-y-3">
                  <span className="text-xs font-bold text-white uppercase block">Social Media URLs</span>
                  <div>
                    <label className="block text-[11px] text-white/70 mb-0.5">Facebook URL</label>
                    <input 
                      type="text" 
                      value={formData.general.facebookUrl}
                      onChange={(e) => updateGeneral('facebookUrl', e.target.value)}
                      className="w-full px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/70 mb-0.5">Telegram Channel URL</label>
                    <input 
                      type="text" 
                      value={formData.general.telegramUrl}
                      onChange={(e) => updateGeneral('telegramUrl', e.target.value)}
                      className="w-full px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/70 mb-0.5">YouTube URL</label>
                    <input 
                      type="text" 
                      value={formData.general.youtubeUrl}
                      onChange={(e) => updateGeneral('youtubeUrl', e.target.value)}
                      className="w-full px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Footer */}
          <div className="p-4 bg-black/50 border-t border-white/10 flex items-center justify-between text-xs text-white/50 shrink-0">
            <span>Status: <strong className="text-emerald-400">Ready</strong></span>
            <span>{isCustomized ? '● Custom Data Active' : '○ Default Preset'}</span>
          </div>
        </aside>

        {/* RIGHT PREVIEW CANVAS (Live Interactive Elementor-Style Window) */}
        <main className="flex-1 bg-[#000c1e] flex flex-col overflow-hidden">
          
          {/* Canvas Toolbar */}
          <div className="h-12 bg-[#00142c] border-b border-white/10 px-6 flex items-center justify-between shrink-0">
            
            {/* Page Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white/50 uppercase">Previewing:</span>
              <select 
                value={previewPage}
                onChange={(e) => setPreviewPage(e.target.value)}
                className="bg-black/50 border border-white/15 text-xs text-cyan-300 font-bold px-3 py-1.5 rounded-lg outline-none cursor-pointer"
              >
                <option value="/">Home Page (/)</option>
                <option value="/packages">Packages (/packages)</option>
                <option value="/testimonial">Testimonial (/testimonial)</option>
                <option value="/faq">FAQ (/faq)</option>
                <option value="/contact-us">Contact Us (/contact-us)</option>
                <option value="/refund-policy">Refund Policy (/refund-policy)</option>
                <option value="/disclaimer">Disclaimer (/disclaimer)</option>
              </select>
            </div>

            {/* Viewport Device Switcher */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
              <button 
                onClick={() => setPreviewDevice('desktop')}
                className={`p-1.5 rounded-lg transition-all ${previewDevice === 'desktop' ? 'bg-[#004185] text-cyan-300' : 'text-white/50 hover:text-white'}`}
                title="Desktop View (100%)"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setPreviewDevice('tablet')}
                className={`p-1.5 rounded-lg transition-all ${previewDevice === 'tablet' ? 'bg-[#004185] text-cyan-300' : 'text-white/50 hover:text-white'}`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setPreviewDevice('mobile')}
                className={`p-1.5 rounded-lg transition-all ${previewDevice === 'mobile' ? 'bg-[#004185] text-cyan-300' : 'text-white/50 hover:text-white'}`}
                title="Mobile View (375px)"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Live Preview Tag */}
            <div className="text-[11px] text-cyan-400/80 font-mono hidden md:flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Live Sync Enabled
            </div>
          </div>

          {/* Iframe Viewport Container */}
          <div className="flex-1 overflow-auto p-4 flex items-start justify-center bg-[radial-gradient(circle_at_center,rgba(0,65,133,0.1)_0,transparent_100%)]">
            <div 
              className={`h-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-300 ${
                previewDevice === 'desktop' ? 'w-full max-w-full' :
                previewDevice === 'tablet' ? 'w-[768px] max-w-full' :
                'w-[390px] max-w-full'
              }`}
            >
              <iframe 
                src={previewPage}
                title="Live Website Preview"
                className="w-full h-full border-0 bg-white"
              />
            </div>
          </div>

        </main>
      </div>

    </div>
  );
}
