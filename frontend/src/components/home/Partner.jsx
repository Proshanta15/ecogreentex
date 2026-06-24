import React from "react";
import { NavLink } from "react-router-dom";

const Partner = () => {
  const features = [
    {
      icon: "👥",
      title: "Experienced Team",
      description:
        "Our team brings decades of hands-on expertise across product development, merchandising, quality control, and supply chain management – ensuring every order is executed with precision and accountability.",
      gradient: "gradient-1",
    },
    {
      icon: "🏭",
      title: "Certified Factories",
      description:
        "We work only with ethically audited, globally certified factories equipped with modern production facilities – ensuring responsible sourcing, workplace safety, and consistent product quality.",
      gradient: "gradient-2",
    },
    {
      icon: "⚙️",
      title: "Custom Solutions",
      description:
        "Every brand has unique priorities, so we tailor sourcing strategies around pricing, capacity, sustainability, and speed to market – delivering flexible, scalable production solutions.",
      gradient: "gradient-3",
    },
    {
      icon: "💬",
      title: "Transparent Communication",
      description:
        "We maintain clear, proactive communication with real-time production updates and technical support – ensuring smooth execution and zero surprises throughout the process.",
      gradient: "gradient-4",
    },
    {
      icon: "⏰",
      title: "On-Time Delivery",
      description:
        "Through structured timelines, factory coordination, and shipment tracking, we deliver dependable lead times and punctual shipments from sampling to final logistics.",
      gradient: "gradient-5",
    },
    {
      icon: "🤝",
      title: "Brand Partners",
      description:
        "Trusted by leading global brands for our integrity, consistent performance, and sustainable sourcing approach – reflected in long-term, value-driven partnerships.",
      gradient: "gradient-6",
    },
  ];
  return (
    <section className="why-choose-us">
      <div className="why-container">
        {/* Header Section */}
        <div className="why-header">
          <div className="why-badge">
            <span className="badge-icon">★</span>
            TRUSTED SOURCING PARTNER
          </div>
          <h2 className="why-title">
            Why Brands Choose
            <span className="title-highlight"> To Work With Us</span>
          </h2>
          <div className="why-subtitle-wrapper">
            <div className="subtitle-line"></div>
            <p className="why-subtitle">
              A Partnership Built On Reliability & Trust
            </p>
            <div className="subtitle-line"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="why-content-grid">
          {/* Left Column - Main Description */}
          <div className="why-description-card">
            <div className="description-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="description-title">
              Every project is driven by collaboration
            </h3>
            <p className="description-text">
              Every project is driven by collaboration, accountability, and
              precise execution. We work closely with clients and factories to
              stay aligned on pricing, quality, timelines, and compliance –
              ensuring smooth operations and dependable delivery.
            </p>
            <p className="description-text second">
              We operate as an extension of your team – managing product
              development, factory coordination, quality assurance, and shipment
              execution with transparency and precision. Our commitment to
              ethical sourcing and consistent quality keeps leading global
              brands working with us.
            </p>
            <div className="description-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Excellence</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Brands</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">On-Time Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className={`feature-card ${feature.gradient}`} key={index}>
                <div className="feature-icon-wrapper">
                  <span className="feature-icon">{feature.icon}</span>
                  <div className="icon-glow"></div>
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
                <div className="feature-arrow">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="why-cta">
          <div className="cta-content">
            <p className="cta-text">
              Join our growing list of satisfied brand partners
            </p>
            <NavLink to="/contact" className="cta-button">
              START YOUR JOURNEY
              <svg className="cta-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
