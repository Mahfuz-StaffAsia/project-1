import React from 'react';
const Header = () => {
    return (
        <div>

            <div className="preloader">
            <div id="handle-preloader" className="handle-preloader">
                <div className="animation-preloader">
                <div className="spinner" />
                <div className="txt-loading">
                    <span data-text-preloader="N" className="letters-loading">
                    N
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                    A
                    </span>
                    <span data-text-preloader="X" className="letters-loading">
                    X
                    </span>
                    <span data-text-preloader="L" className="letters-loading">
                    L
                    </span>
                    <span data-text-preloader="Y" className="letters-loading">
                    Y
                    </span>
                </div>
                </div>  
            </div>
            </div>
        
            <div id="search-popup" className="search-popup">
            <div className="close-search"><span>Close</span></div>
            <div className="popup-inner">
                <div className="overlay-layer" />
                <div className="search-form">
                <form method="post" action="index.html">
                    <div className="form-group">
                    <fieldset>
                        <input type="search" className="form-control" name="search-input" defaultValue placeholder="Search Here" required />
                        <input type="submit" defaultValue="Search Now!" className="theme-btn style-four" />
                    </fieldset>
                    </div>
                </form>
                <h3>Recent Search Keywords</h3>
                <ul className="recent-searches">
                    <li><a href="index.html">Finance</a></li>
                    <li><a href="index.html">Idea</a></li>
                    <li><a href="index.html">Service</a></li>
                    <li><a href="index.html">Growth</a></li>
                    <li><a href="index.html">Plan</a></li>
                </ul>
                </div>
            </div>
            </div>
        
            <header className="main-header style-one home-1">
            <div className="auto-container">
                <div className="row clearfix">
                <div className="col-lg-3 col-md-12 col-sm-12 logo-column">
                    <div className="logo-box style-two">
                    <figure className="logo"><a href="/"><img src="assets/images/logo-6.png" alt="" /></a></figure>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 outer-column">
                    <div className="outer-box">
                    <div className="header-top clearfix">
                        <div className="top-right pull-right clearfix">
                        <div className="support"><i className="flaticon-music" /><span>Start your project today</span><a href="tel:0055567890">+00 555 67 890</a></div>
                        <ul className="social-links clearfix">
                            <li><a href="index.html"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="index.html"><i className="fab fa-twitter" /></a></li>
                            <li><a href="index.html"><i className="fab fa-google-plus-g" /></a></li>
                            <li><a href="index.html"><i className="fab fa-skype" /></a></li>
                        </ul>
                        <div className="search-box-outer">
                            <form action="index.html" method="post" className="search-btn">
                            <button type="button" className="search-toggler"><i className="flaticon-search" />Search</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="header-upper clearfix">
                        <div className="menu-area pull-right clearfix">
                    
                        <div className="mobile-nav-toggler">
                            <i className="icon-bar" />
                            <i className="icon-bar" />
                            <i className="icon-bar" />
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className="current dropdown"><a href="">Home</a>
                                <ul>
                                    <li><a href="index.html">Data Science<i className="flaticon-next" /></a></li>
                                    <li><a href="/ai">Artificial intelligence<i className="flaticon-next" /></a></li>
                                    <li><a href="index-3.html">Machine Learning<i className="flaticon-next" /></a></li>
                                    <li><a href="index-4.html">Business Intelligence<i className="flaticon-next" /></a></li>
                                    <li><a href="index-5.html">User Analysis<i className="flaticon-next" /></a></li>
                                    <li><a href="index-boxed.html">Home Boxed<i className="flaticon-next" /></a></li>
                                    <li><a href="index-rtl.html">Home RTL<i className="flaticon-next" /></a></li>
                                    <li><a href="index-onepage.html">Home OnePage<i className="flaticon-next" /></a></li>
                                    <li className="dropdown"><a href="index.html">Header Styles</a>
                                    <ul>
                                        <li><a href="index.html">Header Style One<i className="flaticon-next" /></a></li>
                                        <li><a href="index-2.html">Header Style Two<i className="flaticon-next" /></a></li>
                                        <li><a href="index-3.html">Header Style Three<i className="flaticon-next" /></a></li>
                                        <li><a href="index-4.html">Header Style Four<i className="flaticon-next" /></a></li>
                                        <li><a href="index-5.html">Header Style Five<i className="flaticon-next" /></a></li>
                                    </ul>
                                    </li>
                                </ul>
                                </li> 
                                <li className="dropdown"><a href="/aboutUs">Company</a>
                                <ul>
                                    <li><a href="/aboutUs">About Company<i className="flaticon-next" /></a></li>
                                    <li><a href="/team">Meet Our Team<i className="flaticon-next" /></a></li>
                                    <li><a href="/contact">Contact Us<i className="flaticon-next" /></a></li>
                                </ul>
                                </li>
                                <li className="dropdown"><a href="/courses">Courses</a>
                                <ul>
                                    <li><a href="/courses">All Services<i className="flaticon-next" /></a></li>
                                    <li><a href="service-details.html">Service Details<i className="flaticon-next" /></a></li>
                                </ul>
                                </li>
                                <li className="dropdown"><a href="index.html">Works</a>
                                <ul>
                                    <li><a href="project.html">Project 2 Columns<i className="flaticon-next" /></a></li>
                                    <li><a href="project-2.html">Project 3 Columns<i className="flaticon-next" /></a></li>
                                    <li><a href="project-3.html">Case Studies<i className="flaticon-next" /></a></li>
                                    <li><a href="project-details.html">Case Details<i className="flaticon-next" /></a></li>
                                </ul>
                                </li>
                                <li className="dropdown"><a href="/blog">Blog</a>
                                <ul>
                                    <li><a href="/blog">Classic Grid<i className="flaticon-next" /></a></li>
                                    <li><a href="blog-2.html">Classic With S/B<i className="flaticon-next" /></a></li>
                                    <li><a href="blog-3.html">Modern With S/B<i className="flaticon-next" /></a></li>
                                    <li><a href="blog-4.html">Masonry<i className="flaticon-next" /></a></li>
                                    <li><a href="/singleBlog">Single Post<i className="flaticon-next" /></a></li>
                                </ul>
                                </li>
                                <li className="dropdown"><a href="index.html">Elements</a>
                                <div className="megamenu">
                                    <div className="row clearfix">
                                    <div className="col-lg-3 column">
                                        <ul>
                                        <li><h4>Elements 1</h4></li>
                                        <li><a href="service-element-1.html">Service 01</a></li>
                                        <li><a href="service-element-2.html">Service 02</a></li>
                                        <li><a href="about-element-1.html">About 01</a></li>
                                        <li><a href="about-element-2.html">About 02</a></li>
                                        <li><a href="about-element-3.html">About 03</a></li>
                                        <li><a href="about-element-4.html">About 04</a></li>
                                        <li><a href="about-element-5.html">About 05</a></li>
                                        <li><a href="about-element-6.html">About 06</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 column">
                                        <ul>
                                        <li><h4>Elements 2</h4></li>
                                        <li><a href="work-element-1.html">Work 01</a></li>
                                        <li><a href="work-element-2.html">Work 02</a></li>
                                        <li><a href="skills-element-1.html">Skills 01</a></li>
                                        <li><a href="skills-element-2.html">Skills 02</a></li>
                                        <li><a href="case-element-1.html">Case 01</a></li>
                                        <li><a href="case-element-2.html">Case 02</a></li>
                                        <li><a href="case-element-3.html">Case 03</a></li>
                                        <li><a href="case-element-4.html">Case 04</a></li>
                                        </ul>
                                    </div> 
                                    <div className="col-lg-3 column">
                                        <ul>
                                        <li><h4>Elements 3</h4></li>
                                        <li><a href="counter-element-1.html">Fun Fact 01</a></li>
                                        <li><a href="counter-element-2.html">Fun Fact 02</a></li>
                                        <li><a href="counter-element-3.html">Fun Fact 03</a></li>
                                        <li><a href="counter-element-4.html">Fun Fact 04</a></li>
                                        <li><a href="news-element-1.html">News 01</a></li>
                                        <li><a href="news-element-2.html">News 02</a></li>
                                        <li><a href="news-element-3.html">News 03</a></li>
                                        <li><a href="news-element-4.html">News 04</a></li>
                                        </ul>
                                    </div> 
                                    <div className="col-lg-3 column">
                                        <ul>
                                        <li><h4>Elements 4</h4></li>
                                        <li><a href="choose-element-1.html">Choose Us 01</a></li>
                                        <li><a href="choose-element-2.html">Choose Us 02</a></li>
                                        <li><a href="choose-element-3.html">Choose Us 03</a></li>
                                        <li><a href="team-element-1.html">Team 01</a></li>
                                        <li><a href="team-element-2.html">Team 02</a></li>
                                        <li><a href="team-element-3.html">Team 03</a></li>
                                        <li><a href="team-element-4.html">Team 04</a></li>
                                        <li><a href="technology-element-1.html">Technology</a></li>
                                        </ul>
                                    </div>                                            
                                    </div>                                                
                                </div>
                                </li>
                                <li className="dropdown"><a href="index.html">Pages</a>
                                <ul>
                                    <li><a href="error.html">404<i className="flaticon-next" /></a></li>
                                    <li><a href="coming-soon.html">Coming Soon<i className="flaticon-next" /></a></li>
                                    <li><a href="faq.html">Faq’s<i className="flaticon-next" /></a></li>
                                </ul>
                                </li>
                            </ul>
                            </div>
                        </nav>
                        <div className="btn-box">
                            <a href="index.html" className="theme-btn style-one">Get in Touch</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="sticky-header">
                <div className="auto-container clearfix">
                <figure className="logo-box"><a href="index.html"><img src="assets/images/small-logo.png" alt="" /></a></figure>
                <div className="menu-area">
                    <nav className="main-menu clearfix">
            
                    </nav>
                    <div className="btn-box">
                    <a href="index.html" className="theme-btn style-one">Get in Touch</a>
                    </div>
                </div>
                </div>
            </div>
            </header>


        </div>
    );
};

export default Header;