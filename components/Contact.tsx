'use client'
import { useState } from 'react'
import { Send, Mail, MessageCircle } from 'lucide-react'

export default function Contact({ lang }: { lang: 'fa' | 'en' }) {
  const [form, setForm] = useState({ name: '', email: '', project: '' })
  const [sent, setSent] = useState(false)
  const t = {
    fa: { title: 'تماس با ما', subtitle: 'پروژه خود را برای ما توضیح دهید', name: 'نام شما', email: 'ایمیل', project: 'توضیح پروژه', send: 'ارسال پیام', sent: '✅ پیام شما ارسال شد!', emailUs: 'ایمیل بزنید', chatNow: 'چت کنید', instant: 'پاسخ فوری' },
    en: { title: 'Get in Touch', subtitle: 'Tell us about your project', name: 'Your Name', email: 'Email', project: 'Project Description', send: 'Send Message', sent: '✅ Message sent!', emailUs: 'Email Us', chatNow: 'Chat Now', instant: 'Instant reply' },
  }[lang]
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t.title}</h2>
          <p className="text-white/60">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass space-y-4">
            <input type="text" placeholder={t.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-purple-500 transition" />
            <input type="email" placeholder={t.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-purple-500 transition" />
            <textarea placeholder={t.project} value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} required rows={5} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-purple-500 transition resize-none" />
            <button type="submit" className="w-full py-4 rounded-xl text-white font-bold transition hover:scale-[1.02] flex items-center justify-center gap-2" style={{ background: 'linear-gradient(135deg, #6C63FF, #00D9A3)' }}>
              <Send size={18} />
              {t.send}
            </button>
            {sent && <div className="text-center text-green-400 text-sm pt-2">{t.sent}</div>}
          </form>
          <div className="space-y-4">
            <a href="mailto:support@devstudio.com" className="block p-6 rounded-3xl glass hover:bg-white/[0.08] transition">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center"><Mail size={22} className="text-purple-400" /></div>
                <div>
                  <div className="text-white/50 text-xs">{t.emailUs}</div>
                  <div className="text-white font-semibold">support@devstudio.com</div>
                </div>
              </div>
            </a>
            <div className="p-6 rounded-3xl glass">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/40 flex items-center justify-center"><MessageCircle size={22} className="text-green-400" /></div>
                <div>
                  <div className="text-white/50 text-xs">{t.chatNow}</div>
                  <div className="text-white font-semibold">{t.instant}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
