import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { innovationList } from '../../../data/pageData'

const descriptions = [
  'Aligning design, technology, and strategy directly with your core business targets.',
  'Delivering beautiful visual craft powered by resilient, modern engineering.',
  'Open communication, regular milestone updates, and clear accountability at every stage.',
  'Architectures and platforms built to evolve seamlessly as your enterprise expands.',
  'Delivering measurable impact, higher conversions, and enduring brand value.',
]

function Innovation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const cardAnimation = (index: number) => ({
    initial: { y: 30, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 },
    transition: { duration: 0.4, delay: 0.15 + index * 0.1 },
  })

  return (
    <section id='services' className='2xl:py-20 py-12 relative overflow-hidden'>
      <div ref={ref} className='container mx-auto px-4'>
        <div className='flex flex-col gap-12'>
          {/* Section Header */}
          <div className='flex flex-col items-center justify-center text-center gap-4 max-w-2xl mx-auto'>
            <span className='text-xs uppercase tracking-widest font-semibold text-orange-600 dark:text-orange-400 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20'>
              Our Advantage
            </span>
            <h2 className='text-4xl sm:text-5xl font-medium'>
              Why Choose{' '}
              <span className='instrument-font italic font-normal text-orange-600 dark:text-orange-400'>
                US
              </span>
            </h2>
            <p className='text-sm sm:text-base text-dark_black/65 dark:text-white/65 leading-relaxed'>
              We bring strategy, design, and modern technology together to build digital solutions that drive measurable growth.
            </p>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 w-full'>
            {innovationList?.map((item: any, index: number) => (
              <motion.div
                key={index}
                {...cardAnimation(index)}
                className='group relative p-7 rounded-3xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md hover:-translate-y-2 hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between gap-6'
              >
                <div className='flex flex-col gap-5'>
                  {/* Icon & Counter Header */}
                  <div className='flex items-center justify-between'>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bg_color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        height={24}
                        width={24}
                        className='w-6 h-6 object-contain'
                      />
                    </div>
                    <span className='text-xs font-mono font-semibold text-dark_black/40 dark:text-white/40 px-2.5 py-1 rounded-full border border-dark_black/10 dark:border-white/10'>
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className='text-lg font-semibold text-dark_black dark:text-white leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors'>
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className='text-xs text-dark_black/60 dark:text-white/60 leading-relaxed pt-3 border-t border-dark_black/5 dark:border-white/5'>
                  {descriptions[index] || descriptions[0]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation
