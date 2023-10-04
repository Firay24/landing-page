import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import HeroSection from './Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <HeroSection />
        </div>
      </main>
    </div>
  )
}
