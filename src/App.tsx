import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { SecurityPolicy } from "./pages/SecurityPolicy";
import { Disclaimer } from "./pages/Disclaimer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface font-sans flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/security-policy" element={<SecurityPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
