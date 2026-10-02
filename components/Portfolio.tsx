'use client'

export default function Portfolio({ lang }: { lang: 'fa' | 'en' }) {
  const t = {
    fa: { title: 'نمونه‌کارها', subtitle: 'پروژه‌های اخیر ما', items: [
      { title: 'فروشگاه آنلاین', tech: 'Django + React', color: '#6C63FF' },
      { title: 'اپلیکیشن تحویل غذا', tech: 'React Native', color: '#00D9A3' },
      { title: 'داشبورد تحلیل داده', tech: 'FastAPI + Vue', color: '#FF6B6B' },
      { title: 'پلتفرم SaaS', tech: 'Next.js + PostgreSQL', color: '#FFD93D' },
      { title: 'چت‌بات هوشمند', tech: 'Python + OpenAI', color: '#6C63FF' },
      { title: 'سایت شرکتی', tech: 'Next.js + Tailwind', color: '#00D9A3' },
    ]},
    en: { title: 'Portfolio', subtitle: 'Our recent projects', items: [
      { title: 'E-commerce Platform', tech: 'Django + React', color: '#6C63FF' },
      { title: 'Food Delivery App', tech: 'React Native', color: '#00D9A3' },
      { title: 'Data Analytics Dashboard', tech: 'FastAPI + Vue', color: '#FF6B6B' },
      { title: 'SaaS Platform', tech: 'Next.js + PostgreSQL', color: '#FFD93D' },
      { title: 'AI Chatbot', tech: 'Python + OpenAI', color: '#6C63FF' },
      { title: 'Corporate Website', tech: 'Next.js + Tailwind', color: '#00D9A3' },
    ]},
  }[lang]
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t.title}</h2>
          <p className="text-white/60">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <div key={i} className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer transition hover:-translate-y-2" style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`, border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition" style={{ background: `radial-gradient(circle at 50% 50%, ${item.color}, transparent 70%)` }} />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="text-xs mb-2" style={{ color: item.color }}>{item.tech}</div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
