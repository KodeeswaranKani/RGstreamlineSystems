import React from "react";
import { FaDatabase, FaFileAlt, FaCogs, FaImage } from "react-icons/fa";
import "./Services_Horizontal.css"; 

const services = [
  { title: "Image Processing", icon: <FaImage /> },
  { title: "Data Processing", icon: <FaDatabase /> },
  { title: "Document Digitalization", icon: <FaFileAlt /> },
  { title: "Back Office", icon: <FaCogs /> },
];

const ServicesHorizontal = () => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        {services.concat(services).map((service, index) => (
          <div className="ticker-item" key={index}>
            <span className="ticker-icon">{service.icon}</span>
            <span>{service.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
 

export default ServicesHorizontal;
