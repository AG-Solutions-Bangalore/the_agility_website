import BlogList from '@/components/home/blog'
import React, { useEffect } from 'react'

const Blog = () => {
      useEffect(() => {
        document.title = 'Blog | The Agility'
      }, [])
    
  return (
<>
<BlogList/>
</>
  )
}

export default Blog