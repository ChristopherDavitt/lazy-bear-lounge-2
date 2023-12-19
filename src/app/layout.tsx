import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
// app/fonts.ts
import { Rubik } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Web3ModalProvider from "../context/Web3Modal";
import StoreProvider from './StoreProvider';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const fonts = {
  rubik,
}
export const metadata: Metadata = {
  title: 'Lazy Bear River',
  description: 'Bunch of bears on a river on a quest for $FISH.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <StoreProvider>
          <Providers>
            <Web3ModalProvider>
              <Navbar />
              {children}
            </Web3ModalProvider>
          </Providers>
        </StoreProvider>
        </body>
    </html>
  )
}
