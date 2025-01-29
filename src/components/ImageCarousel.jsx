// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop",
//     author: "LUNDEV",
//     title: "MAJESTIC WILDLIFE",
//     topic: "NATURE",
//     description:
//       "Explore the breathtaking beauty of wildlife in their natural habitat. Every moment captured tells a story of survival, freedom, and raw beauty in nature.",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop",
//     author: "LUNDEV",
//     title: "URBAN JUNGLE",
//     topic: "CITY",
//     description:
//       "Discover the fascinating contrast between nature and urban development, where concrete meets wilderness in unexpected ways.",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8MHwwfHx8MA%3D%3D",
//     author: "LUNDEV",
//     title: "URBAN JUNGLE",
//     topic: "CITY",
//     description:
//       "Discover the fascinating contrast between nature and urban development, where concrete meets wilderness in unexpected ways.",
//   },
//   {
//     image:
//       "https://media.istockphoto.com/id/1193747353/photo/indian-street-stray-dogs-with-ears-straight-upwards-and-frowned-with-anger-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=SSuUu5d71ZtYmoXzc1VqupRvt0mr7UomdB38CjGYsKE=",
//     author: "LUNDEV",
//     title: "OCEAN DEPTHS",
//     topic: "MARINE",
//     description:
//       "Dive into the mysterious world beneath the waves, where countless species create an underwater paradise teeming with life.",
//   },
//   {
//     image:
//       "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8MHwwfHx8MA%3D%3D",
//     author: "LUNDEV",
//     title: "OCEAN DEPTHS",
//     topic: "MARINE",
//     description:
//       "Dive into the mysterious world beneath the waves, where countless species create an underwater paradise teeming with life.",
//   },
// ];

// export default function ImageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 7000);

//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const handlePrevious = () => {
//     setDirection(-1);
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
//     );
//   };

//   const handleThumbnailClick = (index) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   // Reorder slides to make currentIndex the first slide
//   const reorderedSlides = [
//     slides[currentIndex],
//     ...slides.slice(currentIndex + 1),
//     ...slides.slice(0, currentIndex),
//   ];

// const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//   };

//   const contentVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: (custom) => ({
//       y: 0,
//       opacity: 1,
//       transition: { delay: custom * 0.2 },
//     }),
//   };

//   return (
//     <div className="relative h-screen overflow-hidden bg-black">
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={currentIndex}
//           custom={direction}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//           className="absolute w-full h-full"
//         >
//           <div className="relative w-full h-full">
//             <LazyLoadImage
//               src={slides[currentIndex].image}
//               alt={slides[currentIndex].title}
//               className="w-full h-full opacity-20 object-cover"
//             />
//             <div className="absolute inset-0 bg-white/80" />
//             <div className="absolute top-[20%] left-[10%] max-w-2xl text-white">
//               <motion.div
//                 custom={1}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-sm font-bold tracking-[10px]"
//               >
//                 {slides[currentIndex].author}
//               </motion.div>
//               <motion.h2
//                 custom={2}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-6xl font-bold mt-4"
//               >
//                 {slides[currentIndex].title}
//               </motion.h2>
//               <motion.div
//                 custom={3}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-6xl font-bold text-[#f1683a]"
//               >
//                 {slides[currentIndex].topic}
//               </motion.div>
//               <motion.p
//                 custom={4}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="mt-4 text-lg max-w-xl"
//               >
//                 {slides[currentIndex].description}
//               </motion.p>
//               <motion.div
//                 custom={5}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="mt-8 flex gap-4"
//               >
//                 <button className="px-6 py-3 bg-white text-black font-medium tracking-wider hover:bg-gray-200 transition-colors">
//                   SEE MORE
//                 </button>
//                 <button className="px-6 py-3 border border-white text-white font-medium tracking-wider hover:bg-white/10 transition-colors">
//                   SUBSCRIBE
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Thumbnails */}
//       <div className="absolute bottom-20 right-0 w-1/2 z-50 flex gap-8">
//         {reorderedSlides.map((slide, index) => {
//           const isActive = index === 0;

