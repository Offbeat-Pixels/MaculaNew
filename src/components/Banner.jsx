import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { styles } from "../style";
import {
  WhitePapper2,
  WhitePapper4,
  WhitePapper6,
  Papper11,
  Papper22,
  Papper33,
} from "../assets";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ShinyText from './ui/ShinyText';


// const slides = [
//   {
//     title: (
//       <div className={`${styles.BannerHeadText} text-white w-fit`}>
//         <p>Gen AI</p>
//         <p className={styles.BannerSubText}>Driven Products</p>
//       </div>
//     ),
//     category: "Gen AI Enabled Products",
//     video: Papper11,
//     mobileImage: WhitePapper2,
//   },
//   {
//     title: (
//       <div className={styles.BannerHeadText}>
//         <p className="text-white  mb-5">The Founder’s Trap</p>
//         <div className={`${styles.BannerSubText} text-white  `}>
//           <p>How Selling Stifles Startup Growth</p>
//           {/* <p> Growth</p> */}
//         </div>
//       </div>
//     ),
//     category: "Sales as a Service",
//     video: Papper22,
//     mobileImage: WhitePapper4,
//   },
//   {
//     title: (
//       <div className={styles.BannerHeadText}>
//         <p className="text-white mb-5">Digital Marketing</p>
//         <div className={styles.BannerSubText}>
//           <p className="text-white">A Crucial Piece of the Marketing Puzzle</p>
//           {/* <p className="text-white"> Marketing Puzzle</p> */}
//         </div>
//       </div>
//     ),
//     category: "Business Consulting",
//     video: Papper33,
//     mobileImage: WhitePapper6,
//   },
// ];


// function Banner() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const videoRefs = useRef([]);
//   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 7000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (!isMobile) {
//       // Play the current video when it becomes visible (desktop only)
//       if (videoRefs.current[currentSlide]) {
//         videoRefs.current[currentSlide].play();
//       }

//       // Pause all other videos
//       videoRefs.current.forEach((video, index) => {
//         if (video && index !== currentSlide) {
//           video.pause();
//         }
//       });
//     }
//   }, [currentSlide, isMobile]);

//   return (
//     <div className="h-[60vh] md:h-[98vh] w-full  overflow-hidden relative">
//       {/* Background Video or Image for the Current Slide */}
//       {slides.map((slide, index) =>
//         isMobile ? (
//           <LazyLoadImage
//             key={index}
//             src={slide.mobileImage}
//             alt="Mobile Slide"
//             // className={`absolute top-0 left-2 w-full h-1/3 object-cover z-0 transition-opacity duration-500 ${
//             className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
//               currentSlide === index ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ) : (
//           <video
//             key={index}
//             ref={(el) => (videoRefs.current[index] = el)}
//             className={`absolute top-0 left-0 w-full   h-full object-cover z-0 transition-opacity duration-500 ${
//               currentSlide === index ? "opacity-100" : "opacity-0"
//             }`}
//             src={slide.video}
//             preload="auto"
//             autoPlay={currentSlide === index}
//             loop
//             muted
//             playsInline
//           ></video>
//         )
//       )}

//       {/* Content Section */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//           className="relative h-full  md:mt-0 max-w-7xl text-nowrap  z-10"
//         >
//           <div className="px-5 sm:px-10  lg:px-24 grid h-full w-full  items-center md:grid-cols-2">
//             <div className="space-y-10  ">
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 // className="text-4xl md:text-5xl"
//                 // className={`${styles.BannerHeadText} text-white`}
//               >
//                 {slides[currentSlide].title}
//               </motion.p>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 // className={`${styles.BannerSubText} text-white`}
                
