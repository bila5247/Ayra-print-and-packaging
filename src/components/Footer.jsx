import React from "react";
import footer from "../assets/www.biotechpackages.com/images/footer.png";
import LOGO from "../assets/www.biotechpackages.com/logo.png";
import White from "../assets/www.biotechpackages.com/images/icons/bottomwhite.png";
import Arrow from "../assets/www.biotechpackages.com/images/icons/arrow.png";
import Group53 from "../assets/www.biotechpackages.com/images/Group53.png";
import Group54 from "../assets/www.biotechpackages.com/images/Group54.png";
import Group55 from "../assets/www.biotechpackages.com/images/Group55.png";

const Footer = () => {
  return (
    <>
      <div className="main-footer-one">
        <div className="footer_bg">
          <img
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="background"
            src={footer}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              objectFit: "cover",
              objectPosition: "center center",
              color: "transparent",
            }}
          />
        </div>

        <div className="foot_data">
          <div className="container">
            <div className="footer_main_heading">
              <h5>Let’s create something amazing</h5>
              <div
                style={{
                  display: "flex",
                  width: "fit-content",
                  margin: "auto",
                }}
              >
                <a href="#">
                  <h3 className="hover-underline-animation zoom_in">Let's talk.</h3>
                </a>
              </div>
            </div>
            <div className="col_section row">
              <div className="set_padding col-lg-4 col-md-6">
                <a href="#">
                  <img
                    alt="Biotech Logo Image"
                    loading="lazy"
                    width="153"
                    height="116"
                    decoding="async"
                    data-nimg="1"
                    className="logo"
                    src={LOGO}
                    style={{ color: "transparent", width: "50%" }}
                  />
                </a>
                <p className="footer_para">
                  We are a Ayra Printing and Packaging Company that specializes
                  in custom product packaging and custom label printing. We are
                  passionate about helping our clients create packaging that is
                  not only beautiful but also functional.
                </p>
              </div>
              <div className="unordered_list set_padding hides col-lg-2 col-md-6">
                <h3>Quick Links</h3>
                <ul>
                  <a href="/">
                    <li>Home</li>
                  </a>
                  <a href="/Abot">
                    <li>About us</li>
                  </a>
                  <a href="/Custo">
                    <li>Custom Packaging</li>
                  </a>
                  <a href="/Contac">
                    <li>Contact us</li>
                  </a>
                  <a href="/Sticke">
                    <li>Stickers & Label</li>
                  </a>
                </ul>
              </div>
              <div className="unordered_list set_padding hides col-lg-2 col-md-6">
                <h3>Company</h3>
                <ul>
                  <a href="#">
                    <li>Culture and Values</li>
                  </a>
                  <a href="/Caree">
                    <li>Career</li>
                  </a>
                  <a href="#">
                    <li>FAQs</li>
                  </a>
                  <a href="#">
                    <li>Privacy Policy</li>
                  </a>
                </ul>
              </div>
              <div className="mobile_view">
                <div className="upper_mobile_menu">
                  <div className="mobile_menu">
                    <h3>Quick Links</h3>
                    <div>
                      <img
                        loading="lazy"
                        width="14.7"
                        height="8.4"
                        decoding="async"
                        data-nimg="1"
                        src={White}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <hr className="line" />
                  <div className="unordered_list para4">
                    <ul>
                      <a href="/">
                        <li>Home</li>
                      </a>
                      <a href="/Abot">
                        <li>About us</li>
                      </a>
                      <a href="/Custo">
                        <li>Custom Packaging</li>
                      </a>
                      <a href="/Contac">
                        <li>Contact us</li>
                      </a>
                      <a href="/Sticke">
                        <li>Stickers & Label</li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="upper_mobile_menu">
                  <div className="mobile_menu">
                    <h3>Company</h3>
                    <div>
                      <img
                        loading="lazy"
                        width="8.4"
                        height="14.7"
                        decoding="async"
                        data-nimg="1"
                        src={Arrow}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <hr className="line" />
                  <div className="unordered_list para5">
                    <ul>
                      <a href="#">
                        <li>Culture and Values</li>
                      </a>
                      <a href="/Caree">
                        <li>Career</li>
                      </a>
                      <a href="#">
                        <li>FAQs</li>
                      </a>
                      <a href="#">
                        <li>Privacy Policy</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="subscribe_section set_padding mobile_subscribe col-lg-4 col-md-6">
                <form>
                  <h3>Subscribe our newsletter to stay in touch</h3>
                  <input
                    name="email"
                    className="footer_input"
                    type="email"
                    placeholder="Enter your email"
                    value=""
                  />
                  <div>
                    <button type="submit" className="footer_btn_subscribe">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="icon_image">
              <a
                href="https://www.facebook.com/BiotechPackagesLahore"
                target="_blank"
              >
                <img
                  alt="Facebook Logo Image"
                  loading="lazy"
                  width="35"
                  height="35"
                  decoding="async"
                  data-nimg="1"
                  src={Group53}
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://www.instagram.com/biotechpackagespvt/"
                target="_blank"
              >
                <img
                  alt="Instagram Logo Image"
                  loading="lazy"
                  width="35"
                  height="35"
                  decoding="async"
                  data-nimg="1"
                  src={Group54}
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/biotechpackages-pvt-ltd/"
                target="_blank"
              >
                <img
                  alt="LinkedIn Logo Image"
                  loading="lazy"
                  width="35"
                  height="35"
                  decoding="async"
                  data-nimg="1"
                  src={Group55}
                  style={{ color: "transparent" }}
                />
              </a>
            </div>
            <hr />
            <p className="copyright">
              © 2023 Ayra Printing and Packaging. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
