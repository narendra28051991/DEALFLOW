import { Inter } from 'next/font/google'

import Title from '@/components/Head'
import Navbar from '@/components/Navbar'
import Introduction from '@/components/Introduction'
import Pricing from '@/components/Pricing'
import Topics from '@/components/Topics'
import Review from '@/components/Review'
import Contact from '@/components/Contact'
import Updates from '@/components/Updates'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Title />
      <Navbar />
      <Introduction />
      <Pricing />
      <Topics />
      <Review />
      <Contact />
      <Updates />
    </>
  )
}
