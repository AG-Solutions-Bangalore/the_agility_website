import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <img
        src="/images/logo/logo1.png"
        alt="logo"
        width={117}
        height={34}
        className='dark:hidden w-auto h-[3.2rem]'
      />
      <img
        src="/images/logo/logo1.png"
        alt="logo"
        width={160}
        height={50}
        className='dark:block hidden w-auto h-[3.2rem]'
      />
    </Link>
  )
}

export default Logo