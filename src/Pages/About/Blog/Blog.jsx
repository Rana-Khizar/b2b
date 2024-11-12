import React from 'react'
import blog1 from "../../../assets/blog1.png"
import blog2 from "../../../assets/blog2.png"
import blog3 from "../../../assets/blog3.png"
// import blog4 from "../../../assets/blog1.png"

const Blog = () => {
  return (
    <>
 <div className="blog-area">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="section-title text-left">
          <h5 className="section-sub-title">OUR LATEST BLOG</h5>
          <h1 className="section-main-title">Exploring Its Potential in</h1>
          <h1 className="section-main-title">Various <span>Industries.</span></h1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="project-right">
          <div className="solutek-btn">
            {/* <a href="blog-grid.html">VIEW  all post
              <div className="solutek-hover-btn hover-bx" />
              <div className="solutek-hover-btn hover-bx2" />
              <div className="solutek-hover-btn hover-bx3" />
              <div className="solutek-hover-btn hover-bx4" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-5 col-lg-6 col-md-6">
        <div className="blog-singele-box">
          <div className="blog-thumb">
            <img src={blog1} alt="blog1" />
          </div>
          <div className="blog-content">
            <div className="blog-date">
              <h4><i className="bi bi-calendar2-check" />20 June 2024 <span><i className="bi bi-chat-left-text" />Comment-05</span></h4>
            </div>
            <h3 className="blog-title"><a href="blog-details.html">Leveraging Descriptive Solutions for Business Growth.</a></h3>
            <p className="blog-tex">Appropriatel promote enterprise-wide vortals throuh in information
              without equity best  revolutioniz</p>
            <div className="blog-btn">
              {/* <a href="blog-details.html">READ MORE<i className="bi bi-arrow-right" /></a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-7 col-lg-6 col-md-6">
        <div className="blog-singele-box-tow">
          <div className="blog-thumb-tow">
            <img src={blog2} alt="blog1" />
          </div>
          <div className="blog-content-tow">
            <div className="blog-date-tow">
              <h4><i className="bi bi-calendar2-check" />20 June 2024 <span><i className="bi bi-chat-left-text" />Comment-05</span></h4>
            </div>
            <h3 className="blog-title-two"><a href="blog-details.html">How to Create Modern Web Site For Your Business..</a></h3>
            <p className="blog-tex-tow">Appropriatel promote enterprise-wide throuh in information
              without best  revolutioniz</p>
            <div className="blog-btn-tow">
              <a href="blog-details.html">READ MORE<i className="bi bi-arrow-right" /></a>
            </div>
          </div>
        </div>
        <div className="blog-singele-box-tow">
          <div className="blog-thumb-tow">
            <img src={blog3} alt="blog1" />
          </div>
          <div className="blog-content-tow">
            <div className="blog-date-tow">
              <h4><i className="bi bi-calendar2-check" />20 June 2024 <span><i className="bi bi-chat-left-text" />Comment-05</span></h4>
            </div>
            <h3 className="blog-title-two"><a href="blog-details.html">How to Create Modern Web Site For Your Business..</a></h3>
            <p className="blog-tex-tow">Appropriatel promote enterprise-wide throuh in information
              without best  revolutioniz</p>
            <div className="blog-btn-tow">
              <a href="blog-details.html">READ MORE<i className="bi bi-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Blog
