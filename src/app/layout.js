import './globals.css'
import { Inter } from 'next/font/google'

import ContextProviders from './context/ContextProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyFinance',
  description: 'My project by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>

        <ContextProviders>
          {children}
        </ContextProviders>


      </body>
    </html>
  )
}
