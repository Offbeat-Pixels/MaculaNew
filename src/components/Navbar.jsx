// import React, { useState } from 'react'
// import { logo } from "../assets";
// import { Link } from "react-router-dom";
// import { Menu, PhoneCall, SquareX } from "lucide-react";
// import { motion } from 'framer-motion';
// import { ButtonFade } from './ui/motion';


// export default function Navbar() {
//   const [isClicked, setIsClicked] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="flex  items-center justify-between px-5 md:px-10  2xl:px-24 py-2 h-14 md:h-24 ">
//       <Link to="/" className="flex items-center">
//         <LazyLoadImage
//           src={logo}
//           alt="Macula Logo"
//           width={120}
//           height={60}
//           className="h-10 xl:h-20 object-cover w-fit "
//         />
//       </Link>
//       <div className="  flex items-center gap-5  ">
//         <div className="hidden lg:block  space-x-6">
//           {" "}
//           <Link
//             to="/whitepaper"
//             className="bg-[#FFF1F1]  py-3 px-6 rounded-full"
//           >
//             White Paper
//           </Link>
//           <Link to="/services" className="bg-[#FEFFE7]  py-3 px-6 rounded-full">
//             Our Service
//           </Link>
//           <Link to="/blog" className="bg-[#EEFFE7]  py-3 px-6 rounded-full">
//             Blogs
//           </Link>
//           <Link to="/about" className="bg-[#E7FBFF]  py-3 px-6 rounded-full">
//             About Us
//           </Link>
//           <Link to="/career" className="bg-[#3dec866c]  py-3 px-6 rounded-full">
//             Career
//           </Link>
//         </div>

//         <Link to="/contact" onMouseLeave={() => setIsClicked(false)}>
//           <div className=" flex items-center border gap-2 md:py-2 md:px-4  bg-white  rounded-full hover:bg-slate-300 transition-colors">
//             <motion.div
//               onClick={() => {
//                 setIsClicked(true);
//               }}
//               variants={ButtonFade(isClicked)}
//               animate="animate"
//               className="bg-[#67883B] rounded-full p-2  shadow-md cursor-pointer"
//             >
//               <PhoneCall className="w-5 h-5 text-white  " />
//             </motion.div>
//             <motion.span
//               onClick={() => setIsClicked(true)}
//               animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
//               className="items-center bg-[#67883B]  hidden md:block py-2  px-4 rounded-full transition-opacity"
//             >
//               Free Consultation
//             </motion.span>
//           </div>
//         </Link>
//         <div className="lg:hidden ">
//           <button onClick={toggleMenu}>
//             {isOpen ? <SquareX size={40} /> : <Menu size={40} />}

//             <motion.div
//               initial={{ opacity: 0, x: 100 }}
//               animate={{
//                 opacity: isOpen ? 1 : 0,
//                 x: isOpen ? 0 : 100,
//               }}
//               transition={{ duration: 0.5 }}
//               className={`lg:hidden flex flex-col items-center space-y-4 bg-white absolute z-50 top-12 sm:top-16 left-0 right-0 p-6 ${
//                 isOpen ? "block" : "hidden"
//               }`}
//             >
//               <Link
//                 to="/whitepaper"
//                 className="bg-[#FFF1F1]  py-3  w-full rounded-full"
//               >
//                 White Paper
//               </Link>
//               <Link
//                 to="/services"
//                 className="bg-[#FEFFE7]  py-3   w-full rounded-full"
//               >
//                 Our Service
//               </Link>
//               <Link
//                 to="/blog"
//                 className="bg-[#EEFFE7]  py-3  w-full rounded-full"
//               >
//                 Blogs
//               </Link>
//               <Link
//                 to="/about"
//                 className="bg-[#E7FBFF]  py-3   w-full rounded-full"
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/career"
//                 className="bg-[#3dec866c]  py-3   w-full rounded-full"
//               >
//                 Career
//               </Link>
//             </motion.div>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }




import React, { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { Menu, PhoneCall, SquareX } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonFade } from "./ui/motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex z-50 items-center justify-between px-5 sm:px-8 md:px-10 xl:px-16 2xl:px-24 py-2 h-14 sm:h-16 md:h-20 xl:h-24">
      <Link to="/" className="flex items-center">
        <LazyLoadImage
          src={logo}
          alt="Macula Logo"
          width={120}
          height={60}
          className="h-10 sm:h-12 md:h-14 xl:h-20 object-cover w-auto"
        />
      </Link>
      <div className="flex items-center gap-4">
        {/* Desktop links */}
        <div className="hidden  lg:flex space-x-4  text-sm  2xl:text-base ">
          <Link
            to="/whitepaper"
            // className="bg-[#FFF1F1] py-2 px-4 sm:py-3 sm:px-6 rounded-2xl "
            className="border hover:bg-[#E4E4E3] py-2 px-4 sm:py-3 sm:px- rounded-2xl "
          >
            White Paper
          </Link>
          <Link
            to="/services"
            // className="bg-[#FEFFE7] py-2 px-4 sm:py-3 sm:px-6 rounded-2xl "
            className="border hover:bg-[#E4E4E3] py-2 px-4 sm:py-3 sm:px-6 rounded-2xl "
          >
            Our Service
          </Link>
          <Link
            to="/blog"
            // className="bg-[#EEFFE7] py-2 px-4 sm:py-3 sm:px-6 rounded-2xl "
            className=" border hover:bg-[#E4E4E3] py-2 px-4   sm:py-3 sm:px-6 rounded-2xl "
          >
            Blogs
          </Link>
          <Link
            to="/about"
            // className="bg-[#E7FBFF] py-2 px-4 sm:py-3 sm:px-6 rounded-2xl "
            className="border hover:bg-[#E4E4E3] py-2 px-4 sm:py-3 sm:px-6 rounded-2xl "
          >
            About Us
          </Link>
          <Link
            to="/career"
            // className="bg-[#8ef2b86c] py-2 px-4 sm:py-3 sm:px-6 rounded-2xl "
            className="border hover:bg-[#E4E4E3] py-2 px-4 sm:py-3 sm:px-6 rounded-2xl "
          >
            Career
          </Link>
        </div>

        {/* Contact button */}
        <Link to="/contact" onMouseLeave={() => setIsClicked(false)}>
          <div className="flex items-center border gap-2 py-1 px-3 sm:py-2 sm:px-4 bg-white rounded-full hover:bg-slate-300 transition-colors">
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
              className="hidden md:block bg-[#67883B] text-white py-2 px-4 rounded-full text-sm sm:text-base"
            >
              Free Consultation
            </motion.span>
          </div>
        </Link>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <SquareX size={32} /> : <Menu size={32} />}
          </button>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              x: isOpen ? 0 : 100,
            }}
            transition={{ duration: 0.5 }}
            className={`fixed top-14 sm:top-16 left-0 right-0 z-50 p-6 bg-white shadow-md text-center text-lg sm:text-xl space-y-4 ${
              isOpen ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
          >
            <Link
              to="/whitepaper"
              className="block bg-[#FFF1F1] py-3 rounded-full "
            >
              White Paper
            </Link>
            <Link
              to="/services"
              className="block bg-[#FEFFE7] py-3 rounded-full "
            >
              Our Service
            </Link>
            <Link to="/blog" className="block bg-[#EEFFE7] py-3 rounded-full ">
              Blogs
            </Link>
            <Link to="/about" className="block bg-[#E7FBFF] py-3 rounded-full ">
              About Us
            </Link>
            <Link
              to="/career"
              className="block bg-[#3dec866c] py-3 rounded-full "
            >
              Career
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}



