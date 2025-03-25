import React, { useEffect, useState } from "react";
import BlogList from "../components/blogList.js";
import "./ListingSearching_on_post.css";

const ListingSearching_on_post = () => {
  const Lists = [
    "All Categories",
    "AI and automation",
    "Accounting",
    "Alternative investments",
    "Awards and recognitions",
    "Bookkeeping",
    "CRE investment management",
    "Company news",
    "Debt fund management",
    "Document management",
    "Fundraising",
    "Investment strategies",
    "Investor CRM",
    "Investor Portal",
    "Investor relations",
    "Market trends and insights",
    "Operational efficiency",
    "Payments",
    "Press releases",
    "Real estate technology",
    "Regulatory compliance",
    "Reporting",
    "Security",
    "Tax",
    "Tax and compliance",
    "Waterfall automation",
  ];

  const [allPosts, setAllPosts] = useState([]); // Store all fetched posts
  const [filteredPosts, setFilteredPosts] = useState([]); // Store filtered posts
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState(""); // Store search input

  useEffect(() => {
    const fetchposts = async () => {
      try {
        const response = await fetch(
          "https://websiteapi.agorareal.com/wp-json/agora/v1/posts-by-category-slug-or-id?tags=&category=blog&event=loader&pathval=blog&per_page=40&page=1"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setAllPosts(result.all_post_list);
        setFilteredPosts(result.all_post_list); // Initially set filteredPosts same as allPosts
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchposts();
  }, []);

  // Function to filter posts based on category & search
  const filterPosts = (categoryIndex, searchText) => {
    let updatedPosts = allPosts;

    // Filter by category
    if (categoryIndex !== 0) {
      const selectedCategory = Lists[categoryIndex];
      updatedPosts = updatedPosts.filter(post =>
        post.tag_list.includes(selectedCategory)
      );
    }

    // Filter by search text
    if (searchText.trim() !== "") {
      updatedPosts = updatedPosts.filter(post =>
        post.post_title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredPosts(updatedPosts);
  };

  // Handle category click
  const handleCategoryClick = (index) => {
    setActiveIndex(index);
    filterPosts(index, searchValue); // Apply category and search filter together
  };

  // Handle search input
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    filterPosts(activeIndex, value); // Apply category and search filter together
  };

  return (
    <section className="post-listing-with-filter-section">
      <div className="container">
        <div className="postItem">
          {/* Category List */}
          <ul className="listing">
            {Lists.map((list, index) => (
              <li
                key={list}
                className={`list-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleCategoryClick(index)}
              >
                {list}
              </li>
            ))}
          </ul>

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
