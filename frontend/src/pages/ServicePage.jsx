import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/service.css";

const ServicePage = () => {
  const [activeGender, setActiveGender] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    {
      id: "knitwear",
      title: "Knitwear & Lingerie",
      icon: "🧶",
      description:
        "Premium knitwear and lingerie solutions with superior quality and comfort.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
      gender: ["Men", "Women", "Children"],
      items: {
        men: [
          {
            name: "Men's Cotton T-Shirts",
            icon: "👕",
            image:
              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
          },
          {
            name: "Men's Polo Shirts",
            icon: "👔",
            image:
              "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=300&fit=crop",
          },
          {
            name: "Men's V-Neck Sweaters",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop",
          },
        ],
        women: [
          {
            name: "Women's Knit Dresses",
            icon: "👗",
            image:
              "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=300&fit=crop",
          },
          {
            name: "Women's Lingerie Set",
            icon: "👙",
            image:
              "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop",
          },
          {
            name: "Women's Cardigans",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=400&h=300&fit=crop",
          },
          {
            name: "Women's Turtlenecks",
            icon: "👕",
            image:
              "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&h=300&fit=crop",
          },
        ],
        children: [
          {
            name: "Kids Knit T-Shirts",
            icon: "👕",
            image:
              "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=300&fit=crop",
          },
          {
            name: "Kids Cardigans",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=300&fit=crop",
          },
        ],
      },
    },
    {
      id: "sweater",
      title: "Sweater",
      icon: "🧥",
      description:
        "Warm, stylish, and sustainable sweater solutions for all seasons.",
      image:
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=400&fit=crop",
      gender: ["Men", "Women", "Children"],
      items: {
        men: [
          {
            name: "Men's Intended Knit Sweaters",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&h=300&fit=crop",
          },
          {
            name: "Men's Pullovers",
            icon: "👕",
            image:
              "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop",
          },
          {
            name: "Men's Windbreakers",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&h=300&fit=crop",
          },
          {
            name: "Men's Navy Denim Coat",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop",
          },
        ],
        women: [
          {
            name: "Women's Fashion Sweaters",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=400&h=300&fit=crop",
          },
          {
            name: "Women's Lightweight Knit Dresses",
            icon: "👗",
            image:
              "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=300&fit=crop",
          },
          {
            name: "Women's Fashion Coats",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop",
          },
          {
            name: "Women's Chunky Knits",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&h=300&fit=crop",
          },
          {
            name: "Women's Turtleneck Sweaters",
            icon: "👕",
            image:
              "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop",
          },
        ],
        children: [
          {
            name: "Kids Sweater Sets",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=300&fit=crop",
          },
          {
            name: "Kids Cardigans",
            icon: "🧣",
            image:
              "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=300&fit=crop",
          },
        ],
      },
    },
    {
      id: "woven",
      title: "Woven & Denim",
      icon: "👖",
      description:
        "High-quality woven and denim products for timeless style and durability.",
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=400&fit=crop",
      gender: ["Men", "Women", "Children"],
      items: {
        men: [
          {
            name: "Men's Denim Jeans",
            icon: "👖",
            image:
              "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop",
          },
          {
            name: "Men's Cargo Pants",
            icon: "👖",
            image:
              "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=300&fit=crop",
          },
          {
            name: "Men's Chinos",
            icon: "👖",
            image:
              "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=300&fit=crop",
          },
          {
            name: "Men's Denim Jackets",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop",
          },
        ],
        women: [
          {
            name: "Women's Denim Jeans",
            icon: "👖",
            image:
              "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=300&fit=crop",
          },
          {
            name: "Women's Wide Leg Pants",
            icon: "👖",
            image:
              "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop",
          },
          {
            name: "Women's Denim Skirts",
            icon: "👗",
            image:
              "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=400&h=300&fit=crop",
          },
          {
            name: "Women's Corduroy Pants",
            icon: "👖",
            image:
              "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&h=300&fit=crop",
          },
        ],
        children: [
          {
            name: "Kids Denim Jeans",
            icon: "👖",
            image:
              "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=300&fit=crop",
          },
          {
            name: "Kids Denim Jackets",
            icon: "🧥",
            image:
              "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=300&fit=crop",
          },
        ],
      },
    },
  ];

  const handleGenderFilter = (categoryId, gender) => {
    setActiveGender((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === gender ? null : gender,
    }));
  };

  const getFilteredItems = (category) => {
    const activeGenderFilter = activeGender[category.id];

    let items = [];

    if (!activeGenderFilter || activeGenderFilter === "All") {
      Object.values(category.items).forEach((genderItems) => {
        items = items.concat(genderItems);
      });
    } else {
      const genderKey = activeGenderFilter.toLowerCase();
      items = category.items[genderKey] || [];
    }

    return items;
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section className="services-page">
        <div className="services-page-container">
          {/* Header Section */}
          <div className="services-page-header">
            <div className="services-page-badge">
              <span className="services-page-badge-icon">✦</span>
              OUR PRODUCT RANGE
            </div>
            <h1 className="services-page-title">
              Premium Apparel
              <span className="services-page-title-highlight">
                {" "}
                Collections
              </span>
            </h1>
            <p className="services-page-subtitle">
              Explore our comprehensive range of high-quality apparel sourcing
              solutions across Knitwear, Sweater, and Woven & Denim categories
              for Men, Women, and Children.
            </p>
          </div>

          {/* Categories */}
          <div className="services-page-categories-wrapper">
            {categories.map((category) => {
              const filteredItems = getFilteredItems(category);
              const activeGenderFilter = activeGender[category.id];

              return (
                <div
                  className="services-page-category-section"
                  key={category.id}
                >
                  {/* Category Header */}
                  <div className="services-page-category-header">
                    <div className="services-page-category-header-left">
                      <div className="services-page-category-icon">
                        {category.icon}
                      </div>
                      <div>
                        <h2 className="services-page-category-title">
                          {category.title}
                        </h2>
                        <p className="services-page-category-description">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category Image */}
                  <div className="services-page-category-image-wrapper">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="services-page-category-image"
                    />
                  </div>

                  {/* Gender Filters */}
                  <div className="services-page-gender-filters">
                    <span className="services-page-filter-label">Gender:</span>
                    <button
                      className={`services-page-gender-btn ${!activeGenderFilter ? "active" : ""}`}
                      onClick={() =>
                        setActiveGender((prev) => ({
                          ...prev,
                          [category.id]: null,
                        }))
                      }
                    >
                      All
                    </button>
                    {category.gender.map((gender) => (
                      <button
                        key={gender}
                        className={`services-page-gender-btn ${activeGenderFilter === gender ? "active" : ""}`}
                        onClick={() => handleGenderFilter(category.id, gender)}
                      >
                        {gender === "Men"
                          ? "👨"
                          : gender === "Women"
                            ? "👩"
                            : "👶"}{" "}
                        {gender}
                      </button>
                    ))}
                  </div>

                  {/* Items Grid */}
                  <div className="services-page-items-grid">
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item, idx) => (
                        <div
                          className="services-page-item-card"
                          key={idx}
                          onClick={() => openModal(item)}
                        >
                          <div className="services-page-item-image-wrapper">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="services-page-item-image"
                            />
                            <div className="services-page-item-overlay">
                              <span className="services-page-item-view-icon">
                                🔍
                              </span>
                              <span className="services-page-item-view-text">
                                View Details
                              </span>
                            </div>
                          </div>
                          <div className="services-page-item-info">
                            <span className="services-page-item-icon">
                              {item.icon}
                            </span>
                            <span className="services-page-item-name">
                              {item.name}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="services-page-no-items">
                        <span className="services-page-no-items-icon">📦</span>
                        <p>No items available for this category</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="services-page-cta">
            <div className="services-page-cta-content">
              <h2 className="services-page-cta-title">
                Ready to Source Your Collection?
              </h2>
              <p className="services-page-cta-description">
                Let us help you bring your fashion vision to life with our
                comprehensive apparel sourcing solutions.
              </p>
              <NavLink to="/contact" className="services-page-cta-btn">
                Get a Free Consultation
                <span className="services-page-cta-arrow">→</span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="services-page-modal-overlay" onClick={closeModal}>
          <div
            className="services-page-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="services-page-modal-close" onClick={closeModal}>
              <span>×</span>
            </button>
            <div className="services-page-modal-content">
              <div className="services-page-modal-image-wrapper">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="services-page-modal-image"
                />
              </div>
              <div className="services-page-modal-info">
                <div className="services-page-modal-icon">
                  {selectedItem.icon}
                </div>
                <h2 className="services-page-modal-title">
                  {selectedItem.name}
                </h2>
                <div className="services-page-modal-details">
                  <div className="services-page-modal-detail">
                    <span className="services-page-modal-detail-label">
                      Category:
                    </span>
                    <span className="services-page-modal-detail-value">
                      Premium Collection
                    </span>
                  </div>
                  <div className="services-page-modal-detail">
                    <span className="services-page-modal-detail-label">
                      Quality:
                    </span>
                    <span className="services-page-modal-detail-value">
                      ISO Certified
                    </span>
                  </div>
                  <div className="services-page-modal-detail">
                    <span className="services-page-modal-detail-label">
                      Material:
                    </span>
                    <span className="services-page-modal-detail-value">
                      Premium Quality
                    </span>
                  </div>
                </div>
                <NavLink to="/contact" className="services-page-modal-btn">
                  Request a Quote
                  <span className="services-page-modal-btn-arrow">→</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicePage;