//         return (
//           <motion.div
//             key={index}
//             onClick={() =>
//               handleThumbnailClick((currentIndex + index) % slides.length)
//             }
//             animate={{
//               scale: isActive ? 1.25 : 0.9,
//               opacity: isActive ? 1 : 0.6,
//               zIndex: isActive ? 10 : 1,
//             }}
//             initial={{
//               x: 100,
//               scale: 0.9,
//               opacity: 0.6,
//             }}
//             transition={{
//               duration: 2, // Slower transition
//               ease: "easeInOut",
//             }}
//             className="cursor-pointer relative"
//             style={{
//               minWidth: "300px",
//               height: "300px",
//             }}
//           >
//             <LazyLoadImage
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover rounded-3xl"
//             />
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-sm font-medium">{slide.title}</h3>
//               <p className="text-xs opacity-80">{slide.topic}</p>
//             </div>
//           </motion.div>
//         );

//         })}
//       </div>
//     </div>
//   );
// }

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function ImageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const handleThumbnailClick = (index) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   // Reorder slides to make currentIndex the first slide
//   const reorderedSlides = [
//     slides[currentIndex],
//     ...slides.slice(currentIndex + 1),
//     ...slides.slice(0, currentIndex),
//   ];

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//   };

//   const contentVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: (custom) => ({
//       y: 0,
//       opacity: 1,
//       transition: { delay: custom * 0.2 },
//     }),
//   };

//   return (
//     <div className="relative h-screen overflow-hidden bg-black">
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={currentIndex}
//           custom={direction}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//           className="absolute w-full h-full"
//         >
//           <div className="relative w-full h-full">
//             <LazyLoadImage
//               src={slides[currentIndex].image}
//               alt={slides[currentIndex].title}
//               className="w-full h-full opacity-20 object-cover"
//             />
//             <div className="absolute inset-0 bg-white/80" />
//             <div className="absolute top-[20%] left-[10%] max-w-2xl text-white">
//               <motion.div
//                 custom={1}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-sm font-bold tracking-[10px]"
//               >
//                 {slides[currentIndex].author}
//               </motion.div>
//               <motion.h2
//                 custom={2}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-6xl font-bold mt-4"
//               >
//                 {slides[currentIndex].title}
//               </motion.h2>
//               <motion.div
//                 custom={3}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-6xl font-bold text-[#f1683a]"
//               >
//                 {slides[currentIndex].topic}
//               </motion.div>
//               <motion.p
//                 custom={4}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="mt-4 text-lg max-w-xl"
//               >
//                 {slides[currentIndex].description}
//               </motion.p>
//               <motion.div
//                 custom={5}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="mt-8 flex gap-4"
//               >
//                 <button className="px-6 py-3 bg-white text-black font-medium tracking-wider hover:bg-gray-200 transition-colors">
//                   SEE MORE
//                 </button>
//                 <button className="px-6 py-3 border border-white text-white font-medium tracking-wider hover:bg-white/10 transition-colors">
//                   SUBSCRIBE
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//       {/* Thumbnails */}
//       <div className="absolute bottom-20 right-0 w-1/2 z-50 flex gap-8">
//         {reorderedSlides.map((slide, index) => {
//           const isActive = index === 0;

//           return (
//             <motion.div
//               key={index}
//               onClick={() =>
//                 handleThumbnailClick((currentIndex + index) % slides.length)
//               }
//               className={`cursor-pointer relative transition-transform ${
//                 isActive ? "scale-125 z-10 " : "scale-90"
//               }`}
//               style={{
//                 minWidth: "300px",
//                 height: "300px",
//               }}
//             >
//               <LazyLoadImage
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover rounded-3xl"
//               />
//               <div className="absolute bottom-4 left-4 text-white">
//                 <h3 className="text-sm font-medium">{slide.title}</h3>
//                 <p className="text-xs opacity-80">{slide.topic}</p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop",
//     author: "LUNDEV",
//     title: "MAJESTIC WILDLIFE",
//     topic: "NATURE",
//     description:
//       "Explore the breathtaking beauty of wildlife in their natural habitat. Every moment captured tells a story of survival, freedom, and raw beauty in nature.",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop",
//     author: "LUNDEV",
//     title: "URBAN JUNGLE",
//     topic: "CITY",
//     description:
//       "Discover the fascinating contrast between nature and urban development, where concrete meets wilderness in unexpected ways.",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1682687982470-8f1b0e79151c?q=80&w=2070&auto=format&fit=crop",
//     author: "LUNDEV",
//     title: "OCEAN DEPTHS",
//     topic: "MARINE",
//     description:
//       "Dive into the mysterious world beneath the waves, where countless species create an underwater paradise teeming with life.",
//   },
// ];

