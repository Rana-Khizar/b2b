import React from 'react'
import Logo from "../../assets/web_logo.png"
import { BiChevronDown, BiArrowToRight, BiMenu } from "react-icons/bi";
import "./HeaderCSS.css"
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <>
      <header>
        <nav id="sticky-header" className="navbar navbar-expand-lg navbar-dark bg-navbar  fixed-top">
          {/* <div className="container-fluid"> */}
          {/* Logo Section */}
          <Link className="navbar-brand" to="/" title="solutek">
            <img
              src={Logo}
              alt="logo"
              className="img-fluid logo"
              style={{ width: '100px' }} // Adjust width for a medium size
            />
          </Link>

          {/* Toggler for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse justify-content-center bg-navbar p-3" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0 nav_scroll d-flex justify-content-center ">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT US
                </Link>
                <ul className="dropdown-menu sub-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/dkc">DKC Legacy</Link></li>
                  <li><Link className="dropdown-item" to="/partner">Meet the Team</Link></li>
                  <li><Link className="dropdown-item" to="#">Mission & Vision</Link></li>
                  <li><Link className="dropdown-item" to="/brand">The Brand Identity</Link></li>
                  <li><Link className="dropdown-item" to="#">Global Presence</Link></li>
                  <li><Link className="dropdown-item" to="#">Industry Focu</Link></li>
                  <li><Link className="dropdown-item" to="#">Membership</Link></li>
                  <li><Link className="dropdown-item" to="#">Certification</Link></li>
                  <li><Link className="dropdown-item" to="#">Ownership Portfolio</Link></li>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  OUR PARTNERSHIPS
                </Link>
                <ul className="dropdown-menu sub-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">E-Commerce</Link></li>
                  <li><Link className="dropdown-item" to="#">Consignment</Link></li>
                  <li><Link className="dropdown-item" to="#">Exhibition</Link></li>
                  <li><Link className="dropdown-item" to="#">Brick & Mortar</Link></li>
                  <li><Link className="dropdown-item" to="#">Import Export</Link></li>
                  <li><Link className="dropdown-item" to="#">Franchise</Link></li>
                </ul>
              </li>
              <li className="nav-item">

                <Link className="nav-link" to="/multistep">PARTNERSHIP PROCESS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">PARTNERSHIP REGISTRATION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">SUBMIT DOCUMENT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">APPLICATION STATUS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">BOOK APPOINTMENT</Link>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </nav>
      </header>



      {/* new Navbar */}
      {/* <nav id='sticky-header' className="navbar navbar-expand-lg navbar-dark bg-navbar solutek_nav_manu   fixed-top ">
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/" title="solutek">
            <img
              src={Logo}
              alt="logo"
              className="img-fluid logo"
              style={{ width: '100px' }} // Adjust width for a medium size
            />
          </Link>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

        
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 nav_scroll">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">ABOUT US</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  OUR PARTNERSHIPS <BiChevronDown />
                </Link>
                <ul className=" sub-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">E-Commerce</Link></li>
                  <li><Link className="dropdown-item" to="#">Brick & Mortar</Link></li>
                  <li><Link className="dropdown-item" to="#">Import Export</Link></li>
                  <li><Link className="dropdown-item" to="#">Consignment</Link></li>
                  <li><Link className="dropdown-item" to="#">Exhibition</Link></li>
                  <li><Link className="dropdown-item" to="#">Franchise</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">PARTNERSHIP PROCESS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">PARTNERSHIP REGISTRATION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">SUBMIT DOCUMENT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">APPLICATION STATUS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">BOOK APPOINTMENT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* bootstrap */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}







      {/* <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
        <div className="mobile-menu">
          <nav className="solutek_menu">
            <ul className="nav_scroll">
              <li><a href="#">Home <i className="bi bi-chevron-down" /></a>
                <ul className="sub-menu">
                  <li><a href="index.html">Home Version 01</a></li>
                  <li><a href="index-2.html">Home Version 02</a></li>
                  <li><a href="index-3.html">Home Version 03</a></li>
                </ul>
              </li>
              <li><a href="#">Company <i className="bi bi-chevron-down" /></a>
                <ul className="sub-menu">
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="team.html">Our Team</a></li>
                  <li><a href="team-details.html">Team Details</a></li>
                  <li><a href="testimonial.html">Testimonials</a></li>
                  <li><a href="project.html">Project</a></li>
                  <li><a href="project-details.html">Project Details</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="faq.html">Faq</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </li>
              <li><a href="project.html">Portfolio</a></li>
              <li><a href="#">Service <i className="bi bi-chevron-down" /></a>
                <ul className="sub-menu">
                  <li><a href="service.html">Service</a></li>
                  <li><a href="service-details.html">Service Details</a></li>
                </ul>
              </li>
              <li><a href="#">Blog <i className="bi bi-chevron-down" /></a>
                <ul className="sub-menu">
                  <li><a href="blog-grid.html">Blog Grid</a></li>
                  <li><a href="blog-2column.html">Blog 2Column</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div> */}





    </>
  )
}
