import React from "react";

const WhoWeAre = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side - Content */}
        <div className="about-content">
          <div className="about-badge">
            <span className="badge-dot"></span>
            WHO WE ARE
          </div>

          <h2 className="about-title">
            Your ISO-Certified
            <span className="title-highlight"> Sourcing Partner</span>
          </h2>

          <p className="about-description">
            EcoGreenTex is a leading apparel buying house based in Dhaka,
            Bangladesh, dedicated to bridging the gap between global fashion
            brands and high-quality manufacturing. We specialize in
            comprehensive apparel sourcing, innovative product development, and
            rigorous quality assurance.
          </p>

          <p className="about-description second">
            With a strong commitment to ethical, eco-friendly, and responsible
            sourcing, we provide a one-stop solution for international buyers.
            Our team works tirelessly to ensure uncompromised quality,
            competitive pricing, and timely delivery, helping our partners bring
            their fashion visions to life with absolute reliability.
          </p>

          <button className="about-btn">
            LEARN MORE
            <svg
              className="btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right Side - Visual Elements */}
        <div className="about-visual">
          <div className="visual-card">
            <div className="floating-card card-1">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M20 7L9 18L4 13"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="card-text">
                <h4>ISO 9001</h4>
                <p>Certified Quality</p>
              </div>
            </div>

            <div className="floating-card card-2">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" />
                  <path d="M12 6v6l4 2" stroke="currentColor" />
                </svg>
              </div>
              <div className="card-text">
                <h4>100+</h4>
                <p>Global Partners</p>
              </div>
            </div>

            <div className="floating-card card-3">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M22 11.08V12a10 10 0 11-5.93-9.14"
                    stroke="currentColor"
                  />
                  <polyline
                    points="22 4 12 14.01 9 11.01"
                    stroke="currentColor"
                  />
                </svg>
              </div>
              <div className="card-text">
                <h4>Eco-Friendly</h4>
                <p>Sustainable Practices</p>
              </div>
            </div>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number" data-target="15">
                0
              </div>
              <p>Years Experience</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number" data-target="500">
                0
              </div>
              <p>Factories Network</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number" data-target="50">
                0
              </div>
              <p>Global Brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
