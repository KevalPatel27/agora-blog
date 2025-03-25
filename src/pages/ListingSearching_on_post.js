import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogList from "../components/blogList.js";
import "./ListingSearching_on_post.css";

const ListingSearching_on_post = () => {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");


  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://websiteapi.agorareal.com/wp-json/agora/v1/flexible-content/?page_slug=blog&category_slug=blog"
      );
      if (response.data.categories && Array.isArray(response.data.categories)) {
        setCategories([
          { name: "All Categories" },
          ...response.data.categories,
        ]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoadingCategories(false);
    }
  };

  const fetchPosts = async (tag = "", pageNumber = 1) => {
    setLoading(true);
    const url =
      "https://websiteapi.agorareal.com/wp-json/agora/v1/posts-by-category-slug-or-id";
    const config = {
      params: {
        tags: tag,
        category: "blog",
        event: "clickbytag",
        pathval: "blog",
        per_page: 40,
        page: pageNumber,
      },
    };
    try {
      const response = await axios.get(url, config);
      setAllPosts(response.data.all_post_list);
      setFilteredPosts(response.data.all_post_list);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, []);


  const filterPosts = (searchText) => {
    if (searchText.trim() !== "") {
      const updatedPosts = allPosts.filter((post) =>
        post.post_title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredPosts(updatedPosts);
    }
  };

  // Handle category click
  const handleCategoryClick = (index) => {
    setActiveIndex(index);
    const selectedCategory = categories[index];

    if (selectedCategory.name === "All Categories") {
      fetchPosts(); 
    } else {
      fetchPosts(selectedCategory.term_id); 
    }
  };

  // Handle search input
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    filterPosts(value); // Apply category and search filter together
  };

  return (
    <section className="post-listing-with-filter-section">
      <div className="container">
        <div className="postItem">
          {/* Category List */}
          {loadingCategories ? ( // Show loading indicator for categories
            <p>Loading categories...</p>
          ) : (
            <ul className="listing">
              {categories.map((category, index) => (
                <li
                  key={category.term_id}
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

          {/* Search Box */}
          <div className="postListing">
            <div className="search-wrap">
              <input
                className="seraching-field"
                type="text"
                placeholder="Search articles here"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <button type="search" className="search-icon">
                <img src="../assets/Images/search-icon.svg" alt="Search Icon" />
              </button>
            </div>

            {/* Blog List */}
            {loading ? <p>Loading...</p> : <BlogList posts={filteredPosts} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingSearching_on_post;
