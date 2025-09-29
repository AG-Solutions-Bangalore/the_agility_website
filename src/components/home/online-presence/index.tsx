
import { Icon } from '@iconify/react/dist/iconify.js'
import { onlinePresenceList } from '../../../data/pageData'

function OnlinePresence() {
  return (
   <section id='work'>
         <div className='2xl:py-20 py-11'>
           <div className='container'>
             <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
               <div className='max-w-2xl text-center'>
                 <h2>
                   How we transformed a small business’s
                   <span className='instrument-font italic font-normal dark:text-white/70'>
                     {' '}
                     online presence
                   </span>
                 </h2>
               </div>
               <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4'>
                 {onlinePresenceList?.map((items:any, index:any) => {
                   return (
                     <div
                       key={index}
                       className='group flex flex-col gap-6 cursor-pointer'>
                       <div className='relative '>
                         <img
                           src={items.image}
                           alt={items.title}
                           width={625}
                           height={410}
                           className='rounded-2xl'
                       
                         />
   
                         {/* Overlay div */}
                         <a
                           href={'https://www.framer.com/@wrap-pixel/'}
                           target='blank'
                           className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex'>
                           <span className='flex justify-end p-5 w-full'>
                             <Icon
                               icon='icon-park-solid:circle-right-up'
                               width='50'
                               height='50'
                               style={{ color: '#fbfbfb' }}
                             />
                           </span>
                         </a>
                       </div>
   
                       <div className='flex flex-col items-start gap-1'>
                         <h5 className='group-hover:text-purple_blue'>
                           {items.title}
                         </h5>
                         <div className='flex gap-3  h-36'>
                
                             <p
                               key={index}
                               className='text-sm  border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-1 rounded-md hover:bg-dark_black hover:text-white'>
                               {items.tag}
                             </p>
                         
                         </div>
                       </div>
                     </div>
                   )
                 })}
               </div>
             </div>
           </div>
         </div>
       </section>
  )
}

export default OnlinePresence