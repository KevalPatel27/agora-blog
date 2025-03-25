import React from 'react'
import BlogCard from './blogCard'
import './blogList.css'

const blogList = ({ posts }) => {
  return (
    <div className='blog-list'>
      {posts.length >0 ? (
        posts.map((post) => <BlogCard key={post.ID} posts={post}/>)
      ):(<p>No Blogs Found</p>)}
    </div>
  )
}

export default blogList
