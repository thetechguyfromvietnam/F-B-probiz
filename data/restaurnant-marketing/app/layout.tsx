import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Probiz - Thiết kế Website Chuyên Nghiệp cho Quán Ăn',
  description: 'Thiết kế website chuyên nghiệp cho quán ăn với giá ưu đãi. Từ 2.5 triệu, website đầy đủ tính năng: đặt bàn online, menu động, thanh toán online.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#ea580c',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.variable}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

