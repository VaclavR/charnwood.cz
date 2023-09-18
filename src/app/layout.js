import './globals.css'
import localFont from 'next/font/local'

export const metadata = {
  title: 'Charnwood',
  description: 'Generated by create next app',
}

const aspecta = localFont({
  src: [
    {
      path: '../../public/font/Aspekta-400.woff2',
      weight: '400',
      style: 'normal',
      display: 'swap'
    },
    {
      path: '../../public/font/Aspekta-500.woff2',
      weight: '500',
      style: 'normal',
      display: 'swap'
    },
    {
      path: '../../public/font/Aspekta-650.woff2',
      weight: '650',
      style: 'normal',
      display: 'swap'
    },
    {
      path: '../../public/font/Aspekta-700.woff2',
      weight: '700',
      style: 'normal',
      display: 'swap'
    }
  ]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-very-dark-blue scroll-smooth'>
      <body className={aspecta.className}>
        {children}
      </body>
    </html>
  )
}