import Image from 'next/image'
import { Inter } from 'next/font/google'
import JokeBox from '../components/JokeBox'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-24">
        <JokeBox />
      </main>
      <Footer />
    </div>
  )
}