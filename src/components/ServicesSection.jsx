
// import { ArrowRight } from "lucide-react";
// import { gtmImg, genAiImg, salesImg } from "../assets";
// import { styles } from "../style";
// import { Link, useNavigate } from "react-router-dom";
// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { ButtonFade } from "./ui/motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// // ProjectCard component
// const ProjectCard = ({ index, title, description, image, category }) => {
//   return (
//     // <div>
//     //   <Tilt
//     //     options={{
//     //       max: 15,
//     //       scale: 1,
//     //       speed: 10,
//     //     }}
//     //     className="bg-transparent rounded-3xl h-full overflow-visible border-2 p-5"
//     //   >
//     //     <div className="">
//     //       <h3 className="text-xl font-medium mb-3">{title}</h3>
//     //       <p className="text-gray-600   mb-10">{description}</p>
//     //       <Link
//     //         to={{
//     //           pathname: "/services",
//     //         }}
//     //         state={{ category }}
//     //         className="absolute bottom-1 right-1 p-3 border-2 rounded-full -rotate-45 hover:rotate-0 text-black hover:text-white hover:bg-[#4a6d49]  transition-transform"
//     //       >
//     //         <ArrowRight className="w-4 h-4" />
//     //       </Link>
//     //     </div>
//     //     <div className="relative   rounded-2xl">
//     //       <LazyLoadImage
//     //         src={image}
//     //         alt="project_image"
//     //         className="w-full h-auto "
//     //       />
//     //     </div>
//     //   </Tilt>
//     // </div>
//     <div className="bg-transparent rounded-3xl h-full overflow-visible border-2 p-5 relative flex flex-col justify-between">
//       <div>
//         <h3 className="text-xl font-medium mb-3">{title}</h3>
//         <p className="text-gray-600 mb-10">{description}</p>
//       </div>
//       <div className="relative flex justify-center">
//         <LazyLoadImage
//           src={image}
//           alt="project_image"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <Link
//         to={{ pathname: "/services" }}
//         state={{ category }}
//         className="absolute bottom-1 right-1 p-3 border-2 rounded-full -rotate-45 hover:rotate-0 text-black hover:text-white hover:bg-[#4a6d49] transition-transform"
//       >
//         <ArrowRight className="w-4 h-4" />
//       </Link>
//     </div>
//   );
// };

// const services = [
//   {
//     title: "Sales as a Service",
//     category: "Sales as a Service",
//     description:
//       "A Go-to-Market (GTM) strategy is a comprehensive plan that outlines how a company will sell its products or services to customers. It encompasses various components that are essential for successfully launching and positioning a product in the market. ",
//     image: gtmImg,
//   },
//   {
//     title: "Business Consulting",
//     category: "Business Consulting",
//     description:
//       "We provide expert advice and guidance to organizations aiming to improve their operations, achieve specific goals, and resolve complex challenges. Our Start-up incubation service involves supporting new businesses through various stages of development by providing resources, mentorship, and networking opportunities.",
//     image: salesImg,
//   },
//   {
//     title: "Gen AI Enabled Products",
//     category: "Gen AI Enabled Products",
//     description:
//       "We provide expert advice and guidance to organizations aiming to improve their operations, achieve specific goals, and resolve complex challenges. Our Start-up incubation service involves supporting new businesses through various stages of development by providing resources, mentorship, and networking opportunities.",
//     image: genAiImg,
//   },
// ];

// function ServicesSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.8 });
//   const [isClicked, setIsClicked] = useState(false);
//   const navigate = useNavigate();

//   function delayAndGo(e) {
//     e.preventDefault();
//     setTimeout(() => navigate("/services"), 300);
//   }