// export default function ImageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 7000);

//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const handlePrevious = () => {
//     setDirection(-1);
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
//     );
//   };

//   const handleThumbnailClick = (index) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//   };

//   const contentVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: (custom) => ({
//       y: 0,
//       opacity: 1,
//       transition: { delay: custom * 0.2 },
//     }),
//   };

//   return (
//     <div className="relative h-screen overflow-hidden bg-black font-['Poppins'] text-xs">
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={currentIndex}
//           custom={direction}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//           className="absolute w-full h-full"
//         >
//           <div className="relative w-full h-full">
//             <LazyLoadImage
//               src={slides[currentIndex].image}
//               alt={slides[currentIndex].title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/30" />
//             <div className="absolute top-[20%] left-[10%] max-w-2xl text-white drop-shadow-lg">
//               <motion.div
//                 custom={1}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-sm font-bold tracking-[10px]"
//               >
//                 {slides[currentIndex].author}
//               </motion.div>
//               <motion.h2
//                 custom={2}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-6xl font-bold mt-4 leading-tight md:text-3xl"
//               >
//                 {slides[currentIndex].title}
//               </motion.h2>
//               <motion.div
//                 custom={3}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-6xl font-bold text-[#f1683a] leading-tight"
//               >
//                 {slides[currentIndex].topic}
//               </motion.div>
//               <motion.p
//                 custom={4}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="mt-4 text-lg max-w-xl"
//               >
//                 {slides[currentIndex].description}
//               </motion.p>
//               <motion.div
//                 custom={5}
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="mt-8 grid grid-cols-2 w-fit gap-2"
//               >
//                 <button className="px-6 py-3 bg-white text-black font-medium tracking-[3px] hover:bg-gray-200 transition-colors">
//                   SEE MORE
//                 </button>
//                 <button className="px-6 py-3 border border-white text-white font-medium tracking-[3px] hover:bg-white/10 transition-colors">
//                   SUBSCRIBE
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Thumbnails */}
//       <div className="absolute bottom-[50px] right-10 flex gap-5 z-50">
//         {slides.map((slide, index) => (
//           <motion.div
//             key={index}
//             onClick={() => handleThumbnailClick(index)}
//             className={`relative cursor-pointer group w-[150px] h-[220px] flex-shrink-0 ${
//               index === currentIndex ? "scale-110 ring-2 ring-white" : ""
//             } transition-transform duration-300`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <LazyLoadImage
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover rounded-[20px]"
//             />
//             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 rounded-[20px] transition-colors" />
//             <div className="absolute bottom-4 left-4 right-4 text-white">
//               <h3 className="text-sm font-medium">{slide.title}</h3>
//               <p className="text-xs font-light opacity-80">{slide.topic}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <div className="absolute bottom-[20%] right-[52%] flex gap-4 z-50">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={handlePrevious}
//           className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors font-mono font-bold"
//         >
//           <ChevronLeft size={24} />
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={handleNext}
//           className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors font-mono font-bold"
//         >
//           <ChevronRight size={24} />
//         </motion.button>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";
// import "./slider.css"; // Include custom animations

// const ImageCarousel = () => {
// useEffect(() => {

//   let nextBtn = document.querySelector(".next");
//   let prevBtn = document.querySelector(".prev");

//   let slider = document.querySelector(".slider");
//   let sliderList = slider.querySelector(".slider .list");
//   let thumbnail = document.querySelector(".slider .thumbnail");
//   let thumbnailItems = thumbnail.querySelectorAll(".item");

//   thumbnail.appendChild(thumbnailItems[0]);

//   // Function for next button
//   nextBtn.onclick = function () {
//     moveSlider("next");
//   };

//   // Function for prev button
//   prevBtn.onclick = function () {
//     moveSlider("prev");
//   };

//   function moveSlider(direction) {
//     let sliderItems = sliderList.querySelectorAll(".item");
//     let thumbnailItems = document.querySelectorAll(".thumbnail .item");

//     if (direction === "next") {
//       sliderList.appendChild(sliderItems[0]);
//       thumbnail.appendChild(thumbnailItems[0]);
//       slider.classList.add("next");
//     } else {
//       sliderList.prepend(sliderItems[sliderItems.length - 1]);
//       thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
//       slider.classList.add("prev");
//     }

