import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ImageProcessing from "./pages/ImageProcessing/ImageProcessing";
import DocumentDigitalization from "./pages/DocumentDigital/DocumentDigitalization";
import BackOffice from "./pages/BackOffice/BackOffice";
import DataProcessing from "./pages/DataProcessing";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/image-processing" element={<ImageProcessing />} />
        <Route path="/document-digitalization" element={<DocumentDigitalization />} />
        <Route path="/back-office" element={<BackOffice />} />
        <Route path="/data-processing" element={<DataProcessing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
