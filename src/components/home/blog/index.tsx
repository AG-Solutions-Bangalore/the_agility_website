import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogList = () => {
  const navigate = useNavigate()
  const blogs = [
    {
      id: 1,
      type: 'main',
      image: 'https://ideko-html-demo.vercel.app/assets/imgs/pages/img-05.png',
      tag: 'Trending',
      author: 'Alida',
      date: 'June 8, 2024',
      title: 'Brushstrokes of Life: A Creative Journey Unveiled',
      excerpt: 'Discover the narrative woven through each brushstroke, portraying the delicate dance between chaos and harmony. As we navigate the intricate landscapes of inspiration, we unravel the stories that shape us.'
    },
    {
      id: 2,
      image: 'https://ideko-html-demo.vercel.app/assets/imgs/pages/img-06.png',
      tag: 'Trending',
      readTime: '2 mins read',
      date: '16 Jan 2024',
      title: 'Mindful Living: Practices for a Balanced Life'
    },
    {
      id: 3,
      image: 'https://ideko-html-demo.vercel.app/assets/imgs/pages/img-08.png',
      tag: 'Science',
      readTime: '9 mins read',
      date: '16 Jan 2024',
      title: 'Exploring Quantum Computing: A Paradigm Shift'
    },
    {
      id: 4,
      image: 'https://ideko-html-demo.vercel.app/assets/imgs/pages/img-07.png',
      tag: 'Travel',
      readTime: '12 mins read',
      date: '16 Jan 2024',
      title: 'Emerging Trends in Renewable Energy: A Green Future'
    }
  ]

  return (
    <>
    
      <section className='relative w-full pt-44 2xl:pb-20 pb-10 before:content-[""] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-yellow_gradient before:via-orange-900/15 before:to-yellow_gradient dark:before:from-dark_yellow_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10'>
        <div className=" mx-auto px-4 relative z-10 mb-14">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <div className="flex flex-row items-center gap-2 sm:gap-4">
              <h1 className="text-5xl sm:text-7xl font-semibold">News &</h1>
              <h1 className="text-5xl sm:text-7xl font-light">Articles</h1>
            </div>
            <p className="text-lg dark:text-gray-300 text-gray-800 max-w-3xl">
              Tech, fashion, lifestyle – your daily dose of innovation, style, and living. Explore the intersection in a byte-sized journey.
            </p>
          </div>
        </div>
     


      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
     
            <div className="lg:row-span-3">
              <div className="  overflow-hidden ">
                <img 
                  src={blogs[0].image} 
                  alt={blogs[0].title}
                  className="w-full rounded-3xl  object-cover"
                />
                <div className=" cursor-pointer  mt-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1.5 dark:bg-white/20 bg-black/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {blogs[0].tag}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
                      <span className="text-sm">{blogs[0].author} - {blogs[0].date}</span>
                    </div>
                  </div>
                  <h2 onClick={()=>navigate(`/blog/${encodeURIComponent(blogs[0].title)}`)} className="text-2xl font-semibold mb-3">{blogs[0].title}</h2>
                  <p className="dark:text-gray-300 text-gray-800 text-sm leading-relaxed">{blogs[0].excerpt}</p>
                </div>
              </div>
            </div>

        
            {blogs.slice(1).map((blog) => (
              <div key={blog.id} className="group cursor-pointer hidden sm:block ">
                <div className="flex gap-1  sm:gap-6 items-start">
                  <div className="relative overflow-hidden rounded-2xl w-[10rem] sm:w-[15rem]  h-40 flex-shrink-0">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-[10rem] sm:w-[15rem]  group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 dark:bg-white/10 bg-black/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20">
                        {blog.tag}
                      </span>
                      <span className="text-xs text-gray-400">
                        {blog.readTime} - {blog.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold leading-tight group-hover:text-gray-300 transition-colors">
                      {blog.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}

{blogs.slice(1).map((blog) => (
  <div key={blog.id} className="group cursor-pointer sm:hidden">
    <div className="flex gap-1 sm:gap-6 items-start">
      <div className="relative overflow-hidden rounded-2xl w-full h-40 flex-shrink-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Bottom shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 dark:bg-white/10 bg-black/30 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20 text-white">
              {blog.tag}
            </span>
            <span className="text-xs text-gray-100">
              {blog.readTime} • {blog.date}
            </span>
          </div>
          <h3 className="text-lg font-semibold leading-tight text-white group-hover:text-gray-200 transition-colors">
            {blog.title}
          </h3>
        </div>
      </div>
    </div>
  </div>
))}



          </div>
        </div>


       
      </section>
      

      <div className="container mx-auto px-4   ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center ">
            <div className="flex flex-row items-center gap-4">
            <h1 className="text-5xl  sm:text-6xl font-light">Featured</h1>
              <h1 className="text-5xl  sm:text-6xl font-semibold"> Posts</h1>
      
            </div>
            <div className="text-lg flex overflow-x-auto overflow-hidden  items-center gap-2 dark:text-gray-300  text-gray-800 ">
            <span className="px-4 py-1.5 dark:bg-white/20 bg-black/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Art
                    </span>
            <span className="px-4 py-1.5 dark:bg-white/20 bg-black/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Fashion
                    </span>
            <span className="px-4 py-1.5 dark:bg-white/20 bg-black/20 backdrop-blur-sm rounded-full text-sm font-medium">
                   Health
                    </span>
            <span className="px-4 py-1.5 dark:bg-white/20 bg-black/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Food
                    </span>
          
            </div>
          </div>
        </div>





        <div className="w-full max-w-[82.8rem] my-0  py-0 sm:px-8    flex flex-col mx-auto px-5  mt-4 gap-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[35px]">




          <div className="flex-col justify-start items-start gap-2 inline-flex hover-up mb-4 ">
            <a href="single.html" className="rounded-2xl overflow-hidden max-h-[370px]">
              <img src="https://ideko-html-demo.vercel.app/assets/imgs/pages/img-06.png"/>
            </a>
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <div className="justify-start items-center gap-5 inline-flex ">
                <a href="category.html" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">Technology</div>
                </a>
                <div className="justify-start items-center gap-2  flex">
                  <a href="author.html"><img className="w-9 h-9 rounded-3xl" src="https://ideko-html-demo.vercel.app/assets/imgs/avatar/avatar-01.png"/></a>
                  <div className="text-neutral-700 dark:text-gray-300  text-sm font-medium leading-none dark:text-neutral-dark-700"><a href="author.html">Alice Johnson</a> - January 15, 2024</div>
                </div>
              </div>
              <p><a className="text-neutral-950  dark:text-gray-300 text-xl  font-bold leading-snug item-link" href="single.html">Transformative Learning: Adapting to Educational Innovations</a></p>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 inline-flex hover-up mb-4 ">
            <a href="single.html" className="rounded-2xl overflow-hidden max-h-[370px]">
              <img src="https://ideko-html-demo.vercel.app/assets/imgs/pages/img-06.png"/>
            </a>
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <div className="justify-start items-center gap-5 inline-flex ">
                <a href="category.html" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">Technology</div>
                </a>
                <div className="justify-start items-center gap-2  flex">
                  <a href="author.html"><img className="w-9 h-9 rounded-3xl" src="https://ideko-html-demo.vercel.app/assets/imgs/avatar/avatar-01.png"/></a>
                  <div className="text-neutral-700 dark:text-gray-300  text-sm font-medium leading-none dark:text-neutral-dark-700"><a href="author.html">Alice Johnson</a> - January 15, 2024</div>
                </div>
              </div>
              <p><a className="text-neutral-950  dark:text-gray-300 text-xl  font-bold leading-snug item-link" href="single.html">Transformative Learning: Adapting to Educational Innovations</a></p>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 inline-flex hover-up mb-4 ">
            <a href="single.html" className="rounded-2xl overflow-hidden max-h-[370px]">
              <img src="https://ideko-html-demo.vercel.app/assets/imgs/pages/img-06.png"/>
            </a>
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <div className="justify-start items-center gap-5 inline-flex ">
                <a href="category.html" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">Technology</div>
                </a>
                <div className="justify-start items-center gap-2  flex">
                  <a href="author.html"><img className="w-9 h-9 rounded-3xl" src="https://ideko-html-demo.vercel.app/assets/imgs/avatar/avatar-01.png"/></a>
                  <div className="text-neutral-700 dark:text-gray-300  text-sm font-medium leading-none dark:text-neutral-dark-700"><a href="author.html">Alice Johnson</a> - January 15, 2024</div>
                </div>
              </div>
              <p><a className="text-neutral-950  dark:text-gray-300 text-xl  font-bold leading-snug item-link" href="single.html">Transformative Learning: Adapting to Educational Innovations</a></p>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 inline-flex hover-up mb-4 ">
            <a href="single.html" className="rounded-2xl overflow-hidden max-h-[370px]">
              <img src="https://ideko-html-demo.vercel.app/assets/imgs/pages/img-06.png"/>
            </a>
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <div className="justify-start items-center gap-5 inline-flex ">
                <a href="category.html" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">Technology</div>
                </a>
                <div className="justify-start items-center gap-2  flex">
                  <a href="author.html"><img className="w-9 h-9 rounded-3xl" src="https://ideko-html-demo.vercel.app/assets/imgs/avatar/avatar-01.png"/></a>
                  <div className="text-neutral-700 dark:text-gray-300  text-sm font-medium leading-none dark:text-neutral-dark-700"><a href="author.html">Alice Johnson</a> - January 15, 2024</div>
                </div>
              </div>
              <p><a className="text-neutral-950  dark:text-gray-300 text-xl  font-bold leading-snug item-link" href="single.html">Transformative Learning: Adapting to Educational Innovations</a></p>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 inline-flex hover-up mb-4 ">
            <a href="single.html" className="rounded-2xl overflow-hidden max-h-[370px]">
              <img src="https://ideko-html-demo.vercel.app/assets/imgs/pages/img-06.png"/>
            </a>
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <div className="justify-start items-center gap-5 inline-flex ">
                <a href="category.html" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">Technology</div>
                </a>
                <div className="justify-start items-center gap-2  flex">
                  <a href="author.html"><img className="w-9 h-9 rounded-3xl" src="https://ideko-html-demo.vercel.app/assets/imgs/avatar/avatar-01.png"/></a>
                  <div className="text-neutral-700 dark:text-gray-300  text-sm font-medium leading-none dark:text-neutral-dark-700"><a href="author.html">Alice Johnson</a> - January 15, 2024</div>
                </div>
              </div>
              <p><a className="text-neutral-950  dark:text-gray-300 text-xl  font-bold leading-snug item-link" href="single.html">Transformative Learning: Adapting to Educational Innovations</a></p>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 inline-flex hover-up mb-4 ">
            <a href="single.html" className="rounded-2xl overflow-hidden max-h-[370px]">
              <img src="https://ideko-html-demo.vercel.app/assets/imgs/pages/img-06.png"/>
            </a>
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <div className="justify-start items-center gap-5 inline-flex ">
                <a href="category.html" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">Technology</div>
                </a>
                <div className="justify-start items-center gap-2  flex">
                  <a href="author.html"><img className="w-9 h-9 rounded-3xl" src="https://ideko-html-demo.vercel.app/assets/imgs/avatar/avatar-01.png"/></a>
                  <div className="text-neutral-700 dark:text-gray-300  text-sm font-medium leading-none dark:text-neutral-dark-700"><a href="author.html">Alice Johnson</a> - January 15, 2024</div>
                </div>
              </div>
              <p><a className="text-neutral-950  dark:text-gray-300 text-xl  font-bold leading-snug item-link" href="single.html">Transformative Learning: Adapting to Educational Innovations</a></p>
            </div>
          </div>





          
       
        </div>


        {/* pagination  */}
     
        <div className="relative">
  <div className="flex items-center justify-start">
    <nav className="flex items-center gap-2" aria-label="Pagination">
      {/* Prev Button */}
      <a
        href="#"
        className="text-neutral-950 rounded-full w-12 h-12 bg-[#c59c2a] hover:bg-[#c7d2fe] dark:bg-[#1e293b] dark:hover:bg-[#334155] flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="15"
          viewBox="0 0 18 15"
          className="fill-neutral-950 dark:fill-[#f8fafc]"
        >
          <path d="M17.4922 7.49023C17.4922 8.19336 16.9453 8.74023 16.2812 8.74023H4.28906L8.39062 12.8809C8.89844 13.3496 8.89844 14.1699 8.39062 14.6387C8.15625 14.873 7.84375 14.9902 7.53125 14.9902C7.17969 14.9902 6.86719 14.873 6.63281 14.6387L0.382812 8.38867C-0.125 7.91992 -0.125 7.09961 0.382812 6.63086L6.63281 0.380859C7.10156 -0.126953 7.92188 -0.126953 8.39062 0.380859C8.89844 0.849609 8.89844 1.66992 8.39062 2.13867L4.28906 6.24023H16.2812C16.9453 6.24023 17.4922 6.82617 17.4922 7.49023Z"></path>
        </svg>
      </a>

      {/* Page Numbers */}
      <a
        href="#"
        className="active text-xl font-bold text-neutral-950 bg-[#c59c2a] dark:text-[#f8fafc] dark:bg-[#f1f5f9] rounded-full w-12 h-12 flex items-center justify-center"
      >
        1
      </a>
      <a
        href="#"
        className="text-xl font-bold text-neutral-950 rounded-full bg-[#c59c2a] hover:bg-[#c7d2fe] dark:text-[#f8fafc] dark:bg-[#1e293b] dark:hover:bg-[#334155] w-12 h-12 flex items-center justify-center"
      >
        2
      </a>
      <a
        href="#"
        className="text-xl font-bold text-neutral-950 rounded-full bg-[#c59c2a] hover:bg-[#c7d2fe] dark:text-[#f8fafc] dark:bg-[#1e293b] dark:hover:bg-[#334155] w-12 h-12 flex items-center justify-center"
      >
        3
      </a>
      <a
        href="#"
        className="text-xl font-bold text-neutral-950 rounded-full bg-[#c59c2a] hover:bg-[#c7d2fe] dark:text-[#f8fafc] dark:bg-[#1e293b] dark:hover:bg-[#334155] w-12 h-12 flex items-center justify-center"
      >
        4
      </a>

      {/* Next Button */}
      <a
        href="#"
        className="text-neutral-950 rounded-full w-12 h-12 bg-[#c59c2a] hover:bg-[#c7d2fe] dark:bg-[#1e293b] dark:hover:bg-[#334155] flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="15"
          viewBox="0 0 18 15"
          className="fill-neutral-950 dark:fill-[#f8fafc]"
        >
          <path d="M0 7.49023C0 8.19336 0.546875 8.74023 1.21094 8.74023H13.2031L9.10156 12.8809C8.59375 13.3496 8.59375 14.1699 9.10156 14.6387C9.33594 14.873 9.64844 14.9902 9.96094 14.9902C10.3125 14.9902 10.625 14.873 10.8594 14.6387L17.1094 8.38867C17.6172 7.91992 17.6172 7.09961 17.1094 6.63086L10.8594 0.380859C10.3906 -0.126953 9.57031 -0.126953 9.10156 0.380859C8.59375 0.849609 8.59375 1.66992 9.10156 2.13867L13.2031 6.24023H1.21094C0.546875 6.24023 0 6.82617 0 7.49023Z"></path>
        </svg>
      </a>
    </nav>
  </div>
</div>

      </div>
      </section>
    </>
  )
}

export default BlogList