import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export const metadata = {
  title: 'Rotaract Salé Bab Lamrissa',
  description: 'Site officiel du Rotaract Club Casablanca',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        {/* Favicon classique */}
        <link rel="icon" href="/images/favicon.ico" />

        {/* Favicon tailles spécifiques */}
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />

        {/* Favicon pour appareils Apple */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />

        <title>Rotaract Salé Bab Lamrissa</title>
      </Head>

      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
