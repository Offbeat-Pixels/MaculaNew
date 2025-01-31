import React, { useState, useRef, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { styles } from "../../../style";
import { Banner, WhitepapperData } from "../..";
import { useInView } from "framer-motion";
import { Transition } from "../../ui/Transition";
import Markdown from "./Markdown";
import WhitepaperCard from "./WhitePapperCard";
// import WhitepapersGrid from "./WhitepapersGrid";

function Whitepaper() {
  const [selectedCategory, setSelectedCategory] =
    useState("Sales as a Service");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location]);

  const categories = [
    "Sales as a Service",
    "Gen AI Enabled Products",
    "Business Consulting",
  ];
  const filteredWhitepapperData = selectedCategory
    ? WhitepapperData.filter((service) => service.category === selectedCategory)
    : WhitepapperData;

  const colors = ["#f1f1f1"];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div className="bg-service-pattern bg-cover  bg-no-repeat bg-center pb-20">
      <h3
        ref={ref}
        className={`${styles.sectionHeadText} text-center p-5 motion-preset-slide-down-lg motion-duration-1000 motion-delay-300`}
      >
        {/* White Papers */}
      </h3>
      {/* Categories Menu */}
      <div className="text-center mb-10">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              margin: "5px",
              backgroundColor:
                selectedCategory === category
                  ? "#f1f1f1"
                  : colors[index % colors.length],
              color: selectedCategory === category ? "#67883B" : "#000",
              border: "1px solid #ddd",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            className="px-10 md:px-4 h-10 "
          >
            {category}
          </button>
        ))}
      </div>
      {/* Display WhitepapperData */}
      {/* <div className=" mt-10 grid grid-cols-3 gap-3 w-full px-5   place-items-center ">
        {filteredWhitepapperData.map((service) => (
          <div key={service.id} className="relative">
            <div className="relative group   h-fit text-justify rounded-xl   justify-between ">
              <Link to={`/whitepaperDetail/${service.category}`}>
                <WhitepaperCard service={service} />
              </Link>
            </div>
          </div>
        ))}
      </div> */}
      <div className="   py-10 gap-3 bg-white/10 rounded-xl shadow-lg backdrop-blur-sm w-full mx-auto   place-items-center ">
        {filteredWhitepapperData.map((service) => (
          <div key={service.id} className="relative">
            <div className="relative group   h-fit text-justify rounded-xl   justify-between ">
              <Link to={`/whitepaperDetail/${service.category}`}>
                <WhitepaperCard service={service} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transition(Whitepaper);
