import { useState } from "react";
import { FaInstagram, FaLinkedin, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import "../styles/contact-us.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitting(false);
        setFormData({
          username: "",
          phone: "",
          email: "",
          company: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      details: "+8801518-900571",
      link: "tel:+8801518900571",
    },
    {
      icon: "✉️",
      title: "Email",
      details: "sobuj@ecogreentex.eu.com",
      link: "mailto:sobuj@ecogreentex.eu.com",
    },
    {
      icon: "📍",
      title: "Bangladesh Office",
      details: "Rashid Court, House-4, Road-7, Sector 3, Uttara, Dhaka",
    },
    {
      icon: "📍",
      title: "China Office",
      details: "Paojiang Industrial Park, Shaoxing 312000, Zhejiang, China",
    },
  ];
  return (
    <section className="contact-page">
      <div className="contact-page-container">
        {/* Header Section */}
        <div className="contact-page-header">
          <div className="contact-page-badge">
            <span className="contact-page-badge-icon">✦</span>
            GET IN TOUCH
          </div>
          <h1 className="contact-page-title">
            Global Sourcing.
            <span className="contact-page-title-highlight">

              Local Expertise.
            </span>
          </h1>
          <p className="contact-page-subtitle">
            Partner with an ISO-certified buying house dedicated to ethical
            apparel sourcing and uncompromised quality assurance. From design to
            final shipment, we bridge the gap between global fashion brands and
            Bangladesh's premier manufacturing facilities.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="contact-page-grid">
          {/* Left Column - Contact Info */}
          <div className="contact-page-info">
            <h2 className="contact-page-info-title">Contact Information</h2>
            <p className="contact-page-info-subtitle">
              Reach out to us through any of the following channels
            </p>

            <div className="contact-page-info-list">
              {contactInfo.map((item, index) => (
                <div className="contact-page-info-item" key={index}>
                  <div className="contact-page-info-icon">{item.icon}</div>
                  <div className="contact-page-info-content">
                    <h4 className="contact-page-info-label">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="contact-page-info-value">
                        {item.details}
                      </a>
                    ) : (
                      <p className="contact-page-info-value">{item.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="contact-page-social">
              <h4 className="contact-page-social-title">Follow Us</h4>
              <div className="contact-page-social-icons">
                <a
                  href="#"
                  className="contact-page-social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="contact-page-social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="contact-page-social-link"
                  aria-label="Facebook"
                >
                  <FaSquareFacebook />
                </a>
                <a
                  href="#"
                  className="contact-page-social-link"
                  aria-label="Twitter"
                >
                  <FaSquareXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-page-form-wrapper">
            <div className="contact-page-form-card">
              <h2 className="contact-page-form-title">
                Request A Sourcing Proposal
              </h2>
              <p className="contact-page-form-subtitle">
                Fill in the details below and our team will get back to you
                within 24 hours.
              </p>

              <form className="contact-page-form" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="contact-page-form-group">
                  <label className="contact-page-form-label">
                    <span className="contact-page-label-icon">👤</span>
                    Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your full name"
                    value={formData.username}
                    onChange={handleChange}
                    className="contact-page-form-input"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="contact-page-form-group">
                  <label className="contact-page-form-label">
                    <span className="contact-page-label-icon">📱</span>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-page-form-input"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="contact-page-form-group">
                  <label className="contact-page-form-label">
                    <span className="contact-page-label-icon">📧</span>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-page-form-input"
                    required
                  />
                </div>

                {/* Company Field */}
                <div className="contact-page-form-group">
                  <label className="contact-page-form-label">
                    <span className="contact-page-label-icon">🏢</span>
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="contact-page-form-input"
                  />
                </div>

                {/* Message Field */}
                <div className="contact-page-form-group">
                  <label className="contact-page-form-label">
                    <span className="contact-page-label-icon">💬</span>
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your sourcing requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-page-form-textarea"
                    rows="4"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="contact-page-form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact-page-spinner"></span>
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <span className="contact-page-submit-arrow">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
