import React, { useRef } from 'react';
import testBg from '../../assets/test-thumb.png';
import slideShape from '../../assets/slide-shape.png';
import testQuote from '../../assets/testi-quote.png';
import { ArrowDownFromLine, ArrowUpToLine } from 'lucide-react';

const Testimoninal = () => {
  // Create a ref to the splide__list div
  const listRef = useRef(null);

  // Function to scroll up
  const handleScrollUp = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: -100, // Adjust the value as needed for smooth scrolling
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll down
  const handleScrollDown = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 100, // Adjust the value as needed for smooth scrolling
        behavior: 'smooth',
      });
    }
  };

  const testimonials = [
    {
      rating: 5,
      description: "Proactively whiteboard one-to-one total linkage for multimedia based ideas. Synergistically evolve equity invested web services with performance-based success.",
      reviewsCount: "200+"
    },
    {
      rating: 5,
      description: "Synergistically evolve equity invested web services and performance-based B2B scenarios for a prospective solutek agency.",
      reviewsCount: "200+"
    },
    {
      rating: 5,
      description: "Revolutionize end-to-end methodologies, enhancing client experience and engagement with cutting-edge strategies.",
      reviewsCount: "200+"
    },
    {
      rating: 5,
      description: "Revolutionize end-to-end methodologies, enhancing client experience and engagement with cutting-edge strategies.",
      reviewsCount: "200+"
    },
    {
      rating: 5,
      description: "Revolutionize end-to-end methodologies, enhancing client experience and engagement with cutting-edge strategies.",
      reviewsCount: "200+"
    },
    // Add more testimonials here if needed
  ];

  return (
    <div className="testimonial-area style-four">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title text-left">
              <h6 className="section-sub-title">client review</h6>
              <h1 className="section-main-title">Customized Solutions to</h1>
              <h1 className="section-main-title">Meet Client <span>Needs.</span></h1>
              <p>Solution is a long established fact that a reader will be distracted the reada
                content of a page when looking at layout the point.</p>
            </div>
            <div className="testi-thumb">
              <img src={testBg} alt="thumb" />
              <div className="testi-autor">
                <h4 className="testi-user-name">Brandon A. Vela
                  <span>ui Designer</span>
                </h4>
              </div>
              <div className="slide-shape text-white">
                <div className="slide-shape-inner">
                  <div className='ps-4  rounded-circle cursor-pointer' onClick={handleScrollUp}>
                    <ArrowUpToLine className='bg-orange  rounded-circle'  />
                  </div>
                  <img src={slideShape} alt="shape" />
                  <div className='ps-4  rounded-circle cursor-pointer' onClick={handleScrollDown}>
                    <ArrowDownFromLine className='bg-orange rounded-circle' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <section className="splide testi-h ">
                <div className="splide__track">
                  <div
                    className="splide__list   testi-heigh"
                    ref={listRef}
                    style={{ maxHeight: '600px', overflowY: 'auto', overflowX: 'hidden' }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div className="splide__slide  " key={index}>
                        <div className="col-lg-12 ">
                          <div className="testi-box ">
                            <div className="testimonial-single-box">
                              <div className="testi-user-rating">
                                <ul className="testi-rating">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <li key={i}><i className="bi bi-star-fill" /></li>
                                  ))}
                                </ul>
                              </div>
                              <div className="testi-text">
                                <p className="testi-desc">{testimonial.description}</p>
                              </div>
                              <div className="testi-review-user">
                                <div className="testi-quote-icon">
                                  <img src={testQuote} alt="quote" />
                                </div>
                                <h3>From <span>{testimonial.reviewsCount}</span> reviews</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoninal;
