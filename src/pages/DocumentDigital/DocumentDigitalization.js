import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DocumentDigitalization.css";
import document from "../../assets/documentDigital.jpg"

function DocumentDigitalization() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="doc-hero">
        <div className="hero-overlay text-white text-center" data-aos="zoom-in">
          <h1 className="display-4">Document Digitalization Services</h1>
          <p className="lead px-3">
            Convert Physical Documents to Intelligent Digital Data
          </p>
        </div>
      </section>

      {/* ================= Overview ================= */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img src={document} className="img-fluid rounded shadow" alt="Document Digitalization" />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="mb-3 brand-primary">Overview</h2>
            <p>
              Our Document Digitalization services help businesses convert paper documents
              into accurate, secure, and searchable digital formats. We support large volume
              scanning, indexing, OCR conversion, and quality control processes to enhance
              data accessibility and reduce physical storage costs.
            </p>
            <ul className="doc-list">
              <li>High‑speed Scanning & Capture</li>
              <li>Optical Character Recognition (OCR)</li>
              <li>Indexing & Classification</li>
              <li>Data Quality Validation</li>
              <li>Secure Digital Archiving</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= BENEFITS ================= */}
      <div className="doc-benefits py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 brand-secondary" data-aos="fade-up">
            Benefits of Our Services
          </h2>

          <div className="row text-center">
            {[
              {
                title: "Improved Access",
                desc: "Searchable digital documents improve efficiency."
              },
              {
                title: "Cost Saving",
                desc: "Eliminate physical storage & reduce overhead."
              },
              {
                title: "Enhanced Security",
                desc: "Keep sensitive data protected and encrypted."
              },
              {
                title: "Scalable Solutions",
                desc: "Efficient processing for big to enterprise volumes."
              }
            ].map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div
                  className="benefit-card p-4 h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <h6 className="brand-primary">{item.title}</h6>
                  <p className="mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="container py-5">
        <h2 className="text-center mb-4 brand-primary" data-aos="fade-up">
          Key Features
        </h2>

        <div className="row">
          {[
            "Bulk Document Scanning",
            "OCR Conversion & PDF Creation",
            "Metadata Tagging",
            "Secure Digital Delivery",
            "Quality Checks",
            "Flexible Format Support"
          ].map((feature, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div
                className="feature-list p-3"
                data-aos="fade-right"
                data-aos-delay={index * 150}
              >
                <span className="dot brand-primary">•</span> {feature}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="cta-doc text-center text-white py-5">
        <div data-aos="fade-up">
          <h3>Ready to Digitize Your Documents?</h3>
          <p>
            Contact us today for a custom solution tailored to your needs.
          </p>
          <a href="/contact" className="btn btn-light mt-3">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default DocumentDigitalization;
