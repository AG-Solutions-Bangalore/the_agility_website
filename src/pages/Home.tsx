import { useEffect } from 'react'
import Achievements from '../components/home/achievements'
import Brand from '../components/home/brand'
import CreativeMind from '../components/home/creative-mind'
import CustomerStories from '../components/home/customer-stories'
import Faq from '../components/home/faq'
import HeroSection from '../components/home/hero'
import Innovation from '../components/home/innovation'
import OnlinePresence from '../components/home/online-presence'
import Solutions from '../components/home/solution'
import Subscription from '../components/home/subscription'
import WebResult from '../components/home/web-result'
import LoanCta from '@/components/home/loan-cta'

const Home = () => {
  useEffect(() => {
    document.title = 'Home | The Agility'
  }, [])

  return (
    <>
      <HeroSection />
       {/* <Brand /> */}
     <WebResult />
     <Innovation />
      <OnlinePresence />
       {/* <CreativeMind /> */}
       <LoanCta/>
     <CustomerStories />
     {/* <Subscription /> */}
     {/* <Faq /> */}
        {/* <Achievements /> */}
       <Solutions />
    </>
  )
}

export default Home