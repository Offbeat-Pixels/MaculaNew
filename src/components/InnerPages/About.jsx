
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { Brain, Lightbulb, Settings, Users, ChevronDown } from 'lucide-react'
// import { useRef ,useEffect, useState} from 'react'
// import { Transition } from '../ui/Transition'
// import gsap from "gsap";
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import { styles } from '../../style';
// gsap.registerPlugin(ScrollTrigger)

//  function About() {
//   const containerRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   })

//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])





//   const missions = [
//   {
//     title: "Empowering Businesses",
//     description:
//       "To empower businesses of all scales/sizes with insights, strategies, and tools.",
//     icon: Brain,
//     gradient: "from-blue-500/20 to-violet-500/20",
//     accent: "group-hover:text-blue-500",
//   },
//   {
//     title: "Expert Consultancy",
//     description:
//       "To provide expert consultancy fostering long-term value for our clients.",
//     icon: Settings,
//     gradient: "from-violet-500/20 to-fuchsia-500/20",
//     accent: "group-hover:text-violet-500",
//   },
//   {
//     title: "Client-First Approach",
//     description:
//       "To create a client-first approach where every service is personalized, impactful, and results-driven.",
//     icon: Users,
//     gradient: "from-fuchsia-500/20 to-rose-500/20",
//     accent: "group-hover:text-fuchsia-500",
//   },
//   {
//     title: "AI Innovation",
//     description:
//       "To pioneer Gen AI-enabled products that enhance efficiency, innovation, and decision-making for businesses of all sizes.",
//     icon: Lightbulb,
//     gradient: "from-rose-500/20 to-orange-500/20",
//     accent: "group-hover:text-rose-500",
//   },
// ];


//   const values = [
//     {
//       title: "Ethics",
//       description: "We like doing things ethically",
//       gradient: "from-[#F4BD20] to-[#67883B]",
//     },
//     {
//       title: "Creativity",
//       description: "Being creative is our way of life",
//       gradient: "from-[#F4BD20] to-[#67883B]",
//     },
//     {
//       title: "Adaptability",
//       description: "We tailor to the needs of customers",
//       gradient: "from-[#F4BD20] to-[#67883B]",
//     },
//     {
//       title: "Individuality",
//       description: "We celebrate diverse perspective",
//       gradient: "from-[#F4BD20] to-[#67883B]",
//     },
//   ];




// return (
//     <div className="min-h-screen  bg-background" ref={containerRef}>
//       {/* Vision Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
//         </div>
//         <motion.div
//           style={{ opacity, scale }}
//           className="container relative z-10 mx-auto px-4"
//         >
//           <div className="text-center max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="mb-6"
//             >
//               <span className="text-sm font-semibold tracking-wider text-primary uppercase">
//                 Welcome to Our Story
//               </span>
//             </motion.div>
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className={` mb-8 bg-clip-text ${styles.sectionHeadText} bg-gradient-to-r  from-primary to-primary/50`}
//             >
//               Our Vision
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
//             >
//               Enabling businesses to achieve growth and operational excellence
//               by providing them results-driven business & strategic consulting.
//             </motion.p>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce"
//         >
//           <ChevronDown className="w-6 h-6 text-primary" />
//         </motion.div>
//       </section>

//       {/* Mission Section */}
//      <section className="p-24  relative overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
//         <div className="absolute inset-0 bg-grid-primary/[0.02] [mask-image:radial-gradient(white,transparent_85%)]" />

//         <div className=" mx-auto px-4 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-24"
//           >
//             <span className="text-sm font-semibold tracking-wider  uppercase">
//               Discover Our Purpose
//             </span>
//             <h2
//               className={`  ${styles.sectionHeadText} mt-4  mb-6 bg-clip-text text-black bg-gradient-to-r from-primary via-primary/80 to-primary/50`}
//             >
//               Our Mission
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto" />
//           </motion.div>

//           <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
//             {missions.map((mission, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className={`flex flex-col lg:flex-row items-center gap-8`}
//               >
//                 {/* Icon Column */}
//                 <div className="w-full lg:w-1/3">
//                   <div
//                     className={`group relative overflow-hidden border-0 ${
//                       index % 2 === 0
//                         ? "lg:translate-x-12"
//                         : "lg:-translate-x-12"
//                     }`}
//                   >
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-br ${mission.gradient} opacity-20 transition-opacity duration-300 group-hover:opacity-30`}
//                     />
//                     <div className="p-8 flex items-center justify-center">
//                       <div className="relative">
//                         <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl transform group-hover:scale-125 transition-transform duration-300" />
//                         <mission.icon
//                           className={`w-20 h-20 ${mission.accent} transition-all duration-300 relative z-10`}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content Column */}
//                 <div className="w-full lg:w-2/3">
//                   <div className="group relative overflow-hidden border-0 backdrop-blur-sm bg-background/50">
//                     <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background" />
//                     <div className="relative p-8">
//                       <div className="space-y-4 text-justify">
//                         <div
//                           className={`w-12 h-1 bg-gradient-to-r ${mission.gradient}`}
//                         />
//                         <h3
//                           className={`text-2xl font-bold ${mission.accent} transition-colors duration-300`}
//                         >
//                           {mission.title}
//                         </h3>
//                         <p className="text-muted-foreground text-lg leading-relaxed">
//                           {mission.description}
//                         </p>
//                       </div>

//                       {/* Number indicator */}
//                       {/* <div className="absolute top-4 right-4 opacity-10 font-bold text-6xl">
//                         0{index + 1}
//                       </div> */}

//                       {/* Decorative elements */}
//                       <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-32 bg-muted/50 relative">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
//         <div className="container mx-auto px-4 relative">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl md:text-5xl font-bold text-center mb-16"
//           >
//             Our Values
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="h-full backdrop-blur-sm bg-background/50">
//                   <div className="p-8">
//                     <div
//                       className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} animate-pulse mb-6 flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300`}
//                     >
//                       <span className="text-2xl font-bold text-primary-foreground">
//                         {value.title[0]}
//                       </span>
//                     </div>
//                     <h3 className="text-2xl font-semibold mb-4">
//                       {value.title}
//                     </h3>
//                     <p className="text-muted-foreground text-lg">
//                       {value.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// export default Transition(About);



