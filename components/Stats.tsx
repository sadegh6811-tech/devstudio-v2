'use client'

export default function Stats({ lang }: { lang: 'fa' | 'en' }) {
  const t = {
    fa: { items: [
      { value: '۲۵۰+', label: 'پروژه تحویل‌شده' },
      { value: '۴۰+', label: 'کشور فعال' },
      { value: '۹۹٪', label: 'رضایت مشتریان' },
      { value: '۲۴/۷', label: 'پشتیبانی زنده' },
    ]},
    en: { items: [
      { value: '250+', label: 'Projects Delivered' },
      { value: '40+', label: 'Countries' },
      { value: '99%', label: 'Client Satisfaction' },
      { value: '24/7', label: 'Live Support' },
    ]},
  }[lang]
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.items.map((item, i) => (
            <div key={i} className="p-6 md:p-8 rounded-3xl glass text-center hover:bg-white/[0.08] transition">
              <div className="text-3xl md:text-5xl font-black gradient-text mb-2">{item.value}</div>
              <div className="text-white/60 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
