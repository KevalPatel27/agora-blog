import "./footer.css";
import "./demno.css"
import React, { useState, useEffect, useRef, use } from "react";

const Footer = () => {
  const arrowIcon = "../assets/Images/arrow-head.svg";
  const solutions = [
    { name: "Workflow", link: "#" },
    { name: "Who we serve", link: "#" },
  ];

  const badges = [
    { id: 1, path: "../assets/Images/badges/badge-1.png" },
    { id: 2, path: "../assets/Images/badges/badge-2.png" },
    { id: 3, path: "../assets/Images/badges/badge-3.png" },
    { id: 4, path: "../assets/Images/badges/badge-4.png" },
    { id: 5, path: "../assets/Images/badges/badge-5.png" },
    { id: 6, path: "../assets/Images/badges/badge-6.png" },
  ];

  const platform = [
    { name: "Fundraising", link: "#" },
    { name: "Investment Management", link: "#" },
    { name: "Relationship Management", link: "#" },
    { name: "Payments", link: "#" },
    { name: "Accounting Services", link: "#" },
    { name: "Technology", link: "#" },
  ];

  const useCases = [
    { name: "Real estate syndication software", link: "#" },
    { name: "nvestor relations management software", link: "#" },
    { name: "Investor relations CRM", link: "#" },
    { name: "Investor onboarding software", link: "#" },
    { name: "CRE management software", link: "#" },
    { name: "Commercial real estate CRM", link: "#" },
  ];

  const customerStories = [
    { name: "Case studies", link: "#" },
    { name: "Onboarding", link: "#", isNew: true },
    { name: "Customer success", link: "#" },
  ];

  const resources = [
    { name: "Blog", link: "#" },
    { name: "Product updates", link: "#" },
    { name: "Podcast", link: "#" },
    { name: "Learning Center", link: "#" },
    { name: "Compare", link: "#" },
  ];

  const company = [
    { name: "About us", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Partnerships", link: "#" },
    { name: "News and press", link: "#" },
    { name: "Contact us", link: "#" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "../assets/Images/Social-Media/Linkedin.svg",
      link: "#",
    },
    {
      name: "Twitter",
      icon: "../assets/Images/Social-Media/Twitter.svg",
      link: "#",
    },
    {
      name: "YouTube",
      icon: "../assets/Images/Social-Media/Youtube.svg",
      link: "#",
    },
    {
      name: "Facebook",
      icon: "../assets/Images/Social-Media/Facebook.svg",
      link: "#",
    },
    {
      name: "Spotify",
      icon: "../assets/Images/Social-Media/Spotify.svg",
      link: "#",
    },
  ];

  const legalLinks = [
    { id: 1, name: "Privacy Policy", link: "#" },
    { id: 2, name: "Cookie Policy", link: "#" },
    { id: 3, name: "Terms and Conditions", link: "#" },
    { id: 4, name: "Payments Terms of Service", link: "#" },
    { id: 5, name: "Business Deposit Account Agreement", link: "#" },
    { id: 6, name: "Electronic Disclosure & Consent", link: "#" },
  ];

  const solutionSubmenu = [
    {
      name: "Workflow",
      submenu: [
        "Fundraising and onboarding",
        "Investor experience",
        "Investment management",
        "Integrated accounting services",
      ],
    },
    {
      name: "Who we serve",
      submenu: ["General Partner", "Investor relations", "Finance team"],
    },
    {
      name: "Fundraising",
      submenu: [
        "Overview",
        "Data rooms",
        "Digital subscriptions",
        "Accreditations",
      ],
    },
    {
      name: "Investment Management",
      submenu: [
        "Overview",
        "Cap table",
        "Distributions",
        "Capital calls",
        "Waterfall automation",
        "Debt funds",
        "Open-end funds",
      ],
    },
    {
      name: "Relationship Management",
      submenu: [
        "Overview",
        "Investor CRM",
        "Investor Portal",
        "Investor reporting",
        "Document management",
      ],
    },
    {
      name: "Payments",
      submenu: ["ACH payments", "Cross-border payments"],
    },
    {
      name: "Accounting Services",
      submenu: ["Tax operations", "Bookkeeping services"],
    },
    {
      name: "Technology",
      submenu: ["Security", "Integrations"],
    },
  ];

  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const submenuRef = useRef(null);
  
  const handleClickMobile = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleClick = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  useEffect(() => {
    if (submenuRef.current) {
      setTimeout(() => {
        // Set the max height to the scroll height of the submenu
        submenuRef.current.style.maxHeight =
          submenuRef.current.scrollHeight + "px";
        submenuRef.current.style.opacity = "1";
      }, 10); // Small delay to allow transition
    }
  }, [openSubmenu]);

  // Define the submenu styles in a variable
  const submenuStyles = {
    transform: "translatex(10px)",
    maxHeight: "0px",
    opacity: 0,
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
  };

  return (
  <>
    <section className="demo">
        <div className="container">
          <div className="demo-cnt">
            <div className="demo-desc">
              <h2>
                Ready to see <br />
                <span>Agora in action?</span>
              </h2>
            </div>
            <div className="demo-btn">
              <div className="btn modal-toggle">
                <span className="btn-text">Book a demo</span>
                <img
                  src="../assets/Images/Union.svg"
                  alt="arrow-head"
                  aria-hidden="true"
                />
              </div>
              <div className="btn modal-toggle">
                <span className="btn-text">See pricing</span>
              </div>
            </div>
          </div>
        </div>
    </section>
    <footer>
      <div className="container">
        <div className="newsletter-content">
          <div className="subscribe">
            <h3>Subscribe to our newsletter</h3>
            <div className="input-group">
              <img src="../assets/Images/Mail-Icon.svg" />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="Email-form"
                >
                <input
                  type="email"
                  id="email"
                  placeholder="Email address*"
                  name="email"
                  inputMode="email"
                  required
                  />
                <button type="submit" className="btn footer">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="badges">
            {badges.map((badge) => (
              <div key={badge.id} className="badge">
                <img
                  src={badge.path || "/placeholder.svg"}
                  alt={`Badge ${badge.id}`}
                  />
              </div>
            ))}
          </div>
        </div>
        <div className="footer-links">
          <div className={`footer-section mobile-menu ${activeSection === "solutions" ? "active" : ""}`}>
            <h3 onClick={() => handleClickMobile("solutions")}>Solutions</h3>
            <ul>
              {solutions.map((item) => (
                <div key={item.name} className="wrapper-submenu">
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.name);
                    }}
                    >
                    <a href={item.link}>{item.name}</a>
                    <img src={arrowIcon} />
                  </li>
                  {openSubmenu === item.name && (
                    <ul
                    ref={submenuRef}
                    className="submenu-li"
                    style={submenuStyles}
                    >
                      {solutionSubmenu
                        .find((subItem) => subItem.name === item.name)
                        ?.submenu.map((subItem, index) => (
                          <li key={index} className="submenu-item">
                            <a href="#">{subItem}</a>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className={`footer-section mobile-menu ${activeSection === "platform" ? "active" : ""}`}>
            <h3 onClick={() => handleClickMobile("platform")}>Platform</h3>
            <ul>
              {platform.map((item) => (
                <div key={item.name} className="wrapper-submenu">
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.name);
                    }}
                    >
                    <a href={item.link}>{item.name}</a>
                    <img src={arrowIcon || "/placeholder.svg"} />
                  </li>
                  {openSubmenu === item.name && (
                    <ul
                    ref={submenuRef}
                    className="submenu-li"
                    style={submenuStyles}
                    >
                      {solutionSubmenu
                        .find((subItem) => subItem.name === item.name)
                        ?.submenu.map((subItem, index) => (
                          <li key={index}>
                            <a href="#">{subItem}</a>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Pricing</h3>
          </div>

          <div className={`footer-section mobile-menu ${activeSection === "Use cases" ? "active" : ""}`}>
            <h3 onClick={() => handleClickMobile("Use cases")}>Use cases</h3>
            <ul>
              {useCases.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={`footer-section mobile-menu ${activeSection === "Customer stories" ? "active" : ""}`}>
            <h3  onClick={() => handleClickMobile("Customer stories")}>Customer stories</h3>
            <ul>
              {customerStories.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                  {item.isNew && <span className="new-badge">coming soon</span>}
                </li>
              ))}
              <li className="privacy">
                <a>
                  Your privacy choice <br />
                  Notice at Collection
                </a>
                <div>
                  <img
                    src="../assets/Images/Your-privacy-choices.png"
                    alt="California Consumer Privacy Act (CCPA) Opt-Out Icon"
                    />
                </div>
              </li>
            </ul>
          </div>

          <div className={`footer-section mobile-menu ${activeSection === "Resources" ? "active" : ""}`}>
            <h3  onClick={() => handleClickMobile("Resources")}>Resources</h3>
            <ul>
              {resources.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`footer-section mobile-menu ${activeSection === "Company" ? "active" : ""}`}>
            <h3  onClick={() => handleClickMobile("Company")}>Company</h3>
            <ul>
              {company.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-socialmedia">
        <div className="container innerwrapper">
          <div className="socialmedia-content">
            <div className="Follow-Us">
              <h3> Follow Us </h3>
            </div>
            <div className="badges badges-hover">
              {socialLinks.map((pages) => (
                <div key={pages.name} className="badge">
                  <img
                    src={pages.icon || "/placeholder.svg"}
                    alt={pages.name}
                    />
                </div>
              ))}
            </div>
          </div>
          <div className="setter">
            <p>
              *Agora is not a bank. Banking services are provided by Thread
              Bank, N.A, Member FDIC. Deposits are FDIC-insured through Thread
              Bank, N.A., Member FDIC. Your funds are FDIC insured up to
              $250,000 through Thread Bank, N.A; Member FDIC.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-legalLinks">
        <div className="legalLinks-Content container">
          <div className="logo">
            <img alt="logo" src="../assets/Images/Vector.svg" />
          </div>
          <div className="legalLink">
            {legalLinks.map((link, index) => (
              <div
              key={link.id}
              className="link"
              style={{
                borderRight:
                index < legalLinks.length - 1
                ? "0.2px solid #FFFFFF"
                : "none",
                paddingRight: index < legalLinks.length - 1 ? "14px" : "0px",
                textAlign: "center",
              }}
              >
                <a href={link.link}>{link.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-copyRight">
        <div className="container innerwrapper">
          <p>
            © 2025 All rights reserved by Agora Real Estate Technologies US Inc.
          </p>
        </div>
      </div>
    </footer>
  </>
  );
};
export default Footer;
