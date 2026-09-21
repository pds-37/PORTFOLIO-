import React, { useState } from "react";
import SectionKicker from "../components/SectionKicker";
import { certificates } from "../data/certificatesData";
import { Award, ExternalLink, Download, Eye, X, ShieldCheck } from "lucide-react";

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

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

  return (
    <section id="certificates" className="section certificates-section">
      <div className="section-head">
        <SectionKicker label="CREDENTIALS & CERTIFICATIONS" />
        <h2 className="title">Verified Skills & Recognized Accomplishments</h2>
        <p className="subtitle">
          Demonstrated expertise in Cybersecurity, AI/ML, Cloud Infrastructure, and Software Engineering verified by global platforms and institutions.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="cert-tabs-container">
        <div className="cert-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cert-tab ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
              {cat === "All" && <span className="cert-count">{certificates.length}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="cert-grid">
        {filteredCertificates.map((cert) => (
          <div key={cert.id} className="cert-card">
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
          </div>
        ))}
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
