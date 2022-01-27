import { motion } from "framer-motion";
import React from "react";

import X from "../assets/icon-x.svg";

const XimageComponent = () => {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      src={X}
      alt="X"
    />
  );
};

export default XimageComponent;
