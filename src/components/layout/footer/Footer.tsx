import React from 'react'

import Logo from '../header/Logo'
import { footerData } from '../../../data/footerData'
import { Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='xl:pt-20 pb-6'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row py-16 gap-10 justify-between border-b border-dark_black/10 dark:border-white/10'>
          <div className='flex flex-col gap-2  max-w-md'>
            <Logo />
            <p className='opacity-60'>{footerData?.brand?.tagline}</p>
           
          </div>
          <div className=' '>
          
            <div className='flex flex-col md:flex-row  gap-8 '>
            <p className='text-dark_black/60  hover:text-black  flex flex-col  items-start md:items-center gap-6 dark:text-white/60 dark:hover:text-white'>
            <Phone className='text-black dark:text-white '/>
                <a href={`tel:${footerData?.contactDetails?.phone}`}   className='tracking-wider'>
                  {footerData?.contactDetails?.phone}
                </a>
              </p>
            
              <p className='text-dark_black/60 hover:text-black dark:text-white/60 flex flex-col items-start md:items-center gap-6 dark:hover:text-white'>
              <Mail className='text-black dark:text-white'/>
                <a href={`mailto:${footerData?.contactDetails?.email}`} className=' tracking-wider'>
                  {footerData?.contactDetails?.email}
                </a>
              </p>
              <p className='text-dark_black/60 dark:text-white/60 flex flex-col items-start md:items-center gap-6'>
              <MapPin className='text-black dark:text-white'/>
           <p className='tracking-wider'>
           {footerData?.contactDetails?.address}
           </p>
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <p className='text-dark_black/60 dark:text-white/60'>
            {footerData?.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer