'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import PaymentMethods from '@/components/PaymentMethods'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  const [lang, setLang] = useState<'fa' | 'en'>('fa')
  return (
    <main dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <Stats lang={lang} />
      <Portfolio lang={lang} />
      <PaymentMethods lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <ChatWidget lang={lang} />
    </main>
  )
}