//     slider.addEventListener(
//       "animationend",
//       function () {
//         if (direction === "next") {
//           slider.classList.remove("next");
//         } else {
//           slider.classList.remove("prev");
//         }
//       },
//       { once: true }
//     );
//   }
// })

//   return (
//     <div class="slider">
//       <div class="list">
//         <div class="item">
//           <LazyLoadImage
//             src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop"
//             alt=""
//           />

//           <div class="content">
//             <div class="title">MAGIC SLIDER</div>
//             <div class="type">FLOWER</div>
//             <div class="description">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
//               temporibus quis eum consequuntur voluptate quae doloribus
//               distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
//               consectetur adipisicing elit. Sequi, aut.
//             </div>
//             <div class="button">
//               <button>SEE MORE</button>
//             </div>
//           </div>
//         </div>
//         <div class="item">
//           <LazyLoadImage
//             src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop"
//             alt=""
//           />

//           <div class="content">
//             <div class="title">MAGIC SLIDER</div>
//             <div class="type">FLOWER</div>
//             <div class="description">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
//               temporibus quis eum consequuntur voluptate quae doloribus
//               distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
//               consectetur adipisicing elit. Sequi, aut.
//             </div>
//             <div class="button">
//               <button>SEE MORE</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="thumbnail">
//         <div class="item">
//           <LazyLoadImage
//             src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop"
//             alt=""
//           />
//         </div>
//         <div class="item">
//           <LazyLoadImage
//             src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop"
//             alt=""
//           />
//         </div>
//       </div>

//       <div class="nextPrevArrows">
//         <button class="prev"> </button>
//         <button class="next"> </button>
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   {
//     id: 1,
//     src: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop",
//     text: "Text for Image 1",
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8MHwwfHx8MA%3D%3D",
//     text: "Text for Image 2",
//   },
//   {
//     id: 3,
//     src: "https://media.istockphoto.com/id/1193747353/photo/indian-street-stray-dogs-with-ears-straight-upwards-and-frowned-with-anger-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=SSuUu5d71ZtYmoXzc1VqupRvt0mr7UomdB38CjGYsKE=",
//     text: "Text for Image 3",
//   },
//   {
//     id: 4,
//     src: "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8MHwwfHx8MA%3D%3D",
//     text: "Text for Image 4",
//   },
// ];

// export default function ImageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="flex w-screen  overflow-hidden">
//         {/* Left Side Text */}
//         <div className="w- flex items-center justify-center bg-white p-6 rounded-l-lg shadow">
//           <AnimatePresence>
//             <motion.div
//               key={images[currentIndex].id}
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 50 }}
//               transition={{ duration: 0.5 }}
//               className="text-lg text-gray-700 font-semibold text-center"
//             >
//               {images[currentIndex].text}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Right Side Slider */}
//         <div className="relative w-full bg-white p-6 rounded-r-lg shadow">
//           <div className="relative flex justify-center items-center">
//             {/* Image Queue */}
//             <div className="absolute flex justify-center items-center overflow-hidden w-full h-80">
//               {images.map((image, index) => {
//                 const isActive = index === currentIndex;
//                 const offset =
//                   (index - currentIndex + images.length) % images.length;

