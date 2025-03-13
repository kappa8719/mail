import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: './fonts/PretendardVariable.ttf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Mail',
  description: 'Extremely Personalized',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>{children}</body>
    </html>
  )
}
