
import Layout from '../../Layout/Layout'

const Contact = () => {
    return (
        <Layout>
            <div className="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="section-title text-left">
                                <h5 className="section-sub-title">CONTACT US</h5>
                                <h1 className="section-main-title">Make an Online Appoinemnt Booking</h1>
                                <h1 className="section-main-title">For Business Planing.</h1>
                            </div>
                            <div className="contact_from_box">
                                <form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form_box">
                                                <input type="text" name="name" placeholder="Your Name *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box">
                                                <input type="email" name="email" placeholder="Your E-Mail *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box">
                                                <input type="text" name="subject" placeholder="Subject *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box">
                                                <input type="text" name="phone" placeholder="Phone *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_box">
                                                <textarea name="message" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} />
                                            </div>
                                            <div className="quote_button">
                                                <button className="btn" type="submit">SENS NOW <i className="bi bi-arrow-right" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div id="status" className="error" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-box">
                                <div className="contact-video-icon">
                                    <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://www.youtube.com/watch?v=Wx48y_fOfiY">Play</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Contact
