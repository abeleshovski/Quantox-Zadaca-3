import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import O from "../../assets/icon-o.svg";

const Oimage = ({ isVisible }) => {
  return (
    <AnimatePresence>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        src={O}
        alt="O"
      />
    </AnimatePresence>
  );
};

export default Oimage;
