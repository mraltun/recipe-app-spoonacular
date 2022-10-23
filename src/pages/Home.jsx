import React from "react";
import { motion } from "framer-motion";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Veggie />
    </motion.div>
  );
};

export default Home;