//                 return (
//                   <motion.div
//                     key={image.id}
//                     className={`absolute rounded-lg overflow-hidden shadow-lg`}
//                     style={{
//                       transform: `translateX(${offset * 120}px)`,
//                       zIndex: images.length - offset,
//                     }}
//                     animate={{
//                       scale: isActive ? 1.1 : 0.8,
//                       x: offset * 120,
//                       opacity: isActive ? 1 : 0.5,
//                     }}
//                     transition={{
//                       duration: 0.5,
//                       type: "spring",
//                     }}
//                   >
//                     <LazyLoadImage
//                       src={image.src}
//                       alt={image.text}
//                       className={`w-[550px] min-h-[500px] bg-center`}
//                     />
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center mt-8">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 mx-2 rounded-full transition-colors ${
//                   index === currentIndex
//                     ? "bg-gray-800"
//                     : "bg-gray-400 hover:bg-gray-600"
//                 }`}
//               ></button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Controls */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-5 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
//       >
//         Prev
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-5 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
//       >
//         Next
//       </button>
//     </div>
//   );
// }
// Slider.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const slides = [
//   {
//     id: 1,
//     imageUrl: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop",
//     text: "Text for Image 1",
//   },
//   {
//     id: 2,
//     imageUrl: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8MHwwfHx8MA%3D%3D",
//     text: "Text for Image 2",
//   },
//   {
//     id: 3,
//     imageUrl: "https://media.istockphoto.com/id/1193747353/photo/indian-street-stray-dogs-with-ears-straight-upwards-and-frowned-with-anger-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=SSuUu5d71ZtYmoXzc1VqupRvt0mr7UomdB38CjGYsKE=",
//     text: "Text for Image 3",
//   },
//   {
//     id: 4,
//     imageUrl: "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8MHwwfHx8MA%3D%3D",
//     text: "Text for Image 4",
//   },
// ];

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const sliderVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };
//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-col md:flex-row">
//         {/* Text Container */}
//         <div className="md:w-1/2 p-6 md:pr-12">
//           <motion.h2
//             variants={sliderVariants}
//             initial="hidden"
//             animate="visible"
//             className="text-2xl md:text-3xl font-semibold mb-4"
//           >
//             {slides[currentIndex].text}
//           </motion.h2>
//         </div>

//         {/* Image Container */}
//         <div className="md:w-1/2 relative flex items-center justify-center mb-8 md:mb-20">
//           {slides.map((slide, index) => {
//             const isCurrent = index === currentIndex;
//             const positionX = (index - currentIndex) * 100;
//             const scaleValue = isCurrent ? 1.2 : 1;

//             return (
//               <motion.div
//                 key={slide.id}
//                 className="absolute overflow-hidden rounded-lg shadow-xl z-10"
//                 style={{
//                   width: "400px",
//                   height: "250px",
//                   position: "absolute",
//                   left: "50%",
//                   top: "50%",
//                   transform: "translate(-50%, -50%)",
//                 }}
//                 initial={{ x: `${positionX}%`, scale: 1, opacity: 0.8 }}
//                 animate={{
//                   x: `${positionX}%`,
//                   scale: scaleValue,
//                   opacity: isCurrent ? 1 : 0.8,
//                   zIndex: isCurrent ? 20 : 10,
//                 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//               >
//                 <LazyLoadImage
//                   src={slide.imageUrl}
//                   alt={`Slide ${slide.id}`}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex mt-52 justify-center space-x-2">
//         {slides.map((slide, index) => (
//           <button
//             key={slide.id}
//             className={`h-3 w-3 rounded-full ${
//               index === currentIndex ? "bg-blue-500" : "bg-gray-300"
//             }`}
//             onClick={() => handleDotClick(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

// import React, { useState } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
//  import {
//    slider1,
//    slider2,
//    slider3,
//    slider4,
//    slider5,
//    slider6,
//    slider7,
//    slider8,
//  } from "../assets/index.js"
// import { styles } from "../style.js";

//  const images = [
//    {
//      id: 1,
//      src: slider1,
//      text: "Strategic Support and Accountability",
//      subtext: "Develop actionable strategies and ensure accountability.",
//    },
//    {
//      id: 2,
//      src: slider2,
//      text: "Goal Setting and Monitoring",
//      subtext: "Set clear goals and track progress effectively. ",
//    },
//    {
//      id: 3,
//      src: slider3,
//      text: "Risk Mitigation",
//      subtext: "Minimize risks and prepares for challenges.",
//    },
//    {
//      id: 4,
//      src: slider4,
//      text: "Effective Solutions",
//      subtext: "Deliver efficient solutions for maximum ROI. ",
//    },
//    {
//      id: 5,
//      src: slider5,
//      text: "Training and Development",
//      subtext: "Enhance workforce skills and growth. ",
//    },
//    {
//      id: 6,
//      src: slider6,
//      text: "Efficiency and Effectiveness",
//      subtext: "Streamline operations and enhance performance.",
//    },
//    {
//      id: 7,
//      src: slider7,
//      text: "Expertise and Specialized Knowledge",
//      subtext:
//        "Provide advanced expertise and addresses internal capability gaps. ",
//    },
//    {
//      id: 8,
//      src: slider8,
//      text: "Networking Opportunities",
//      subtext: "Connect to networks for partnerships and growth.",
//    },
//  ];

