import Author from "../components/author.js";
import "./banner.css";
import List from "./ListingSearching_on_post.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

const Banner = () => {
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState([]);

  const fetch = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://websiteapi.agorareal.com/wp-json/agora/v1/flexible-content/?page_slug=blog&category_slug=blog"
      );
      setBanner(result.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="banner">
            {loading ? (
              <div className="skeleton-banner ">
                <div className="skeleton-banner-title skeleton"></div>
                <div className="skeleton-banner-subtitle skeleton"></div>
                <div className="skeleton-banner-text skeleton"></div>
              </div>
            ) : (
              <div className="banner-content">
                <h1>
                  {
                    banner.all_flexible_content?.[0]?.site_banner
                      ?.secondary_heading
                  }
                </h1>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      banner.all_flexible_content?.[0]?.site_banner
                        ?.primary_heading
                    ),
                  }}
                />
                <p>
                  {
                    banner.all_flexible_content?.[0]?.site_banner
                      ?.short_description
                  }
                </p>
              </div>
            )}
            <div className="post-list-wrap">
              <div>
                <div className="post-itm">
                  {loading ? (
                    <>
                      <div className="skeleton skeleton-post-img "></div>
                      <div className="skeleton-post-description">
                        <div className="skeleton-banner-title skeleton"></div>
                        <div className=" skeleton skeleton-banner-text"></div>
                        <div class="skeleton-author">
                          <div class="skeleton skeleton-avatar "></div>
                          <div class="skeleton skeleton-author-text"></div>
                        </div>
                        <div className="skeleton sekelton-btn"></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="post-img">
                        <img
                          src={
                            banner.all_flexible_content?.[0]?.site_banner
                              .cardstyle_2.main_post_selector[0].imgurl
                          }
                          alt="post author"
                        />
                      </div>
                      <div className="post-description ">
                        <>
                          <h5>
                            <a
                              href={
                                banner.all_flexible_content?.[0]?.site_banner
                                  .cardstyle_2.main_post_selector[0].post_url
                              }
                              className="banner-text"
                            >
                              {
                                banner.all_flexible_content?.[0]?.site_banner
                                  .cardstyle_2.main_post_selector[0].post_title
                              }
                            </a>
                          </h5>
                        </>
                        <>
                          <Author
                            link={
                              banner.all_flexible_content?.[0]?.site_banner
                                .cardstyle_2.main_post_selector[0].select_author
                                .author_post_url
                            }
                            image={
                              banner.all_flexible_content?.[0]?.site_banner
                                .cardstyle_2.main_post_selector[0].select_author
                                .author_image.img_thumb
                            }
                            name={
                              banner.all_flexible_content?.[0]?.site_banner
                                .cardstyle_2.main_post_selector[0].select_author
                                .author_image.author_post_title
                            }
                            date={
                              banner.all_flexible_content?.[0]?.site_banner
                                .cardstyle_2.main_post_selector[0]
                                ?.post_publish_date
                            }
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
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <List />
    </>
  );
};

export default Banner;
