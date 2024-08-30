import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const Index: React.FC = () => {
  return (
    <div>
      {/* Preloader */}
      <div id="preloader">
        <i className="circle-preloader"></i>
        <img src="img/core-img/salad.png" alt="" />
      </div>

      {/* Search Wrapper */}
      <div className="search-wrapper">
        <div className="close-btn">
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#" method="post">
                <input type="search" name="search" placeholder="Type any keywords..." />
                <button type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Header Area */}
      <header className="header-area">
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
              {/* Breaking News */}
              <div className="col-12 col-sm-6">
                <div className="breaking-news">
                  <div id="breakingNewsTicker" className="ticker">
                    <ul>
                      <li><a href="#">Hello World!</a></li>
                      <li><a href="#">Welcome to Colorlib Family.</a></li>
                      <li><a href="#">Hello Delicious!</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Top Social Info */}
              <div className="col-12 col-sm-6">
                <div className="top-social-info text-right">
                  <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar Area */}
        <div className="delicious-main-menu">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav className="classy-navbar justify-content-between" id="deliciousNav">
                <a className="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler"><span></span><span></span><span></span></span>
                </div>
                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                  </div>
                  <div className="classynav">
                    <ul>
                      <li className="active"><a href="index.html">Home</a></li>
                      <li><a href="#">Pages</a>
                        <ul className="dropdown">
                          <li><a href="index.html">Home</a></li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="blog-post.html">Blog Post</a></li>
                          <li><a href="receipe-post.html">Receipe Post</a></li>
                          <li><a href="contact.html">Contact</a></li>
                          <li><a href="elements.html">Elements</a></li>
                          <li><a href="#">Dropdown</a>
                            <ul className="dropdown">
                              <li><a href="index.html">Home</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="blog-post.html">Blog Post</a></li>
                              <li><a href="receipe-post.html">Receipe Post</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="elements.html">Elements</a></li>
                              <li><a href="#">Dropdown</a>
                                <ul className="dropdown">
                                  <li><a href="index.html">Home</a></li>
                                  <li><a href="about.html">About Us</a></li>
                                  <li><a href="blog-post.html">Blog Post</a></li>
                                  <li><a href="receipe-post.html">Receipe Post</a></li>
                                  <li><a href="contact.html">Contact</a></li>
                                  <li><a href="elements.html">Elements</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Mega Menu</a>
                        <div className="megamenu">
                          <ul className="single-mega cn-col-4">
                            <li className="title">Catagory</li>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="blog-post.html">Blog Post</a></li>
                            <li><a href="receipe-post.html">Receipe Post</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="elements.html">Elements</a></li>
                          </ul>
                          <ul className="single-mega cn-col-4">
                            <li className="title">Catagory</li>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="blog-post.html">Blog Post</a></li>
                            <li><a href="receipe-post.html">Receipe Post</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="elements.html">Elements</a></li>
                          </ul>
                          <ul className="single-mega cn-col-4">
                            <li className="title">Catagory</li>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="blog-post.html">Blog Post</a></li>
                            <li><a href="receipe-post.html">Receipe Post</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="elements.html">Elements</a></li>
                          </ul>
                          <div className="single-mega cn-col-4">
                            <div className="receipe-slider owl-carousel">
                              <a href="#"><img src="img/bg-img/bg1.jpg" alt="" /></a>
                              <a href="#"><img src="img/bg-img/bg6.jpg" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li><a href="receipe-post.html">Receipies</a></li>
                      <li><a href="receipe-post.html">4 Vegans</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <div className="search-btn">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header Area End */}

      {/* Hero Area */}
      <section className="hero-area">
        <OwlCarousel className="hero-slides owl-carousel">
          {/* Single Hero Slide */}
          <div className="single-hero-slide bg-img" style={{ backgroundImage: 'url(img/bg-img/bg1.jpg)' }}>
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                    <h2 data-animation="fadeInUp" data-delay="300ms">Delicious Homemade Burger</h2>
                    <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                    <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Receipe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add other hero slides here */}
          {/* Example of another slide */}
          <div className="single-hero-slide bg-img" style={{ backgroundImage: 'url(img/bg-img/bg6.jpg)' }}>
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                    <h2 data-animation="fadeInUp" data-delay="300ms">Delicious Homemade Burger</h2>
                    <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                    <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Receipe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
      {/* Hero Area End */}

      {/* Top Category Area */}
      <section className="top-catagory-area section-padding-80-0">
        <div className="container">
          <div className="row">
            {/* Top Category Area */}
            <div className="col-12 col-lg-6">
              <div className="single-top-catagory">
                <img src="img/bg-img/bg2.jpg" alt="" />
                <div className="top-cta-content">
                  <h3>Strawberry Cake</h3>
                  <h6>Simple &amp; Delicious</h6>
                  <a href="receipe-post.html" className="btn delicious-btn">See Full Receipe</a>
                </div>
              </div>
            </div>
            {/* Top Category Area */}
            <div className="col-12 col-lg-6">
              <div className="single-top-catagory">
                <img src="img/bg-img/bg3.jpg" alt="" />
                <div className="top-cta-content">
                  <h3>Chinese Noodles</h3>
                  <h6>Simple &amp; Delicious</h6>
                  <a href="receipe-post.html" className="btn delicious-btn">See Full Receipe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top Category Area End */}

      {/* Best Recipe Area */}
      <section className="best-receipe-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>The best Recipes</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Best Recipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r1.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Sushi Easy Recipe</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Add other best recipes here */}
          </div>
        </div>
      </section>
      {/* Best Recipe Area End */}

      {/* CTA Area */}
      <section className="cta-area bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/bg4.jpg)' }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="cta-content text-center">
                <h2>Gluten Free Recipes</h2>
                <p>Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie...</p>
                <a href="#" className="btn delicious-btn">Discover all the recipes</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area End */}

      {/* Follow Us Instagram Area */}
      <div className="follow-us-instagram">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Follow Us on Instagram</h5>
            </div>
          </div>
        </div>
        <div className="insta-feeds d-flex flex-wrap">
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta1.jpg" alt="" />
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>
          {/* Add other Instagram feeds here */}
        </div>
      </div>
      {/* Follow Us Instagram Area End */}

      {/* Footer Area */}
      <footer className="footer-area">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
              {/* Footer Social Info */}
              <div className="footer-social-info text-right">
                <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
              <div className="footer-logo">
                <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
              </div>
              <p>Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Area End */}

      {/* JavaScript Files */}
      <script src="js/jquery/jquery-2.2.4.min.js"></script>
      <script src="js/bootstrap/popper.min.js"></script>
      <script src="js/bootstrap/bootstrap.min.js"></script>
      <script src="js/plugins/plugins.js"></script>
      <script src="js/active.js"></script>
    </div>
  );
};

export default Index;