// export default function ImageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//     const ref = React.useRef(null);
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className=" py-20 min-h-fit ">
//       <div className="text-center">
//         <p className={`${styles.sectionHeadText} text-center  `}>
//           Why <span className=" italic">Consulting</span> is
//           Important?
//         </p>
//         <p className={`${styles.sectionSubText} pt-5  `}>
//           We specialize in providing practical advice and hands-on support to
//           businesses like yours.
//         </p>
//       </div>
//       <div className="flex w-full px-40  overflow-hidden  ">
//         {/* Left Side Text */}
//         <div className="w-1/2 flex items-center justify-center  ">
//           <AnimatePresence>
//             <motion.div
//               key={images[currentIndex].id}
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 50 }}
//               transition={{ duration: 0.5 }}
//             >
//               <p
//                 className={`${styles.PageSubHeading} text-center font-semibold  `}
//               >
//                 {images[currentIndex].text}
//               </p>
//               <p
//                 className={`${styles.sectionSubText} text-center mt-10 w-full font-semibold  `}
//               >
//                 {images[currentIndex].subtext}
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//         {/* Right Side Slider */}
//         <div className="relative w-4/5  ">
//           <div className="relative flex  justify-center items-center  h-[80vh]">
//             {images.map((image, index) => {
//               const isActive = index === currentIndex;
//               const offset =
//                 (index - currentIndex + images.length) % images.length;

//               return (
//                 <motion.div
//                   key={image.id}
//                   className="absolute  rounded-lg overflow-hidden shadow-lg"
//                   style={{
//                     transform: `translateX(${offset * 180}px)`, // Increased spacing from 150px to 180px
//                     zIndex: images.length - offset,
//                   }}
//                   animate={{
//                     scale: isActive ? 1.1 : 0.8,
//                     x: offset * 400, // Increased spacing here too
//                     opacity: isActive ? 1 : 1,
//                   }}
//                   transition={{
//                     duration: 0.8,
//                     type: "ease",
//                   }}
//                 >
//                   <LazyLoadImage
//                     src={image.src}
//                     alt={image.text}
//                     className="w-[400px] h-[300px] object-cover"
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       {/* Pagination Dots */}
//       <div className=" flex justify-center ">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-4 h-4 mx-2 rounded-full ${
//               index === currentIndex
//                 ? "bg-gray-800"
//                 : "bg-gray-400 hover:bg-gray-600"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import {
//   slider1,
//   slider2,
//   slider3,
//   slider4,
//   slider5,
//   slider6,
//   slider7,
//   slider8,
// } from "../assets/index.js";
// import { styles } from "../style.js";
// import { Link } from "react-router-dom";
// import { ArrowRight, ArrowUpRight } from "lucide-react";
// import { ButtonFade } from "./ui/motion.js";

// const images = [
//   {
//     id: 1,
//     src: slider1,
//     text: "Strategic Support and Accountability",
//     subtext: "Develop actionable strategies and ensure accountability.",
//   },
//   {
//     id: 2,
//     src: slider2,
//     text: "Goal Setting and Monitoring",
//     subtext: "Set clear goals and track progress effectively.",
//   },
//   {
//     id: 3,
//     src: slider3,
//     text: "Risk Mitigation",
//     subtext: "Minimize risks and prepares for challenges.",
//   },
//   {
//     id: 4,
//     src: slider4,
//     text: "Effective Solutions",
//     subtext: "Deliver efficient solutions for maximum ROI.",
//   },
//   {
//     id: 5,
//     src: slider5,
//     text: "Training and Development",
//     subtext: "Enhance workforce skills and growth.",
//   },
//   {
//     id: 6,
//     src: slider6,
//     text: "Efficiency and Effectiveness",
//     subtext: "Streamline operations and enhance performance.",
//   },
//   {
//     id: 7,
//     src: slider7,
//     text: "Expertise and Specialized Knowledge",
//     subtext:
//       "Provide advanced expertise and addresses internal capability gaps.",
//   },
//   {
//     id: 8,
//     src: slider8,
//     text: "Networking Opportunities",
//     subtext: "Connect to networks for partnerships and growth.",
//   },
// ];

// export default function ImageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
// const [isClicked, setIsClicked] = useState(false);
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };
//   function delayAndGo(e) {
//     e.preventDefault();
//     setTimeout(() => navigate("/services"), 300);
//   }
//   return (
//     <div className="py-20 bg-white/65 min-h-fit relative">
//       {/* Background image with blur */}
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-xl"
//         style={{
//           backgroundImage: `url(${images[currentIndex].src})`,
//           zIndex: -1,
//         }}
//       ></div>

