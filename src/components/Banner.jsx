// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { styles } from "../style";
// import {
//   WhitePapper1,
//   WhitePapper2,
//   WhitePapper3,
//   WhitePapper4,
//   WhitePapper5,
//   WhitePapper6,
//   Papper1,
//   Papper11,
//   Papper2,
//   Papper22,
//   Papper3,
//   Papper33,
// } from "../assets";
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     title: (
//       <>
//         <p className="text-white"> Welcome to</p>
//         <div className={`${styles.BannerHeadText} w-fit`}>
//           <p className="text-slate-200 ">Macula</p>
//           <p className="text-[5.5rem] italic  ">Consultants</p>
//         </div>
//       </>
//     ),
//     subtitle: "We're here to help your business grow.",
//     category: "GTM + Sales",
//     image: WhitePapper5,
//     // backgroundImage: `url(${Papper1})`,
//     video: Papper11,
//   },
//   {
//     title: (
//       <>
//         <div className={`${styles.BannerHeadText}`}>
//           <p className="text-black text-7xl ">The Founder’s Trap </p>
//           <p className="text-6xl italic font-semibold">How Selling Stifles </p>
//           <p className="text-6xl italic font-semibold ">Startup Growth</p>
//         </div>
//       </>
//     ),
//     category: "GEN AI Driven Products",
   
//     // backgroundImage: `url(${Papper2})`,
//     video: Papper22,
//   },
//   {
//     title: (
//       <>
//         <div className={`${styles.BannerHeadText} space-y-3 `}>
//           <p className="text-white text-7xl ">Digital Marketing</p>
//           <p className="text-6xl  text-yellow-500 italic  font-semibold">
           
//             A Crucial Piece of 
//           </p>
//           <p className="text-6xl text-yellow-500 italic  font-semibold">the Marketing Puzzle </p>
//         </div>
//       </>
//     ),
//     category: "Business Consulting",
//     image: WhitePapper1,
//     // backgroundImage: `url(${WhitePapper2})`,
//     // backgroundImage: `url(${Papper3})`,
//     video: Papper33,
//   },
// ];



// // with only IMAGES
// // export default function Banner() {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// // useEffect(() => {
// //   const interval = setInterval(() => {
// //     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
// //     // Clear interval when component unmounts
// //     return () => clearInterval(interval);
// //   }, 5000);
// // },[])

// //   return (
// //     <div
// //       className=" h-[92vh]  w-full overflow-hidden "
// //       style={{
// //         backgroundImage: slides[currentSlide].backgroundImage,
// //         backgroundSize: "cover",
// //         backgroundRepeat: "no-repeat",
// //         backgroundPosition: "center",
// //       }}
// //     >
// //       <AnimatePresence mode="wait">
// //         <motion.div
// //           key={currentSlide}
// //           initial={{ opacity: 0, x: 100 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           exit={{ opacity: 0, x: -100 }}
// //           transition={{ duration: 0.5 }}
// //           className="relative h-full w-full"
// //         >
// //           <div className="px-24 grid h-full items-center gap-10 md:grid-cols-2">
// //             <div className="space-y-8">
// //               <motion.h1
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.2 }}
// //                 className="text-4xl md:text-5xl text-gray-900"
// //               >
// //                 {slides[currentSlide].title}
// //               </motion.h1>
// //               <motion.p
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.3 }}
// //                 className={`${styles.BannerSubText} text-white`}
// //               >
// //                 {slides[currentSlide].subtitle}
// //               </motion.p>
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.4 }}
// //                 className="w-fit"
// //               >
// //                 <Link
// //                   to={{
// //                     pathname: "/whitepaper",
// //                   }}
// //                   state={{ category: slides[currentSlide].category }}
// //                   className="group flex items-center  -space-x-1.5"
// //                 >
// //                   <span className="text-[#333333] text-xl z-50 border-t-2 border-black font-medium bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
// //                     Let's Get Started
// //                   </span>
// //                   <div className="relative z-0 mt-2">
// //                     <div className="w-14 h-10 bg-white rounded-cylinder"></div>
// //                   </div>
// //                   <div className="bg-[#588157] border-2 border-white rounded-full p-5 shadow-md">
// //                     <ArrowUpRight className="w-5 h-5 text-white transform group-hover:rotate-45 transition-transform" />
// //                   </div>
// //                 </Link>
// //               </motion.div>
// //             </div>
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ delay: 0.2 }}
// //               className="absolute left-[39.5%] top-[3.5rem] hidden md:block"
// //             >
// //               {/* <img
// //                 src={slides[currentSlide].image}
// //                 alt="Hero"
// //                 className="h-[75vh] w-[40vw]   object-"
// //               /> */}
// //             </motion.div>
// //           </div>
// //         </motion.div>
// //       </AnimatePresence>

// //       {/* Pagination Dots */}
// //       <div className="absolute left-1/2 flex -translate-x-1/2 -translate-y-20 gap-2">
// //         {slides.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrentSlide(index)}
// //             className={`h-4 w-4 rounded-full transition-all duration-300 ${
// //               currentSlide === index
// //                 ? "bg-blue-500 w-6"
// //                 : "bg-gray-300 hover:bg-gray-700"
// //             }`}
// //             aria-label={`Go to slide ${index + 1}`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// // with only Videos


// export default function Banner() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//       // Clear interval when component unmounts
//       return () => clearInterval(interval);
//     }, 5000);
//   },[])



