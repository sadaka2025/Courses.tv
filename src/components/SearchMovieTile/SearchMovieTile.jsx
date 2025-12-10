import { motion } from "framer-motion";

export default function SearchMovieTile({ movie, onClick }) {
  const title = movie?.title ?? "Untitled";
  const description = movie?.description ?? "No description available";
  const thumbnail =
    movie?.thumbnail ??
    "https://images.unsplash.com/photo-1662675117392-561a414fcefc";

  return (
    <motion.div
      className="flex items-start gap-3 bg-neutral-900 p-3 rounded-lg cursor-pointer"
      onClick={onClick} // ✅ utilise le callback onClick du parent
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <img
        className="w-20 rounded"
        src={thumbnail}
        alt={title}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1662675117392-561a414fcefc";
        }}
      />
      <div className="flex flex-col">
        <p className="text-neutral-100 font-medium">{title}</p>
        <p className="text-neutral-500 text-sm line-clamp-2 max-w-[250px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
