import React from "react";
import { createUseStyles } from "react-jss";
import HeroImage from "../assets/dataProcessing1.jpg";
import Icon1 from "../assets/dataEntry.png";
import Icon2 from "../assets/dataValidation.png";
import Icon3 from "../assets/dataCleansing.png";
import { motion } from "framer-motion";

const useStyles = createUseStyles({
  root: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  hero: {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "180px 20px",
    textAlign: "center",
    color: "#fff",
    "& h1": {
      fontSize: "48px",
      marginBottom: "10px",
    },
    "& p": {
      fontSize: "18px",
      maxWidth: "600px",
      margin: "0 auto",
    },
  },
  section: {
    padding: "80px 20px",
    textAlign: "center",
  },
  cards: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "24px",
  },
  card: {
    width: "300px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    },
  },
  cardIcon: {
    width: "80px",
    height: "80px",
    marginBottom: "12px",
  },
  cardTitle: {
    fontSize: "22px",
    marginBottom: "8px",
  },
  cardText: {
    fontSize: "16px",
    color: "#555",
  },
});

const DataProcessing = () => {
  const classes = useStyles();

  const services = [
    {
      icon: Icon1,
      title: "Data Entry & Capture",
      text: "Accurate and fast data entry from forms, documents, and systems.",
    },
    {
      icon: Icon2,
      title: "Data Validation",
      text: "Verify and clean data to ensure quality and accuracy.",
    },
    {
      icon: Icon3,
      title: "Data Cleansing & Formatting",
      text: "Remove duplicates, fix errors, convert formats.",
    },
  ];

  return (
    <div className={classes.root}>
      {/* Hero Section */}
      <div className={classes.hero}>
        <h1>Data Processing Services</h1>
        <p>Efficient, accurate, and scalable data handling solutions for your business</p>
      </div>

      {/* Services Section */}
      <div className={classes.section}>
              <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                   viewport={{ once: false, amount: 0.5 }}
              >
                  Our Data Processing Solutions
              </motion.h1>
        <div className={classes.cards}>
          {services.map((service, idx) => (
            <div key={idx} className={classes.card}>
              <img src={service.icon} className={classes.cardIcon} alt="" />
              <div className={classes.cardTitle}>{service.title}</div>
              <div className={classes.cardText}>{service.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataProcessing;
