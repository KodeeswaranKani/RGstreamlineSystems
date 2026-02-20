import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ImageProcessing.css";
import imageProcess from "../../assets/image-processing_hero.jpg";

function ImageProcessing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="img-hero">
        <div className="hero-overlay text-center text-white" data-aos="zoom-in">
          <h1 className="display-4">Image Processing Services</h1>
          <p className="lead px-3">
            Enhancing Images with Accuracy, Speed & Efficiency for Your Business
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img src={imageProcess} alt="Image Processing" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="mb-3 brand-primary">Overview</h2>
            <p>
              Our Image Processing services help businesses manage and enhance images efficiently.
              From editing and enhancement to background removal and optimization, we ensure high-quality
              digital assets that meet business requirements.
            </p>
            <ul className="img-list">
              <li>Image Editing & Retouching</li>
              <li>Background Removal & Replacement</li>
              <li>Color Correction & Enhancement</li>
              <li>Image Optimization for Web & Print</li>
              <li>Batch Processing for Large Volumes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= FEATURES / BENEFITS ================= */}
      <div className="img-benefits py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 brand-secondary" data-aos="fade-up">
            Key Benefits
          </h2>

          <div className="row text-center">
            {[
              {
                title: "High Accuracy",
                desc: "Professional editing ensuring precise results."
              },
              {
                title: "Fast Delivery",
                desc: "Optimized workflows for quick turnaround."
              },
              {
                title: "Scalable Processing",
                desc: "Handle large image volumes efficiently."
              },
              {
                title: "Consistent Quality",
                desc: "Maintain uniform standards across projects."
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

      {/* ================= CTA ================= */}
      <div className="cta-img text-center text-white py-5">
        <div data-aos="fade-up">
          <h3>Ready to Optimize Your Images?</h3>
          <p>
            Partner with us for professional Image Processing services.
          </p>
          <a href="/contact" className="btn btn-light mt-3">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default ImageProcessing;