import { ArrowRight, Award, BarChart, Building2, Globe, PhoneCall, Users } from "lucide-react"
import {Link} from "react-router-dom"
import { AdaptabilityIcon, AIInnovationIcon, ClientFirstApproachIcon, ConsultancyIcon, CreativityIcon, EmpoweringBusinessesIcon, EthicsIcon, IndividualityIcon } from "../../assets";
import { motion } from 'framer-motion';
import { useState } from "react";
import { ButtonFade } from "../ui/motion";

export default function AboutPage() {
  const [isClicked, setIsClicked] = useState(false); 
  
  return (
    <div className="min-h-screen">
      <div className="relative h-[500px] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
            <h1 className="text-5xl font-bold text-white mb-4">
              About Macula Consultant
            </h1>
            <p className="text-xl text-white mb-8">
              We're centered on what's best for you and your business.
            </p>

            {/* Contact button */}
            <Link to="/contact" onMouseLeave={() => setIsClicked(false)}>
              <div className="flex items-center border gap-2 py-1 px-3 sm:py-1 sm:px-2 bg-white rounded-full hover:bg-slate-300 transition-colors w-fit">
                <motion.div
                  onClick={() => {
                    setIsClicked(true);
                  }}
                  variants={ButtonFade(isClicked)}
                  animate="animate"
                  // className="bg-[#67883B] rounded-full p-2 shadow-md cursor-pointer"
                  className="bg-[#67883B] rounded-full p-2 shadow-md cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5 text-white" />
                </motion.div>
                <motion.span
                  onClick={() => setIsClicked(true)}
                  animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
                  // className="hidden md:block bg-[#67883B] text-white py-2 px-4 rounded-full text-sm sm:text-base"
                  className="hidden md:block bg-[#67883B] text-white py-2 px-2 rounded-full text-sm sm:text-base"
                >
                  Book Your Session
                </motion.span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">
            Our Vision
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Enabling businesses to achieve growth and operational excellence
              by providing them results-driven business & strategic consulting.
            </p>
          </div>
        </div>

        <div className="w-full  px-4 py-16 ">
          <div className="relative">
            <div className="space-y-12 ">
              <div className="w-full mx-auto  ">
                <h2 className="text-3xl font-bold text-purple-900 mb-8">
                  Our Mission
                </h2>
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 mx-auto">
                <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 hidden md:block"></div>

                <div className="absolute top-0 left-1/2 h-full w-px bg-gray-200 -translate-x-1/2 hidden md:block"></div>

                <div className="relative flex gap-10 m-10 space-y-4 bg-white p-4">
                  <div className="w-40 h-40 rounded-full  items-center justify-center">
                    <img src={EmpoweringBusinessesIcon} alt="" srcset="" />
                  </div>
                  <div>
                    {" "}
                    <h2 className="text-3xl  font-bold ">
                      Empowering Businesses{" "}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      To empower businesses of all scales/sizes with insights,
                      strategies, and tools.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-10 m-10 space-y-4 bg-white p-4">
                  <div className="w-40 h-40  rounded-full  flex items-center justify-center">
                    <img src={ConsultancyIcon} alt="" srcset="" />
                  </div>
                  <div>
                    {" "}
                    <h2 className="text-3xl  font-bold ">
                      {" "}
                      Expert Consultancy{" "}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      To provide expert consultancy fostering long-term value
                      for our clients.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-10 m-10 space-y-4 bg-white p-4">
                  <div className="w-40 h-40 rounded-full  flex items-center justify-center">
                    <img src={ClientFirstApproachIcon} alt="" srcset="" />
                  </div>
                  <div>
                    {" "}
                    <h2 className="text-3xl  font-bold ">
                      {" "}
                      Client-First Approach{" "}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      To create a client-first approach where every service is
                      personalized, impactful, and results-driven.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-10 m-10 space-y-4 bg-white p-4">
                  <div className="w-52 h-40  rounded-full  flex items-center justify-center">
                    <img src={AIInnovationIcon} alt="" srcset="" />
                  </div>
                  <div>
                    {" "}
                    <h2 className="text-3xl  font-bold "> AI Innovation </h2>
                    <p className="text-gray-600 text-lg">
                      To pioneer Gen AI-enabled products that enhance
                      efficiency, innovation, and decision-making for businesses
                      of all sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-gray-100 h-[25rem]">
        <div className="mx-auto -translate-y-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-fit  bg-white ">
          {/* Our Approach Section */}
          <section className="py-20 ">
            <div className="w-fit mx-auto ">
              <h2 className="text-4xl font-bold text-purple-900 text-center mb-10">
                Our Values
              </h2>
              <div className="grid md:grid-cols-4 gap-2 text-center border-t   border-gray-200">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">
                    Ethics
                  </h3>
                  <p className="text-gray-600">
                    We like doing things ethically
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">
                    Creativity
                  </h3>
                  <p className="text-gray-600">
                    Being creative is our way of life
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">
                    Adaptability
                  </h3>
                  <p className="text-gray-600">
                    We tailor to the needs of customers
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">
                    Individuality
                  </h3>
                  <p className="text-gray-600">
                    We celebrate diverse perspective
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

