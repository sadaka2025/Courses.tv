import { motion } from "framer-motion";

export default function MovieProvider({ name = "Provider", logo }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.05 }}
      className="flex flex-col items-center w-20 p-2 gap-1.5 rounded-xl bg-neutral-800"
    >
      <img
        className="rounded-full w-10 h-10 object-cover"
        src={logo || "https://via.placeholder.com/40"}
        alt={name}
      />
      <p className="text-xs text-neutral-300 text-center">{name}</p>
    </motion.div>
  );
}
