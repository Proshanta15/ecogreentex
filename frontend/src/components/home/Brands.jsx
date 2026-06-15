import React from 'react'

const Brands = () => {
    const brands = [
    { id: 1, name: "RENNER", logo: "https://placehold.co/200x80/1b5e3f/white?text=RENNER&font=montserrat" },
    { id: 2, name: "emanuel ungaro", logo: "https://placehold.co/200x80/2d6a4f/white?text=EMANUEL+UNGARO&font=montserrat" },
    { id: 3, name: "RINA", logo: "https://placehold.co/200x80/1b5e3f/white?text=RINA&font=montserrat" },
    { id: 4, name: "MA", logo: "https://placehold.co/200x80/2d6a4f/white?text=MA&font=montserrat" },
    { id: 5, name: "BONITA", logo: "https://placehold.co/200x80/1b5e3f/white?text=BONITA&font=montserrat" },
    { id: 6, name: "SageHill.", logo: "https://placehold.co/200x80/2d6a4f/white?text=SageHill&font=montserrat" },
    { id: 7, name: "Kappa", logo: "https://placehold.co/200x80/1b5e3f/white?text=KAPPA&font=montserrat" },
  ];
  return (
    <section className="trusted-brands">
      <div className="brands-container">
        {/* Header Section */}
        <div className="brands-header">
          <div className="brands-badge">
            <span className="badge-icon">⭐</span>
            OUR PARTNERS
          </div>
          <h2 className="brands-title">
            Trusted By Leading
            <span className="title-highlight"> Global Brands</span>
          </h2>
          <div className="brands-subtitle-wrapper">
            <div className="subtitle-line"></div>
            <p className="brands-subtitle">
              Join 500+ satisfied brands worldwide
            </p>
            <div className="subtitle-line"></div>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="brands-grid">
          {brands.map((brand) => (
            <div className="brand-card" key={brand.id}>
              <div className="brand-logo-wrapper">
                <div className="brand-glow"></div>
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="brand-logo"
                />
              </div>
              <div className="brand-overlay">
                <span className="brand-name">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          <div className="indicator">
            <div className="indicator-icon">🏆</div>
            <div className="indicator-content">
              <h4>10+ Years</h4>
              <p>Of Excellence</p>
            </div>
          </div>
          <div className="indicator-divider"></div>
          <div className="indicator">
            <div className="indicator-icon">🌍</div>
            <div className="indicator-content">
              <h4>25+ Countries</h4>
              <p>Worldwide Reach</p>
            </div>
          </div>
          <div className="indicator-divider"></div>
          <div className="indicator">
            <div className="indicator-icon">⭐</div>
            <div className="indicator-content">
              <h4>98%</h4>
              <p>Client Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
