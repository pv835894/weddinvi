import React from "react";
import team1 from "./images/team1.jpg";
import team2 from "./images/team2.jpg";
import team3 from "./images/team3.jpg";
import team4 from "./images/team4.jpg";
import blog2 from "./images/blog2.jpg";
import t1 from "./images/Pankaj_Verma.jpg";
// import t2 from "./images/t2.jpg";
// import t3 from "./images/t3.jpg";

const About = () => {
  return (
    <>
      <section className="w3l-index3" id="about">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="position-relative">
                  <img src={blog2} alt="" className="radius-image img-fluid" />
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-md-5 mt-4 align-self">
                <h3 className="title-big mx-0">
                  We help you to get your best Work Done.
                </h3>
                <p className="mt-md-4 mt-3">
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor
                  sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor
                  sit amet. Lorem ipsum init dolor sit, amet elit. Dolor ipsum
                  it, culpa!
                </p>
                <a
                  className="btn btn-style btn-primary mt-md-5 mt-4"
                  href="about.html"
                >
                  {" "}
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-stats py-5" id="stats">
        <div className="gallery-inner container py-lg-5 py-md-4">
          <div className="row stats-con">
            <div className="col-md-3 col-6 stats_info counter_grid">
              <p className="counter">1869</p>
              <h3>Finished Projects</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid1">
              <p className="counter">12996</p>
              <h3>Working hours</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid mt-md-0 mt-4">
              <p className="counter">1300</p>
              <h3>Happy clients</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid2 mt-md-0 mt-4">
              <p className="counter">1245</p>
              <h3>Issued cards</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="w3l-servicesblock3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="welcome-left">
            <h3 className="title-big mb-md-5 mb-4 mx-auto text-center">
              Bound to give you Prosperity & Confidence
            </h3>
            <div className="grids-area-hny main-cont-wthree-fea row pt-4">
              <div className="col-lg-6 col-md-6 grids-feature">
                <span className="fa fa-line-chart"></span>
                <div className="area-box">
                  <h4>
                    <a href="#feature" className="title-head">
                      Banking Growth
                    </a>
                  </h4>
                  <p className="my-3">
                    Vivamus a ligula quam tesque et libero justo, ultrices in
                    amet. Ut eu leo non. sed amet.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 grids-feature mt-md-0 mt-4">
                <span className="fa fa-university"></span>
                <div className="area-box">
                  <h4>
                    <a href="#feature" className="title-head">
                      Major Productivity
                    </a>
                  </h4>
                  <p className="my-3">
                    Vivamus a ligula quam tesque et libero justo, ultrices in
                    amet. Ut eu leo non. sed amet.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 grids-feature mt-lg-5 mt-4">
                <span className="fa fa-percent"></span>
                <div className="area-box">
                  <h4>
                    <a href="#feature" className="title-head">
                      100% Result
                    </a>
                  </h4>
                  <p className="my-3">
                    Vivamus a ligula quam tesque et libero justo, ultrices in
                    amet. Ut eu leo non. sed amet.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 grids-feature mt-lg-5 mt-4">
                <span className="fa fa-dollar"></span>
                <div className="area-box">
                  <h4>
                    <a href="#feature" className="title-head">
                      Finance investing
                    </a>
                  </h4>
                  <p className="my-3">
                    Vivamus a ligula quam tesque et libero justo, ultrices in
                    amet. Ut eu leo non. sed amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-team py-5" id="team">
        <div className="container py-lg-5 py-md-4 py-2">
          <h3 className="title-big mb-md-5 mb-4 text-center">Met our Team</h3>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img
                    src={t1}
                    alt="team member"
                    className="img-fluid radius-image ceo"
                    style={{ width: "400px !important" }}
                  />
                  <h3 className="title mb-1">Pankaj Verma</h3>
                  <h5 className="title">CEO</h5>
                  {/* <span className="post">CEO</span> */}
                </div>
                {/* <div className="content">
                  <ul className="social">
                    <li>
                      <a href="#" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin"></a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            {/* <div className="col-md-4 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img
                    src={t2}
                    alt="team member"
                    className="img-fluid radius-image"
                  />
                </div>
                <div className="content">
                  <h3 className="title">Alexander</h3>
                  <span className="post">Supervisor</span>
                  <ul className="social">
                    <li>
                      <a href="#" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-4 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img
                    src={t3}
                    alt="team member"
                    className="img-fluid radius-image"
                  />
                </div>
                <div className="content">
                  <h3 className="title">Williams</h3>
                  <span className="post">Manager</span>
                  <ul className="social">
                    <li>
                      <a href="#" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="w3l-clients-1" id="testimonials">
        <div className="cusrtomer-layout py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="heading align-self text-center">
              <h6 className="title-small">Testimonials</h6>
              <h3 className="title-big mb-4">What peoples say</h3>
            </div>
            <div className="testimonial-row py-md-4">
              <div
                id="owl-demo2"
                className="owl-two owl-carousel owl-theme mb-md-3 mb-sm-5 mb-4"
              >
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet int consectetur adipisicing
                          elit. Velita beatae laudantium Quas minima sunt natus
                          tempore, maiores aliquid modi felis vitae facere
                          aperiam sequi optio lacinia id ipsum non velit, culpa.
                          voluptate rem ullam dolore nisi est quasi, doloribus
                          tempora. est elit. Non quae, fugiat ad libero justo
                          sed amet.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <a href="#url" className="testi-img">
                          <img
                            src={team1}
                            alt=""
                            className="radius-image img-fluid"
                          />
                        </a>
                        <div className="peopl align-self">
                          <h3>Dennis wilson</h3>
                          <p className="identity">Customer </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet int consectetur adipisicing
                          elit. Velita beatae laudantium Quas minima sunt natus
                          tempore, maiores aliquid modi felis vitae facere
                          aperiam sequi optio lacinia id ipsum non velit, culpa.
                          voluptate rem ullam dolore nisi est quasi, doloribus
                          tempora. est elit. Non quae, fugiat ad libero justo
                          sed amet.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <a href="#url" className="testi-img">
                          <img
                            src={team2}
                            alt=""
                            className="radius-image img-fluid"
                          />
                        </a>
                        <div className="peopl align-self">
                          <h3>Tommy sakura</h3>
                          <p className="identity">Customer </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet int consectetur adipisicing
                          elit. Velita beatae laudantium Quas minima sunt natus
                          tempore, maiores aliquid modi felis vitae facere
                          aperiam sequi optio lacinia id ipsum non velit, culpa.
                          voluptate rem ullam dolore nisi est quasi, doloribus
                          tempora. est elit. Non quae, fugiat ad libero justo
                          sed amet.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <a href="#url" className="testi-img">
                          <img
                            src={team3}
                            alt=""
                            className="radius-image img-fluid"
                          />
                        </a>
                        <div className="peopl align-self">
                          <h3>Roy Linderson</h3>
                          <p className="identity">Customer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet int consectetur adipisicing
                          elit. Velita beatae laudantium Quas minima sunt natus
                          tempore, maiores aliquid modi felis vitae facere
                          aperiam sequi optio lacinia id ipsum non velit, culpa.
                          voluptate rem ullam dolore nisi est quasi, doloribus
                          tempora. est elit. Non quae, fugiat ad libero justo
                          sed amet.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <a href="#url" className="testi-img">
                          <img
                            src={team4}
                            alt=""
                            className="radius-image img-fluid"
                          />
                        </a>
                        <div className="peopl align-self">
                          <h3>Mike Thyson</h3>
                          <p className="identity">Customer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
