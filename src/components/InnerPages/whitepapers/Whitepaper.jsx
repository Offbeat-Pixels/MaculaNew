
import React, { useState, useRef, useEffect } from "react";
import { useLocation ,Link} from "react-router-dom";
import { styles } from "../../../style";
import { WhitepapperData } from "../..";
import { useInView } from "framer-motion";
import { Transition } from "../../ui/Transition"


 function Whitepaper() {
  const [selectedCategory, setSelectedCategory] = useState("GTM + Sales");
  const [playingIndex, setPlayingIndex] = useState(null); 
  const videoRefs = useRef([]);

 const location = useLocation();

 useEffect(() => {
   if (location.state?.category) {
     setSelectedCategory(location.state.category); 
   }
 }, [location]);


 const categories = [
   "GTM + Sales",
   "GEN AI Driven Products",
   "Business Consulting",
 ];
  const filteredWhitepapperData = selectedCategory
    ? WhitepapperData.filter((service) => service.category === selectedCategory)
    : WhitepapperData;

  // Pause all videos when the category changes
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
    setPlayingIndex(null); // Reset the playing index
  }, [selectedCategory]);

  const handleVideoPlayPause = (index) => {
    const video = videoRefs.current[index];

    if (video) {
      if (playingIndex === index) {
        // Pause the currently playing video
        video.pause();
        setPlayingIndex(null);
      } else {
        // Pause other videos
        videoRefs.current.forEach((v, i) => {
          if (v && i !== index) v.pause();
        });

        // Play the selected video
        video.play();
        setPlayingIndex(index);
      }
    }
  };

  const colors = ["#FFF1F1", "#FEFFE7", "#EEFFE7"]; 
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div className="bg-service-pattern bg-cover bg-no-repeat bg-center pb-20">
      <h3
        ref={ref}
        className={`${styles.sectionHeadText} text-center pt-5 motion-preset-slide-down-lg motion-duration-1000 motion-delay-300`}
        // className={`${styles.sectionHeadText} text-center pt-5 ${
        //   isInView
        //     ? "motion-preset-slide-down-lg motion-duration-1000"
        //     : "opacity-0"
        // } transition-all ease-in-out`}
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
      <div className="grid grid-cols-1 mt-10  mx-5 md:mx-24 place-items-center md:gap-24">
        {filteredWhitepapperData.map((service, index) => (
          <div key={service.id} className="relative w-full">
            {/* Service Card */}
            <div className="relative group  w-full h-fit text-left rounded-xl  flex flex-col sm:flex-row justify-between ">
              {/* Text Section */}
              <div className="sm:w-1/2 md:pr-24 ">
                <p className={`${styles.PageSubHeading}`}>{service.category}</p>
                <p className="text-md pt-10 text-justify  font-semibold text-gray-800  ">
                  {service.title}
                </p>
                <p className="text-md  py-8 text-justify w-full border-stone-950 text-gray-600">
                  {service.detail}
                </p>
              </div>

              {/* Video Section */}
              <div className="sm:w-1/2 relative">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-cover rounded-3xl"
                  muted
                  key={service.videoLink} // Force re-render on video change
                  loop
                  preload="auto"
                >
                  <source src={service.videoLink} type="video/mp4" />
                </video>
                {/* Play Icon */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-3xl cursor-pointer"
                  onClick={() => handleVideoPlayPause(index)}
                >
                  <span className="text-white text-4xl">
                    {playingIndex === index ? "⏸" : "▶"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transition(Whitepaper);