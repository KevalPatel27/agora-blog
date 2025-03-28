import "./footer.css";
import "./demno.css";
import React, { useState, useEffect, useRef } from "react";

const Footer = ({ themeSettting, loading }) => {
  const arrowIcon = "../assets/Images/arrow-head.svg";
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
        submenuRef.current.style.maxHeight =
          submenuRef.current.scrollHeight + "px";
        submenuRef.current.style.opacity = "1";
      }, 10); 
    }
  }, [openSubmenu]);

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
              <h3>{themeSettting?.news_letter_title}</h3>
              <div className="input-group">
                {loading ? null : (
                  <>
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
                  </>
                )}
              </div>
            </div>
            <div className="badges">
              {themeSettting?.badges_list?.map((badge) => (
                <div key={badge.badge_image.img_alt} className="badge">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={badge.badge_image.img_full || "/placeholder.svg"}
                    alt={badge.badge_image.img_alt}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="footer-links">
            {themeSettting?.footer_menu_list?.map((section) => (
              <div
                key={section.footer_main_menu_custom_link.title}
                className={`footer-section ${
                  section.footer_sub_menu_section_list ? "mobile-menu" : ""
                } ${
                  activeSection === section.footer_main_menu_custom_link.title
                    ? "active"
                    : ""
                }`}
              >
                <h3
                  onClick={() =>
                    handleClickMobile(
                      section.footer_main_menu_custom_link.title
                    )
                  }
                >
                  {section.footer_main_menu_custom_link.title}
                </h3>
                <ul>
                  {(section.footer_sub_menu_section_list || [])?.map(
                    (submenu) => (
                      <div
                        key={submenu.footer_sub_menu_custom_link.title}
                        className="wrapper-submenu"
                      >
                        <li
                          onClick={(e) => {
                            if (submenu.footer_sub_menu_list) {
                              e.preventDefault();
                            }
                            handleClick(
                              submenu.footer_sub_menu_custom_link.title
                            );
                          }}
                        >
                          <a href={submenu.footer_sub_menu_custom_link.url}>
                            {submenu.footer_sub_menu_custom_link.title}
                          </a>
                          {submenu.footer_sub_menu_list ? (
                            <img src={arrowIcon} />
                          ) : null}
                        </li>
                        {openSubmenu ===
                          submenu.footer_sub_menu_custom_link.title &&
                          submenu.footer_sub_menu_list && (
                            <ul
                              ref={submenuRef}
                              className="submenu-li"
                              style={submenuStyles}
                            >
                              {(submenu.footer_sub_menu_list || []).map(
                                (innerItem) => (
                                  <li
                                    key={innerItem.inner_menu_custom_link.title}
                                    className="submenu-item"
                                  >
                                    <a
                                      href={
                                        innerItem.inner_menu_custom_link.url
                                      }
                                    >
                                      {innerItem.inner_menu_custom_link.title}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                      </div>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-socialmedia">
          <div className="container innerwrapper">
            <div className="socialmedia-content">
              <div className="Follow-Us">
                <h3>{themeSettting?.follow_us_title}</h3>
              </div>
              <div className="badges badges-hover">
                {themeSettting?.follow_social_list?.map((pages) => (
                  <div key={pages.follow_social_icon.img_alt} className="badge">
                    <a
                      href={pages.follow_social_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "flex" }}
                    >
                      <img
                        style={{ width: "auto", height: "20px" }}
                        src={pages.follow_social_icon.img_full}
                        alt={pages.follow_social_icon.img_alt}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="setter">
              <p>{themeSettting?.partnership_content}</p>
            </div>
          </div>
        </div>
        <div className="footer-legalLinks">
          <div className="legalLinks-Content container">
            <div className="logo">
              <a
                href={themeSettting?.footer_logo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt={themeSettting?.footer_logo?.img_alt}
                  src={themeSettting?.footer_logo?.img_full}
                />
              </a>
            </div>
            <div className="legalLink">
              {themeSettting?.footer_quick_links?.map((link, index) => (
                <div
                  key={link.quick_link_like_custom_link.title}
                  className="link"
                  style={{
                    borderRight:
                      index < themeSettting.footer_quick_links.length - 1
                        ? "0.2px solid #FFFFFF"
                        : "none",
                    paddingRight:
                      index < themeSettting.footer_quick_links.length - 1
                        ? "14px"
                        : "0px",
                    textAlign: "center",
                  }}
                >
                  <a href={link.quick_link_like_custom_link.url}>
                    {link.quick_link_like_custom_link.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-copyRight">
          <div className="container innerwrapper">
            {loading ? null :<p>
              © 2025 All rights reserved by Agora Real Estate Technologies US
              Inc.
            </p>}
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
