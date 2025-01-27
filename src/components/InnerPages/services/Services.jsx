import React, { useState, useRef, useEffect } from "react";
import serviceData from "./serviceData";
import { styles } from "../../../style";
import { useLocation } from "react-router-dom";
import { Transition } from "../../ui/Transition";

 function Services() {
  const [selectedCategory, setSelectedCategory] =
    useState("Sales as a Service");
  const [playingIndex, setPlayingIndex] = useState(null); // Tracks which video is playing
  const videoRefs = useRef([]);
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

  const filteredServiceData = selectedCategory
    ? serviceData.filter((service) => service.category === selectedCategory)
    : serviceData;

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

 const colors = ["#f1f1f1"];

  return (
    <div className="bg-servicepage-pattern bg-cover bg-no-repeat bg-center pb-20">
      <h3
        className={`${styles.sectionHeadText} text-center pt-5 motion-preset-slide-down-lg motion-duration-1000 motion-delay-300`}
      >
        Our Services
      </h3>

      <p className="text-left md:text-center py-5 ml-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quaerat
        eveniet.
      </p>

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

      {/* Display serviceData */}
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-1 mx-5 md:mx-24 place-items-center gap-24">
        {filteredServiceData.map((service, index) => (
          <div key={service.id} className="relative w-full">
            {/* Service Card */}
            <div className="relative group w-full h-fit text-left rounded-xl  flex flex-col lg:flex-row justify-between ">
              {/* Text Section */}
              <div className="lg:w-1/2 lg:pr-24">
                <p className={`${styles.PageSubHeading} `}>
                  {/* {service.category} */}
                </p>
                {/* <p className="text-md pt-10 text-justify font-semibold text-gray-800">
                  {service.title}
                </p> */}
                <p className="text-md  py- text-justify w-full border-stone-950 text-gray-600">
                  {service.detail}
                </p>
              </div>

              {/* Video Section */}
              <div className="lg:w-1/2 h-fit relative">
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
export default Transition(Services)