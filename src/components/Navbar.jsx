import React, { useState } from 'react'
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { Menu, PhoneCall, SquareX } from "lucide-react";
import { motion } from 'framer-motion';
import { ButtonFade } from './ui/motion';


export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex  items-center justify-between px-10 md:px-24 py-2 h-14 md:h-24 ">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Macula Logo"
          width={120}
          height={60}
          className="h-10 md:h-20 object-cover w-fit "
        />
      </Link>
      <div className="  flex items-center gap-5  ">
        <div className="hidden md:block  space-x-6">
          {" "}
          <Link
            to="/whitepaper"
            className="bg-[#FFF1F1]  py-3 px-6 rounded-full"
          >
            White Paper
          </Link>
          <Link to="/services" className="bg-[#FEFFE7]  py-3 px-6 rounded-full">
            Our Service
          </Link>
          <Link to="/blog" className="bg-[#EEFFE7]  py-3 px-6 rounded-full">
            Blogs
          </Link>
          <Link to="/about" className="bg-[#E7FBFF]  py-3 px-6 rounded-full">
            About Us
          </Link>
        </div>

        <Link to="/contact" onMouseLeave={() => setIsClicked(false)}>
          <div className=" flex items-center border gap-2 md:py-2 md:px-4  bg-white  rounded-full hover:bg-slate-300 transition-colors">
            <motion.div
              onClick={() => {
                setIsClicked(true);
              }}
              variants={ButtonFade(isClicked)}
              animate="animate"
              className="bg-[#67883B] rounded-full p-2  shadow-md cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 text-white  " />
            </motion.div>
            <motion.span
              onClick={() => setIsClicked(true)}
              animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
              className="items-center bg-[#67883B]  hidden md:block py-2  px-4 rounded-full transition-opacity"
            >
              Free Consultation
            </motion.span>
          </div>
        </Link>
        <div className="md:hidden ">
          <button onClick={toggleMenu}>
            {isOpen ? <SquareX size={40} /> : <Menu size={40} />}

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : 100,
              }}
              transition={{ duration: 0.5 }}
              className={`md:hidden flex flex-col items-center space-y-4 bg-white absolute z-50 top-12 left-0 right-0 p-6 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <Link
                to="/whitepaper"
                className="bg-[#FFF1F1]  py-3  w-full rounded-full"
              >
                White Paper
              </Link>
              <Link
                to="/services"
                className="bg-[#FEFFE7]  py-3   w-full rounded-full"
              >
                Our Service
              </Link>
              <Link to="/blog" className="bg-[#EEFFE7]  py-3  w-full rounded-full">
                Blogs
              </Link>
              <Link
                to="/about"
                className="bg-[#E7FBFF]  py-3   w-full rounded-full"
              >
                About Us
              </Link>
            </motion.div>
          </button>
        </div>
      </div>
    </nav>
  );
}