//   return (
//     <div className="h-[92vh] w-full  overflow-hidden relative">
//       {/* Background Video for the First Slide */}
//       {slides.map((slide, index) => (
//         <video
//           key={index}
//           className={`absolute top-0  h-full w-full object-cover z-0 transition-opacity duration-500 ${
//             currentSlide === index ? "opacity-100" : "opacity-0"
//           }`}
//           src={slide.video}
//           autoPlay={currentSlide === index}
//           loop
//           preload="auto"
//           muted
//           playsInline
//         ></video>
//       ))}
//       {/* Background Image for Other Slides */}
//       {/* {currentSlide !== 1 && (
//         <div
//           className="absolute top-0 left-0 h-full w-full bg-cover bg-center z-0"
//           style={{
//             backgroundImage: slides[currentSlide].backgroundImage,
//           }}
//         ></div>
//       )} */}

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//           className="relative h-full w-full z-10"
//         >
//           <div className="px-24 grid h-full items-center md:grid-cols-2">
//             <div className="space-y-10">
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-4xl md:text-5xl text-gray-900"
//               >
//                 {slides[currentSlide].title}
//               </motion.h1>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className={`${styles.BannerSubText} text-white`}
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
//                   to={{
//                     pathname: "/whitepaper",
//                   }}
//                   state={{ category: slides[currentSlide].category }}
//                   className="group flex items-center -space-x-1.5"
//                 >
//                   <span className="text-[#333333] text-xl z-50 border-t-2 border-black font-medium bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
//                     Let's Get Started
//                   </span>
//                   <div className="relative z-0 mt-2">
//                     <div className="w-14 h-10 bg-white rounded-cylinder"></div>
//                   </div>
//                   <div className="bg-[#588157] border-2 border-white rounded-full p-5 shadow-md">
//                     <ArrowUpRight className="w-5 h-5 text-white transform group-hover:rotate-45 transition-transform" />
//                   </div>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Pagination Dots */}
//       <div className="absolute left-1/2 flex -translate-x-1/2 -translate-y-20 gap-2 z-50">
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




import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { styles } from "../style";
import {
  WhitePapper1,
  WhitePapper2,
  WhitePapper3,
  WhitePapper4,
  WhitePapper5,
  WhitePapper6,
  Papper1,
  Papper11,
  Papper2,
  Papper22,
  Papper3,
  Papper33,
} from "../assets";
import { Link } from "react-router-dom";

const slides = [
  {
    title: (
      <>
        {/* <p className="text-white"> Welcome to</p> */}
        <div className={`${styles.BannerHeadText} w-fit`}>
          <p className="text-slate-200 ">GEN AI</p>
          <p className="md:text-[5.5rem] italic  ">Driven Products</p>
        </div>
      </>
    ),
    category: "GTM + Sales",
    video: Papper11,
  },
  {
    title: (
      <>
        <div className={`${styles.BannerHeadText}`}>
          <p className="t lg:text-7xl ">The Founder’s Trap </p>
          <p className="lg:text-6xl italic font-semibold">How Selling Stifles </p>
          <p className="lg:text-6xl italic font-semibold ">Startup Growth</p>
        </div>
      </>
    ),
    category: "GEN AI Driven Products",
    video: Papper22,
  },
  {
    title: (
      <>
        <div className={`${styles.BannerHeadText} space-y-3 `}>
          <p className="text-white lg:text-7xl ">Digital Marketing</p>
          <p className="lg:text-6xl  text-yellow-500 italic  font-semibold">
            A Crucial Piece of
          </p>
          <p className="lg:text-6xl text-yellow-500 italic  font-semibold">
            the Marketing Puzzle{" "}
          </p>
        </div>
      </>
    ),
    category: "Business Consulting",
    image: WhitePapper1,
    video: Papper33,
  },
];

// Banner Component
export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Play the current video when it becomes visible
    if (videoRefs.current[currentSlide]) {
      videoRefs.current[currentSlide].play();
    }

    // Pause all other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentSlide) {
        video.pause();
      }
    });
  }, [currentSlide]);

  return (
    <div className="h-[92vh] w-full  overflow-hidden relative">
      {/* Background Video for the First Slide */}
      {slides.map((slide, index) => (
        <video
          key={index}
          ref={(el) => (videoRefs.current[index] = el)}
          className={`absolute top-0 h-full w-full object-contain md:object-cover z-0 transition-opacity duration-500 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          src={slide.video}
          preload="auto" // Ensure video data is loaded as soon as possible
          autoPlay={currentSlide === index} // Only autoplay for the active slide
          loop
          muted
          playsInline
        ></video>
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full z-10"
        >
          <div className="px-10 md:px-24 grid h-full items-center md:grid-cols-2">
            <div className="space-y-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl text-red-900"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`${styles.BannerSubText} text-white`}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-fit"
              >
                <Link
                  to={{
                    pathname: "/whitepaper",
                  }}
                  state={{ category: slides[currentSlide].category }}
                  className="group flex items-center -space-x-1.5"
                >
                  <span className="text-[#333333] xs:text-lg sm:text-xl z-50 border-t-2 border-black font-medium bg-white px-4 md:px-8 py-2 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                    Let's Get Started
                  </span>
                  <div className="relative z-0 mt-2">
                    <div className="w-14  h-10 bg-white rounded-cylinder"></div>
                  </div>
                  <div className="bg-[#588157] border-2 z-20 border-white rounded-full p-5 shadow-md">
                    <ArrowUpRight className="w-5 h-5 text-white transform group-hover:rotate-45 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute left-1/2 flex -translate-x-1/2 -translate-y-20 gap-2 z-50">
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
