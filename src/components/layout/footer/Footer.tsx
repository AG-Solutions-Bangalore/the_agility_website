import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../header/Logo'
import { footerData } from '../../../data/footerData'

const Footer = () => {
  return (
    <footer className='xl:pt-20 pb-6'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row py-16 gap-10 justify-between border-b border-dark_black/10 dark:border-white/10'>
          <div className='flex flex-col gap-6 max-w-md'>
            <Logo />
            <p className='opacity-60'>{footerData?.brand?.tagline}</p>
            <div className='flex gap-4'>
              {footerData?.brand?.socialLinks.map((item: any, index: any) => {
                return (
                  <a
                    key={index}
                    href={item.link}
                    target='_blank'
                    rel="noopener noreferrer"
                    className='hover:opacity-60'>
                    <img
                      src={item.icon}
                      className='dark:hidden w-5 h-5'
                      alt='social-icon'
                    />
                    <img
                      src={item.dark_icon}
                      className='dark:block hidden w-5 h-5'
                      alt='social-icon'
                    />
                  </a>
                )
              })}
            </div>
          </div>
          <div className='grid sm:grid-cols-3 gap-6'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>{footerData?.sitemap?.name}</p>
              <ul className='flex flex-col gap-3'>
                {footerData?.sitemap?.links.map((item: any, index: any) => {
                  return (
                    <li
                      key={index}
                      className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>{footerData?.otherPages?.name}</p>
              <ul className='flex flex-col gap-3'>
                {footerData?.otherPages?.links.map((item: any, index: any) => {
                  return (
                    <li
                      key={index}
                      className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>{footerData?.contactDetails?.name}</p>
              <p className='text-dark_black/60 dark:text-white/60'>
                {footerData?.contactDetails?.address}
              </p>
              <p className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                <a href={`mailto:${footerData?.contactDetails?.email}`}>
                  {footerData?.contactDetails?.email}
                </a>
              </p>
              <p className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                <a href={`tel:${footerData?.contactDetails?.phone}`}>
                  {footerData?.contactDetails?.phone}
                </a>
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