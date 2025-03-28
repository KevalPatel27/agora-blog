import BlogList from "../components/blogList.js";
import "./ListingSearching_on_post.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ListingSearching_on_post = () => {
  const [categories, setCategories] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [totalPages, setTotalPages] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://websiteapi.agorareal.com/wp-json/agora/v1/flexible-content/?page_slug=blog&category_slug=blog"
      );
      if (response.data) {
        setCategories([
          { name: "All Categories" },
          ...response.data.categories,
        ]);
        setPageNumber(response.data.total_pages);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoadingCategories(false);
    }
  };

  const fetchPosts = async (tag = "", keyword = "", pageNumber = 1) => {
    setLoading(true);
    const url =
      "https://websiteapi.agorareal.com/wp-json/agora/v1/posts-by-category-slug-or-id";
    const config = {
      params: {
        tags: tag,
        category: "blog",
        event: "clickbytag",
        pathval: "blog",
        keyword: keyword,
        per_page: 40,
        page: pageNumber,
      },
    };
    try {
      const response = await axios.get(url, config);
      setFilteredPosts(response.data.all_post_list);
      setTotalPages(response.data.total_pages);
      console.log(totalPages);
      setCurrentPage(pageNumber);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setFilteredPosts([]); // Handle no data case properly
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, []);

  // Debounced effect for search input
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchValue.trim() !== "") {
        fetchPosts(categories[activeIndex].term_id, searchValue); // Call API with search keyword
      } else {
        fetchPosts(); // Reset when input is empty
      }
    }, 500); // Wait 500ms before making the API call

    return () => clearTimeout(delayDebounce); // Cleanup timeout on re-renders
  }, [searchValue]);

  const handleCategoryClick = (index) => {
    setActiveIndex(index);
    setSearchValue(""); // Reset search input when switching categories
    const selectedCategory = categories[index];

    if (selectedCategory.name === "All Categories") {
      fetchPosts();
    } else {
      fetchPosts(selectedCategory.term_id);
    }
  };

  return (
    <section className="post-listing-with-filter-section">
      <div className="container">
        <div className="postItem">
          {loadingCategories ? (
            <div className="category-container">
              <ul className="category-skeleton">
                {Array.from({ length: 18 }).map((_, index) => (
                  <li className="skeleton category-item" key={index}></li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className="listing">
              {categories.map((category, index) => (
                <li
                  key={category.term_id || index}
                  className={`list-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(index)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          )}

          <div className="postListing">
            <div className="search-wrap">
              <input
                className="seraching-field"
                type="text"
                placeholder="Search articles here"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button type="search" className="search-icon">
                <img src="../assets/Images/search-icon.svg" alt="Search Icon" />
              </button>
            </div>

            {loading ? (
              Array.from({ length: 10 }).map((_, index) => (
                <div class="skeleton-card" key={index}>
                  <div class="skeleton-card-img skeleton"></div>
                  <div class="skeleton-card-content">
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text short"></div>
                    <div class="skeleton-author">
                      <div class="skeleton skeleton-avatar"></div>
                      <div class="skeleton skeleton-author-text"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <BlogList posts={filteredPosts} />
                {categories[activeIndex]?.name !== "All Categories" ? null : (
                  <ul className="pagination">
                    <li
                      className={`arrow ${currentPage === 1 ? "disable" : ""}`}
                      onClick={() =>
                        fetchPosts("", searchValue, currentPage - 1)
                      }
                    >
                      <a href="#" style={{ display: "block", width: "100%" }}>
                        <img
                          src="../assets/Images/double-arrow-left-svgrepo-com.svg"
                          alt="previous"
                          style={{ width: "30px", height: "25px" }}
                        />
                      </a>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        key={index}
                        className={`pageButton ${
                          currentPage === index + 1 ? "paginationactive" : ""
                        }`}
                        onClick={() => fetchPosts("", searchValue, index + 1)}
                      >
                        {index + 1}
                      </li>
                    ))}
                    <li
                      className={`arrow ${
                        currentPage === totalPages ? "disable" : ""
                      }`}
                      onClick={() =>
                        fetchPosts("", searchValue, currentPage + 1)
                      }
                    >
                      <a href="#" style={{ display: "block", width: "100%" }}>
                        <img
                          src="../assets/Images/double-arrow-right-svgrepo-com.svg"
                          alt="next"
                          style={{ width: "30px", height: "25px" }}
                        />
                      </a>
                    </li>
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingSearching_on_post;
