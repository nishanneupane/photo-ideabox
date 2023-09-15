import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideNav from '@/components/side-nav'
import { ThemeProvider } from '@/components/providers/theme-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IDEABOX CLOUD',
  description: 'IDEABOX CLOUD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey='nishan-cloud'>
            <main>

              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
