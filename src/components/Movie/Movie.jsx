import React from "react";
import { showMovie } from "../../redux/reducers/movieModalSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

export default function Movie({ data }) {
  const dispatch = useDispatch();

  if (!data) return null;

  return (
    <motion.div
      className="inline-block flex-shrink-0 drop-shadow-lg bg-neutral-900 h-[330px] w-44 rounded-lg cursor-pointer"
      onClick={() => dispatch(showMovie(data.id))}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        className="w-fit rounded-lg rounded-b-none"
        src={
          data.thumbnail ||
          "https://images.unsplash.com/photo-1662675117392-561a414fcefc?auto=format&fit=crop&w=687&q=80"
        }
        alt={data.title ?? "Thumbnail not found"}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://images.unsplash.com/photo-1662675117392-561a414fcefc?auto=format&fit=crop&w=687&q=80";
        }}
      />
      <div className="p-2.5 space-y-1">
        <p className="text-neutral-500 text-xs">
          {`${data.description ?? ""}`}
        </p>
        <p className="text-neutral-100 text-sm line-clamp-1">
          {data.title ?? "Untitled"}
        </p>
      </div>
    </motion.div>
  );
}
