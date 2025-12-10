import React from "react";
import { motion } from "framer-motion";

export default function SideTile({ genre, pos, onSelect }) {
  const [highlighted, setHighlighted] = React.useState(false);

  function handleClick() {
    setHighlighted((prev) => !prev);
    onSelect && onSelect();
  }

  const animations = {
    empty: { opacity: 0 },
    fadeIn: { opacity: 1, transition: { duration: 0.3 * pos } },
  };

  return (
    <motion.div
      variants={animations}
      initial="empty"
      animate="fadeIn"
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
    >
      <li
        className={
          highlighted
            ? "p-2 bg-cyan-600 rounded-xl rounded-r-none duration-200 cursor-pointer"
            : "p-2 hover:bg-neutral-900 rounded-xl rounded-r-none duration-200 cursor-pointer"
        }
        onClick={handleClick}
      >
        {genre.title}
      </li>
    </motion.div>
  );
}
