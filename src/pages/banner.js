import React from "react";
import Author from "../components/author.js";
import "./banner.css";
import List from "./ListingSearching_on_post.js"

const banner = () => {
  const authors = {
    link: "#",
    image: "../assets/Images/blog-author/image.png",
    name: "Mark Goldfinger",
    date: "Mar 19. 2025",
  };
  
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="banner">
            <div className="banner-content">
              <h1>BLOG</h1>
              <h2>
                Real estate investment <span>blog</span>
              </h2>
              <p>
                Stay up-to-date with the latest trends, success stories, and
                expert advice to maximize your real estate investment potential.
              </p>
            </div>
            <div className="post-itm">
              <div className="post-img">
                <img
                  src="../assets/Images/blog-author/banner-author/image.png"
                  alt="post author"
                />
              </div>
              <div className="post-description">
                <>
                  <h5>
                    <a href="#" className="banner-text">
                      A modern, intuitive, and secure investor portal that gives
                      your investors the transparency they.
                    </a>
                  </h5>
                </>
                <>
                  <Author
                    link={authors.link}
                    image={authors.image}
                    name={authors.name}
                    date={authors.date}
                  />
                </>
                <>
                  <div className="btn ">
                    <span className="btn-text">Read More</span>
                    <img
                      alt="arrow-head"
                      aria-hidden="true"
                      src="../assets/Images/Union.svg"
                    />
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
      <List />
    </>
  );
};

export default banner;
