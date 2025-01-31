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




// import React, { useEffect, useRef, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
//   ScrollRestoration,
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
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

// const Main = () => {
//   const { pathname } = useLocation();
//   const containerRef = useRef(null);
 
//   return (
//     <LocomotiveScrollProvider
//       options={{
//         smooth: true,
//         tablet: { smooth: true },
//         smartphone: { smooth: true },
//         resetNativeScroll: false,
//       }}
//       watch={[pathname]}
//       containerRef={containerRef}
      
//     >
//       <div data-scroll-container ref={containerRef}>
//         <Navbar />
//         {/* <ScrollRestoration /> */}
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
// }

// createRoot(document.getElementById("root")).render(
//   <Router>
//     <Main />
//   </Router>
// );


// import React, { useEffect, useRef, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import { createRoot } from "react-dom/client";
// import {
//   LocomotiveScrollProvider,
//   useLocomotiveScroll,
// } from "react-locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";
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

// const Main = () => {
//   const { pathname } = useLocation();
//   const containerRef = useRef(null);
//   const [scrollPositions, setScrollPositions] = useState({});
//   const { scroll } = useLocomotiveScroll();

//   // Save scroll position before navigating away
//   useEffect(() => {
//     return () => {
//       if (scroll) {
//         const currentScrollY = scroll.scroll.instance.scroll.y;
//         setScrollPositions((prev) => ({
//           ...prev,
//           [pathname]: currentScrollY,
//         }));
//       }
//     };
//   }, [pathname, scroll]);

//   // Restore scroll position when navigating to a route
//   useEffect(() => {
//     if (scroll) {
//       const savedPosition = scrollPositions[pathname] || 0;
//       scroll.scrollTo(savedPosition, {
//         duration: 0,
//         disableLerp: true,
//       });
//     }
//   }, [pathname, scroll, scrollPositions]);

//   return (
//     <LocomotiveScrollProvider
//       options={{
//         smooth: true,
//         resetNativeScroll: false, // Preserve native scroll restoration
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

