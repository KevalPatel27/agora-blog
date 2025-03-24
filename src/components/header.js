import React from "react";
import './header.css';

const header = () => {


  return (

    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="../assets/Images/Vector.png" alt="logo" />
          </div>
          <div className="menu">
            <div className="nav-toggle" onClick={""}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="overlay" id="overlay" onClick={""}></div>
            <ul className="handling-menu" id="menuList">
              <li className="menu_dropdown first-li">
                <a href="#">
                  Solution
                  <img
                    src="../assets/Images/arrow-head.svg"
                    alt="arrow-head"
                    aria-hidden="true"
                  />
                </a>
                <div className="drop-container">
                  <div className="drop-cnt">
                    <div className="drop-cnt-title">
                      <h2>Workflows</h2>
                    </div>
                    <div className="drop-cnt-content">
                      <ul>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/solution/briefcaase.png"
                                alt="fundraising"
                              />
                            </span>
                            <div className="text">
                              <span className="title">
                                Fundraising and onboarding
                              </span>
                              <span className="subtitle">
                                Raise capital faster and easier
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/solution/user-check.png"
                                alt="investor"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Investor experience</span>
                              <span className="subtitle">
                                Best investing experience
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/solution/dataflow.png"
                                alt="investment"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Investment management</span>
                              <span className="subtitle">Accelerate growth</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/solution/coin-swap.png"
                                alt="accounting"
                              />
                            </span>
                            <div className="text">
                              <span className="title">
                                Integrated accounting services
                              </span>
                              <span className="subtitle">
                                Streamline financial management
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="drop-cnt">
                    <div className="drop-cnt-title">
                      <h2>Who we serve</h2>
                    </div>
                    <div className="drop-cnt-content">
                      <ul>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/solution/briefcaase.png"
                                alt="general partner"
                              />
                            </span>
                            <div className="text">
                              <span className="title">General Partner</span>
                              <span className="subtitle">
                                Streamline investment management
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/solution/message-chat-circle.png"
                                alt="investor relations"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Investor relations</span>
                              <span className="subtitle">
                                Simplify investor management
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/solution/pie-chart.png"
                                alt="finance team"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Finance team</span>
                              <span className="subtitle">
                                Automate financial management
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu_dropdown">
                <a href="#">
                  Platform
                  <img
                    src="../assets/Images/arrow-head.svg"
                    alt="arrow-head"
                    aria-hidden="true"
                  />
                </a>
                <div className="drop-container">
                  <div className="drop-cnt">
                    <div className="drop-cnt-title">
                      <h2>Fundraising</h2>
                    </div>
                    <div className="drop-cnt-content">
                      <ul>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/fundraising/fundraising_1.png"
                                alt="general partner"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Overview</span>
                              <span className="subtitle">Raise capital faster</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/fundraising/fundraising_2.png"
                                alt="investor relations"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Data rooms</span>
                              <span className="subtitle">
                                Market offerings proffessionaly
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/fundraising/fundraising_3.png"
                                alt="finance team"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Digital subscriptions</span>
                              <span className="subtitle">
                                Effortless digital subscription
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/fundraising/fundraising_4.png"
                                alt="finance team"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Accreditations</span>
                              <span className="subtitle">
                                Easy investor accreditation
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="drop-cnt">
                    <div className="drop-cnt-title">
                      <h2>Investment</h2>
                    </div>
                    <div className="drop-cnt-content">
                      <ul>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/investment/platform_1.png"
                                alt="general partner"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Overview</span>
                              <span className="subtitle">Raise capital faster</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/investment/platform_2.png"
                                alt="general partner"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Overview</span>
                              <span className="subtitle">
                                Streamline investment management
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/investment/platform_3.png"
                                alt="general partner"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Cap table</span>
                              <span className="subtitle">
                                Manage cap tables effortlessly
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/investment/platform_4.png"
                                alt="investor relations"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Distributions</span>
                              <span className="subtitle">
                                Automate distributions and payments
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/investment/platform_5.png"
                                alt="finance team"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Capital calls</span>
                              <span className="subtitle">
                                Streamline you capital calls
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/investment/platform_6.png"
                                alt="finance team"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Waterfall automation</span>
                              <span className="subtitle">
                                Simplify waterfall calculations
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/investment/platform_7.png"
                                alt="finance team"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Debt funds</span>
                              <span className="subtitle">
                                Seamless debt fund management
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/solution/pie-chart.png"
                                alt="finance team"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Open-end funds</span>
                              <span className="subtitle">
                                Manage open-ended funds easily
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="drop-cnt">
                    <div className="drop-cnt-title">
                      <h2>Relationship</h2>
                    </div>
                    <div className="drop-cnt-content">
                      <ul>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/relationship/relationship_1.png"
                                alt="general partner"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Overview</span>
                              <span className="subtitle">
                                Elevate relationship management
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/relationship/relationship_2.png"
                                alt="general partner"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Investor CRM</span>
                              <span className="subtitle">
                                Streamline investor relationships
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/relationship/relationship_3.png"
                                alt="general partner"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Investor Portal</span>
                              <span className="subtitle">
                                Elevate your investor experience
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/relationship/relationship_4.png"
                                alt="investor relations"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Investor reporting</span>
                              <span className="subtitle">
                                Simplify investor reporting
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon">
                              <img
                                src="../assets/Images/dropdown/platform/relationship/relationship_5.png"
                                alt="finance team"
                              />
                            </span>
                            <div className="text">
                              <span className="title">Document management</span>
                              <span className="subtitle">
                                Manage documents effortlessly
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="drop-cnt-divider">
                    <div className="drop-cnt">
                      <div className="drop-cnt-title">
                        <h2>Payments</h2>
                      </div>
                      <div className="drop-cnt-content">
                        <ul>
                          <li>
                            <a href="#">
                              <span className="icon">
                                <img
                                  src="../assets/Images/dropdown/platform/payment/payment_1.png"
                                  alt="general partner"
                                />
                              </span>
                              <div className="text">
                                <span className="title">ACH payments</span>
                                <span className="subtitle">
                                  Transfer directly from the platform
                                </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon">
                                <img
                                  src="../assets/Images/dropdown/platform/payment/payment_2.png"
                                  alt="general partner"
                                />
                              </span>
                              <div className="text">
                                <span className="title">Cross-border payments</span>
                                <span className="subtitle">
                                  Streamline intl. money transfers
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="drop-cnt">
                      <div className="drop-cnt-title">
                        <h2>Accounting services</h2>
                      </div>
                      <div className="drop-cnt-content">
                        <ul>
                          <li>
                            <a href="#">
                              <span className="icon">
                                <img
                                  src="../assets/Images/dropdown/platform/account/accounting_1.png"
                                  alt="general partner"
                                />
                              </span>
                              <div className="text">
                                <span className="title">Tax operations</span>
                                <span className="subtitle">
                                  Simplify tax season with Agora
                                </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon">
                                <img
                                  src="../assets/Images/dropdown/platform/account/accounting_2.png"
                                  alt="general partner"
                                />
                              </span>
                              <div className="text">
                                <span className="title">Bookkeeping services</span>
                                <span className="subtitle">
                                  Expert bookkeeping services
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu_dropdown">
                <a href="#">Pricing</a>
              </li>
              <li className="menu_dropdown">
                <a href="#">
                  Customer stories
                  <img
                    src="../assets/Images/arrow-head.svg"
                    alt="arrow-head"
                    aria-hidden="true"
                  />
                </a>
                <div className="drop-container drop-cnt-customer">
                  <div className="drop-cnt">
                    <div className="drop-cnt-title">
                      <h2>Customer stories</h2>
                    </div>
                    <div className="drop-cnt-content">
                      <p>Case studies</p>
                      <p>Onboarding</p>
                      <p>Customer success</p>
                    </div>
                  </div>
                  <div className="drop-cnt-divider drop-cnt-customer">
                    <div className="drop-cnt-title">
                      <h2>Featured</h2>
                    </div>
                    <div className="drop-cnt-img">
                      <img
                        src="../assets/Images/dropdown/customer/customer.webp"
                        alt="featured-1"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu_dropdown">
                <a href="#">
                  Resources
                  <img
                    src="../assets/Images/arrow-head.svg"
                    alt="arrow-head"
                    aria-hidden="true"
                  />
                </a>
                <div className="drop-container drop-cnt-resources">
                  <div className="drop-cnt">
                    <div className="drop-cnt-title">
                      <h2>Resources</h2>
                    </div>
                    <div className="drop-cnt-content">
                      <p>Blog</p>
                      <p>Product updates</p>
                      <p>Podcast</p>
                      <p>Learning Center</p>
                    </div>
                  </div>
                  <div className="drop-cnt-divider drop-cnt-customer">
                    <div className="drop-cnt-title">
                      <h2>Featured</h2>
                    </div>
                    <div className="drop-cnt-img">
                      <img
                        src="../assets/Images/dropdown/customer/resource_company.png"
                        alt="featured-1"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu_dropdown last-li">
                <a href="#">
                  Company
                  <img
                    src="../assets/Images/arrow-head.svg"
                    alt="arrow-head"
                    aria-hidden="true"
                  />
                </a>
                <div className="drop-container drop-cnt-company">
                  <div className="drop-cnt">
                    <div className="drop-cnt-title">
                      <h2>Company</h2>
                    </div>
                    <div className="drop-cnt-content">
                      <p>About us</p>
                      <p>Careers</p>
                      <p>Partnerships</p>
                      <p>News and press</p>
                      <p>Contact us</p>
                    </div>
                  </div>
                  <div className="drop-cnt-divider drop-cnt-customer">
                    <div className="drop-cnt-title">
                      <h2>Featured</h2>
                    </div>
                    <div className="drop-cnt-img">
                      <img
                        src="../assets/Images/dropdown/customer/resource_company.png"
                        alt="featured-3"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="btn demo-btn modal-toggle">
            <span className="btn-text">Get a demo</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
