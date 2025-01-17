import WhyImg1 from "../assets/whyImg1.png";
import WhyImg2 from "../assets/whyImg2.png";
import WhyImg3 from "../assets/whyImg3.png";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { whyImg } from "../assets";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { motion,useInView, useScroll,useAnimation } from "framer-motion";
// export default function WhySection() {

// const ref =React.useRef(null);
// const isInView=useInView(ref,{once:true,amount:0.5});
// const scrolling = useScroll()



//   const pieces = [
//     { id: 1, src: WhyImg1, x: -200, y: -200 },
//     { id: 2, src: WhyImg2, x: 0, y: -200 },
//     { id: 3, src: WhyImg3, x: 200, y: -200 },
//   ];

//   return (
//     <section className=" px-14  py-10 ">
//       <div
        
//         className="grid md:grid-cols-2 gap-1 items-center"
//       >
//         {/* Left side - Image */}
//         <div className="relative">
//           <div className="aspect-square max-w-2xl">
//             <motion.div className="relative py-20">
             
//               {pieces.map((piece) => (
//                 <motion.img
//                   key={piece.id}
//                   src={piece.src}
//                   alt={`Piece ${piece.id}`}
//                   className="absolute"
//                   initial={{
//                     opacity: 0,
//                     x: piece.x,
//                     y: piece.y,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     x: 0,
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 1,
//                     delay: piece.id * 0.2,
//                     easings: "easeInOut",
//                   }}
//                   viewport={{
//                     once: true,
//                     amount: 0.1,
//                   }}
//                 />
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* Right side - Content */}
//         <div className="space-y-6">
//           <h2
//             ref={ref}
//             className={`${styles.sectionHeadText} ${
//               isInView ? "motion-preset-slide-right-md" : "opacity-0"
//             } transition-all duration-1000 ease-in-out`}
//           >
//             Why <span className="text-[#588157] italic">Consulting</span> is
//             Important?
//           </h2>

//           <p className="text-gray-600 leading-relaxed pr-14">
//             We specialize in providing practical advice and hands-on support to
//             businesses like yours. Our team has years of experience in various
//             industries and brings together skills in strategy, operations,
//             finance, and more. We believe that every business has the potential
//             to thrive with the right tools and guidance.
//           </p>

//           <Link
//             to="/about"
//             className="group flex w-fit items-center -space-x-1.5 "
//           >
//             <span className="text-[#333333] text-xl z-50 border-2 font-medium bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
//               Read more about us
//             </span>
//             <div className="relative z-0 mt-2">
//               <div className="w-14 h-10 bg-white rounded-cylinder"></div>
//             </div>

//             <div className="bg-[#588157] rounded-full border-4 border-white p-5 shadow-md">
//               <ArrowUpRight className="w-5 h-5 text-white transform group-hover:rotate-45 transition-transform" />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function WhySection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const pieces = [
    { id: 1, src: WhyImg1, x: -200, y: -200 },
    { id: 2, src: WhyImg2, x: 0, y: -200 },
    { id: 3, src: WhyImg3, x: 200, y: -200 },
  ];

  const controls = useAnimation();

  return (
    <section className=" px-14  py-10  ">
      <div className="grid lg:grid-cols-2 gap-1 items-center">
        {/* Left side - Image */}
        <div className="relative ">
          <div className="overflow-visible aspect-square max-w-2xl">
            <motion.div className="relative py-20">
              {pieces.map((piece) => (
                <motion.img
                  key={piece.id}
                  src={piece.src}
                  alt={`Piece ${piece.id}`}
                  className="absolute"
                  initial={{
                    opacity: 0,
                    x: piece.x,
                    y: piece.y,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    scale: [1, 1.1, 1], // Adding a scroll-based scale effect
                    rotate: [0, 10, 0], // Rotate on scroll
                  }}
                  transition={{
                    duration: 1,
                    delay: piece.id * 0.2,
                    ease: "easeInOut",
                  }}
                  viewport={{
                    // once: true,
                    amount: 0.1,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6 mt-14 md:mt-0 ">
          <h2
            ref={ref}
            className={`${styles.sectionHeadText} ${
              isInView
                ? "motion-preset-slide-down-lg motion-duration-1000"
                : "opacity-0"
            } transition-all ease-in-out `}
            
          >
            Why <span className="text-[#588157] italic">Consulting</span> is
            Important?
          </h2>

          <p
            ref={ref}
            className={` ${
              isInView ? "motion-preset-slide-up-lg " : "opacity-0"
            } transition-all motion-duration-1000  text-gray-600 leading-relaxed md:pr-14`}
          >
            We specialize in providing practical advice and hands-on support to
            businesses like yours. Our team has years of experience in various
            industries and brings together skills in strategy, operations,
            finance, and more. We believe that every business has the potential
            to thrive with the right tools and guidance.
          </p>

          <Link
            to="/about"
            className="group flex w-full items-center -space-x-1.5 "
          >
            <span className="text-[#333333] xs:text-sm sm:text-xl z-50 border-t-2  border-black font-medium bg-white px-2 md:px-8 py-2 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              Read more about us
            </span>
            <div className="relative z-0 mt-2">
              <div className="w-14 h-10 bg-slate-100 rounded-cylinder"></div>
            </div>

            <div className="bg-[#588157] rounded-full border-4 border-white p-5 shadow-md">
              <ArrowUpRight className="w-5 h-5 text-white transform group-hover:rotate-45 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
