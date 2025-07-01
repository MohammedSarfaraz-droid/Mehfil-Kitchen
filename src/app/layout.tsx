import './globals.css'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Add other weights if needed
  variable: '--font-josefin'
})

export const metadata = {
  title: 'Mehfil Kitchen',
  description: 'At Mehfil Kitchen we offer meals of excellent quality and invite you to try our delicious food.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={josefin.variable}>
      <body>{children}</body>
    </html>
  )
}
