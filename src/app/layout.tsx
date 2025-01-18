import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const pretendard = localFont({
  // variable: '--font-pretendard',
  src: './fonts/PretendardVariable.woff2',
  // display: 'swap',
  // weight: '45 920',
})

// export const metadata: Metadata = {
//   title: 'Mail',
//   description: 'Extremely Personalized',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  )
}
