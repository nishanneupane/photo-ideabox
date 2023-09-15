import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authorize to IDEABOX',
  description: ' Authorize to IDEABOX',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div className="flex items-center justify-center mt-20">
        {children}
        </div>
      </body>
    </html>
  )
}
