import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import HeroSection from './components/Hero'
import LogoSection from './components/LogoSection'
import AboutSection from './components/AboutSection'
import ClientSection from './components/ClientSection'
import Card from './components/CardSection'
import Comment from './components/Comments'
import Footer from '@/components/Footer'
import { ApiProvider } from '@/contexts/apiContext';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7ca37c9f490685ad74404095d9bc12e4');
  const apiData = await response.json();

  return {
    props: {
      apiData,
    },
  };
}

export default function Home({ apiData }) {
  return (
    <ApiProvider initialApiData={apiData}>
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
    </ApiProvider>
  )
}
