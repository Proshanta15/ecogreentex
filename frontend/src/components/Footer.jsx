import { FaMapMarkerAlt, FaMapPin } from "react-icons/fa";
import { FaArrowRight, FaInstagram, FaLinkedin, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { IoMailUnreadOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import "../styles/footer.css";


const Footer = () => {
  return (
    <div className="container">
      <div className="contact-showcase">
        <div className="contact-inner">
          <div className="contact-details">
            <h3>
              <FaMapPin style={{ marginRight: "10px", color: "#D4AF37", fontSize: "23px" }} />
              Visit & Connect
            </h3>
            <div className="info-row">
              <FaMapMarkerAlt style={{ marginRight: "10px", color: "green", fontSize: "23px" }} />
              <p>
                Rashid Court, House-4, Road-7
                <br />Sector-3, Uttara, Dhaka
              </p>
            </div>
            <div className="info-row">
              <FiPhone style={{ marginRight: "10px", color: "green", fontSize: "23px" }} />
              <p>
                <a href="tel:+8801518900571">+8801518-900571</a>
                <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>

                  (Hotline)
                </span>
              </p>
            </div>
            <div className="info-row">
              <IoMailUnreadOutline style={{ marginRight: "10px", color: "green", fontSize: "23px" }} />
              <p>
                <a href="mailto:sobuj@ecogreentex.eu.com">
                  sobuj@ecogreentex.eu.com
                </a>
              </p>
            </div>
            <div className="info-row">
              <IoMdTime style={{ marginRight: "10px", color: "green", fontSize: "23px" }} />
              <p>Sun–Thu: 9:00 AM – 6:00 PM (BST)</p>
            </div>
          </div>
          <div className="contact-highlight">
            <h4>Let's build your next collection</h4>
            <p>
              From denim to high-street casuals, activewear to loungewear — we
              reduce lead times while ensuring transparency and premium quality.
              Request a sourcing consultation.
            </p>
            <Link to="/contact" className="btn-modern">
              Get in touch <FaArrowRight style={{ marginLeft: "10px" }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links & Social */}
      <div className="quick-links-modern">
        <div className="links-group">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaSquareFacebook />
          </a>
          <a href="#" aria-label="X">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyright">
        <span>© {new Date().getFullYear()} Eco Green Tex Ltd. All Rights Reserved.</span>
        <span>
          Developed with ⚡ by <a href="#">Sourcehub</a> · Modern Sourcing
          Solutions
        </span>
      </div>
    </div>
  );
};

export default Footer;
