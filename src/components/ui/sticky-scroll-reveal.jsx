
import React, { useEffect, useRef, useState } from "react"
import { useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  inactive: {
    opacity: 0.3,
    y: 10,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
      staggerChildren: 0.1,
    },
  },
}

const contentVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
}

export const StickyScroll = ({  content, contentClassName}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)

    if (closestBreakpointIndex !== activeCard) {
      setDirection(closestBreakpointIndex > activeCard ? 1 : -1)
      setActiveCard(closestBreakpointIndex)
    }
  })

  return (
    <motion.div
      // animate={{
      //   background: `linear-gradient(135deg, #F3BD1F 0%, #67883B 50%, white 100%)`, bg-[#3D533D]
      // }}
      animate={{
        background: "#3D533D",
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="h-[40rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-24"
      ref={ref}
    > 
      <div className=" relative flex items-start px-4 ">
    
        <div className="max-w-4xl">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              variants={cardVariants}
              initial="hidden"
              animate={activeCard === index ? "visible" : "inactive"}
              className="my-20"
            >
              
              <motion.div variants={textVariants}>
                <motion.h2
                  className="text-4xl md:text-5xl font-serif text-"
                  layout
                  layoutId={`title-${index}`}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  className="text-xl md:text-2xl font-serif  text-white max-w-xl mt-10"
                  layout
                  layoutId={`desc-${index}`}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div className="hidden lg:block sticky top-0">
        <div className="relative">

          {/* Static gray background */}
          <div className="relative h-[30rem]  w-[40rem] rounded-[2rem] bg-gray-200 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeCard}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-5 rounded-2xl overflow-hidden"
              >
                {content[activeCard].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

