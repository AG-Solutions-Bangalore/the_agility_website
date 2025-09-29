import Slider from 'react-infinite-logo-slider'

const SingleBrand = ({ brand }: { brand: any }) => {
  const { image, title, darkImg } = brand

  return (
    <Slider.Slide>
      <div className='flex items-center'>
        <img
          src={image}
          alt={title}
          height={50}
          width={130}
          className='dark:hidden swiper-logo-image h-10'
        />
        <img
          src={darkImg}
          alt={title}
          height={50}
          width={130}
          className='dark:block hidden swiper-logo-image h-10'
        />
      </div>
    </Slider.Slide>
  )
}

export default SingleBrand