// import { motion } from "framer-motion";
// import {
//   Banner,
//   WhySection,
//   ServicesSection,
//   UniqueSection,
//   VideoSection,
//   ContactForm,
// } from "./components";
// import { Transition } from "./components/ui/Transition";

// function App() {
//   return (
//     <div className="text-justify overflow-hidden">
      
//         <Banner />
//       <div className="bg-why-pattern bg-cover bg-no-repeat bg-center">
//         <WhySection />
//       </div>
//       <div className="bg-service-pattern  bg-cover bg-no-repeat bg-center">
//         <ServicesSection />
//       </div>
//       <motion.div
//         initial={{ backgroundSize: "100%" }}
//         animate={{ backgroundSize: ["100%", "105%", "100%"] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         style={{
//           backgroundImage: "url('/src/assets/uniqueImg.png')",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           height: "100%",
//           width: "100%",
//         }}
//       >
//         <UniqueSection />
//       </motion.div>
//       <VideoSection />
//     </div>
//   );
// }

// export default Transition(App);



import React from "react";
import { motion } from "framer-motion";
import {
  Banner,
  // WhySection,
  ServicesSection,
  UniqueSection,
  VideoSection,
  // ContactForm,
  ImageCarousel
} from "./components";
import { Transition } from "./components/ui/Transition";

function App() {
  return (
    <div data-scroll-container className="text-justify overflow-hidden">
      
      <Banner />
    <ImageCarousel/>
      {/* <div className="bg-why-pattern bg-cover bg-no-repeat bg-center">
        <WhySection />
      </div> */}
      <div className="bg-service-pattern bg-cover bg-no-repeat bg-center">
        <ServicesSection />
      </div>
      <motion.div
        initial={{ backgroundSize: "100%" }}
        animate={{ backgroundSize: ["100%", "105%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: "url('/src/assets/uniqueImg.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
      >
        <UniqueSection />
      </motion.div>
      <VideoSection />
    </div>
  );
}

export default Transition(App);

