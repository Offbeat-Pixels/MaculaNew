import { motion } from "framer-motion";

export const Transition = (OgComponent) => {
  return () => (
    <>
      <motion.div
        // className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}

      >
        <OgComponent />
      </motion.div>
      <motion.div
        // className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}

      />
    </>
  );
};
