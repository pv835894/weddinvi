import React from "react";

const Footer = () => {
  return (
    <>
      <section class="w3l-footer-29-main">
        <div class="footer-29 py-5">
          <div class="container py-lg-4">
            <div class="row footer-top-29">
              <div class="col-lg-4 col-md-6 footer-list-29 footer-1 pr-lg-5">
                <div class="footer-logo mb-4">
                  <a class="navbar-brand" href="index.html">
                    <span class="fa fa-cc-visa"></span> Bank Card
                  </a>
                </div>
                <p>
                  It is the leading financial establishment providing
                  high-quality international banking services. Our success is
                  attributed to our loyal customers. We provide reliable
                  services for you.
                </p>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-5 col-5 footer-list-29 footer-2 mt-md-0 mt-5">
                <ul>
                  <h6 class="footer-title-29">Quick Links</h6>
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
              </div>
              <div class="col-lg-3 col-md-6 col-sm-7 col-7 footer-list-29 footer-3 mt-lg-0 mt-5">
                <h6 class="footer-title-29">Head Office</h6>
                <p class="mb-3">
                  {" "}
                  Bank Card, 343 banking lane, #2214 cravel street, NY.
                </p>
                <p class="mb-2">
                  {" "}
                  <span class="fa fa-phone"></span>{" "}
                  <a href="tel:+1(21) 234 4567">+1(21) 234 4567</a>
                </p>
                <p class="mb-2">
                  <span class="fa fa-envelope-o"></span>{" "}
                  <a href="mailto:info@mail.com">info@mail.com</a>
                </p>
                <p>
                  <span class="fa fa-support"></span>{" "}
                  <a href="mailto:info@support.com">info@support.com</a>
                </p>
              </div>
              <div class="col-lg-3 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-5">
                <h6 class="footer-title-29">Latest posts</h6>
                <div class="post1">
                  <a href="#url" class="post-title">
                    7 Banking Services That Can Save Retirees Money
                  </a>
                  <p class="small">September 28, 2020</p>
                </div>
                <div class="post1 mt-4">
                  <a href="#url" class="post-title">
                    Stocks Could Surge 10% between Now And 2020
                  </a>
                  <p class="small">September 28, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="w3l-copyright text-center">
          <div class="container">
            <p class="copy-footer-29">
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
