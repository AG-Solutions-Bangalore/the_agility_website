import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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

interface ImageUrls {
  blog: string
  noImage: string
}

interface BlogListProps {
  blogs: BlogItem[]
  imageUrls: ImageUrls
}

const BlogList: React.FC<BlogListProps> = ({ blogs, imageUrls }) => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [filteredBlogs, setFilteredBlogs] = useState<BlogItem[]>(blogs)

  useEffect(() => {
    setFilteredBlogs(blogs)
  }, [blogs])

  const getUniqueCategories = (blogList: BlogItem[]) => {
    const allCategories = blogList.flatMap(
      (blog) => blog.categories?.split(',').map((cat) => cat.trim()) || []
    )
    return ['All', ...Array.from(new Set(allCategories))]
  }

  const filterBlogsByCategory = (category: string) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setFilteredBlogs(blogs)
    } else {
      const filtered = blogs.filter((blog) =>
        blog.categories
          ?.split(',')
          .map((cat) => cat.trim())
          .includes(category)
      )
      setFilteredBlogs(filtered)
    }
  }

  const uniqueCategories = getUniqueCategories(blogs)


  return (
    <section className='relative w-full pt-[100px] 2xl:pb-20 pb-10 before:content-[""] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-yellow_gradient before:via-orange-900/15 before:to-yellow_gradient dark:before:from-dark_yellow_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-10 before:blur-3xl before:-z-10'>
      {/* Featured Posts Header with Filtering */}
      <div className='container mx-auto px-4 relative z-10 mb-6 sm:mb-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 text-center'>
          <div className='flex flex-row items-center gap-4'>
            <h1 className='text-4xl sm:text-5xl font-semibold'>Blogs</h1>
          </div>
          <div className='text-lg flex overflow-x-auto overflow-hidden items-center gap-2 dark:text-gray-300 text-gray-800 pb-2 md:pb-0'>
            {uniqueCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => filterBlogsByCategory(category)}
                className={`px-4 py-1.5 backdrop-blur-sm rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${selectedCategory === category
                  ? 'dark:bg-orange-500 bg-orange-600 text-white'
                  : 'dark:bg-white/20 bg-black/20 hover:dark:bg-white/30 hover:bg-black/30'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className='w-full max-w-[82.8rem] my-0 py-0 sm:px-8 flex flex-col mx-auto px-5 mt-2 sm:mt-2 relative z-10'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[35px]'>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className='flex-col justify-start items-start gap-2 inline-flex hover-up mb-4'
              >
                <a
                  onClick={() =>
                    navigate(`/blog/${encodeURIComponent(blog?.blog_slug)}`)
                  }
                  className='rounded-2xl overflow-hidden max-h-[370px] cursor-pointer w-full block'
                >
                  <img
                    src={imageUrls.blog + blog?.blog_banner_image}
                    alt={blog.blog_title}
                    className='h-[15rem] w-full object-cover hover:scale-105 transition-transform duration-500'
                  />
                </a>
                <div className='flex-col justify-start items-start gap-1.5 flex w-full'>
                  <div className='justify-start items-center inline-flex flex-wrap gap-1'>
                    {blog.categories
                      ?.split(',')
                      .map((item, index) => (
                        <span
                          key={index}
                          className='px-3 py-1 dark:bg-white/10 bg-black/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20 mr-2'
                        >
                          {item.trim()}
                        </span>
                      ))}
                    <div className='justify-start items-center gap-2 flex'>
                      <a>
                        <img
                          className='w-9 h-9 rounded-3xl'
                          src='https://ideko-html-demo.vercel.app/assets/imgs/avatar/avatar-01.png'
                          alt='Avatar'
                        />
                      </a>
                      <div className='text-neutral-700 dark:text-gray-300 text-sm font-medium leading-none dark:text-neutral-dark-700'>
                        {blog?.created_by} -{' '}
                        {moment(blog?.blog_created_date).format('DD-MMM-YYYY')}
                      </div>
                    </div>
                  </div>
                  <p
                    onClick={() =>
                      navigate(`/blog/${encodeURIComponent(blog?.blog_slug)}`)
                    }
                    className='cursor-pointer hover:text-orange-800 text-xl font-bold leading-snug'
                  >
                    {blog?.blog_title}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className='col-span-3 text-center py-12'>
              <p className='text-lg dark:text-gray-300 text-gray-800'>
                No posts found for the selected category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BlogList