//       <div className="text-center">
//         <p className={`${styles.sectionHeadText} text-center`}>
//           Why <span className=" italic">Consulting</span> is
//           Important?
//         </p>
//         <p className={`${styles.sectionSubText} pt-5`}>
//           We specialize in providing practical advice and hands-on support to
//           businesses like yours.
//         </p>
//       </div>

//       <div className="flex w-full pr-80 overflow-hidden">
//         {/* Left Side Text */}
//         <div className="w-full  flex items-center justify-center">
//           <AnimatePresence>
//             <div key={images[currentIndex].id} className="absolute">
//               <motion.p
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.8 }}
//                 className={`${styles.PageSubHeading} text-center text-nowrap font-semibold`}
//               >
//                 {images[currentIndex].text}
//               </motion.p>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1 }}
//                 className={`${styles.sectionSubText} text-center mt-10 w-full font-semibold`}
//               >
//                 {images[currentIndex].subtext}
//               </motion.p>
//               <Link
//                 to="/services"
//                 onClick={delayAndGo}
//                 onMouseLeave={() => setIsClicked(false)}
//                 className="flex items-center border gap-2 bg-white text-white w-fit pl-2 rounded-full hover:bg-slate-300 transition-colors"
//               >
//                 <motion.div
//                   onClick={() => setIsClicked(true)}
//                   variants={ButtonFade(isClicked)}
//                   animate="animate"
//                   className="bg-[#588157] rounded-full p-2 shadow-md"
//                 >
//                   <ArrowRight className="w-5 h-5 text-white transform  transition-transform" />
//                 </motion.div>
//                 <motion.span
//                   onClick={() => setIsClicked(true)}
//                   animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
//                   className="items-center font-bold  bg-[#588157] text-white px-4 py-2  rounded-full transition-colors"
//                 >
//                   Explore More
//                 </motion.span>
//               </Link>
//             </div>
//           </AnimatePresence>
//         </div>

//         {/* Right Side Slider */}
//         <div className="relative w-4/5">
//           <div className="relative flex justify-center items-center h-[80vh]">
//             {images.map((image, index) => {
//               const isActive = index === currentIndex;
//               const offset =
//                 (index - currentIndex + images.length) % images.length;

//               return (
//                 <motion.div
//                   key={image.id}
//                   className="absolute rounded-lg overflow-hidden shadow-lg"
//                   style={{
//                     transform: `translateX(${offset * 180}px)`, // Increased spacing from 150px to 180px
//                     zIndex: images.length - offset,
//                   }}
//                   animate={{
//                     scale: isActive ? 1.1 : 0.8,
//                     x: offset * 500, // Increased spacing here too
//                     opacity: isActive ? 1 : 1,
//                   }}
//                   transition={{
//                     duration: 1,
//                     type: "ease",
//                   }}
//                 >
//                   <LazyLoadImage
//                     src={image.src}
//                     alt={image.text}
//                     className="w-[30rem] h-[30rem] rounded-2xl object-cover"
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-4 h-4 mx-2 rounded-full ${
//               index === currentIndex
//                 ? "bg-gray-800"
//                 : "bg-gray-400 hover:bg-gray-600"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate import
import { ArrowRight } from "lucide-react";
import { ButtonFade } from "./ui/motion.js";
import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
} from "../assets/index.js";
import { styles } from "../style.js";
import { useMediaQuery } from "react-responsive";
import { LazyLoadImage } from "react-lazy-load-image-component";