//               >
//                 {slides[currentSlide].subtitle}
//               </motion.p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="w-fit"
//               >
//                 <Link
//                   to={`/whitepaperDetail/${slides[currentSlide].category}`} // Dynamic link based on the category
//                   state={{ category: slides[currentSlide].category }}
//                   className="group flex items-center -space-x-1"
//                 >
//                   <span className=" xs:text-lg sm:text-xl z-50 border-t-2 border-black font-medium bg-black px-4 md:px-8 py-2 md:py-4 rounded-full shadow-md hover:shadow-xl transition-shadow">
//                     <ShinyText
//                       text="Let's Get Started"
//                       disabled={false}
//                       speed={3}
//                       className="custom-class "
//                     />
//                   </span>
//                   {/* <div className="hidden md:block relative z-0 mt-2">
//                     <div className="w-10 md:w-14 h-10 md:h-10 bg-slate-500 md:bg-white rounded-cylinder"></div>
//                   </div>
//                   <div className="  hidden md:block  bg-[#588157] border-2 z-20 border-white rounded-full p-5 shadow-md">
//                     <ArrowUpRight className="w-2 md:w-5 h-2 md:h-5 text-white transform group-hover:rotate-45 transition-transform" />
//                   </div> */}
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Pagination Dots */}
//       <div className="absolute left-1/2 flex -translate-x-1/2 -translate-y-10 md:-translate-y-20 gap-2 z-50">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`h-4 w-4 rounded-full transition-all duration-300 ${
//               currentSlide === index
//                 ? "bg-blue-500 w-6"
//                 : "bg-gray-300 hover:bg-gray-700"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Banner;




const slides = [
  {
    title: "Gen AI",
    subtext: "Driven Products",
    category: "Gen AI Enabled Products",
    video: Papper11,
    mobileImage: WhitePapper2,
  },
  {
    title: "The Founder’s Trap",
    subtext: "How Selling Stifles Startup Growth",
    category: "Sales as a Service",
    video: Papper22,
    mobileImage: WhitePapper4,
  },
  {
    title: "Digital Marketing",
    subtext: "A Crucial Piece of the Marketing Puzzle",
    category: "Business Consulting",
    video: Papper33,
    mobileImage: WhitePapper6,
  },
];
function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      // Play the current video when it becomes visible (desktop only)
      if (videoRefs.current[currentSlide]) {
        videoRefs.current[currentSlide].play();
      }

      // Pause all other videos
      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentSlide) {
          video.pause();
        }
      });
    }
  }, [currentSlide, isMobile]);

  return (
    <div className="h-[60vh] md:h-[98vh] w-full bg-[#3D533D] overflow-hidden relative">
      {/* Background Video or Image for the Current Slide */}
      <div className="p-1 ">
        {" "}
        {slides.map((slide, index) =>
          isMobile ? (
            <LazyLoadImage
              key={index}
              src={slide.mobileImage}
              alt="Mobile Slide"
              // className={`absolute top-0 left-2 w-full h-1/3 object-cover z-0 transition-opacity duration-500 ${
              className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            <video
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              className={`absolute top-10 right-0 w-1/2 h-5/6 border p-1 object-cover z-0 transition-opacity duration-500 hero__image  ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              } `}
              src={slide.video}
              preload="auto"
              autoPlay={currentSlide === index}
              loop
              muted
              playsInline
            />
            
          )
        )}
      </div>

      {/* Content Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative h-full  md:mt-0 max-w-7xl   z-10"
        >
          <div className="px-5 sm:px-10  lg:px-24 grid h-full w-full  items-center md:grid-cols-2">
            <div className=" ">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-serif mb-4 text-white"
                // className={`${styles.BannerHeadText} text-white`}
              >
                {slides[currentSlide].title}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                // className={`${styles.BannerSubText} text-white`}
                className="text-2xl md:text-3xl font-serif mb-14 text-white"
              >
                {slides[currentSlide].subtext}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-fit"
              >
                <Link
                  to={`/whitepaperDetail/${slides[currentSlide].category}`} // Dynamic link based on the category
                  state={{ category: slides[currentSlide].category }}
                  className="group flex items-center -space-x-1"
                >
                  <span className=" xs:text-lg sm:text-xl z-50 border-t-2 border-black font-medium bg-black px-4 md:px-8 py-2 md:py-4 r shadow-md hover:shadow-xl transition-shadow">
                    <ShinyText
                      text="Let's Get Started"
                      disabled={false}
                      speed={3}
                      className="custom-class "
                    />
                  </span>
                  {/* <div className="hidden md:block relative z-0 mt-2">
                    <div className="w-10 md:w-14 h-10 md:h-10 bg-slate-500 md:bg-white rounded-cylinder"></div>
                  </div>
                  <div className="  hidden md:block  bg-[#588157] border-2 z-20 border-white rounded-full p-5 shadow-md">
                    <ArrowUpRight className="w-2 md:w-5 h-2 md:h-5 text-white transform group-hover:rotate-45 transition-transform" />
                  </div> */}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute left-1/2 flex -translate-x-1/2 -translate-y-10 md:-translate-y-20 gap-2 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-4 w-4 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-blue-500 w-6"
                : "bg-gray-300 hover:bg-gray-700"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
