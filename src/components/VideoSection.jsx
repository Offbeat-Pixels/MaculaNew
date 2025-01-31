// import React from "react";
// import { Play } from "lucide-react";

// export default function VideoSection() {
//   return (
//     <section className="py-20 bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative h-[500px] rounded-lg overflow-hidden">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <video
//               a
//               className="w-full h-full object-cover"
//               muted
//               loop
//               preload="auto"
//             //   style={{ display: isPlaying ? "block" : "none" }} // Hide until it plays
//             >
//               <source
                // src="https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_hevc.mp4"
                // type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//             {/* <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
//               <Play className="h-8 w-8 text-green-600" />
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useRef, useState } from "react";
import { Play } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { MaculaVideo } from "../assets";

 function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true, // Play the video only once when it's in view
    threshold: 0.5, // 50% of the video is in view to trigger the play
  });

  // Play the video when the section comes into view
  React.useEffect(() => {
    if (inView && videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [inView, isPlaying]);

  return (
    <section className="  bg-black">
      <div>
        <div
          className="relative h-[40vh]  lg:h-[100vh]  rounded-lg "
          ref={ref} // Attach the observer here
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Video element */}
            <video
              ref={videoRef}
              className="w-full h-full object-contain lg:object-fill"
              
              controls
              preload="auto"
              style={{ display: isPlaying ? "block" : "none" }} // Hide until it plays
            >
              <source
                // src="https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_hevc.mp4"
                src={MaculaVideo}
                type="video/mp4"
              />
            </video>

            {/* Play button */}
            {/* {!isPlaying && (
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Play className="h-8 w-8 text-green-600" />
              </button>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default VideoSection;