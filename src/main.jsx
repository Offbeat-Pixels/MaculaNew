import { 
  BrowserRouter as Router ,
  Routes,
  Route,
  useLocation
 } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
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
} from "./components/index.js";
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';


const Main=()=>{

const {pathname}=useLocation()

useEffect(()=>{
  window.scrollTo(0,0)
},[pathname]);

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="sync">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<App />} />
        </Routes>
        <ContactForm />
        <Footer />
      </AnimatePresence>
    </div>
  );
}



createRoot(document.getElementById("root")).render(
  <Router>
    
    <Main />
  </Router>
);
