import React from "react";
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import card4 from "./images/card4.png";

const Banner = () => {
  return (
    <section className="w3l-main-slider" id="home">
      <div className="companies20-content">
        <div className="owl-one owl-carousel owl-theme">
          <div className="item">
            <li>
              <div className="slider-info banner-view bg bg2">
                <div className="banner-info">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 banner-info-bg">
                        <h5>The Britest bank card in your wallet </h5>
                        <p className="mt-md-4 mt-3">
                          Our Card is the best option if you are looking for
                          high-quality and reliable banking services. We provide
                          reliable services for you
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="#book"
                        >
                          {" "}
                          Book a card
                        </a>
                        <a
                          className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
                          href="about.html"
                        >
                          Read More
                        </a>
                      </div>
                      <div className="col-lg-5 col-md-8 img offset-lg-1 mt-lg-0 mt-4">
                        <img
                          src={card1}
                          alt="img"
                          className="img-fluid radius-image-curve"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
          <div className="item">
            <li>
              <div className="slider-info  banner-view banner-top1 bg bg2">
                <div className="banner-info">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 banner-info-bg">
                        <h5>#1 Choice for your banking needs </h5>
                        <p className="mt-md-4 mt-3">
                          Our Card is the best option if you are looking for
                          high-quality and reliable banking services. We provide
                          reliable services for you
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="#book"
                        >
                          {" "}
                          Book a card
                        </a>
                        <a
                          className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
                          href="about.html"
                        >
                          Read More
                        </a>
                      </div>
                      <div className="col-lg-5 col-md-8 img offset-lg-1 mt-lg-0 mt-4">
                        <img
                          src={card2}
                          alt="img"
                          className="img-fluid radius-image-curve"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
          <div className="item">
            <li>
              <div className="slider-info banner-view banner-top2 bg bg2">
                <div className="banner-info">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 banner-info-bg">
                        <h5>The Britest bank card in your wallet </h5>
                        <p className="mt-md-4 mt-3">
                          Our Card is the best option if you are looking for
                          high-quality and reliable banking services. We provide
                          reliable services for you
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="#book"
                        >
                          {" "}
                          Book a card
                        </a>
                        <a
                          className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
                          href="about.html"
                        >
                          Read More
                        </a>
                      </div>
                      <div className="col-lg-5 col-md-8 img offset-lg-1 mt-lg-0 mt-4">
                        <img
                          src={card3}
                          alt="img"
                          className="img-fluid radius-image-curve"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
          <div className="item">
            <li>
              <div className="slider-info banner-view banner-top3 bg bg2">
                <div className="banner-info">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 banner-info-bg">
                        <h5>#1 Choice for your banking needs </h5>
                        <p className="mt-md-4 mt-3">
                          Our Card is the best option if you are looking for
                          high-quality and reliable banking services. We provide
                          reliable services for you
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="#book"
                        >
                          {" "}
                          Book a card
                        </a>
                        <a
                          className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
                          href="about.html"
                        >
                          Read More
                        </a>
                      </div>
                      <div className="col-lg-5 col-md-8 img offset-lg-1 mt-lg-0 mt-4">
                        <img
                          src={card4}
                          alt="img"
                          className="img-fluid radius-image-curve"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
