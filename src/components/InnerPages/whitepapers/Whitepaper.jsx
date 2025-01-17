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

  const colors = ["#FFF1F1", "#FEFFE7", "#EEFFE7"];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div className="bg-service-pattern bg-cover bg-no-repeat bg-center pb-20">
      <h3
        ref={ref}
        className={`${styles.sectionHeadText} text-center p-5 motion-preset-slide-down-lg motion-duration-1000 motion-delay-300`}
      >
        White Papers
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
                  ? "#67883B"
                  : colors[index % colors.length],
              color: selectedCategory === category ? "#fff" : "#000",
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
      <div className=" mt-10  mx-5 md:mx-24 place-items-center ">
        {filteredWhitepapperData.map((service, index) => (
          <div key={service.id} className="relative w-full">
            <div className="relative group  w-full h-fit text-justify rounded-xl  flex flex-col sm:flex-row justify-between ">
              <div className=" w-full   ">
                <Link to={`/whitepaperDetail/${service.category}`}>
                  {/* <Markdown data={service.title}  />
                  
                  
                  <img src={service.imageUrl} alt="" /> */}
                  <WhitepaperCard service={service} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transition(Whitepaper);
