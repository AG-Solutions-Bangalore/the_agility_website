

function CustomerStories() {
  return (
    <section id='client'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center gap-10 md:gap-20'>
            <div className='mx-auto max-w-2xl flex items-center text-center'>
              <h2>
                What our satisfied customers are saying
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  about us
                </span>
              </h2>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className="p-8 gap-64 rounded-2xl flex flex-col relative bg-[url('/images/9.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat">
                  <span className='text-white/60 uppercase text-sm font-medium'>
                    Customer stories
                  </span>
                  <div className='flex flex-col gap-6 '>
                    <h4 className='text-white'>
                      “They transformed our outdated systems into a sleek digital platform. Our members love the new experience.”
                    </h4>
                    <div className='flex flex-col gap-1'>
                      <p className='text-white font-medium'>Kabir Shah</p>
                      <p className='text-white/60 text-sm font-medium'>
                      Director,National Association
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between gap-36 xl:max-w-25  bg-pale_yellow rounded-2xl p-8'>
                  <div>
                    <span className='uppercase text-sm font-medium text-dark_black/60'>
                      Facts & numbers
                    </span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h2 className='text-7xl font-medium dark:text-dark_black'>
                      91%
                    </h2>
                    <h4 className='dark:text-dark_black'>
                      Clients recommend our design services.”
                    </h4>
                  </div>
                </div>
              </div>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className='flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-white/60 uppercase text-sm font-medium'>
                      Customer stories
                    </span>
                    <h4 className='text-white'>
                    From branding to analytics, they’ve been our trusted partner. Smart, responsive, and creative.
                    </h4>
                    <div>
                      <img
                        src='/images/10.jpg'
                        alt='image'
                        width={344}
                        height={220}
                        className='w-full h-52'
                    
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-dark_black/60 dark:text-white/60 uppercase text-sm font-medium'>
                      Customer stories
                    </span>
                    <h2 className='text-2xl lg:text-5xl'>
                      “Our annual conference was flawless—planned, promoted, and executed with precision. Couldn’t have asked for a better partner.”
                    </h2>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='font-medium'>Anurag Singh</p>
                    <p className='text-dark_black/60 dark:text-white/60 text-sm font-medium'>
                    CEO, Industry Council
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories