import Image from "next/image";

export const Contact2 = () => {
  return (
    <section className="ed-contact ed-contact--style2 section-gap pt-0 position-relative">
      <div className="container ed-container">
        <div className="row">
          <div className="col-12">
            <div className="ed-contact__inner">
              {/* Contact Image  */}
              <div className="ed-contact__img">
                <Image
                  width={620}
                  height={620}
                  sizes="100vw"
                  style={{ width: "620px", height: "620px" }}
                  src="/assets/images/contact/contact-img.png"
                  alt="contact-img"
                />
              </div>
              {/* Contact Form  */}
              <div className="ed-contact__form">
                <div className="ed-contact__form-head">
                  <span className="ed-contact__form-sm-title">CONTACT US</span>
                  <h3 className="ed-contact__form-big-title ed-split-text right">
                    Have questions? Contact <br />
                    with us today
                  </h3>
                </div>
                <form
                  action="#"
                  method="post"
                  className="ed-contact__form-main"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you? Feel free to get in touch!"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {" "}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      I agree to the&nbsp;Privacy Policy.{" "}
                    </label>
                  </div>
                  <div className="ed-contact__form-btn">
                    <button type="submit" className="ed-btn">
                      Send Message
                      <i className="fi fi-rr-arrow-small-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
