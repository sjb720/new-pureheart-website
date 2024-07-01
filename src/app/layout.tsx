'use client'

import './globals.css'
import './layout.css'
import { Inter } from 'next/font/google'
import { Button, Slide, ThemeProvider, createTheme } from '@mui/material'
import Heart from '@/components/Heart'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

const sideButtons = [
  { label: 'Games', href: '/' },
  { label: 'Music', href: '/music' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <html lang="en" style={{ height: "100%" }}>
      <title>PUREHEART</title>
      <link rel="icon" type="image/x-icon" href="/heart.png"/>
      <ThemeProvider theme={darkTheme}>
        <body className={inter.className}>
          <div className='sidebar'>
            <Heart />
            {sideButtons.map((button, i) =>
              <Slide key={button.label} direction='up' in={true} timeout={(200 * i) + 500}>
                <Link href={button.href}>
                <Button fullWidth size='large'>{button.label}</Button>
                </Link>
              </Slide>
            )
            }
          </div>
          <div className='content'>
            {children}            
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}
