import React, { useEffect, useState, Suspense } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HeaderItem } from '../../../../types/menu'

const OFFSET = 80 


const useActiveLink = (setActiveLink: (link: string) => void) => {
  const location = useLocation()

  useEffect(() => {
    const updateActiveLink = () => {
      const fullPath = window.location.hash
        ? `${location.pathname}${window.location.hash}`
        : location.pathname
      setActiveLink(fullPath)
    }

    const handleScrollOffset = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1)
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: elementPosition - OFFSET,
              behavior: 'smooth',
            })
          }, 0)
        }
      }
    }

    updateActiveLink()
    handleScrollOffset()

    window.addEventListener('hashchange', updateActiveLink)
    window.addEventListener('hashchange', handleScrollOffset)

    return () => {
      window.removeEventListener('hashchange', updateActiveLink)
      window.removeEventListener('hashchange', handleScrollOffset)
    }
  }, [location, setActiveLink])
}

// HeaderLink component
const HeaderLinkContent: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [activeLink, setActiveLink] = useState('')

  useActiveLink(setActiveLink)

  return (
    <li>
      <Link
        to={item.href}
        className={`px-4 py-2 font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow 
                    ${
                      activeLink === item.href
                        ? 'bg-white text-black rounded-[90rem] shadow-header_shadow'
                        : 'text-dark_black/60 dark:text-white'
                    }`}>
        {item.label}
      </Link>
    </li>
  )
}

// Wrap in Suspense
const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => (
  <Suspense fallback={null}>
    <HeaderLinkContent item={item} />
  </Suspense>
)

export default HeaderLink