//   return (
//     <section className="py-16 ">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="md:flex justify-between items-center mb-12">
//           <p
//             ref={ref}
//             className={`${styles.sectionHeadText} ${
//               isInView ? "motion-preset-slide-right-md" : "opacity-0"
//             } transition-all duration-1000 ease-in-out md:py-5`}
//           >
//             Explore Our <span className=" italic">Services</span>
//           </p>
//           <Link
//             to="/services"
//             onClick={delayAndGo}
//             onMouseLeave={() => setIsClicked(false)}
//             className=" hidden md:flex items-center border gap-2 bg-white text-white w-fit pl-2 rounded-full hover:bg-slate-300 transition-colors"
//           >
//             <motion.div
//               onClick={() => setIsClicked(true)}
//               variants={ButtonFade(isClicked)}
//               animate="animate"
//               className="bg-[#588157] rounded-full p-2 shadow-md"
//             >
//               <ArrowRight className="w-5 h-5 text-white transform  transition-transform" />
//             </motion.div>
//             <motion.span
//               onClick={() => setIsClicked(true)}
//               animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
//               className="items-center font-bold  bg-[#588157] text-white px-4 py-2  rounded-full transition-colors"
//             >
//               Explore More
//             </motion.span>
//           </Link>
//         </div>

//         {/* Services Grid */}
//         <div className="grid  lg:grid-cols-3  gap-6 ">
//           {services.map((service, index) => (
//             <ProjectCard key={`project-${index}`} index={index} {...service} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ServicesSection;




import { ArrowRight } from "lucide-react";
import { gtmImg, genAiImg, salesImg } from "../assets";
import { styles } from "../style";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ButtonFade } from "./ui/motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ShinyText from "./ui/ShinyText";

// ProjectCard component
// const ProjectCard = ({ index, title, description, image, category }) => {
//   return (
//     // <div>
//     //   <Tilt
//     //     options={{
//     //       max: 15,
//     //       scale: 1,
//     //       speed: 10,
//     //     }}
//     //     className="bg-transparent rounded-3xl h-full overflow-visible border-2 p-5"
//     //   >
//     //     <div className="">
//     //       <h3 className="text-xl font-medium mb-3">{title}</h3>
//     //       <p className="text-gray-600   mb-10">{description}</p>
//     //       <Link
//     //         to={{
//     //           pathname: "/services",
//     //         }}
//     //         state={{ category }}
//     //         className="absolute bottom-1 right-1 p-3 border-2 rounded-full -rotate-45 hover:rotate-0 text-black hover:text-white hover:bg-[#4a6d49]  transition-transform"
//     //       >
//     //         <ArrowRight className="w-4 h-4" />
//     //       </Link>
//     //     </div>
//     //     <div className="relative   rounded-2xl">
//     //       <LazyLoadImage
//     //         src={image}
//     //         alt="project_image"
//     //         className="w-full h-auto "
//     //       />
//     //     </div>
//     //   </Tilt>
//     // </div>
//     <div className="bg-transparent rounded-3xl h-full overflow-visible border-2 p-5 relative flex flex-col justify-between">
//       <div>
//         <h3 className="text-xl font-medium mb-3">{title}</h3>
//         <p className="text-gray-600 mb-10">{description}</p>
//       </div>
//       <div className="relative flex justify-center">
//         <LazyLoadImage
//           src={image}
//           alt="project_image"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <Link
//         to={{ pathname: "/services" }}
//         state={{ category }}
//         className="absolute bottom-1 right-1 p-3 border-2 rounded-full -rotate-45 hover:rotate-0 text-black hover:text-white hover:bg-[#4a6d49] transition-transform"
//       >
//         <ArrowRight className="w-4 h-4" />
//       </Link>
//     </div>
//   );
// };

