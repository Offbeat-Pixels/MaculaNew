// import React, { useEffect, useRef } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import {
//   Footer,
//   Navbar,
//   Whitepaper,
//   Services,
//   Blog,
//   ContactSection,
//   ContactForm,
//   About,
//   Career,
//   InnerWhitePaperDetail,
// } from "./components/index.js";
// import { AnimatePresence } from "framer-motion";
// import LocomotiveScroll from "locomotive-scroll";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

// const Main = () => {
//   const { pathname } = useLocation();
//   const containerRef = useRef(null);
//   const scrollRef = useRef(null); // Store the Locomotive Scroll instance

// useEffect(() => {
//   const scroll = new LocomotiveScroll({
//     el: containerRef.current,
//     smooth: true,
//     tablet: {
//       smooth: true,
//       breakpoint: 0,
//     },
//     mobile: {
//       smooth: true,
//       breakpoint: 0,
//     },
//   });

//   const handleLoad = () => {
//     setTimeout(() => {
//       scroll.update();
//     }, 500); // Delay update to ensure DOM is ready
//   };

//   window.addEventListener("load", handleLoad);

//   return () => {
//     window.removeEventListener("load", handleLoad);
//     scroll.destroy();
//   };
// }, [pathname]);

// useEffect(() => {
//   window.scrollTo(0, 0); // Reset native scroll
// }, [pathname]);


//   useEffect(() => {
//     if (scrollRef.current) {
//       // Reset Locomotive Scroll position on route change
//       scrollRef.current.scrollTo(0, { duration: 0, disableLerp: true });
//     }
//   }, [pathname]);

//   return (
//     <LocomotiveScrollProvider
//       options={{ smooth: true }}
//       watch={[pathname]}
//       containerRef={containerRef}
//     >
//       <div data-scroll-container ref={containerRef}>
//       {/* data-scroll-container :- this is causing problem */}
//       {/* <div ref={containerRef}> */}
//         <Navbar />
//         <AnimatePresence mode="sync">
//           <Routes>
//             <Route path="/" element={<App />} />
//             <Route path="/whitepaper" element={<Whitepaper />} />
//             <Route
//               path="/whitepaperDetail/:category"
//               element={<InnerWhitePaperDetail />}
//             />
//             <Route path="/services" element={<Services />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/contact" element={<ContactSection />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/career" element={<Career />} />
//             <Route path="*" element={<App />} />
//           </Routes>
//         </AnimatePresence>
//         <ContactForm />
//         <Footer />
//       </div>
//     </LocomotiveScrollProvider>
//   );
// };

// createRoot(document.getElementById("root")).render(
//   <Router>
//     <Main />
//   </Router>
// );




import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
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
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

// const Main = () => {
//   const { pathname } = useLocation();
//   const containerRef = useRef(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//     useEffect(() => {
//       if (containerRef.current) {
//         // Reset Locomotive Scroll position on route change
//         containerRef.current.scrollTo(0, { duration: 0, disableLerp: true });
//       }
//     }, [pathname]);

//   return (
//     <LocomotiveScrollProvider
//       options={{
//         smooth: true,
//         tablet: { smooth: true },
//         smartphone: { smooth: true },
//       }}
//       watch={[pathname]}
//       containerRef={containerRef}
//     >
//       <div data-scroll-container ref={containerRef}>
//         <Navbar />
//         <AnimatePresence mode="sync">
//           <Routes>
//             <Route path="/" element={<App />} />
//             <Route path="/whitepaper" element={<Whitepaper />} />
//             <Route
//               path="/whitepaperDetail/:category"
//               element={<InnerWhitePaperDetail />}
//             />
//             <Route path="/services" element={<Services />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/contact" element={<ContactSection />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/career" element={<Career />} />
//             <Route path="*" element={<App />} />
//           </Routes>
//         </AnimatePresence>
//         <ContactForm />
//         <Footer />
//       </div>
//     </LocomotiveScrollProvider>
//   );
// };

// createRoot(document.getElementById("root")).render(
//   <Router>
//     <Main />
//   </Router>
// );


const Main = () => {
  const { pathname } = useLocation();
  const containerRef = useRef(null);
  const scrollInstance = useRef(null); // Reference to Locomotive Scroll instance

  useEffect(() => {
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (containerRef.current) {
        scrollInstance.current = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          tablet: { smooth: true },
          smartphone: { smooth: true },
        });
      }
    };

    initLocomotiveScroll();

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Scroll to top on path change using Locomotive Scroll's `scrollTo` method
    if (scrollInstance.current) {
      scrollInstance.current.scrollTo(0, { duration: 0, disableLerp: true });
    }
  }, [pathname]);

  return (
    <div ref={containerRef} data-scroll-container>
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
