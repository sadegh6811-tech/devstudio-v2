'use client'
import { Code2, Smartphone, Globe, Brain, ArrowLeft, ArrowRight } from 'lucide-react'

export default function Services({ lang }: { lang: 'fa' | 'en' }) {
  const t = {
    fa: { title: 'خدمات ما', subtitle: 'راهکارهای کامل برای رشد دیجیتال کسب‌وکار شما', learn: 'بیشتر بدانید', items: [
      { icon: Code2, title: 'برنامه‌نویسی پایتون', desc: 'Django، FastAPI، اسکریپت‌های اتوماسیون و بک‌اندهای مقیاس‌پذیر', color: '#6C63FF' },
      { icon: Smartphone, title: 'اپلیکیشن موبایل', desc: 'ساخت اپلیکیشن‌های iOS و Android با React Native و Flutter', color: '#00D9A3' },
      { icon: Globe, title: 'طراحی وب‌سایت', desc: 'وب‌سایت‌های مدرن و واکنش‌گرا با Next.js، React و Tailwind', color: '#FF6B6B' },
      { icon: Brain, title: 'هوش مصنوعی', desc: 'پیاده‌سازی چت‌بات، تحلیل داده و مدل‌های یادگیری ماشین', color: '#FFD93D' },
    ]},
    en: { title: 'Our Services', subtitle: 'Complete solutions for your digital growth', learn: 'Learn more', items: [
      { icon: Code2, title: 'Python Development', desc: 'Django, FastAPI, automation scripts and scalable backends', color: '#6C63FF' },
      { icon: Smartphone, title: 'Mobile Apps', desc: 'iOS and Android apps with React Native and Flutter', color: '#00D9A3' },
      { icon: Globe, title: 'Web Development', desc: 'Modern, responsive websites with Next.js, React and Tailwind', color: '#FF6B6B' },
      { icon: Brain, title: 'AI Solutions', desc: 'Chatbots, data analysis and machine learning models', color: '#FFD93D' },
    ]},
  }[lang]
  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t.title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="group p-8 rounded-3xl glass hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                  <Icon size={26} style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition" style={{ color: item.color }}>
                  {t.learn}
                  <ArrowIcon size={14} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