// const services = [
//   {
//     title: "Sales as a Service",
//     category: "Sales as a Service",
//     description:
//       "A Go-to-Market (GTM) strategy is a comprehensive plan that outlines how a company will sell its products or services to customers. It encompasses various components that are essential for successfully launching and positioning a product in the market. ",
//     image: gtmImg,
//   },
//   {
//     title: "Business Consulting",
//     category: "Business Consulting",
//     description:
//       "We provide expert advice and guidance to organizations aiming to improve their operations, achieve specific goals, and resolve complex challenges. Our Start-up incubation service involves supporting new businesses through various stages of development by providing resources, mentorship, and networking opportunities.",
//     image: salesImg,
//   },
//   {
//     title: "Gen AI Enabled Products",
//     category: "Gen AI Enabled Products",
//     description:
//       "We provide expert advice and guidance to organizations aiming to improve their operations, achieve specific goals, and resolve complex challenges. Our Start-up incubation service involves supporting new businesses through various stages of development by providing resources, mentorship, and networking opportunities.",
//     image: genAiImg,
//   },
// ];

// function ServicesSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.8 });
//   const [isClicked, setIsClicked] = useState(false);
//   const navigate = useNavigate();

//   function delayAndGo(e) {
//     e.preventDefault();
//     setTimeout(() => navigate("/services"), 300);
//   }

//   return (
//     <section className="py-16 ">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="md:flex justify-between items-center mb-12">
//           <p
//             ref={ref}
//             className={`text-4xl md:text-5xl font-serif  ${
//               isInView ? "motion-preset-slide-right-md" : "opacity-0"
//             } transition-all duration-1000 ease-in-out md:py-5`}
//           >
//             Explore Our <span className=" ">Services</span>
//           </p>
//           <Link
//             to="/services"
//             onClick={delayAndGo}
//             onMouseLeave={() => setIsClicked(false)}
//             className=" hidden md:flex items-center border gap-2 bg-white text-white w-fit pl-2  hover:bg-slate-300 transition-colors"
//           >
//             <motion.div
//               onClick={() => setIsClicked(true)}
//               variants={ButtonFade(isClicked)}
//               animate="animate"
//               className="bg-[#000000] rounded-full p-2 shadow-md"
//             >
//               <ArrowRight className="w-5 h-5 text-white transform  transition-transform" />
//             </motion.div>
//             <motion.span
//               onClick={() => setIsClicked(true)}
//               animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
//               className="items-center font-bold  bg-[#000000] text-white px-4 py-2   transition-colors"
//             >
//                  <ShinyText
//                   text="Explore More"
//                   disabled={false}
//                   speed={1}
//                   className=" "
//                 />
//             </motion.span>
//           </Link>
//         </div>

//         {/* Services Grid */}
//         <div className="grid  lg:grid-cols-3  gap-6 ">
//           {services.map((service, index) => (
//             <ProjectCard key={`project-${index}`} index={index} {...service} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ServicesSection;


"use client"
import React from "react"
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
  {
    title: "Discover",
    description:
      "Explore our platform's features and capabilities. Find the perfect tools for your needs and get started with our intuitive interface.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={gtmImg}
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Discover feature screenshot"
        />
      </div>
    ),
  },
  {
    title: "Pay",
    description:
      "Secure and seamless payment processing. Multiple payment options available to suit your preferences and ensure smooth transactions.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={genAiImg}
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Payment feature screenshot"
        />
      </div>
    ),
  },
  {
    title: "Enjoy",
    description:
      "Experience the benefits of our platform. Track your progress, monitor results, and see the impact of your decisions in real-time.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={salesImg}
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Results feature screenshot"
        />
      </div>
    ),
  },
  {
    title: "Pay",
    description:
      "Secure and seamless payment processing. Multiple payment options available to suit your preferences and ensure smooth transactions.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-vector/purchase-online-onboarding-app-screens_23-2148403500.jpg?uid=R129847054&ga=GA1.1.84914892.1735965833&semt=ais_incoming"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Payment feature screenshot"
        />
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="bg-[#3D533D] p-10">
      <p className={`text-4xl md:text-5xl font-serif mb-4 ml-14 text-white `}>
        Explore Our <span className=" text-[#9fd19f]">Services</span>
      </p>
      <StickyScroll content={content} />
    </div>
  );
}
