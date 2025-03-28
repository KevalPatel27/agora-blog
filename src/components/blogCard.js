import React from "react";
import Author from "./author";
import './blogCard.css'

const BlogCard = ({ posts }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-img">
        <img src={posts.featured_image_url} alt={posts.post_title} />
      </div>
      <div className="blog-content">
        <div className="tags">
          {posts.tag_list.map((tag, index) => (
            <span 
              key={index} 
              className={` ${posts.tag_list.length === 1 ? "last" : "tag"}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3>{posts.post_title}</h3>
        <Author
          link={posts.select_author.author_post_url}
          image={posts.select_author.author_image.img_thumb}
          name={posts.select_author.author_post_title}
          date={posts.post_date}
        />
      </div>
    </div>
  );
};

export default BlogCard;
