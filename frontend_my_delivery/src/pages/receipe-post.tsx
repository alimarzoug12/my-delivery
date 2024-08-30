import React from 'react';

const RecipePost: React.FC = () => {
  return (
    <div>
      {/* Preloader */}
      <div id="preloader">
        <i className="circle-preloader"></i>
        <img src="img/core-img/salad.png" alt="" />
      </div>

      {/* Search Wrapper */}
      <div className="search-wrapper">
        <div className="close-btn"><i className="fa fa-times" aria-hidden="true"></i></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#" method="post">
                <input type="search" name="search" placeholder="Type any keywords..." />
                <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
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
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Mega Menu</a>
                        <div className="megamenu">
                          <ul className="single-mega cn-col-4">
                            <li className="title">Category</li>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="blog-post.html">Blog Post</a></li>
                            <li><a href="receipe-post.html">Receipe Post</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="elements.html">Elements</a></li>
                          </ul>
                          {/* Additional categories omitted for brevity */}
                        </div>
                      </li>
                      <li><a href="receipe-post.html">Recipes</a></li>
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

      {/* Breadcrumb Area */}
      <div className="breadcumb-area bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/breadcumb3.jpg)' }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-text text-center">
                <h2>Recipe</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Recipe Post Area */}
      <div className="receipe-post-area section-padding-80">
        {/* Recipe Post Search */}
        <div className="receipe-post-search mb-80">
          <div className="container">
            <form action="#" method="post">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <select name="select1" id="select1">
                    <option value="1">All Recipes Categories</option>
                    <option value="1">All Recipes Categories 2</option>
                    <option value="1">All Recipes Categories 3</option>
                    <option value="1">All Recipes Categories 4</option>
                    <option value="1">All Recipes Categories 5</option>
                  </select>
                </div>
                <div className="col-12 col-lg-3">
                  <select name="select1" id="select2">
                    <option value="1">All Recipes Categories</option>
                    <option value="1">All Recipes Categories 2</option>
                    <option value="1">All Recipes Categories 3</option>
                    <option value="1">All Recipes Categories 4</option>
                    <option value="1">All Recipes Categories 5</option>
                  </select>
                </div>
                <div className="col-12 col-lg-3">
                  <input type="search" name="search" placeholder="Search Recipes" />
                </div>
                <div className="col-12 col-lg-3 text-right">
                  <button type="submit" className="btn delicious-btn">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Recipe Slider */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="receipe-slider owl-carousel">
                <img src="img/bg-img/bg5.jpg" alt="" />
                <img src="img/bg-img/bg5.jpg" alt="" />
                <img src="img/bg-img/bg5.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Content Area */}
        <div className="receipe-content-area">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="receipe-headline my-5">
                  <span>April 05, 2018</span>
                  <h2>Vegetarian Cheese Salad</h2>
                  <div className="receipe-duration">
                    <h6>Prep: 15 mins</h6>
                    <h6>Cook: 30 mins</h6>
                    <h6>Yields: 8 Servings</h6>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="receipe-ratings text-right my-5">
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <a href="#" className="btn delicious-btn">For Beginners</a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-8">
                {/* Single Preparation Step */}
                <div className="single-preparation-step d-flex">
                  <h4>01.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                {/* Single Preparation Step */}
                <div className="single-preparation-step d-flex">
                  <h4>02.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                {/* Single Preparation Step */}
                <div className="single-preparation-step d-flex">
                  <h4>03.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                {/* Single Preparation Step */}
                <div className="single-preparation-step d-flex">
                  <h4>04.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
              </div>

              {/* Ingredients */}
              <div className="col-12 col-lg-4">
                <div className="ingredients">
                  <h4>Ingredients</h4>
                  {/* Custom Checkbox */}
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">4 Tbsp (57 gr) butter</label>
                  </div>
                  {/* Custom Checkbox */}
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                    <label className="custom-control-label" htmlFor="customCheck2">2 large eggs</label>
                  </div>
                  {/* Custom Checkbox */}
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                    <label className="custom-control-label" htmlFor="customCheck3">2 yogurt containers granulated sugar</label>
                  </div>
                  {/* Custom Checkbox */}
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck4" />
                    <label className="custom-control-label" htmlFor="customCheck4">1 vanilla or plain yogurt, 170g container</label>
                  </div>
                  {/* Custom Checkbox */}
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck5" />
                    <label className="custom-control-label" htmlFor="customCheck5">2 yogurt containers unbleached white flour</label>
                  </div>
                  {/* Custom Checkbox */}
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck6" />
                    <label className="custom-control-label" htmlFor="customCheck6">1.5 yogurt containers milk</label>
                  </div>
                  {/* Custom Checkbox */}
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck7" />
                    <label className="custom-control-label" htmlFor="customCheck7">1/4 tsp cinnamon</label>
                  </div>
                  {/* Custom Checkbox */}
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck8" />
                    <label className="custom-control-label" htmlFor="customCheck8">1 cup fresh blueberries</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="section-heading text-left">
                  <h3>Leave a Comment</h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="contact-form-area">
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <input type="text" className="form-control" id="name" placeholder="Name" />
                      </div>
                      <div className="col-12 col-lg-6">
                        <input type="email" className="form-control" id="email" placeholder="E-mail" />
                      </div>
                      <div className="col-12">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      </div>
                      <div className="col-12">
                        <textarea name="message" className="form-control" id="message" cols={30} rows={10} placeholder="Message"></textarea>
                      </div>
                      <div className="col-12">
                        <button className="btn delicious-btn mt-30" type="submit">Post Comments</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recipe Post Area End */}

      {/* Follow Us Instagram Area */}
      <div className="follow-us-instagram">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Follow Us on Instagram</h5>
            </div>
          </div>
        </div>
        {/* Instagram Feeds */}
        <div className="insta-feeds d-flex flex-wrap">
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta1.jpg" alt="" />
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>

          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta2.jpg" alt="" />
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>

          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta3.jpg" alt="" />
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>

          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta4.jpg" alt="" />
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>

          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta5.jpg" alt="" />
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>

          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta6.jpg" alt="" />
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>

          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta7.jpg" alt="" />
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>
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
              {/* Footer Logo */}
              <div className="footer-logo">
                <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
              </div>
              {/* Copyright */}
              <p>
                Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Area End */}
    </div>
  );
};

export default RecipePost;
