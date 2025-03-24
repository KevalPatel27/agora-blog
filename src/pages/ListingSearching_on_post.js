import React, { useState } from 'react';
import './ListingSearching_on_post.css'

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

  const apiData = [
    {
      image: "",
      title: ["Investment strategies", "CRE investment management"],
      description:
        "What is a multifamily home? Exploring a popular asset class",
      authors: {
        link: "#",
        image: "../assets/Images/blog-author/image.png",
        name: "Asaf Raz",
        date: "Mar 13, 2025",
      },
    },
    {
      image: "",
      title: ["Alternative investments", "Investment strategies"],
      description: "Fast financing: Commercial real estate hard money lenders",
      authors: {
        link: "#",
        image: "../assets/Images/blog-author/image.png",
        name: "Asaf Raz",
        date: "Mar 03, 2025",
      },
    },
    {
      image: "",
      title: ["Awards and recognitions"],
      description: "Celebrating the 2025 Agora Growth Awards winners",
      authors: {
        link: "#",
        image: "../assets/Images/blog-author/image.png",
        name: "Danielle VanHest",
        date: "Feb 25, 2025",
      },
    },
    {
      image: "",
      title: ["Awards and recognitions"],
      description:
        "Agora wins G2's 2025 Best Software Awards for Fastest Growing and Best Real Estate Software",
      authors: {
        link: "#",
        image: "../assets/Images/blog-author/image.png",
        name: "Danielle VanHest",
        date: "Feb 20, 2025",
      },
    },
    {
      image: "",
      title: ["Investment strategies", "Fundraising"],
      description:
        "How real estate equity financing can transform your investment strategy",
      authors: {
        link: "#",
        image: "../assets/Images/blog-author/image.png",
        name: "Asaf Raz",
        date: "Feb 18, 2025",
      },
    },
    {
      image: "",
      title: ["Tax", "Accounting"],
      description:
        "Reimagine your accounting: File your taxes in 14 days with Agora's technology and expert CPAs",
      authors: {
        link: "#",
        image: "../assets/Images/blog-author/image.png",
        name: "Julia Benichou",
        date: "Feb 17, 2025",
      },
    },
    {
      image: "",
      title: ["Fundraising","Market trends and insights"],
      description:
        "2025 CRE Fundraising Market Pulse: Key takeaways and highlights ",
      authors: {
        link: "#",
        image: "../assets/Images/blog-author/image.png",
        name: "Danielle VanHest",
        date: "Feb 17, 2025",
      },
    },
    {
      image: "",
      title: ["Investment strategies"],
      description:
        "15 best commercial real estate liquidity strategies for 2025",
      authors: {
        link: "#",
        image: "../assets/Images/blog-author/image.png",
        name: "Asaf Raz ",
        date: "Feb 12, 2025",
      },
    },
    {
      image: "",
      title: ["Payments"],
      description:
        "Automated distribution payments: The key to smarter investment management",
      authors: {
        link: "#",
        image: "../assets/Images/blog-author/image.png",
        name: "Danielle VanHest",
        date: "Feb 02, 2025",
      },
    },
    {
      image: "Awards and recognitions",
      title: [],
      description:
        "Agora named one of the “20 Hottest PropTech Startups of 2024” by Business Insider  ",
      authors: {
        link: "#",
        image: "../assets/Images/blog-author/image.png",
        name: "Danielle VanHest",
        date: "Jan 30, 2025",
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  return (
    <section className="post-listing-with-filter-section">
      <div className="container">
        <div className="postItem">
          <ul className="listing">
            {Lists.map((list, index) => {
              return (
                <>
                  <li 
                    key={list.id} 
                    className={`list-item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    >
                    {list}
                  </li>
                </>
              );
            })}
          </ul>
          <div className='postListing'>
            <div className="search-wrap">
              <input 
                className='seraching-field' 
                type="text" 
                placeholder='Search articles here' 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button type="search" className='search-icon'>
                <img src="../assets/Images/search-icon.svg" alt="serach Icon"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingSearching_on_post;
