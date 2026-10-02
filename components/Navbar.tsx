'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Languages } from 'lucide-react'

export default function Navbar({ lang, setLang }: { lang: 'fa' | 'en'; setLang: (l: 'fa' | 'en') => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const t = {
    fa: { services: 'خدمات', portfolio: 'نمونه‌کارها', payment: 'پرداخت', contact: 'تماس' },
    en: { services: 'Services', portfolio: 'Portfolio', payment: 'Payment', contact: 'Contact' },
  }[lang]
  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-[#0A0E27]/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-black text-xl">
          <span className="text-2xl gradient-text font-mono">&lt;/&gt;</span>
          <span>Dev<span className="gradient-text">Studio</span></span>
        </a>
        <ul className="hidden md:flex gap-8 text-white/80 text-sm">
          <li><a href="#services" className="hover:text-white transition">{t.services}</a></li>
          <li><a href="#portfolio" className="hover:text-white transition">{t.portfolio}</a></li>
          <li><a href="#payment" className="hover:text-white transition">{t.payment}</a></li>
          <li><a href="#contact" className="hover:text-white transition">{t.contact}</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')} className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-white text-sm hover:bg-white/10 transition">
            <Languages size={16} />
            <span>{lang === 'fa' ? 'EN' : 'FA'}</span>
          </button>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
