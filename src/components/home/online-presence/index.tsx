import { onlinePresenceList } from '../../../data/pageData'

function OnlinePresence() {
  return (
    <section id='work' className='2xl:py-20 py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col justify-center items-center gap-8 md:gap-12'>
          {/* Section Header */}
          <div className='max-w-2xl text-center flex flex-col items-center gap-3'>
            <span className='text-xs uppercase tracking-widest font-semibold text-orange-600 dark:text-orange-400 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20'>
              Our Services
            </span>
            <h2>
              How we transformed a small business’s{' '}
              <span className='instrument-font italic font-normal text-orange-600 dark:text-orange-400'>
                online presence
              </span>
            </h2>
          </div>

          {/* Service Cards Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
            {onlinePresenceList?.map((item: any, index: number) => (
              <div
                key={index}
                className='group flex flex-col gap-4 p-4 sm:p-5 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md hover:border-orange-500/40 transition-all duration-300'
              >
                {/* Image Container (Controlled compact height, no redirect link, no arrow) */}
                <div className='relative overflow-hidden rounded-xl h-40 w-full shrink-0'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500'
                  />
                </div>

                {/* Content */}
                <div className='flex flex-col gap-2 flex-1 justify-between'>
                  <h5 className='text-lg font-semibold text-dark_black dark:text-white leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors'>
                    {item.title}
                  </h5>
                  <p className='text-xs text-dark_black/65 dark:text-white/65 leading-relaxed line-clamp-3'>
                    {item.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlinePresence
