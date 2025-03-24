import React from 'react';
import './author.css'

const Author = ({ link, image, name, date }) => {

  return (
    <>
      <a
        className='blog-link'
        href={`${link}`} 
        title="Author Details"
      >
        <img src={`${image}`} className='Img'/>
        <p className='description'>Written by {name} on {date}</p>
      </a>
    </>
  )

}

export default Author

