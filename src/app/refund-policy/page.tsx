import React from 'react';
import { 
  ShieldAlert, 
  RefreshCcw, 
  Lock, 
  HelpCircle, 
  CheckCircle2, 
  Mail, 
  FileText, 
  Zap,
  ArrowRight,
  Calendar,
  AlertCircle
} from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div className="bg-[#001f3f] min-h-screen selection:bg-[#004185] selection:text-white font-sans text-white overflow-hidden">
      
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f] via-[#004185]/40 to-[#001f3f]"></div>
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/25 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          {/* Grid Pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">Official Policy • Transparent Terms</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
            Refund &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cancellation Policy</span>
          </h1>
          
          <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            At BoomingFX, we prioritize transparency, clarity, and professionalism in all our interactions with members.
          </p>

          {/* Quick Summary Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-3">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Non-Refundable</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                Instant delivery of proprietary digital tools and signals makes all payments final.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all">
              <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-3">
                <RefreshCcw className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Cancel Anytime</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                Cancel before your next billing cycle to prevent future renewals effortlessly.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Locked-In Rate</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                Your initial rate remains locked for the lifetime of your active subscription.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Open Support</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                Dedicated team ready to assist with any billing or account questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        POLICY DETAILED CLAUSES
        ========================================================================
      */}
      <section className="py-12 relative z-20 pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Clause 1: Strict Non-Refundable Terms */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-400/30 transition-all shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-1">Section 01</span>
                <h2 className="text-2xl font-bold text-white">Digital Delivery &amp; Non-Refundable Policy</h2>
              </div>
            </div>

            <div className="space-y-4 text-blue-100/90 leading-relaxed text-base">
              <p>
                At BoomingFX, we prioritize transparency, clarity, and professionalism in all our interactions with members. When you subscribe to BoomingFX, you gain instant access to a range of premium services including daily trading signals, market analysis, educational resources, mentorship, and membership within our exclusive trading community. Because of the immediate delivery of digital content and access to proprietary trading tools and strategies, <strong className="text-white font-semibold">all subscription payments made to BoomingFX are final and strictly non-refundable</strong>.
              </p>
              <p>
                We do not offer refunds or partial reimbursements under any circumstances once a payment has been processed. This includes but is not limited to situations where the subscriber has not utilized the services, was unsatisfied with the results, or forgot to cancel prior to the next billing cycle. By subscribing, you acknowledge and agree that BoomingFX is not obligated to provide refunds for any reason.
              </p>
            </div>

            <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-xs text-red-200/90 leading-relaxed">
                <strong className="text-red-200">Please Note:</strong> All payments are processed automatically. Please ensure you intend to subscribe before completing checkout.
              </p>
            </div>
          </div>

          {/* Clause 2: Cancellation & Billing Cycle */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-blue-400/30 transition-all shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <RefreshCcw className="w-6 h-6" />
              </div>
              <div>
                <span className="text-blue-400 font-bold text-xs uppercase tracking-widest block mb-1">Section 02</span>
                <h2 className="text-2xl font-bold text-white">Cancellation Terms &amp; Access Period</h2>
              </div>
            </div>

            <div className="space-y-4 text-blue-100/90 leading-relaxed text-base">
              <p>
                However, we understand that individual needs may change, and for that reason, members are welcome to cancel their subscription at any time. Upon cancellation, your access to BoomingFX services will continue through the remainder of your current billing cycle, after which no further charges will occur.
              </p>
              <p>
                Please note that cancelling your subscription will not trigger a refund of any kind for the unused portion of your membership. Cancellation simply ensures that you will not be billed again moving forward. All subscriptions are set to renew automatically unless cancelled by the user prior to the next billing date, and it remains the responsibility of the member to manage their subscription status accordingly.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <span className="text-cyan-400 text-xs font-bold block mb-1">Step 1</span>
                <span className="text-white text-xs">Cancel anytime in account</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <span className="text-cyan-400 text-xs font-bold block mb-1">Step 2</span>
                <span className="text-white text-xs">Keep access till cycle ends</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <span className="text-cyan-400 text-xs font-bold block mb-1">Step 3</span>
                <span className="text-white text-xs">Zero future charges</span>
              </div>
            </div>
          </div>

          {/* Clause 3: Lifetime Price Lock */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-400/30 transition-all shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-1">Section 03</span>
                <h2 className="text-2xl font-bold text-white">Price Adjustments &amp; Grandfathered Rates</h2>
              </div>
            </div>

            <div className="space-y-4 text-blue-100/90 leading-relaxed text-base">
              <p>
                BoomingFX reserves the right to adjust pricing or update the features and offerings associated with any membership tier at any time. However, any changes to pricing will not affect existing subscribers.
              </p>
              <p>
                The price you pay at the time of your initial subscription will remain your <strong className="text-white font-semibold">locked-in monthly rate for the lifetime of your active membership</strong>, as long as you remain a paying subscriber without interruption. Should you choose to cancel your subscription and later decide to return, you will be required to pay the current, publicly available price at the time of rejoining, even if it is higher than your original rate.
              </p>
            </div>
          </div>

          {/* Clause 4: Member Agreement & Support */}
          <div className="group relative bg-gradient-to-r from-[#004185] to-blue-600 rounded-3xl p-8 md:p-10 overflow-hidden border border-blue-400/40 shadow-[0_0_50px_rgba(0,65,133,0.4)]">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Full Policy Agreement
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Have Questions About Your Billing?</h3>
                <p className="text-blue-100/90 text-sm leading-relaxed mb-4">
                  If you have any questions regarding your subscription, billing, or this policy, we encourage you to reach out to our support team by email. We are committed to maintaining open communication and are happy to assist with any concerns you may have.
                </p>
                <p className="text-xs text-blue-200/80 italic">
                  By subscribing to BoomingFX, you confirm that you have read, understood, and agreed to this Refund &amp; Cancellation Policy in full.
                </p>
              </div>

              <div className="shrink-0 text-center">
                <a 
                  href="mailto:support@boomingfx.org" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#004185] font-black text-sm rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-xl hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  Contact Support
                </a>
                <span className="block text-blue-200 text-xs mt-2">support@boomingfx.org</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
