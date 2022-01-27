import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import X from "../assets/icon-x.svg";

const XimageComponent = () => {
  return (
    <AnimatePresence>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={X}
        alt="X"
      />
    </AnimatePresence>
  );
};

export default XimageComponent;
