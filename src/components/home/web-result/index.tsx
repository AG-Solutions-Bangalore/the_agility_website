
import CountUp from 'react-countup'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { WebResultTagList } from '../../../data/pageData'

function WebResult() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section id='aboutus'>
    <div className='2xl:py-20 py-11'>
      <div className='container'>
        <div className='flex flex-col  lg:gap-16 gap-5'>
          <div className='flex flex-col items-center justify-center text-center gap-3'>
            <p className='max-w-6xl text-3xl md:text-5xl font-medium text-dark_black dark:text-white'>
              Crafting exceptional, well experienced & technology driven
              strategies to drive impactful results with
            </p>
            <div>
              <h2>
                {WebResultTagList?.map((items:any, index:any) => (
                  <span
                    key={index}
                    className={`inline-flex m-2 py-1 px-5 gap-3 rounded-full ${items.bg_color} ${items.txt_color} items-center`}>
                    <img
                      src={items.image}
                      alt={items.name}
                      width={40}
                      height={40}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                    <span className='instrument-font italic font-normal'>
                      {items.name}
                    </span>
                  </span>
                ))}
              </h2>
            </div>
          </div>
          <motion.div
  className="flex flex-col xl:flex-row gap-6 items-center justify-between bg-dark_black dark:bg-white/5 py-6 px-6 sm:px-10 rounded-2xl w-full">
  
  {/* Text Section */}
  <h4 className="text-white text-center xl:text-left text-sm sm:text-base lg:text-lg leading-relaxed">
    We’re a full-spectrum digital partner helping brands, associations, and communities thrive in a connected world. Whether you're launching a new identity, digitizing legacy data, or building vibrant member networks—we bring strategy, tech, and creativity together.
    <br />
    <span className='text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text'>Our mission is simple: to bridge creativity and technology so you can focus on growth.</span>
    <br />
    With expertise spanning strategy, marketing, events, software, and community engagement, we deliver solutions that are practical, scalable, and human-centered.
  </h4>

  {/* Button Section */}
  <div className="flex flex-col sm:flex-row gap-3 items-center">
    <Link
      to="/contact"
      className="group flex items-center gap-2 lg:gap-4 py-2 px-4 sm:px-5 rounded-full bg-white dark:bg-gray-100 border border-white dark:border-opacity-50 font-medium text-dark_black hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out">
      
      <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-2">
        Let’s Collaborate
      </span>

      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200 ease-in-out group-hover:translate-x-1">
        <rect
          width="32"
          height="32"
          rx="16"
          fill="#1B1D1E"
          className="transition-colors duration-200 ease-in-out group-hover:fill-white"
        />
        <path
          d="M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668"
          stroke="white"
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:stroke-black"
        />
      </svg>
    </Link>
  </div>
</motion.div>

          <div className='flex-col md:flex md:flex-row justify-center items-center text-center'>
            <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
              <h2 ref={ref} className='2xl:text-9xl md:text-7xl text-5xl'>
                <sup>+</sup>
                {inView ? <CountUp start={0} end={300} duration={3} /> : '0'}
              </h2>
              <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                Total Clients 
              </p>
              <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
            </div>
            <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
              <h2 className='2xl:text-9xl md:text-7xl text-5xl'>
                <sup>+</sup>
                {inView ? <CountUp start={0} end={10} duration={3} /> : '0'}
              </h2>
              <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                Years of Experience
              </p>
              <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
            </div>
            <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
              <h2 className='2xl:text-9xl md:text-7xl text-5xl'>
                <sup>+</sup>
                {inView ? <CountUp start={0} end={500} duration={3} /> : '0'}
              </h2>
              <p className='mt-2 text-dark_black/60 dark:text-white/60'>
              Total Projects Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WebResult