import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

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

function NewsArticles() {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState<BlogItem[]>([])
  const [blogImageUrl, setBlogImageUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          'https://theagility.in/crmapi/public/api/getFrontBlogs'
        )
        const result = res.data

        if (result?.data && result?.image_url) {
          const imgUrl =
            result.image_url.find(
              (item: ImageUrl) => item.image_for === 'Blog'
            )?.image_url || ''

          setBlogs(result.data)
          setBlogImageUrl(imgUrl)
        }
      } catch (error) {
        console.error('Error fetching front blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading || blogs.length === 0) {
    return null
  }

  return (
    <section id='news-articles' className='2xl:py-20 py-11 relative'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='flex flex-col items-center justify-center text-center gap-6 mb-12'>
          <div className='flex flex-row items-center gap-2 sm:gap-4'>
            <h2 className='text-4xl sm:text-6xl font-semibold'>News &</h2>
            <h2 className='text-4xl sm:text-6xl font-light'>Articles</h2>
          </div>
          <p className='text-base sm:text-lg dark:text-gray-300 text-gray-800 max-w-3xl'>
            Tech, fashion, lifestyle – your daily dose of innovation, style, and
            living. Explore the intersection in a byte-sized journey.
          </p>
        </div>

        {/* Blog Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Main Hero Blog (Left) */}
          {blogs[0] && (
            <div className='lg:row-span-3'>
              <div className='overflow-hidden rounded-3xl'>
                <div
                  className='cursor-pointer overflow-hidden rounded-3xl'
                  onClick={() =>
                    navigate(`/blog/${encodeURIComponent(blogs[0]?.blog_slug)}`)
                  }
                >
                  <img
                    src={blogImageUrl + blogs[0].blog_banner_image}
                    alt={blogs[0].blog_title}
                    className='w-full rounded-3xl object-cover hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='mt-4'>
                  <div className='flex flex-wrap items-center gap-4 mb-3'>
                    <span>
                      {blogs[0].categories
                        ?.split(',')
                        .map((item, index) => (
                          <span
                            key={index}
                            className='px-4 py-1.5 dark:bg-white/20 bg-black/10 backdrop-blur-sm rounded-full text-sm font-medium mr-2 inline-block'
                          >
                            {item.trim()}
                          </span>
                        ))}
                    </span>
                    <div className='flex items-center gap-2'>
                      <div className='w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex-shrink-0'></div>
                      <span className='text-sm text-neutral-700 dark:text-gray-300 font-medium'>
                        {blogs[0].created_by} -{' '}
                        {moment(blogs[0].blog_created_date).format('DD-MMM-YYYY')}
                      </span>
                    </div>
                  </div>
                  <h3
                    onClick={() =>
                      navigate(
                        `/blog/${encodeURIComponent(blogs[0]?.blog_slug)}`
                      )
                    }
                    className='text-2xl cursor-pointer hover:text-orange-800 font-semibold mb-3'
                  >
                    {blogs[0]?.blog_title}
                  </h3>
                  <p className='dark:text-gray-300 text-gray-800 text-sm leading-relaxed'>
                    {blogs[0]?.blog_short_description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Side Articles (Right) */}
          <div className='flex flex-col gap-6 justify-between'>
            {blogs.slice(1, 4).map((blog) => (
              <div
                key={blog.id}
                onClick={() =>
                  navigate(`/blog/${encodeURIComponent(blog?.blog_slug)}`)
                }
                className='group cursor-pointer'
              >
                <div className='flex gap-4 sm:gap-6 items-start'>
                  <div className='relative overflow-hidden rounded-2xl w-[9rem] sm:w-[14rem] h-36 sm:h-40 flex-shrink-0'>
                    <img
                      src={blogImageUrl + blog.blog_banner_image}
                      alt={blog.blog_title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                  </div>
                  <div className='flex-1 pt-1'>
                    <div className='flex flex-wrap items-center gap-2 mb-2'>
                      <span>
                        {blog.categories
                          ?.split(',')
                          .map((item, index) => (
                            <span
                              key={index}
                              className='px-3 py-1 dark:bg-white/10 bg-black/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20 mr-1 inline-block'
                            >
                              {item.trim()}
                            </span>
                          ))}
                      </span>
                      <span className='text-xs text-gray-400'>
                        {moment(blog.blog_created_date).format('DD-MMM-YYYY')}
                      </span>
                    </div>
                    <h4 className='text-lg sm:text-xl font-semibold leading-tight group-hover:text-orange-800 transition-colors'>
                      {blog.blog_title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsArticles

