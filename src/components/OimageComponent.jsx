import { motion } from "framer-motion";
import React from "react";

import O from "../assets/icon-o.svg";

const OimageComponent = () => {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      src={O}
      alt="O"
    />
  );
};

export default OimageComponent;
