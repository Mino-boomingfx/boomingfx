"use client";
import React, { useState, useEffect } from 'react';
import { useSiteContent, SiteContentType } from '@/context/ContentContext';
import defaultContent from '@/data/siteContent.json';
import { 
  Save, 
  RotateCcw, 
  Download, 
  Upload, 
  ExternalLink, 
  Lock, 
  Sparkles, 
  Plus, 
  Trash2, 
  DollarSign, 
  HelpCircle, 
  Star, 
  Settings, 
  Check,
  Smartphone,
  Tablet,
  Monitor,
  Building,
  Mail,
  Link as LinkIcon,
  User,
  Zap,
  Users,
  Image as ImageIcon,
  ShieldCheck,
  FileText,
  Home
} from 'lucide-react';

const ADMIN_PASSWORD = "boomingfx2025"; // Client master passcode

type AdminTab = 
  | 'home'
  | 'aboutMe'
  | 'whyBoomingFx'
  | 'packages'
  | 'ourTeam'
  | 'media'
  | 'testimonials'
  | 'faqs'
  | 'contact'
  | 'legal';

const PAGE_ROUTES: Record<AdminTab, string> = {
  home: '/',
  aboutMe: '/about-me',
  whyBoomingFx: '/why-boomingfx',
  packages: '/packages',
  ourTeam: '/our-team',
  media: '/media',
  testimonials: '/testimonial',
  faqs: '/faq',
  contact: '/contact-us',
  legal: '/refund-policy',
};

