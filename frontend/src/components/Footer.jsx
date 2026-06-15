import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="contact-showcase">
        <div className="contact-inner">
          <div className="contact-details">
            <h3>
              <i
                className="fas fa-map-pin"
                style={{ marginRight: "10px", color: "#D4AF37" }}
              ></i>{" "}
              Visit & Connect
            </h3>
            <div className="info-row">
              <i className="fas fa-location-dot"></i>
              <p>
                House 14, Road 10, Sector 3, Uttara,
                <br /> Dhaka-1230, Bangladesh
              </p>
            </div>
            <div className="info-row">
              <i className="fas fa-phone-alt"></i>
              <p>
                <a href="tel:01711-745512">01711-745512</a>{" "}
                <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                  {" "}
                  (Hotline)
                </span>
              </p>
            </div>
            <div className="info-row">
              <i className="fas fa-envelope"></i>
              <p>
                <a href="mailto:mamun@green-pacific.net">
                  mamun@green-pacific.net
                </a>
              </p>
            </div>
            <div className="info-row">
              <i className="fas fa-clock"></i>
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
            <a href="#" className="btn-modern">
              Get in touch <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links & Social */}
      <div className="quick-links-modern">
        <div className="links-group">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="X">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyright">
        <span>© 2026 Eco Green Tex Ltd. All Rights Reserved.</span>
        <span>
          Developed with ⚡ by <a href="#">Pixelbones</a> · Modern Sourcing
          Solutions
        </span>
      </div>
    </div>
  );
};

export default Footer;
