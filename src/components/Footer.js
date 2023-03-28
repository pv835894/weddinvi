import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
const Footer = () => {
  return (
    <>
      <section className="w3l-footer-29-main">
        <div className="footer-29 py-5">
          <div className="container py-lg-4">
            <div className="row footer-top-29">
              <div className="col-lg-6 col-md-6 footer-list-29 footer-1 pr-lg-5">
                <div className="footer-logo mb-4">
                  <Link classNameName="navbar-brand" to="/">
                    <span classNameName="fa">
                      <img
                        src={logo}
                        alt="weddinvi-logo"
                        width="50px"
                        height="50px"
                      />
                    </span>{" "}
                    weddinvi
                  </Link>
                </div>
                <p>
                  It is the leading financial establishment providing
                  high-quality international banking services. Our success is
                  attributed to our loyal customers. We provide reliable
                  services for you.
                </p>
              </div>
              {/* <div className="col-lg-4 col-md-6 col-sm-5 col-5 footer-list-29 footer-2 mt-md-0 mt-5">
                <ul>
                  <h6 className="footer-title-29">Quick Links</h6>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="#blog"> Blog posts</a>
                  </li>
                  <li>
                    <a href="#pricing"> Pricing plans</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                </ul>
              </div> */}
              <div className="col-lg-6 col-md-6 col-sm-7 col-7 footer-list-29 footer-3 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Head Office</h6>
                <p className="mb-3">
                  Y - 2089 Mangolpuri New delhi Delhi - 110083
                </p>
                <p className="mb-2">
                  {" "}
                  <span className="fa fa-phone"></span>{" "}
                  <a href="tel:6387797327">+91 6387797327</a>
                </p>
                <p className="mb-2">
                  <span className="fa fa-envelope-o"></span>{" "}
                  <a href="mailto:weddinvii@gmail.com">weddinvii@gmail.com</a>
                </p>
              </div>
              {/* <div className="col-lg-3 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Latest posts</h6>
                <div className="post1">
                  <a href="#url" className="post-title">
                    7 Banking Services That Can Save Retirees Money
                  </a>
                  <p className="small">September 28, 2020</p>
                </div>
                <div className="post1 mt-4">
                  <a href="#url" className="post-title">
                    Stocks Could Surge 10% between Now And 2020
                  </a>
                  <p className="small">September 28, 2020</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <section className="w3l-copyright text-center">
          <div className="container">
            <div style={{ margin: "0 auto", justifyContent: "center" }}>
              <ul
                className="list-group list-group-horizontal"
                style={{ background: "inherit" }}
              >
                <li
                  className="list-group-item"
                  style={{ background: "none", border: "none" }}
                >
                  <a href="https://youtube.com/@Weddinvi">
                    <span className="fa fa-youtube-play"></span>
                  </a>
                </li>
                <li
                  className="list-group-item"
                  style={{ background: "none", border: "none" }}
                >
                  <a href="https://instagram.com/weddinvi?igshid=ZDdkNTZiNTM=">
                    <span className="fa fa-instagram"></span>
                  </a>
                </li>
                <li
                  className="list-group-item"
                  style={{ background: "none", border: "none" }}
                >
                  <a href="https://twitter.com/weddinvii?t=9yWIIn6ri-g9T7TwkDOQjg&s=08">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li
                  className="list-group-item"
                  style={{ background: "none", border: "none" }}
                >
                  <a href="https://www.facebook.com/profile.php?id=100089804556666&mibextid=ZbWKwL">
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li
                  className="list-group-item"
                  style={{ background: "none", border: "none" }}
                >
                  <a href="https://pin.it/3fgGEhO">
                    <span className="fa fa-pinterest"></span>
                  </a>
                </li>
              </ul>
            </div>
            <p className="copy-footer-29">
              © 2023 Weddinvi Cards. All rights reserved.
            </p>
          </div>

          <button onclick="topFunction()" id="movetop" title="Go to top">
            &#10548;
          </button>
        </section>
      </section>
    </>
  );
};

export default Footer;
