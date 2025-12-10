import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setGenre, clearGenre } from "../../redux/reducers/selectedGenresSlice";

export default function SideTile({ genre, pos }) {
  const [highlighted, setHighlighted] = React.useState(false);
  const dispatch = useDispatch();

  function toggleHighlighted() {
    setHighlighted((prev) => !prev);
    if (!highlighted) {
      dispatch(setGenre(genre)); // sélectionne la catégorie
    } else {
      dispatch(clearGenre()); // désélectionne
    }
  }

  const animations = {
    empty: { opacity: 0 },
    fadeIn: { opacity: 1, transition: { duration: 1 * pos } },
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
        id={genre.id}
        className={
          highlighted
            ? "p-3 bg-cyan-600 rounded-xl rounded-r-none duration-200 select-none"
            : "p-3 hover:bg-neutral-900 rounded-xl rounded-r-none duration-200 select-none"
        }
        onClick={toggleHighlighted}
      >
        {genre.name}
      </li>
    </motion.div>
  );
}
