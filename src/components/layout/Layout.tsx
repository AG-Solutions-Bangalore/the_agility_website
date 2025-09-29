import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer/Footer'
import ScrollToTop from '../scroll-to-top'

const Layout = () => {
  return (
    <>
      <Header />
             <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
     
    </>
  )
}

export default Layout