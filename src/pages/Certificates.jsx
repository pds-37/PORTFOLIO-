import React, { useState, useRef } from "react";
import SectionKicker from "../components/SectionKicker";
import { certificates } from "../data/certificatesData";
import { ExternalLink, Download, Eye, X, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import TiltCard from "../utils/useTilt";

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const sliderRef = useRef(null);

  const categories = [
    "All",
    "Cybersecurity",
    "AI & Data Science",
    "Cloud & Infrastructure",
    "Software Engineering",
    "Competitions"
  ];

  const filteredCertificates = activeTab === "All" 
    ? certificates 
    : certificates.filter(c => c.category === activeTab);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="certificates" className="section certificates-section">
      <div className="section-head cert-head-layout">
        <div>
          <div className="reveal-item stagger-1">
            <SectionKicker label="HONORS & CREDENTIALS" />
          </div>
          <h2 className="title reveal-item stagger-2">Certifications & Industry Specializations</h2>
          <p className="subtitle reveal-item stagger-3">
            Validated expertise across offensive & defensive cybersecurity, artificial intelligence, cloud architecture, and competitive software engineering from leading global institutions.
          </p>
        </div>

        {/* Scroll Control Arrows */}
        <div className="cert-scroll-controls">
          <button 
            className="cert-scroll-btn" 
            onClick={() => handleScroll("left")}
            aria-label="Scroll Left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="cert-scroll-btn" 
            onClick={() => handleScroll("right")}
            aria-label="Scroll Right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="cert-tabs-container">
        <div className="cert-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cert-tab ${activeTab === cat ? "active" : ""}`}
              onClick={() => {
                setActiveTab(cat);
                if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }}
            >
              {cat}
              {cat === "All" && <span className="cert-count">{certificates.length}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Right Scrollable Horizontal Certificates Track */}
      <div className="cert-track-wrapper">
        <div className="cert-track" ref={sliderRef}>
          {filteredCertificates.map((cert) => (
            <TiltCard key={cert.id} className="cert-card horizontal-card" max={7} scale={1.02}>
              <div className="cert-img-wrapper" onClick={() => setSelectedCert(cert)}>
                <img 
                  src={cert.preview} 
                  alt={cert.title} 
                  className="cert-img" 
                  loading="lazy" 
                />
                <div className="cert-overlay">
                  <span className="cert-view-btn">
                    <Eye size={18} /> Quick Preview
                  </span>
                </div>
                {cert.badge && <span className="cert-badge">{cert.badge}</span>}
              </div>

              <div className="cert-content">
                <div className="cert-meta">
                  <span className="cert-category">{cert.category}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>

                <h3 className="cert-title" onClick={() => setSelectedCert(cert)}>
                  {cert.title}
                </h3>

                <p className="cert-issuer">
                  <ShieldCheck size={14} className="cert-shield" /> {cert.issuer}
                </p>

                {cert.credentialId && (
                  <div className="cert-id">
                    <span>ID:</span> <code>{cert.credentialId}</code>
                  </div>
                )}

                <div className="cert-actions">
                  <button 
                    className="cert-action-btn primary"
                    onClick={() => setSelectedCert(cert)}
                    title="View Certificate Preview"
                  >
                    <Eye size={14} /> Preview
                  </button>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cert-action-btn secondary"
                      title="Verify Credential Online"
                    >
                      <ExternalLink size={14} /> Verify
                    </a>
                  )}

                  <a
                    href={cert.download}
                    download
                    className="cert-action-btn secondary icon-only"
                    title="Download File"
                  >
                    <Download size={14} />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Viewer */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div>
                <span className="cert-modal-category">{selectedCert.category}</span>
                <h3 className="cert-modal-title">{selectedCert.title}</h3>
                <p className="cert-modal-issuer">{selectedCert.issuer} · {selectedCert.date}</p>
              </div>
              <button 
                className="cert-modal-close" 
                onClick={() => setSelectedCert(null)}
                aria-label="Close Preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cert-modal-body">
              <img 
                src={selectedCert.preview} 
                alt={selectedCert.title} 
                className="cert-modal-img" 
              />
            </div>

            <div className="cert-modal-footer">
              {selectedCert.credentialId && (
                <span className="cert-modal-id">Credential ID: <code>{selectedCert.credentialId}</code></span>
              )}
              <div className="cert-modal-actions">
                {selectedCert.verifyUrl && (
                  <a 
                    href={selectedCert.verifyUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn secondary-btn"
                  >
                    <ExternalLink size={15} /> Verify Online
                  </a>
                )}
                <a 
                  href={selectedCert.download} 
                  download 
                  className="btn primary-btn"
                >
                  <Download size={15} /> Download Original
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
