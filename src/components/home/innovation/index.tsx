
import { Link } from 'react-router-dom'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { innovationList } from '../../../data/pageData'

function Innovation() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = (index: any) => ({
    initial: { y: '25%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  })
  return (
   <section id='services'>
        <div ref={ref} className='2xl:py-20 py-11'>
          <div className='container'>
            <div className='flex flex-col gap-12'>
              <div className='flex flex-col justify-center items-center gap-10 lg:gap-16'>
                <motion.div
                  {...bottomAnimation(1)}
                  className='max-w-(--breakpoint-Xsm) text-center'>
                  <h2>
                  Why Choose {" "}
                    <span className='instrument-font italic font-normal dark:text-white/70'>
                    US
                    </span>
                  </h2>
                </motion.div>
                <motion.div
                  {...bottomAnimation(2)}
                  className='grid auto-rows-max grid-cols-2 md:grid-cols-2 2xl:grid-cols-5 gap-6 w-full'>
                  {innovationList?.map((items:any, index:any) => {
                    return (
                      <div
                        key={index}
                        className={`${items.bg_color} flex flex-col p-8 rounded-2xl gap-6 lg:gap-9 `}>
                        <div>
                          <img
                            src={items.image}
                            alt='image'
                            height={40}
                            width={40}
                          />
                        </div>
                        <div>
                          <p className={`${items.txt_color} text-md md:text-lg font-medium`}>
                            {items.title.split('\n')?.map((line:any, i:number) => (
                              <React.Fragment key={i}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </motion.div>
              </div>
            
            </div>
          </div>
        </div>
      </section>
  )
}

export default Innovation