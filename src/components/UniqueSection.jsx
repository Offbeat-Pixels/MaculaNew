
// import { Users, Globe, MessageCircle } from 'lucide-react'
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { styles } from '../style';

//  function UniqueSection() {
// const ref = useRef(null);
// const isInView = useInView(ref, { once: true, amount: 0.8 });
//   return (
//     <div className="w-full  px-4 mb-10 md:mb-32">
//       <div className="max-w-6xl mx-auto">
//         <h2
//           ref={ref}
//           className={` ${styles.sectionHeadText} ${
//             isInView ? "motion-preset-slide-right-md" : "opacity-0"
//           } transition-all duration-1000 ease-in-out text-left md:text-center mb-16`}
//         >
//           {" "}
//           We're reaching your <span className=" italic">unique needs.</span>
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 relative">
//           {/* Step 1 */}
//           <div className="flex  flex-col px-5 md:px-0  items-start md:items-center text-left md:text-center relative">
//             <div className="w-16 h-16  bg-[#e7e7e7]  rounded-full flex items-center justify-center text-black mb-4 relative">
//               <Users className="w-8 h-8 text-[#588157]  " />
//               <span className="absolute top-5 -right-5 border-2 border-[#e7e7e7] w-10 h-10 rounded-full bg-white  flex items-center justify-center text-lg font-bold">
//                 01
//               </span>
//             </div>
//             <h3 className="text-xl font-semibold mb-3 ">Experienced Team</h3>
//             <p className="text-sm text-gray-600">
//               Our consultants have a proven track record of helping businesses
//               succeed.
//             </p>
//           </div>
//           {/* Arrow 1 */}
//           <div className="hidden md:block absolute left-[22%] top-[2rem] w-[45%]">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="100%"
//               height="100%"
//               fill="black"
//               viewBox="50 0 550 20"
//             >
//               <path
//                 fill="#"
//                 d="M324.707 8.707a1 1 0 0 0 0-1.414L318.343.929a1 1 0 1 0-1.414 1.414L322.586 8l-5.657 5.657a1 1 0 1 0 1.414 1.414zM0 9h324V7H0z"
//               ></path>
//             </svg>
//           </div>

//           {/* Step 2 */}
//           <div className="flex flex-col px-5 md:px-0  items-start md:items-center text-left md:text-center relative">
//             <div className="w-16 h-16 bg-[#e7e7e7] rounded-full flex items-center justify-center text-black mb-4 relative">
//               <Globe className="w-8 h-8 text-[#588157]" />
//               <span className="absolute top-3 -right-7 border-2 border-[#e7e7e7] w-10 h-10  rounded-full bg-white text-black flex items-center justify-center text-lg font-bold">
//                 02
//               </span>
//             </div>
//             <h3 className="text-xl font-semibold mb-3">
//               Personalized Solutions
//             </h3>
//             <p className="text-sm text-gray-600">
//               Our consultants have a proven track record of helping businesses
//               succeed.
//             </p>
//           </div>

//           {/* Arrow 2 */}
//           <div className="hidden md:block absolute -right-5  top-[2rem] w-[45%]">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="100%"
//               height="100%"
//               fill="black"
//               viewBox="50 0 550 20"
//             >
//               <path
//                 fill="#"
//                 d="M324.707 8.707a1 1 0 0 0 0-1.414L318.343.929a1 1 0 1 0-1.414 1.414L322.586 8l-5.657 5.657a1 1 0 1 0 1.414 1.414zM0 9h324V7H0z"
//               ></path>
//             </svg>
//           </div>

//           {/* Step 3 */}
//           <div className="flex flex-col px-5 md:px-0  items-start md:items-center text-left md:text-center relative">
//             <div className="w-16 h-16 bg-[#e7e7e7] rounded-full flex items-center justify-center text-black mb-4 relative">
//               <MessageCircle className="w-8 h-8 text-[#588157]" />
//               <span className="absolute top-3 -right-7 border-2 border-[#e7e7e7] w-10 h-10  rounded-full bg-white text-black flex items-center justify-center text-lg font-bold">
//                 03
//               </span>
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Practical Advice</h3>
//             <p className="text-sm text-gray-600">
//               Our consultants have a proven track record of helping businesses
//               succeed.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UniqueSection;

import { Users, Globe, MessageCircle } from 'lucide-react'
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { styles } from '../style';

 function UniqueSection() {
const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.8 });
  return (
    <div className="w-full bg-[#e7f0e7]  px-4  py-32">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={ref}
          className={` text-4xl md:text-5xl font-serif mb-14 ${
            isInView ? "motion-preset-slide-right-md" : "opacity-0"
          } transition-all duration-1000 ease-in-out text-left md:text-center mb-16`}
        >
          {" "}
          We're reaching your <span className=" ">unique needs.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 font-serif relative">
          {/* Step 1 */}
          <div className="flex  flex-col px-5 md:px-0  items-start md:items-center text-left md:text-center relative">
            <div className="w-16 h-16  bg-[#e7e7e7]  rounded-full flex items-center justify-center text-black mb-4 relative">
              <Users className="w-8 h-8 text-[#588157]  " />
              <span className="absolute top-5 -right-5 border-2 border-[#e7e7e7] w-10 h-10 rounded-full bg-white  flex items-center justify-center text-lg font-bold">
                01
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-3 ">Experienced Team</h3>
            <p className="text-sm text-gray-600">
              Our consultants have a proven track record of helping businesses
              succeed.
            </p>
          </div>
          {/* Arrow 1 */}
          <div className="hidden md:block absolute left-[22%] top-[2rem] w-[45%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="black"
              viewBox="50 0 550 20"
            >
              <path
                fill="#"
                d="M324.707 8.707a1 1 0 0 0 0-1.414L318.343.929a1 1 0 1 0-1.414 1.414L322.586 8l-5.657 5.657a1 1 0 1 0 1.414 1.414zM0 9h324V7H0z"
              ></path>
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col px-5 md:px-0  items-start md:items-center text-left md:text-center relative">
            <div className="w-16 h-16 bg-[#e7e7e7] rounded-full flex items-center justify-center text-black mb-4 relative">
              <Globe className="w-8 h-8 text-[#588157]" />
              <span className="absolute top-3 -right-7 border-2 border-[#e7e7e7] w-10 h-10  rounded-full bg-white text-black flex items-center justify-center text-lg font-bold">
                02
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Personalized Solutions
            </h3>
            <p className="text-sm text-gray-600">
              Our consultants have a proven track record of helping businesses
              succeed.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:block absolute -right-5  top-[2rem] w-[45%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="black"
              viewBox="50 0 550 20"
            >
              <path
                fill="#"
                d="M324.707 8.707a1 1 0 0 0 0-1.414L318.343.929a1 1 0 1 0-1.414 1.414L322.586 8l-5.657 5.657a1 1 0 1 0 1.414 1.414zM0 9h324V7H0z"
              ></path>
            </svg>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col px-5 md:px-0  items-start md:items-center text-left md:text-center relative">
            <div className="w-16 h-16 bg-[#e7e7e7] rounded-full flex items-center justify-center text-black mb-4 relative">
              <MessageCircle className="w-8 h-8 text-[#588157]" />
              <span className="absolute top-3 -right-7 border-2 border-[#e7e7e7] w-10 h-10  rounded-full bg-white text-black flex items-center justify-center text-lg font-bold">
                03
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Practical Advice</h3>
            <p className="text-sm text-gray-600">
              Our consultants have a proven track record of helping businesses
              succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniqueSection;