// import { ArrowRight } from "lucide-react";
// import { gtmImg } from "../assets";
// import { styles } from "../style";
// import { Link, useNavigate } from "react-router-dom";
// import { useRef, useState } from "react";
// import { motion, useInView } from 'framer-motion';
// import { ButtonFade } from "./ui/motion";
// import Tilt from "react-parallax-tilt";





// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <div >
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary my- p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={image}
//             alt="project_image"
//             className="w-full h-full object-cover rounded-2xl"
//           />

//           {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div> */}
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px]">{description}</p>
//         </div>

//         {/* <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div> */}
//       </Tilt>
//     </div>
//   );
// };



// const projects = [
//   {
//     name: "EXPERIENCED TEAM",
//     description:
//       "Our consultants have a proven track record of helping businesses succeed.",
   
//     image: gtmImg,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "PERSONALIZED SOLUTIONS",
//     description:
//       "We tailor our services to meet your unique needs & challenges.",

//     image: gtmImg,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "PRACTICAL ADVICE",
//     description: "We focus on actionable steps that deliver real results.",
//     image: gtmImg,
//     source_code_link: "https://github.com/",
//   },
// ];


// export default function ServicesSection() {
//   const ref =useRef(null);
//   const isInView=useInView(ref,{once:true,amount:0.8});
//   const services = [
//     {
//       title: "GTM + Sales",
//       category: "GTM + Sales",
//       description:
//         "We specialize in providing practical advice and hands-on support to businesses like yours.",
//       image: gtmImg,
//     },
//     {
//       title: "Business Consulting",
//       category: "Business Consulting",
//       description:
//         "We specialize in providing practical advice and hands-on support to businesses like yours.",
//       image: gtmImg,
//     },
//     {
//       title: "Gen AI Driven Products",
//       category: "Gen AI Driven Products",
//       description:
//         "We specialize in providing practical advice and hands-on support to businesses like yours.",
//       image: gtmImg,
//     },
//   ];
//  const [isClicked, setIsClicked] = useState(false);
//  const navigate = useNavigate();
//  function delayAndGo(e) {
//     e.preventDefault();
//     setTimeout(() => navigate("/services"), 300);
//   }

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-12">
//           <h2
//             ref={ref}
//             className={`${styles.sectionHeadText} ${
//               isInView ? "motion-preset-slide-right-md" : "opacity-0"
//             } transition-all duration-1000 ease-in-out`}
//           >
//             Explore Our <span className="text-[#588157] italic">Services</span>
//           </h2>
//           <Link
//             to="/services"
//             onClick={delayAndGo}
//             onMouseLeave={() => setIsClicked(false)}
//             className="flex items-center border gap-2 bg-white text-white pl-2 rounded-full hover:bg-slate-300 transition-colors"
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
//               className="items-center font-bold bg-amber-400 text-white px-4 py-2 rounded-full transition-colors"
//             >
//               Explore More
//             </motion.span>
//           </Link>
//         </div>

//         {/* Services Grid */}
//         {/* <div className="grid md:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-transparent rounded-3xl overflow-visible border-2 p-5"
//             >
//               <h3 className="text-xl font-medium mb-3">{service.title}</h3>
//               <p className="text-gray-600 mb-6">{service.description}</p>
//               <div className="relative rounded-2xl">
//                 <img
//                   src={service.image}
//                   alt={`${service.title} Strategy`}
//                   width={300}
//                   height={300}
//                   className="w-full h-auto"
//                 />
//                 <Link
//                   to={{
//                     pathname: "/services",
//                   }}
//                   state={{ category: service.category }} // Pass the category dynamically
//                   className="absolute bottom-1 right-1 p-3 bg-[#588157] rounded-full -rotate-45 hover:rotate-0 text-white hover:bg-[#4a6d49]  transition-transform"
//                 >
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div> */}


//       </div>
//     </section>
//   );
// }






import { ArrowRight } from "lucide-react";
import { gtmImg } from "../assets";
import { styles } from "../style";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useInView } from 'framer-motion';
import { ButtonFade } from './ui/motion';

// ProjectCard component
const ProjectCard = ({
  index,
  title,
  description,
  image,
  category,
}) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-transparent rounded-3xl overflow-visible border-2 p-5"
      >
        <div className="mt-5">
          <h3 className="text-xl font-medium mb-3">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <Link
            to={{
              pathname: "/services",
            }}
            state={{ category}} 
            className="absolute bottom-1 right-1 p-3 bg-[#588157] rounded-full -rotate-45 hover:rotate-0 text-white hover:bg-[#4a6d49]  transition-transform"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative rounded-2xl">
          <img src={image} alt="project_image" className="w-full h-auto" />
        </div>
      </Tilt>
    </div>
  );
};

const services = [
  {
    title: "GTM + Sales",
    category: "GTM + Sales",
    description:
      "We specialize in providing practical advice and hands-on support to businesses like yours.",
    image: gtmImg,
  },
  {
    title: "Business Consulting",
    category: "Business Consulting",
    description:
      "We specialize in providing practical advice and hands-on support to businesses like yours.",
    image: gtmImg,
  },
  {
    title: "Gen AI Driven Products",
    category: "Gen AI Driven Products",
    description:
      "We specialize in providing practical advice and hands-on support to businesses like yours.",
    image: gtmImg,
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  function delayAndGo(e) {
    e.preventDefault();
    setTimeout(() => navigate("/services"), 300);
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="md:flex justify-between items-center mb-12">
          <h2
            ref={ref}
            className={`${styles.sectionHeadText} ${
              isInView ? "motion-preset-slide-right-md" : "opacity-0"
            } transition-all duration-1000 ease-in-out py-5`}
          >
            Explore Our <span className="text-[#588157] italic">Services</span>
          </h2>
          <Link
            to="/services"
            onClick={delayAndGo}
            onMouseLeave={() => setIsClicked(false)}
            className="flex items-center border gap-2 bg-white text-white w-fit pl-2 rounded-full hover:bg-slate-300 transition-colors"
          >
            <motion.div
              onClick={() => setIsClicked(true)}
              variants={ButtonFade(isClicked)}
              animate="animate"
              className="bg-[#588157] rounded-full p-2 shadow-md"
            >
              <ArrowRight className="w-5 h-5 text-white transform  transition-transform" />
            </motion.div>
            <motion.span
              onClick={() => setIsClicked(true)}
              animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
              className="items-center font-bold bg-amber-400 text-white px-4 py-2  rounded-full transition-colors"
            >
              Explore More
            </motion.span>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

