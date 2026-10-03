'use client'

export default function PaymentMethods({ lang }: { lang: 'fa' | 'en' }) {
  const t = {
    fa: { title: 'روش‌های پرداخت', subtitle: 'پرداخت امن و سریع از هر جای دنیا', usdt: 'تتر (USDT)', usdtDesc: 'شبکه TRC20 • سریع، ارزان و بین‌المللی', wallet: 'آدرس کیف پول:', zarinpal: 'زرین‌پال', zarinpalDesc: 'برای مشتریان داخل ایران • پرداخت ریالی', soon: 'به‌زودی' },
    en: { title: 'Payment Methods', subtitle: 'Secure and fast payment from anywhere', usdt: 'Tether USDT', usdtDesc: 'TRC20 Network • Fast, cheap and international', wallet: 'Wallet Address:', zarinpal: 'Zarinpal', zarinpalDesc: 'For Iranian customers • Rial payments', soon: 'Coming soon' },
  }[lang]
  const WALLET ='TXAshSffuAvj5ZmErtTSqymofoZMzP1sXn '    <section id="payment" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t.title}</h2>
          <p className="text-white/60">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl glass">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00D9A3]/20 border border-[#00D9A3]/40 flex items-center justify-center text-2xl">💵</div>
              <div>
                <h3 className="text-xl font-bold text-white">{t.usdt}</h3>
                <p className="text-white/50 text-sm">{t.usdtDesc}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 mb-4">
              <div className="text-center text-xs text-black font-bold mb-2">USDT TRC20</div>
              <div className="aspect-square max-w-[200px] mx-auto bg-black flex items-center justify-center text-white/40 text-xs">QR Code</div>
            </div>
            <div className="text-xs text-white/50 mb-2">{t.wallet}</div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-black/40 border border-white/10">
              <code className="text-xs text-white/80 flex-1 break-all">{WALLET}</code>
            </div>
          </div>
          <div className="p-8 rounded-3xl glass">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#FFD93D]/20 border border-[#FFD93D]/40 flex items-center justify-center text-2xl">💳</div>
              <div>
                <h3 className="text-xl font-bold text-white">{t.zarinpal}</h3>
                <p className="text-white/50 text-sm">{t.zarinpalDesc}</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-white/60 text-sm">{t.soon}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
