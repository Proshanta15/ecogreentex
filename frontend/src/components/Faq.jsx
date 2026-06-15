import React from "react";
import { useState } from "react";
import "../styles/faq.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What Types Of Apparel Does GPT Legacy Specialize In?",
      answer:
        "GPT Legacy specializes in comprehensive apparel sourcing across Knit, Woven, and Sweater categories for Men, Women, and Children. Our expertise includes casual wear, formal wear, activewear, streetwear, denim, outerwear, and sustainable fashion collections. We work with premium fabrics and innovative materials to meet diverse brand requirements.",
    },
    {
      question: "What Is Your Total Annual Production Capacity?",
      answer:
        "Our network of certified partner factories has a combined annual production capacity of over 50 million units. We maintain strong relationships with 200+ manufacturing units across Bangladesh, allowing us to scale production based on client needs while ensuring consistent quality and timely delivery.",
    },
    {
      question: "Which Global Compliance Standards Do Your Factories Follow?",
      answer:
        "All our partner factories are certified with international compliance standards including ISO 9001, BSCI, SMETA, OEKO-TEX, GOTS, and WRAP. We ensure strict adherence to labor laws, workplace safety, environmental regulations, and ethical manufacturing practices across our entire supply chain.",
    },
    {
      question: "What Are Your Standard Shipment And Payment Terms?",
      answer:
        "We offer flexible shipment terms including FOB, CIF, and CFR. Standard lead times range from 45-60 days for production, with express options available. Payment terms typically include 30-50% deposit with balance against shipping documents, negotiable based on client relationship and order volume.",
    },
    {
      question: "How Do You Ensure Product Quality And Fit?",
      answer:
        "We implement a rigorous multi-stage quality assurance system including in-line inspections, pre-shipment inspections, and AQL 2.5/4.0 standards. Our QA team conducts fabric testing, size set evaluations, wash tests, and fit checks on production samples to ensure consistency and precision.",
    },
    {
      question: "Do You Provide Design And Trend Support?",
      answer:
        "Yes, we offer comprehensive design and product development support. Our team leverages global trend platforms like WGSN and collaborates with clients on tech packs, sampling, prototyping, and trend forecasting. We help bring fashion visions to life with innovative design solutions.",
    },
    {
      question: "How Do You Handle Communication With International Clients?",
      answer:
        "We maintain a dedicated account management team providing 24/7 communication support via email, video calls, and project management platforms. Regular production updates, virtual factory tours, and transparent reporting ensure seamless collaboration with international clients.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header Section */}
        <div className="faq-header">
          <div className="faq-badge">
            <span className="badge-question">?</span>
            KNOWLEDGE HUB
          </div>
          <h2 className="faq-title">
            Frequently Asked
            <span className="title-highlight"> Questions</span>
          </h2>
          <p className="faq-subtitle">
            Find answers to common questions about our apparel sourcing,
            production capabilities, and global operations.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="faq-grid">
          {/* Left Column - Illustration */}
          <div className="faq-illustration">
            <div className="illustration-card">
              <div className="illustration-icon">💬</div>
              <h3>Quick Support</h3>
              <p>Can't find your answer? Our team is here to help 24/7</p>
              <button className="contact-support-btn">
                Contact Support
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="question-icon">
                    <span className="icon-q">Q</span>
                  </div>
                  <span className="question-text">{faq.question}</span>
                  <div className="question-arrow">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19 9L12 16L5 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <div className="faq-answer">
                  <div className="answer-icon">
                    <span className="icon-a">A</span>
                  </div>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="faq-cta">
          <div className="cta-content">
            <p className="cta-text">Still have questions? We're here to help</p>
            <div className="cta-buttons">
              <button className="cta-primary">
                SCHEDULE A CALL
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button className="cta-secondary">SEND INQUIRY</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
