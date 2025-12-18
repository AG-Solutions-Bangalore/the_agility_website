import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

interface BlogItem {
  id: number;
  blog_slug: string;
  blog_title: string;
  blog_short_description: string;
  blog_banner_image: string | null;
  blog_created_date: string;
  created_by: string;
  blog_categories_ids: string;
  categories: string;
}

interface ImageUrls {
  blog: string;
  noImage: string;
}

interface BlogListProps {
  blogs: BlogItem[];
  imageUrls: ImageUrls;
  featuredBlogs: BlogItem[];
  featuredImageUrls: ImageUrls;
}

const BlogList: React.FC<BlogListProps> = ({
  blogs,
  imageUrls,
  featuredBlogs,
  featuredImageUrls,
}) => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [filteredFeaturedBlogs, setFilteredFeaturedBlogs] = useState<BlogItem[]>(featuredBlogs)

  // Helper function to extract unique categories
  const getUniqueCategories = (blogList: BlogItem[]) => {
    const allCategories = blogList.flatMap(blog => 
      blog.categories?.split(',').map(cat => cat.trim()) || []
    );
    return ['All', ...Array.from(new Set(allCategories))];
  };

  // Filter featured blogs by category
  const filterBlogsByCategory = (category: string) => {
    setSelectedCategory(category)
    
    if (category === 'All') {
      setFilteredFeaturedBlogs(featuredBlogs)
    } else {
      const filtered = featuredBlogs.filter(blog => 
        blog.categories?.split(',').map(cat => cat.trim()).includes(category)
      )
      setFilteredFeaturedBlogs(filtered)
    }
  }

  const uniqueCategories = getUniqueCategories(featuredBlogs)

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
                <div className="overflow-hidden">
                  <img 
                    src={imageUrls.blog + blogs[0].blog_banner_image} 
                    alt={blogs[0].blog_title}
                    className="w-full rounded-3xl object-cover"
                  />
                  <div className="cursor-pointer mt-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span>
                        {blogs[0].categories
                          ?.split(",")
                          .map((item, index) => (
                            <span
                              key={index}
                              className="px-4 py-1.5 dark:bg-white/20 bg-black/20 backdrop-blur-sm rounded-full text-sm font-medium mr-2"
                            >
                              {item.trim()}
                            </span>
                          ))}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
                        <span className="text-sm">{blogs[0].created_by} - {moment(blogs[0].blog_created_date).format("DD-MMM-YYYY")}</span>
                      </div>
                    </div>
                    <h2 onClick={() => navigate(`/blog/${encodeURIComponent(blogs[0]?.blog_slug)}`)} className="text-2xl cursor-pointer hover:text-orange-800 font-semibold mb-3">{blogs[0]?.blog_title}</h2>
                    <p className="dark:text-gray-300 text-gray-800 text-sm leading-relaxed">{blogs[0]?.blog_short_description}</p>
                  </div>
                </div>
              </div>

              {blogs.slice(1,4).map((blog) => (
                <div key={blog.id} className="group cursor-pointer hidden sm:block">
                  <div className="flex gap-1 sm:gap-6 items-start">
                    <div className="relative overflow-hidden rounded-2xl w-[10rem] sm:w-[15rem] h-40 flex-shrink-0">
                      <img 
                        src={imageUrls.blog + blog.blog_banner_image} 
                        alt={blog.blog_title}
                        className="w-[10rem] sm:w-[15rem] group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="">
                          {blog.categories
                            ?.split(",")
                            .map((item, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 dark:bg-white/10 bg-black/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20 mr-2"
                              >
                                {item.trim()}
                              </span>
                            ))}
                        </span>
                        <span className="text-xs text-gray-400">
                          {moment(blog.blog_created_date).format("DD-MMM-YYYY")}
                        </span>
                      </div>
                      <h3 onClick={() => navigate(`/blog/${encodeURIComponent(blog?.blog_slug)}`)} className="text-xl font-semibold leading-tight cursor-pointer hover:text-orange-800">
                        {blog.blog_title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts Section with Filtering */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div className="flex flex-row items-center gap-4">
              <h1 className="text-5xl sm:text-6xl font-light">Featured</h1>
              <h1 className="text-5xl sm:text-6xl font-semibold">Posts</h1>
            </div>
            <div className="text-lg flex overflow-x-auto overflow-hidden items-center gap-2 dark:text-gray-300 text-gray-800">
              {uniqueCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => filterBlogsByCategory(category)}
                  className={`px-4 py-1.5 backdrop-blur-sm rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
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

        <div className="w-full max-w-[82.8rem] my-0 py-0 sm:px-8 flex flex-col mx-auto px-5 mt-4 gap-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[35px]">
            {filteredFeaturedBlogs.length > 0 ? (
              filteredFeaturedBlogs.map((fblog) => (
                <div key={fblog.id} className="flex-col justify-start items-start gap-2 inline-flex hover-up mb-4">
                  <a className="rounded-2xl overflow-hidden max-h-[370px]">
                    <img 
                      src={featuredImageUrls?.blog + fblog?.blog_banner_image}
                      alt={fblog.blog_title} 
                      className='h-[15rem] w-full object-cover'
                    />
                  </a>
                  <div className="flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center inline-flex">
                      {fblog.categories
                        ?.split(",")
                        .map((item, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 dark:bg-white/10 bg-black/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20 mr-2"
                          >
                            {item.trim()}
                          </span>
                        ))}
                      <div className="justify-start items-center gap-2 flex">
                        <a><img className="w-9 h-9 rounded-3xl" src="https://ideko-html-demo.vercel.app/assets/imgs/avatar/avatar-01.png" alt="Avatar" /></a>
                        <div className="text-neutral-700 dark:text-gray-300 text-sm font-medium leading-none dark:text-neutral-dark-700">
                          {fblog?.created_by} - {moment(fblog?.blog_created_date).format("DD-MMM-YYYY")}
                        </div>
                      </div>
                    </div>
                    <p onClick={() => navigate(`/blog/${encodeURIComponent(fblog?.blog_slug)}`)} className="cursor-pointer hover:text-orange-800 text-xl font-bold leading-snug">
                      {fblog?.blog_title}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-lg dark:text-gray-300 text-gray-800">No featured posts found for the selected category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogList