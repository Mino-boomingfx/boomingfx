import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="bg-[#001f3f] min-h-screen selection:bg-[#004185] selection:text-white font-sans text-white">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f] via-[#004185]/20 to-[#001f3f]"></div>
          {/* Glowing Orbs */}
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow"></div>
          {/* Grid Pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1]">
            Refund & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cancellation Policy</span>
          </h1>
          <p className="text-blue-100/80 text-lg">
            Please read this policy carefully before subscribing to our services.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        CONTENT SECTION
        ========================================================================
      */}
      <section className="py-12 relative z-20 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl shadow-black/50">
            
            <div className="prose prose-invert prose-lg max-w-none text-blue-100/90 leading-relaxed">
              <p>
                At BoomingFX, we prioritize transparency, clarity, and professionalism in all our interactions with members. When you subscribe to BoomingFX, you gain instant access to a range of premium services including daily trading signals, market analysis, educational resources, mentorship, and membership within our exclusive trading community. Because of the immediate delivery of digital content and access to proprietary trading tools and strategies, <strong>all subscription payments made to BoomingFX are final and strictly non-refundable</strong>.
              </p>

              <p>
                We do not offer refunds or partial reimbursements under any circumstances once a payment has been processed. This includes but is not limited to situations where the subscriber has not utilized the services, was unsatisfied with the results, or forgot to cancel prior to the next billing cycle. By subscribing, you acknowledge and agree that BoomingFX is not obligated to provide refunds for any reason.
              </p>

              <p>
                However, we understand that individual needs may change, and for that reason, members are welcome to cancel their subscription at any time. Upon cancellation, your access to BoomingFX services will continue through the remainder of your current billing cycle, after which no further charges will occur. Please note that cancelling your subscription will not trigger a refund of any kind for the unused portion of your membership. Cancellation simply ensures that you will not be billed again moving forward. All subscriptions are set to renew automatically unless cancelled by the user prior to the next billing date, and it remains the responsibility of the member to manage their subscription status accordingly.
              </p>

              <p>
                BoomingFX reserves the right to adjust pricing or update the features and offerings associated with any membership tier at any time. However, any changes to pricing will not affect existing subscribers. The price you pay at the time of your initial subscription will remain your locked-in monthly rate for the lifetime of your active membership, as long as you remain a paying subscriber without interruption. Should you choose to cancel your subscription and later decide to return, you will be required to pay the current, publicly available price at the time of rejoining, even if it is higher than your original rate.
              </p>

              <p>
                If you have any questions regarding your subscription, billing, or this policy, we encourage you to reach out to our support team by email. We are committed to maintaining open communication and are happy to assist with any concerns you may have. By subscribing to BoomingFX, you confirm that you have read, understood, and agreed to this Refund & Cancellation Policy in full.
              </p>

              <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center text-center">
                <p className="text-white font-bold mb-2">Need to contact support?</p>
                <a href="mailto:support@boomingfx.org" className="text-cyan-400 hover:text-cyan-300 transition-colors">support@boomingfx.org</a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
