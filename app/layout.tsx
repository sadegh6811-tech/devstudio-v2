import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevStudio | آژانس توسعه نرم‌افزار بین‌المللی',
  description: 'برنامه‌نویسی پایتون، اپلیکیشن موبایل، طراحی وب و هوش مصنوعی',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
