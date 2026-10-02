'use client'

export default function Footer({ lang }: { lang: 'fa' | 'en' }) {
  return (
    <footer className="border-t border-white/10 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-white font-black text-xl mb-4">
          <span className="gradient-text font-mono">&lt;/&gt;</span>
          <span>Dev<span className="gradient-text">Studio</span></span>
        </div>
        <p className="text-white/50 text-sm mb-6">
          {lang === 'fa' ? 'آژانس توسعه نرم‌افزار بین‌المللی • ۲۵۰+ پروژه موفق' : 'International Software Agency • 250+ successful projects'}
        </p>
        <div className="text-white/30 text-xs">
          © 2024 DevStudio — {lang === 'fa' ? 'تمامی حقوق محفوظ است' : 'All rights reserved'}
        </div>
      </div>
    </footer>
  )
}