export default function AdminPage() {
  const { content, updateContent, resetContent, isCustomized } = useSiteContent();
  const [formData, setFormData] = useState<SiteContentType>(content);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('home');
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

  const handleTabChange = (tab: AdminTab) => {
    setActiveTab(tab);
    setPreviewPage(PAGE_ROUTES[tab]);
  };

  const handlePreviewPageChange = (url: string) => {
    setPreviewPage(url);
    const foundTab = (Object.keys(PAGE_ROUTES) as AdminTab[]).find(k => PAGE_ROUTES[k] === url);
    if (foundTab) {
      setActiveTab(foundTab);
    }
  };

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
    if (window.confirm("Are you sure you want to reset all content across the website to original default settings?")) {
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
          alert("All website pages & content successfully imported and applied!");
        } catch (err) {
          alert("Invalid JSON file format.");
        }
      };
    }
  };

  // Helper update handlers
  const updateGeneral = (field: string, val: string) => {
    setFormData(prev => ({ ...prev, general: { ...prev.general, [field]: val } }));
  };

  const updateHero = (field: string, val: string) => {
    setFormData(prev => ({ ...prev, hero: { ...prev.hero, [field]: val } }));
  };

  const updateAboutMe = (field: string, val: string) => {
    setFormData(prev => ({ ...prev, aboutMe: { ...prev.aboutMe, [field]: val } }));
  };

  const updateAboutCard = (index: number, field: 'title' | 'text', val: string) => {
    setFormData(prev => {
      const cards = [...(prev.aboutMe?.cards || [])];
      cards[index] = { ...cards[index], [field]: val };
      return { ...prev, aboutMe: { ...prev.aboutMe, cards } };
    });
  };

  const updateWhyBooming = (field: string, val: string) => {
    setFormData(prev => ({ ...prev, whyBoomingFx: { ...prev.whyBoomingFx, [field]: val } }));
  };

  const updateWhyCard = (index: number, field: 'title' | 'description', val: string) => {
    setFormData(prev => {
      const advantages = [...(prev.whyBoomingFx?.advantages || [])];
      advantages[index] = { ...advantages[index], [field]: val };
      return { ...prev, whyBoomingFx: { ...prev.whyBoomingFx, advantages } };
    });
  };

  const updatePackagePlan = (index: number, field: string, val: any) => {
    setFormData(prev => {
      const newPlans = [...prev.packages.plans];
      newPlans[index] = { ...newPlans[index], [field]: val };
      return { ...prev, packages: { ...prev.packages, plans: newPlans } };
    });
  };

  const updatePackageOverview = (field: string, val: string) => {
    setFormData(prev => ({ ...prev, packages: { ...prev.packages, [field]: val } }));
  };

  const addPlanFeature = (planIndex: number) => {
    const newFeature = prompt("Enter new feature bullet point:");
    if (newFeature && newFeature.trim()) {
      setFormData(prev => {
        const newPlans = [...prev.packages.plans];
        newPlans[planIndex].features.push(newFeature.trim());
        return { ...prev, packages: { ...prev.packages, plans: newPlans } };
      });
    }
  };

  const removePlanFeature = (planIndex: number, featureIndex: number) => {
    setFormData(prev => {
      const newPlans = [...prev.packages.plans];
      newPlans[planIndex].features = newPlans[planIndex].features.filter((_, idx) => idx !== featureIndex);
      return { ...prev, packages: { ...prev.packages, plans: newPlans } };
    });
  };

  // Team management
  const updateTeamMember = (index: number, field: string, val: string) => {
    setFormData(prev => {
      const members = [...(prev.ourTeam?.members || [])];
      members[index] = { ...members[index], [field]: val };
      return { ...prev, ourTeam: { ...prev.ourTeam, members } };
    });
  };

  const addTeamMember = () => {
    const name = prompt("Enter team member name:");
    if (!name) return;
    const role = prompt("Enter role (e.g. Lead Instructor, Risk Analyst):") || "Instructor";
    setFormData(prev => ({
      ...prev,
      ourTeam: {
        ...prev.ourTeam,
        members: [...(prev.ourTeam?.members || []), { name, role, image: "/boomingfx_logo.png" }]
      }
    }));
  };

  const removeTeamMember = (index: number) => {
    if (window.confirm("Remove this team member?")) {
      setFormData(prev => ({
        ...prev,
        ourTeam: {
          ...prev.ourTeam,
          members: (prev.ourTeam?.members || []).filter((_, i) => i !== index)
        }
      }));
    }
  };

  // Media gallery management
  const updateMediaItem = (index: number, field: string, val: string) => {
    setFormData(prev => {
      const items = [...(prev.media?.items || [])];
      items[index] = { ...items[index], [field]: val };
      return { ...prev, media: { ...prev.media, items } };
    });
  };

  const addMediaItem = () => {
    const title = prompt("Enter photo/event title:");
    if (!title) return;
    const description = prompt("Enter short description:") || "";
    const image = prompt("Enter image URL or path:") || "/The Edmonton team.png";
    setFormData(prev => ({
      ...prev,
      media: {
        ...prev.media,
        items: [...(prev.media?.items || []), { title, description, image }]
      }
    }));
  };

  const removeMediaItem = (index: number) => {
    if (window.confirm("Delete this gallery photo?")) {
      setFormData(prev => ({
        ...prev,
        media: {
          ...prev.media,
          items: (prev.media?.items || []).filter((_, i) => i !== index)
        }
      }));
    }
  };

  // FAQs
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
      faqs: [...prev.faqs, { id: Date.now(), question: newQ, answer: newA }]
    }));
  };

  const removeFaq = (index: number) => {
    if (window.confirm("Delete this FAQ item?")) {
      setFormData(prev => ({ ...prev, faqs: prev.faqs.filter((_, idx) => idx !== index) }));
    }
  };

  // Legal
  const updateRefundPolicy = (field: string, val: string) => {
    setFormData(prev => ({ ...prev, refundPolicy: { ...prev.refundPolicy, [field]: val } }));
  };

  const updateDisclaimer = (field: string, val: string) => {
    setFormData(prev => ({ ...prev, disclaimer: { ...prev.disclaimer, [field]: val } }));
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
            <p className="text-blue-100/60 text-sm mt-1">Live Visual Editor &amp; Full Page Customizer</p>
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
                Incorrect password. Please try again with master password.
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
              BoomingFX Studio <span className="text-[10px] bg-cyan-400/20 text-cyan-300 px-2 py-0.5 rounded-full font-bold border border-cyan-400/30 uppercase">Full CMS Active</span>
            </h1>
            <p className="text-white/40 text-xs">Visual Page Builder &amp; Content Customizer</p>
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
        <aside className="w-full lg:w-[490px] bg-[#001733] border-r border-white/10 flex flex-col shrink-0 z-20 overflow-hidden">
          
          {/* Page / Section Navigation Selector */}
          <div className="p-3 bg-black/50 border-b border-white/10 shrink-0">
            <label className="block text-[11px] font-bold text-cyan-300 uppercase mb-1.5 flex items-center justify-between">
              <span>Select Page to Customize:</span>
              <span className="text-[10px] text-white/50 lowercase">{PAGE_ROUTES[activeTab]}</span>
            </label>
            <div className="grid grid-cols-5 gap-1 text-[11px] font-bold">
              <button 
                onClick={() => handleTabChange('home')}
                className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'home' ? 'bg-[#004185] text-cyan-300 shadow border border-cyan-400/40' : 'bg-white/5 text-white/60 hover:text-white'}`}
              >
                <Home className="w-3.5 h-3.5" />
                <span className="truncate w-full text-[10px]">Home</span>
              </button>
              <button 
                onClick={() => handleTabChange('aboutMe')}
                className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'aboutMe' ? 'bg-[#004185] text-cyan-300 shadow border border-cyan-400/40' : 'bg-white/5 text-white/60 hover:text-white'}`}
              >
                <User className="w-3.5 h-3.5" />
                <span className="truncate w-full text-[10px]">About Me</span>
              </button>
              <button 
                onClick={() => handleTabChange('whyBoomingFx')}
                className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'whyBoomingFx' ? 'bg-[#004185] text-cyan-300 shadow border border-cyan-400/40' : 'bg-white/5 text-white/60 hover:text-white'}`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span className="truncate w-full text-[10px]">Why Booming</span>
              </button>
              <button 
                onClick={() => handleTabChange('packages')}
                className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'packages' ? 'bg-[#004185] text-cyan-300 shadow border border-cyan-400/40' : 'bg-white/5 text-white/60 hover:text-white'}`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span className="truncate w-full text-[10px]">Packages</span>
              </button>
              <button 
                onClick={() => handleTabChange('ourTeam')}
                className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'ourTeam' ? 'bg-[#004185] text-cyan-300 shadow border border-cyan-400/40' : 'bg-white/5 text-white/60 hover:text-white'}`}
              >
                <Users className="w-3.5 h-3.5" />
                <span className="truncate w-full text-[10px]">Our Team</span>
              </button>
              <button 
                onClick={() => handleTabChange('media')}
                className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'media' ? 'bg-[#004185] text-cyan-300 shadow border border-cyan-400/40' : 'bg-white/5 text-white/60 hover:text-white'}`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span className="truncate w-full text-[10px]">Media</span>
              </button>
              <button 
                onClick={() => handleTabChange('testimonials')}
                className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'testimonials' ? 'bg-[#004185] text-cyan-300 shadow border border-cyan-400/40' : 'bg-white/5 text-white/60 hover:text-white'}`}
              >
                <Star className="w-3.5 h-3.5" />
                <span className="truncate w-full text-[10px]">Reviews</span>
              </button>
              <button 
                onClick={() => handleTabChange('faqs')}
                className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'faqs' ? 'bg-[#004185] text-cyan-300 shadow border border-cyan-400/40' : 'bg-white/5 text-white/60 hover:text-white'}`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span className="truncate w-full text-[10px]">FAQs</span>
              </button>
              <button 
                onClick={() => handleTabChange('contact')}
                className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'contact' ? 'bg-[#004185] text-cyan-300 shadow border border-cyan-400/40' : 'bg-white/5 text-white/60 hover:text-white'}`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate w-full text-[10px]">Contact</span>
              </button>
              <button 
                onClick={() => handleTabChange('legal')}
                className={`py-2 px-1 rounded-lg transition-all text-center flex flex-col items-center gap-1 ${activeTab === 'legal' ? 'bg-[#004185] text-cyan-300 shadow border border-cyan-400/40' : 'bg-white/5 text-white/60 hover:text-white'}`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="truncate w-full text-[10px]">Policies</span>
              </button>
            </div>
          </div>

          {/* Form Content Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            
            {/* ----------------- TAB 1: HOME PAGE HERO ----------------- */}
            {activeTab === 'home' && (
              <div className="space-y-5">
                <div className="border-b border-white/10 pb-3">
                  <h2 className="text-base font-extrabold text-white">Home Page • Hero &amp; Banners</h2>
                  <p className="text-xs text-blue-100/60">Customize main headlines, buttons and Google review link</p>
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

            {/* ----------------- TAB 2: ABOUT ME (FOUNDER STORY) ----------------- */}
            {activeTab === 'aboutMe' && (
              <div className="space-y-5">
                <div className="border-b border-white/10 pb-3">
                  <h2 className="text-base font-extrabold text-white">About Me • Founder Story</h2>
                  <p className="text-xs text-blue-100/60">Customize Minochel&apos;s story, bio, milestones and photo</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Top Story Badge</label>
                  <input 
                    type="text" 
                    value={formData.aboutMe?.badge || ''}
                    onChange={(e) => updateAboutMe('badge', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-1">Founder Name</label>
                    <input 
                      type="text" 
                      value={formData.aboutMe?.founderName || ''}
                      onChange={(e) => updateAboutMe('founderName', e.target.value)}
                      className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-lg text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-1">Founder Title</label>
                    <input 
                      type="text" 
                      value={formData.aboutMe?.founderRole || ''}
                      onChange={(e) => updateAboutMe('founderRole', e.target.value)}
                      className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-lg text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Story Main Headline</label>
                  <textarea 
                    rows={2}
                    value={formData.aboutMe?.headline || ''}
                    onChange={(e) => updateAboutMe('headline', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-xs font-bold"
                  />
                </div>

                {/* Timeline Story Cards */}
                <div className="space-y-4 pt-2 border-t border-white/10">
                  <span className="text-xs font-extrabold text-cyan-300 uppercase block">Story Timeline Chapters ({formData.aboutMe?.cards?.length || 0})</span>
                  {(formData.aboutMe?.cards || []).map((card, cIdx) => (
                    <div key={cIdx} className="bg-black/30 border border-white/15 rounded-2xl p-4 space-y-2">
                      <span className="text-xs font-bold text-cyan-400">Chapter #{cIdx + 1}</span>
                      <input 
                        type="text" 
                        value={card.title}
                        onChange={(e) => updateAboutCard(cIdx, 'title', e.target.value)}
                        className="w-full px-3 py-1.5 bg-black/50 border border-white/15 rounded-lg text-xs font-bold"
                      />
                      <textarea 
                        rows={3}
                        value={card.text}
                        onChange={(e) => updateAboutCard(cIdx, 'text', e.target.value)}
                        className="w-full px-3 py-2 bg-black/50 border border-white/15 rounded-lg text-xs text-white/80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----------------- TAB 3: WHY BOOMINGFX ----------------- */}
            {activeTab === 'whyBoomingFx' && (
              <div className="space-y-5">
                <div className="border-b border-white/10 pb-3">
                  <h2 className="text-base font-extrabold text-white">Why BoomingFX • Advantages</h2>
                  <p className="text-xs text-blue-100/60">Customize the difference pillars and value propositions</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Page Title</label>
                  <input 
                    type="text" 
                    value={formData.whyBoomingFx?.title || ''}
                    onChange={(e) => updateWhyBooming('title', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase mb-1">Main Headline</label>
                  <textarea 
                    rows={2}
                    value={formData.whyBoomingFx?.headline || ''}
                    onChange={(e) => updateWhyBooming('headline', e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-xs"
                  />
                </div>

                {/* Advantage Cards */}
                <div className="space-y-4 pt-2 border-t border-white/10">
                  <span className="text-xs font-extrabold text-cyan-300 uppercase block">Advantage Pillars ({formData.whyBoomingFx?.advantages?.length || 0})</span>
                  {(formData.whyBoomingFx?.advantages || []).map((adv, aIdx) => (
                    <div key={aIdx} className="bg-black/30 border border-white/15 rounded-2xl p-4 space-y-2">
                      <span className="text-xs font-bold text-cyan-400">Pillar #{aIdx + 1}</span>
                      <input 
                        type="text" 
                        value={adv.title}
                        onChange={(e) => updateWhyCard(aIdx, 'title', e.target.value)}
                        className="w-full px-3 py-1.5 bg-black/50 border border-white/15 rounded-lg text-xs font-bold"
                      />
                      <textarea 
                        rows={2}
                        value={adv.description}
                        onChange={(e) => updateWhyCard(aIdx, 'description', e.target.value)}
                        className="w-full px-3 py-2 bg-black/50 border border-white/15 rounded-lg text-xs text-white/80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----------------- TAB 4: PACKAGES & PRICING ----------------- */}
            {activeTab === 'packages' && (
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-3">
                  <h2 className="text-base font-extrabold text-white">Pricing &amp; Stripe Setup</h2>
                  <p className="text-xs text-blue-100/60">Edit plan costs, bullet points &amp; Stripe checkout links</p>
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
                  <label className="block text-xs font-bold text-cyan-300 uppercase">Downtown Edmonton Framework Paragraph</label>
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

            {/* ----------------- TAB 5: OUR TEAM ----------------- */}
            {activeTab === 'ourTeam' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h2 className="text-base font-extrabold text-white">Our Team • Mentors &amp; Experts</h2>
                    <p className="text-xs text-blue-100/60">Manage instructors, analysts and risk coaches</p>
                  </div>
                  <button 
                    type="button" 
                    onClick={addTeamMember}
                    className="px-3 py-1.5 bg-cyan-400 text-black font-extrabold rounded-lg text-xs flex items-center gap-1 shadow"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Member
                  </button>
                </div>

                <div className="space-y-4">
                  {(formData.ourTeam?.members || []).map((member, mIdx) => (
                    <div key={mIdx} className="bg-black/30 border border-white/15 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-300">Member #{mIdx + 1}</span>
                        <button 
                          type="button" 
                          onClick={() => removeTeamMember(mIdx)}
                          className="text-red-400 hover:text-red-300 text-xs p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input 
                          type="text" 
                          value={member.name}
                          onChange={(e) => updateTeamMember(mIdx, 'name', e.target.value)}
                          placeholder="Full Name"
                          className="w-full px-3 py-1.5 bg-black/50 border border-white/15 rounded-lg text-xs font-bold"
                        />
                        <input 
                          type="text" 
                          value={member.role}
                          onChange={(e) => updateTeamMember(mIdx, 'role', e.target.value)}
                          placeholder="Role / Title"
                          className="w-full px-3 py-1.5 bg-black/50 border border-white/15 rounded-lg text-xs text-cyan-200"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----------------- TAB 6: MEDIA & EVENTS ----------------- */}
            {activeTab === 'media' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h2 className="text-base font-extrabold text-white">Media &amp; Events Gallery</h2>
                    <p className="text-xs text-blue-100/60">Manage office meetup photos and city events</p>
                  </div>
                  <button 
                    type="button" 
                    onClick={addMediaItem}
                    className="px-3 py-1.5 bg-cyan-400 text-black font-extrabold rounded-lg text-xs flex items-center gap-1 shadow"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Photo
                  </button>
                </div>

                <div className="space-y-4">
                  {(formData.media?.items || []).map((item, itIdx) => (
                    <div key={itIdx} className="bg-black/30 border border-white/15 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-300">Item #{itIdx + 1}</span>
                        <button 
                          type="button" 
                          onClick={() => removeMediaItem(itIdx)}
                          className="text-red-400 hover:text-red-300 text-xs p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <input 
                        type="text" 
                        value={item.title}
                        onChange={(e) => updateMediaItem(itIdx, 'title', e.target.value)}
                        placeholder="Title (e.g. Edmonton Headquarters)"
                        className="w-full px-3 py-1.5 bg-black/50 border border-white/15 rounded-lg text-xs font-bold"
                      />
                      <input 
                        type="text" 
                        value={item.description}
                        onChange={(e) => updateMediaItem(itIdx, 'description', e.target.value)}
                        placeholder="Short description"
                        className="w-full px-3 py-1.5 bg-black/50 border border-white/15 rounded-lg text-xs text-white/80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----------------- TAB 7: TESTIMONIALS & REVIEWS ----------------- */}
            {activeTab === 'testimonials' && (
              <div className="space-y-5">
                <div className="border-b border-white/10 pb-3">
                  <h2 className="text-base font-extrabold text-white">Testimonials &amp; Reviews</h2>
                  <p className="text-xs text-blue-100/60">Configure Google review links and headers</p>
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
                  <label className="block text-xs font-bold text-white/70 mb-1">Active Slider Testimonial Screenshots (Count: {formData.testimonials.sliderImages.length})</label>
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

            {/* ----------------- TAB 8: FAQS ----------------- */}
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

            {/* ----------------- TAB 9: CONTACT & GENERAL ----------------- */}
            {activeTab === 'contact' && (
              <div className="space-y-5">
                <div className="border-b border-white/10 pb-3">
                  <h2 className="text-base font-extrabold text-white">Contact &amp; Social Channels</h2>
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
                  <div>
                    <label className="block text-[11px] text-white/70 mb-0.5">Instagram URL</label>
                    <input 
                      type="text" 
                      value={formData.general.instagramUrl}
                      onChange={(e) => updateGeneral('instagramUrl', e.target.value)}
                      className="w-full px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ----------------- TAB 10: LEGAL POLICIES ----------------- */}
            {activeTab === 'legal' && (
              <div className="space-y-5">
                <div className="border-b border-white/10 pb-3">
                  <h2 className="text-base font-extrabold text-white">Refund Policy &amp; Disclaimer</h2>
                  <p className="text-xs text-blue-100/60">Customize legal terms and disclaimer clauses</p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold text-cyan-300 uppercase block">Refund &amp; Cancellation Policy</span>
                  <div>
                    <label className="block text-[11px] text-white/70 mb-1">Clause 1 (Non-Refundable Delivery)</label>
                    <textarea 
                      rows={4}
                      value={formData.refundPolicy?.p1 || ''}
                      onChange={(e) => updateRefundPolicy('p1', e.target.value)}
                      className="w-full px-3 py-2 bg-black/50 border border-white/15 rounded-lg text-xs text-white/80"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/70 mb-1">Clause 2 (No Reimbursements)</label>
                    <textarea 
                      rows={3}
                      value={formData.refundPolicy?.p2 || ''}
                      onChange={(e) => updateRefundPolicy('p2', e.target.value)}
                      className="w-full px-3 py-2 bg-black/50 border border-white/15 rounded-lg text-xs text-white/80"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/10">
                  <span className="text-xs font-bold text-cyan-300 uppercase block">Platform Disclaimer</span>
                  <div>
                    <label className="block text-[11px] text-white/70 mb-1">Disclaimer Clause 1 (Educational Only)</label>
                    <textarea 
                      rows={3}
                      value={formData.disclaimer?.p1 || ''}
                      onChange={(e) => updateDisclaimer('p1', e.target.value)}
                      className="w-full px-3 py-2 bg-black/50 border border-white/15 rounded-lg text-xs text-white/80"
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
                onChange={(e) => handlePreviewPageChange(e.target.value)}
                className="bg-black/50 border border-white/15 text-xs text-cyan-300 font-bold px-3 py-1.5 rounded-lg outline-none cursor-pointer"
              >
                <option value="/">Home Page (/)</option>
                <option value="/about-me">About Me (/about-me)</option>
                <option value="/why-boomingfx">Why BoomingFX (/why-boomingfx)</option>
                <option value="/packages">Packages (/packages)</option>
                <option value="/our-team">Our Team (/our-team)</option>
                <option value="/media">Media &amp; Gallery (/media)</option>
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
