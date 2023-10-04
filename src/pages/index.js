import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import HeroSection from './components/Hero'
import LogoSection from './components/LogoSection'
import AboutSection from './components/AboutSection'
import ClientSection from './components/ClientSection'
import Card from './components/CardSection'
import Comment from './components/Comments'
import Footer from '@/components/Footer'

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
        <div>
          <LogoSection />
        </div>
        <div>
          <AboutSection />
        </div>
        <div>
          <ClientSection />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Comment />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
