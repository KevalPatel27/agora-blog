import React from "react";
import "./header.css";

const header = ({ themeSettting, loading }) => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#">
              <img src={themeSettting?.header_logo.img_full} alt={themeSettting?.header_logo.img_alt} style={{width:"100%"}} />
            </a>
          </div>
          <div className="menu">
            <div className="nav-toggle" onClick={""}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="overlay" id="overlay" onClick={""}></div>
            <ul className="handling-menu" id="menuList">
              {themeSettting?.header_parent_menu?.map((header) => (
                <li
                  className="menu_dropdown"
                  key={header?.parent_menu_custom?.title}
                >
                  <a href={header?.parent_menu_custom?.url}>
                    {header?.parent_menu_custom?.title}
                    {header.sub_menu_section_list !== false ? (
                      <img
                        src="../assets/Images/arrow-head.svg"
                        alt="arrow-head"
                        aria-hidden="true"
                      />
                    ) : null}
                  </a>
                  <div
                    className={
                      header.sub_menu_section_list !== false
                        ? "drop-container"
                        : null
                    }
                  >
                    {header.sub_menu_section_list !== false &&
                      header.sub_menu_section_list.map((submenu) => (
                        <div
                          className="drop-cnt"
                          key={submenu?.sub_menu_section_title}
                        >
                          <div className="drop-cnt-title">
                            <h2>{submenu?.sub_menu_section_title}</h2>
                          </div>
                          {submenu?.parent_sub_menu_list ? (
                            <div className="drop-cnt-content">
                              <ul>
                                {submenu.parent_sub_menu_list.map(
                                  (innermenu) => (
                                    <li
                                      key={
                                        innermenu?.sub_menu_custom_link?.title
                                      }
                                    >
                                      <a
                                        href={
                                          innermenu?.sub_menu_custom_link?.url
                                        }
                                      >
                                        {innermenu.sub_menu_icon.img_full ? (
                                          <span className="icon">
                                            <img
                                              src={
                                                innermenu?.sub_menu_icon
                                                  ?.img_full
                                              }
                                              alt={
                                                innermenu?.sub_menu_icon
                                                  ?.img_alt
                                              }
                                            />
                                          </span>
                                        ) : (
                                          ""
                                        )}
                                        <div className="text">
                                          <span className="title">
                                            {
                                              innermenu?.sub_menu_custom_link
                                                ?.title
                                            }
                                          </span>
                                          <span className="subtitle">
                                            {innermenu?.sub_menu_sub_title}
                                          </span>
                                        </div>
                                      </a>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          ) : (
                            <div className="drop-cnt-content">
                              <div className=" drop-cnt-img">
                                <img
                                  src={submenu.fetched_recent_posts[0].featured_image}
                                  alt={submenu.fetched_recent_posts[0].title}
                                  style={{
                                    width: "100%",
                                    borderRadius: "12px",
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {loading ? null : 
            <div className="btn demo-btn modal-toggle">
              <span className="btn-text">Get a demo</span> 
            </div>
          }
        </div>
      </div>
    </header>
  );
};

export default header;
