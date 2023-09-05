'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { CSSProperties } from 'react'
import { Button, Slide, ThemeProvider, createTheme, useMediaQuery } from '@mui/material'
import Heart from '@/components/Heart'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

const sideButtons = [
  { label: 'Games', href: '/games' },
  { label: 'Music', href: '/music' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const isMobile = useMediaQuery(`(max-width : 768px)`)
  const isMobile = false

  
  const sidebarWidth = 150;

  const sidebarStyle: CSSProperties = {
    width: sidebarWidth,
    height: '100%',
    background: 'black',
    display: 'flex',
    flexFlow: 'column',
    zIndex: 2,
  }

  const contentStyle: CSSProperties = {
    width: `calc(100% - ${sidebarWidth}px)`,
    height: '100%',
    background: 'linear-gradient(135deg, hsla(258, 29%, 15%, 1) 0%, hsla(227, 26%, 7%, 1) 50%, hsla(196, 29%, 15%, 1) 100%)',
    overflowX: "hidden",
    overflowY: 'auto',
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <html lang="en" style={{ height: "100%" }}>
      <title>PUREHEART</title>
      <ThemeProvider theme={darkTheme}>
        <body className={inter.className} style={{ height: "100%", width: '100%', overflow: 'hidden', display: 'inline-flex' }}>
          <div style={sidebarStyle}>
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
          <div style={contentStyle}>
            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}
