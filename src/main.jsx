
import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  
} from "react-router-dom";
import { createRoot } from "react-dom/client";

import Lenis from "lenis";
import "./index.css";
import App from "./App.jsx";
import {
  Footer,
  Navbar,
  Whitepaper,
  Services,
  Blog,
  ContactSection,
  ContactForm,
  About,
  Career,
  InnerWhitePaperDetail,
} from "./components/index.js";
import { AnimatePresence } from "framer-motion";

const Main = () => {
  const { pathname } = useLocation();
  const containerRef = useRef(null);
  const [scrollPositions, setScrollPositions] = useState({});

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.3, // Adjust duration for smoother scrolling speed
      easing: (t) => t, // You can customize the easing function here
      smoothWheel: true, // Enable smooth scroll with the mouse wheel
     
    });

    // Update the scroll on each animation frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Save scroll position before navigating away
  useEffect(() => {
    return () => {
      const currentScrollY = window.scrollY;
      setScrollPositions((prev) => ({
        ...prev,
        [pathname]: currentScrollY,
      }));
    };
  }, [pathname]);

  // Restore scroll position when navigating to a route
  useEffect(() => {
    const savedPosition = scrollPositions[pathname] || 0;
    window.scrollTo(0, savedPosition);
  }, [pathname, scrollPositions]);

  return (
    <div ref={containerRef}>
      <Navbar />
      <AnimatePresence mode="sync">
        
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route
            path="/whitepaperDetail/:category"
            element={<InnerWhitePaperDetail />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<App />} />
        </Routes>
      </AnimatePresence>
      <ContactForm />
      <Footer />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <Router>
    <Main />
  </Router>
);

