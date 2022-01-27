import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import X from "../../assets/icon-x.svg";

const Ximage = ({ isVisible }) => {
  return (
    <AnimatePresence>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        src={X}
        alt="X"
      />
    </AnimatePresence>
  );
};

export default Ximage;
