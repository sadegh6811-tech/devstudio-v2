'use client'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'

export default function Hero({ lang }: { lang: 'fa' | 'en' }) {
  const t = {
    fa: { badge: 'آژانس توسعه نرم‌افزار بین‌المللی', title1: 'ایده‌های شما را', title2: 'به نرم‌افزار جهانی', title3: 'تبدیل می‌کنیم', desc: 'تیم DevStudio با پایتون، اپلیکیشن موبایل، وب مدرن و هوش مصنوعی، محصولاتی می‌سازد که در بیش از ۴۰ کشور استفاده می‌شود.', cta1: 'شروع پروژه رایگان', cta2: 'دیدن نمونه‌کارها' },
    en: { badge: 'International Software Development Agency', title1: 'We build the', title2: 'future with', title3: 'code', desc: 'DevStudio turns your ideas into world-class software products with a team of experts in Python, mobile, web and AI.', cta1: 'Start Your Project', cta2: 'View Portfolio' },
  }[lang]
  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-green-500/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[700px] md:h-[700px] -z-10 pointer-events-none">
        <div className="relative w-full h-full animate-spin-slow">
          <div className="globe-ring w-full h-full border-purple-500/30" />
          <div className="globe-ring w-4/5 h-4/5 border-purple-400/40" />
          <div className="globe-ring w-3/5 h-3/5 border-green-400/40" />
          <div className="globe-ring w-2/5 h-2/5 border-green-500/50" />
          <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
          <div className="absolute bottom-1/4 right-0 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/80 mb-6 animate-float">
          <Sparkles size={16} className="text-green-400" />
          {t.badge}
        </div>
        <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
          <span className="text-white">{t.title1} </span>
          <span className="gradient-text block md:inline">{t.title2}</span>
          <br />
          <span className="text-white">{t.title3}</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">{t.desc}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-white font-bold transition hover:scale-105 shadow-2xl" style={{ background: 'linear-gradient(135deg, #6C63FF, #00D9A3)', boxShadow: '0 10px 40px rgba(108, 99, 255, 0.4)' }}>
            {t.cta1}
            <ArrowIcon size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="px-7 py-4 rounded-2xl text-white font-bold border-2 border-white/20 hover:bg-white/5 transition">{t.cta2}</a>
        </div>
      </div>
    </section>
  )
}