const images = [
  {
    id: 1,
    src: slider1,
    text: (
      <p>
        Strategic Support and <br /> Accountability
      </p>
    ),
    subtext: "Develop actionable strategies and ensure accountability.",
  },
  {
    id: 2,
    src: slider2,
    text: "Goal Setting and Monitoring",
    subtext: "Set clear goals and track progress effectively.",
  },
  {
    id: 3,
    src: slider3,
    text: "Risk Mitigation",
    subtext: "Minimize risks and prepares for challenges.",
  },
  {
    id: 4,
    src: slider4,
    text: "Effective Solutions",
    subtext: "Deliver efficient solutions for maximum ROI.",
  },
  {
    id: 5,
    src: slider5,
    text: "Training and Development",
    subtext: "Enhance workforce skills and growth.",
  },

  {
    id: 6,
    src: slider7,
    text: <p>Expertise and Specialized <br /> Knowledge</p>,
    subtext:
      "Provide advanced expertise and addresses internal capability gaps.",
  },
  {
    id: 7,
    src: slider8,
    text: "Networking Opportunities",
    subtext: "Connect to networks for partnerships and growth.",
  },
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate(); // Use navigate hook here
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  function delayAndGo(e) {
    e.preventDefault();
    setTimeout(() => navigate("/services"), 300); // Proper navigate call
  }

  return (
    <div className="py-20 bg-white/90 min-h-fit relative">
      {/* Background image with blur */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          zIndex: -1,
        }}
      ></div>

      {/* Title Section */}
      <div className="text-center">
        <p className={`text-3xl  ${styles.sectionHeadText}`}>
          Why <span className="text-[#000000] italic">Consulting</span> is
          Important?
        </p>
        <p className="text-lg pt-5">
          We specialize in providing practical advice and hands-on support to
          businesses like yours.
        </p>
      </div>

      {/* Content */}
      <div className="lg:flex w-full lg:pr-72 2xl:pr-96">
        {/* Left Side Text */}
        <div className="w-full lg:flex items-center tracking-tighter pl-5 md:pl-14  2xl:pl-32">
          <AnimatePresence>
            <div key={images[currentIndex].id} className="absolute ">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-4xl  w-80 md:w-fit font-semibold"
              >
                {images[currentIndex].text}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-xl  my-4 "
              >
                {images[currentIndex].subtext}
              </motion.p>
            </div>
            <Link
              to="/services"
              onClick={delayAndGo}
              onMouseLeave={() => setIsClicked(false)}
              className="flex items-center border gap-2 mt-10   lg:mt-52 bg-white w-fit pl-2 rounded-full hover:bg-slate-300 transition-colors"
            >
              <motion.div
                onClick={() => setIsClicked(true)}
                variants={ButtonFade(isClicked)}
                animate="animate"
                className="bg-[#67883B] rounded-full p-2 shadow-md"
              >
                <ArrowRight className="w-5 h-5 text-white transform transition-transform" />
              </motion.div>
              <motion.span
                onClick={() => setIsClicked(true)}
                animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
                className="items-center font-bold bg-[#67883B] text-white px-4 py-2 rounded-full transition-colors"
              >
                Explore More
              </motion.span>
            </Link>
          </AnimatePresence>
        </div>

        {/* Right Side Slider */}
        <div className="w-full pr-20 2xl:pr-32">
          <div className="relative flex justify-center items-center w-full h-[70vh] lg:h-[80vh]">
            {images.map((image, index) => {
              const isActive = index === currentIndex;
              const offset = (index - currentIndex) % images.length;
              const imageGap = isMobile ? 10 : 20; // Adjust gap for mobile
              const translateX = isMobile ? 200 : 380; // Movement adjustment for mobile
              const scale = isMobile
                ? isActive
                  ? 0.9
                  : 0.5
                : isActive
                ? 1
                : 0.7;

              return (
                <motion.div
                  key={image.id}
                  className="absolute mt-56   md:mt-0 "
                  style={
                    {
                      // transform: `translateX(${offset * (100 + imageGap)}px)`,
                      // zIndex: images.length - Math.abs(offset),
                    }
                  }
                  animate={{
                    scale: scale,
                    // x: offset * (translateX + imageGap),
                    x: isActive ? 0 : offset * translateX + 70,
                    y: isActive ? 0 : isMobile ? 50 : 70,
                    opacity: offset < 0 ? 0 : 1,
                  }}
                  transition={{
                    type: "spring",
                    delay: 0.1,
                    duration: 1,
                    stiffness: isMobile ? 100 : 100,
                    damping: isMobile ? 15 : 20,
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <LazyLoadImage
                    src={image.src}
                    alt={image.text}
                    // @red Images are correct just need to upload same rounded image
                    className={` rounded-[3rem]  cursor-pointer object-center object-cover ${
                      isMobile
                        ? "w-[18rem] h-[18rem]"
                        : "md:w-[30rem] md:h-[30rem]  "
                    } `}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 mx-2 rounded-full ${
              index === currentIndex
                ? "bg-gray-800"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
