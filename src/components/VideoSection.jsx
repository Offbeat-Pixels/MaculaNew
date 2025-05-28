
// import React, { useRef, useState } from "react";
// import { Play } from "lucide-react";
// import { useInView } from "react-intersection-observer";
// import { MaculaVideo } from "../assets";

//  function VideoSection() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const { ref, inView } = useInView({
//     triggerOnce: true, // Play the video only once when it's in view
//     threshold: 0.5, // 50% of the video is in view to trigger the play
//   });

//   // Play the video when the section comes into view
//   React.useEffect(() => {
//     if (inView && videoRef.current && !isPlaying) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   }, [inView, isPlaying]);

//   return (
//     <section className="  bg-black">
//       <div>
//         <div
//           className="relative h-[40vh]  lg:h-[100vh]  rounded-lg "
//           ref={ref} // Attach the observer here
//         >
//           <div className="absolute inset-0 flex items-center justify-center">
//             {/* Video element */}
//             <video
//               ref={videoRef}
//               className="w-full h-full object-contain lg:object-fill"
//               muted
//               controls
//               preload="auto"
//               style={{ display: isPlaying ? "block" : "none" }} // Hide until it plays
//             >
//               <source
//                 // src="https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_hevc.mp4"
//                 src={MaculaVideo}
//                 type="video/mp4"
//               />
//             </video>

//             {/* Play button */}
//             {/* {!isPlaying && (
//               <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
//                 <Play className="h-8 w-8 text-green-600" />
//               </button>
//             )} */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default VideoSection;



// import React, { useRef, useState } from "react";
// import { Play } from "lucide-react";
// import { useInView } from "react-intersection-observer";
// import { MaculaVideo } from "../assets";

// function VideoSection() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const { ref, inView } = useInView({
//     triggerOnce: true, // Play the video only once when it's in view
//     threshold: 0.5, // 50% of the video is in view to trigger the play
//   });

//   // Play the video when the section comes into view
//   React.useEffect(() => {
//     if (inView && videoRef.current && !isPlaying) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   }, [inView, isPlaying]);

//   return (
//     <section className="  bg-black">
//       <div>
//         <div
//           className="relative h-[40vh]  lg:h-[100vh]  rounded-lg "
//           ref={ref} // Attach the observer here
//         >
//           <div className="absolute inset-0 flex items-center justify-center">
//             {/* Video element */}
//             <video
//               ref={videoRef}
//               className="w-full h-full object-contain lg:object-fill"
//               muted
//               controls
//               preload="auto"
//               style={{ display: isPlaying ? "block" : "none" }} // Hide until it plays
//             >
//               <source
//                 // src="https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_hevc.mp4"
//                 src={MaculaVideo}
//                 type="video/mp4"
//               />
//             </video>

//             {/* Play button */}
//             {/* {!isPlaying && (
//               <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
//                 <Play className="h-8 w-8 text-green-600" />
//               </button>
//             )} */}
//           </div>
//         </div>
     
//       </div>
//     </section>
//   );
// }
// export default VideoSection;



"use client";
import { useRef, useState, useEffect } from "react";
import { Play, PlayIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { MaculaVideo } from "../assets";
import { ContainerScroll } from './ui/container-scroll-animation';

 function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [inView, isPlaying]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    // <div className="relative w-full h-full" ref={ref}>
    //   <video
    //     ref={videoRef}
    //     className="w-full h-full object-cover rounded-xl"
    //     muted
    //     controls
    //     preload="auto"
    //     style={{ display: isPlaying ? "block" : "none" }}
    //   >
    //     <source src={MaculaVideo} type="video/mp4" />
    //   </video>

    //   {!isPlaying && (
    //     <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
    //       <button
    //         onClick={handlePlayClick}
    //         className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
    //       >
    //         <PlayIcon className="h-8 w-8 text-green-600" />
    //       </button>
    //     </div>
    //   )}
    // </div>
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <video
          ref={videoRef}
          // className="w-full h-full object-cover rounded-xl"
          muted
          controls
          preload="auto"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          style={{ display: isPlaying ? "block" : "none" }}
        >
          <source src={MaculaVideo} type="video/mp4" />
        </video>
        {/* <img
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
      </ContainerScroll>
    </div>
  );
}


export default VideoSection;