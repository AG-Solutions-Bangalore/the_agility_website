
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SingleCreativeMind from './SingleCreativeMind'
import { creativeMindList } from '../../../data/pageData'

function CreativeMind() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = (index: any) => ({
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  })
  
  return (
    <section id='team'>
    <div ref={ref} className='2xl:py-20 py-11'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
          <div className='max-w-32 text-center'>
            <motion.div {...bottomAnimation(-1)}>
              <h2>
                Meet the creative minds behind{' '}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  our success
                </span>
              </h2>
            </motion.div>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8'>
            {creativeMindList?.map((item: any, index: any) => {
              return (
                <motion.div {...bottomAnimation(index)} key={index}>
                  <SingleCreativeMind key={index} creativemind={item}/>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CreativeMind