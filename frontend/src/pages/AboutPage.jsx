import React from "react";
import "../styles/about-us.css";
import Logo from "../assets/logo.png";
import Faq from "../components/Faq";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
  const values = [
    {
      icon: "🤝",
      title: "Integrity & Transparency",
      description:
        "We operate with honesty, accountability, and clear communication at every stage of the sourcing and production process, building trust with our clients and partners.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    },
    {
      icon: "⭐",
      title: "Quality Without Compromise",
      description:
        "From yarn to final shipment, we maintain strict quality standards to ensure every product meets buyer expectations and international requirements.",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
    },
    {
      icon: "🌱",
      title: "Sustainable Sourcing",
      description:
        "We promote compliance, worker safety, environmental responsibility, and ethical manufacturing practices across our supply network.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
    },
    {
      icon: "💪",
      title: "Collaboration & Partnership",
      description:
        "We believe strong relationships drive success. Our teams work closely with clients and factories to achieve shared goals and seamless execution.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    },
    {
      icon: "🚀",
      title: "Continuous Improvement",
      description:
        "We invest in innovation, market insight, and process optimization to adapt to evolving fashion trends and global sourcing demands.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Partner Factories" },
    { number: "25+", label: "Countries Served" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <>
      <section className="about-page">
        <div className="about-page-container">
          {/* Hero Section */}
          <div className="about-page-hero">
            <div className="about-page-hero-content">
              <div className="about-page-hero-text">
                <div className="about-page-hero-badge">
                  <span className="about-page-badge-dot"></span>
                  ISO-CERTIFIED APPAREL SOURCING PARTNER
                </div>
                <h1 className="about-page-hero-title">
                  Connecting Global Fashion Brands
                  <span className="about-page-title-highlight">
                    {" "}
                    With Trusted Manufacturing Excellence
                  </span>
                </h1>
                <p className="about-page-hero-description">
                  Ecogreentex is an ISO certified apparel sourcing house
                  headquartered in Dhaka, Bangladesh, specializing in sourcing,
                  product development, and quality assurance for global fashion
                  brands. With strong operational networks across Bangladesh,
                  China, and Germany, we serve as a strategic bridge between
                  international buyers and carefully vetted manufacturing
                  partners.
                </p>
                <div className="about-page-hero-stats">
                  {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                      <div className="about-page-hero-stat">
                        <span className="about-page-stat-number">{stat.number}</span>
                        <span className="about-page-stat-label">{stat.label}</span>
                      </div>
                      {index < stats.length - 1 && (
                        <div className="about-page-stat-divider"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="about-page-hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&h=600&fit=crop"
                  alt="Apparel Sourcing"
                  className="about-page-hero-image"
                />
                <div className="about-page-floating-card about-page-fc-1">
                  <span className="about-page-fc-icon">🏭</span>
                  <div>
                    <h4>500+</h4>
                    <p>Factories Network</p>
                  </div>
                </div>
                <div className="about-page-floating-card about-page-fc-2">
                  <span className="about-page-fc-icon">🌍</span>
                  <div>
                    <h4>25+</h4>
                    <p>Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="about-page-content">
            <div className="about-page-content-grid">
              <div className="about-page-content-text">
                <div className="about-page-content-badge">ABOUT US</div>
                <h2 className="about-page-content-title">
                  Your Trusted Partner in
                  <span className="about-page-title-highlight">
                    {" "}
                    Global Apparel Sourcing
                  </span>
                </h2>
                <p>
                  Our strength lies in partnering competitive pricing,
                  uncompromised quality, and reliable lead times ranging from 45
                  to 120 days. From sourcing to retail, we deliver to customers
                  from all over the world, ensuring a seamless supply chain —
                  from design development and factory selection to online
                  inspection, final quality control, compliance monitoring, and
                  shipment coordination.
                </p>
                <p>
                  Driven by ethical sourcing, sustainability, and long-term
                  partnerships, Ecogreentex is committed to delivering value,
                  transparency, and excellence in every order. We don't just
                  source garments — we build dependable production solutions
                  tailored to the evolving needs of global apparel brands.
                </p>
              </div>
              <div className="about-page-content-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop"
                  alt="Apparel Manufacturing"
                  className="about-page-content-image"
                />
                <div className="about-page-image-overlay">
                  <span className="about-page-play-icon">▶</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="about-page-vision-mission">
            <div className="about-page-vm-card about-page-vision">
              <div className="about-page-vm-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop"
                  alt="Vision"
                  className="about-page-vm-image"
                />
                <div className="about-page-vm-overlay"></div>
              </div>
              <div className="about-page-vm-content">
                <div className="about-page-vm-icon">👁️</div>
                <h3 className="about-page-vm-title">Our Vision</h3>
                <p className="about-page-vm-description">
                  To be a globally recognized apparel sourcing partner known for
                  reliability, ethical practices, and excellence. We envision a
                  future where Ecogreentex is trusted by leading fashion brands
                  for delivering responsible sourcing solutions, strong
                  manufacturing partnerships, and uncompromised quality across
                  product categories.
                </p>
              </div>
            </div>
            <div className="about-page-vm-card about-page-mission">
              <div className="about-page-vm-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=800&h=400&fit=crop"
                  alt="Mission"
                  className="about-page-vm-image"
                />
                <div className="about-page-vm-overlay"></div>
              </div>
              <div className="about-page-vm-content">
                <div className="about-page-vm-icon">🎯</div>
                <h3 className="about-page-vm-title">Our Mission</h3>
                <p className="about-page-vm-description">
                  To support global fashion brands by providing end-to-end
                  apparel sourcing, product development, and quality assurance
                  solutions. We are committed to building strong relationships
                  with compliant and capable manufacturing partners, ensuring
                  competitive pricing, timely delivery, and consistent quality
                  across all categories and markets.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="about-page-values">
            <div className="about-page-values-header">
              <div className="about-page-values-badge">
                <span className="about-page-badge-star">✦</span>
                THE PRINCIPLES WE STAND FOR
              </div>
              <h2 className="about-page-values-title">Our Values</h2>
            </div>
            <div className="about-page-values-grid">
              {values.map((value, index) => (
                <div className="about-page-value-card" key={index}>
                  <div className="about-page-value-image-wrapper">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="about-page-value-image"
                    />
                    <div className="about-page-value-icon-overlay">
                      <span className="about-page-value-icon">{value.icon}</span>
                    </div>
                  </div>
                  <div className="about-page-value-content">
                    <h4 className="about-page-value-title">{value.title}</h4>
                    <p className="about-page-value-description">{value.description}</p>
                    <div className="about-page-value-number">0{index + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-page-cta">
          <div className="about-page-cta-background">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&h=400&fit=crop"
              alt="CTA Background"
              className="about-page-cta-bg-image"
            />
            <div className="about-page-cta-overlay"></div>
          </div>
          <div className="about-page-cta-content">
            <h3 className="about-page-cta-title">Ready to Build Your Next Collection?</h3>
            <p className="about-page-cta-description">
              Partner with us for reliable, ethical, and high-quality apparel
              sourcing solutions.
            </p>
            <NavLink to="/contact" className="about-page-cta-button">
              CONTACT US TODAY
              <span className="about-page-cta-arrow">→</span>
            </NavLink>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default AboutPage;