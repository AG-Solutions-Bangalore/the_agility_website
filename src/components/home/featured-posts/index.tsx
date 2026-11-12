import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { ArrowUpRight } from 'lucide-react'
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface BlogItem {
  id: number
  blog_slug: string
  blog_title: string
  blog_short_description: string
  blog_banner_image: string | null
  blog_created_date: string
  created_by: string
  blog_categories_ids: string
  categories: string
}

interface ImageUrl {
  image_for: string
  image_url: string
}

function FeaturedPosts() {
  const navigate = useNavigate()
  const [featuredBlogs, setFeaturedBlogs] = useState<BlogItem[]>([])
  const [imageUrl, setImageUrl] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [filteredBlogs, setFilteredBlogs] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState(true)
  const [api, setApi] = useState<CarouselApi>()
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        const res = await axios.get(
          'https://theagility.in/crmapi/public/api/getFeaturedBlogs'
        )
        const result = res.data
        if (result?.data && result?.image_url) {
          const blogImgUrl =
            result.image_url.find(
              (item: ImageUrl) => item.image_for === 'Blog'
            )?.image_url || ''
          setFeaturedBlogs(result.data)
          setFilteredBlogs(result.data)
          setImageUrl(blogImgUrl)
        }
      } catch (error) {
        console.error('Error fetching featured blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedBlogs()
  }, [])

  // Auto-scroll slider every 3.5 seconds
  useEffect(() => {
    if (!api || isPaused || filteredBlogs.length <= 1) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3500)

    return () => clearInterval(interval)
  }, [api, isPaused, filteredBlogs.length])

  const getUniqueCategories = (blogList: BlogItem[]) => {
    const allCategories = blogList.flatMap(
      (blog) => blog.categories?.split(',').map((cat) => cat.trim()) || []
    )
    return ['All', ...Array.from(new Set(allCategories))]
  }

  const filterBlogsByCategory = (category: string) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setFilteredBlogs(featuredBlogs)
    } else {
      const filtered = featuredBlogs.filter((blog) =>
        blog.categories
          ?.split(',')
          .map((cat) => cat.trim())
          .includes(category)
      )
      setFilteredBlogs(filtered)
    }
    if (api) {
      api.scrollTo(0)
    }
  }

  const uniqueCategories = getUniqueCategories(featuredBlogs)

  if (loading) {
    return null
  }

  if (featuredBlogs.length === 0) {
    return null
  }

  return (
    <section id='featured-posts' className='2xl:py-20 py-11'>
      <div className='w-full max-w-[82.8rem] mx-auto px-4 sm:px-8'>
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: filteredBlogs.length > 1,
            }}
            className='w-full'
          >
            {/* Header Row */}
            <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8'>
              <div className='flex flex-row items-center gap-4'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-light'>Featured</h2>
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-semibold'>Posts</h2>
              </div>

              <div className='flex flex-wrap items-center gap-3'>
                {/* Category Pills */}
                <div className='flex overflow-x-auto items-center gap-2 py-1'>
                  {uniqueCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => filterBlogsByCategory(category)}
                      className={`px-4 py-1.5 backdrop-blur-sm rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                        selectedCategory === category
                          ? 'dark:bg-orange-500 bg-orange-600 text-white'
                          : 'dark:bg-white/20 bg-black/10 hover:dark:bg-white/30 hover:bg-black/20'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* View All Button */}
                <Link
                  to='/blog-list'
                  className='inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-dark_black dark:bg-white text-white dark:text-dark_black hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white transition-all shadow-sm shrink-0'
                >
                  View All
                  <ArrowUpRight className='w-4 h-4' />
                </Link>

                {/* Navigation Arrows */}
                <div className='flex items-center gap-2 shrink-0 ml-1'>
                  <CarouselPrevious className='static translate-y-0 h-9 w-9 rounded-full border border-dark_black/10 dark:border-white/10 hover:border-orange-500 hover:text-orange-500' />
                  <CarouselNext className='static translate-y-0 h-9 w-9 rounded-full border border-dark_black/10 dark:border-white/10 hover:border-orange-500 hover:text-orange-500' />
                </div>
              </div>
            </div>

            {/* Carousel Slider Items */}
            {filteredBlogs.length > 0 ? (
              <CarouselContent className='-ml-6'>
                {filteredBlogs.map((fblog) => (
                  <CarouselItem
                    key={fblog.id}
                    className='pl-6 md:basis-1/2 lg:basis-1/3'
                  >
                    <div className='flex-col justify-start items-start gap-2.5 flex hover-up mb-4 h-full'>
                      <a
                        onClick={() =>
                          navigate(`/blog/${encodeURIComponent(fblog?.blog_slug)}`)
                        }
                        className='rounded-2xl overflow-hidden max-h-[370px] cursor-pointer w-full block'
                      >
                        <img
                          src={imageUrl + fblog?.blog_banner_image}
                          alt={fblog.blog_title}
                          className='h-[15rem] w-full object-cover transition-transform duration-300 hover:scale-105'
                        />
                      </a>
                      <div className='flex-col justify-start items-start gap-2 flex w-full pt-1'>
                        <div className='flex flex-wrap items-center gap-2 w-full'>
                          {fblog.categories
                            ?.split(',')
                            .map((item, index) => (
                              <span
                                key={index}
                                className='px-3 py-1 dark:bg-white/10 bg-black/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20'
                              >
                                {item.trim()}
                              </span>
                            ))}
                          <div className='justify-start items-center gap-2 flex ml-auto'>
                            <img
                              className='w-7 h-7 rounded-full'
                              src='https://ideko-html-demo.vercel.app/assets/imgs/avatar/avatar-01.png'
                              alt='Avatar'
                            />
                            <div className='text-neutral-700 dark:text-gray-300 text-xs font-medium leading-none'>
                              {fblog?.created_by} •{' '}
                              {moment(fblog?.blog_created_date).format('DD-MMM-YYYY')}
                            </div>
                          </div>
                        </div>
                        <p
                          onClick={() =>
                            navigate(`/blog/${encodeURIComponent(fblog?.blog_slug)}`)
                          }
                          className='cursor-pointer hover:text-orange-600 dark:hover:text-orange-400 text-lg font-bold leading-snug line-clamp-2 transition-colors'
                        >
                          {fblog?.blog_title}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            ) : (
              <div className='text-center py-12'>
                <p className='text-lg dark:text-gray-300 text-gray-800'>
                  No featured posts found for the selected category.
                </p>
              </div>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts
