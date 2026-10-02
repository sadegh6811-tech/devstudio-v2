'use client'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

const API_URL = 'https://devstudio-bot-keny.onrender.com'
interface Message { text: string; sender: 'user' | 'bot' }

export default function ChatWidget({ lang }: { lang: 'fa' | 'en' }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)

  const t = {
    fa: { title: 'پشتیبانی DevStudio', status: 'آنلاین', placeholder: 'پیام خود را بنویسید...', welcome: 'سلام! 👋 به DevStudio خوش آمدید. چطور می‌توانم کمکتان کنم؟', error: 'خطا در ارتباط. دوباره تلاش کنید.' },
    en: { title: 'DevStudio Support', status: 'Online', placeholder: 'Type your message...', welcome: 'Hello! 👋 Welcome to DevStudio. How can I help you?', error: 'Connection error. Try again.' },
  }[lang]

  useEffect(() => {
    if (open && messages.length === 0) setMessages([{ text: t.welcome, sender: 'bot' }])
  }, [open])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const userText = input.trim()
    setMessages((prev) => [...prev, { text: userText, sender: 'user' }])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/chat`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: userText, user_id: 'web' }) })
      const data = await res.json()
      setMessages((prev) => [...prev, { text: data.reply || '...', sender: 'bot' }])
    } catch (err) {
      setMessages((prev) => [...prev, { text: t.error, sender: 'bot' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition hover:scale-110" style={{ background: 'linear-gradient(135deg, #6C63FF, #00D9A3)', boxShadow: '0 10px 40px rgba(108, 99, 255, 0.5)' }}>
        {open ? <X size={26} /> : <MessageCircle size={26} />}
        {!open && <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-green-400 animate-pulse" />}
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-md h-[500px] rounded-3xl overflow-hidden flex flex-col border border-white/10" style={{ background: '#0A0E27', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
          <div className="p-4 border-b border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold" style={{ background: 'linear-gradient(135deg, #6C63FF, #00D9A3)' }}>D</div>
            <div className="flex-1">
              <div className="text-white font-bold text-sm">{t.title}</div>
              <div className="flex items-center gap-1.5 text-xs text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t.status}
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white transition"><X size={20} /></button>
          </div>
          <div ref={bodyRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.sender === 'user' ? 'ml-auto text-white' : 'mr-auto text-white bg-white/10 border border-white/10'}`} style={msg.sender === 'user' ? { background: 'linear-gradient(135deg, #6C63FF, #00D9A3)' } : undefined}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="mr-auto text-white/50 text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            )}
          </div>
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} placeholder={t.placeholder} className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/40 outline-none focus:border-purple-500 transition" />
            <button onClick={sendMessage} disabled={loading || !input.trim()} className="w-11 h-11 rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition" style={{ background: 'linear-gradient(135deg, #6C63FF, #00D9A3)' }}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
