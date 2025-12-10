import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { hide, selectMovieModal } from "../../redux/reducers/movieModalSlice";
import { AiOutlinePlayCircle, AiFillStar } from "react-icons/ai";
import { allVideos } from "../../data/allVideos";

export default function MovieModal() {
  const dispatch = useDispatch();
  const { movieId, dataset, enabled } = useSelector(selectMovieModal);

  const video = allVideos.find(
    (v) => v.id === movieId && v.dataset === dataset
  );
  if (!enabled || !video) return null;

  const isYouTube =
    typeof video.url === "string" && video.url.includes("youtu");

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-neutral-900 rounded-xl shadow-xl text-white w-[750px] h-auto flex flex-col"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <div className="flex justify-end p-3">
          <button
            onClick={() => dispatch(hide())}
            className="text-gray-300 hover:text-white text-xl"
          >
            ✖
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 group">
            {isYouTube ? (
              <div
                className="cursor-pointer relative"
                onClick={() => window.open(video.url, "_blank")}
              >
                <img
                  src={video.thumbnail}
                  className="rounded-l-xl h-full w-full object-cover"
                  alt={video.title}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
                  <AiOutlinePlayCircle size={80} className="text-white" />
                </div>
              </div>
            ) : (
              <video controls className="rounded-l-xl w-full h-auto" autoPlay>
                {Array.isArray(video.url) ? (
                  video.url.map((src, i) => (
                    <source key={i} src={src} type="video/mp4" />
                  ))
                ) : (
                  <source src={video.url} type="video/mp4" />
                )}
              </video>
            )}
          </div>

          <div className="w-full md:w-1/2 p-5 space-y-3">
            <h1 className="text-3xl font-bold">{video.title}</h1>
            <div className="flex items-center gap-1">
              <AiFillStar size={16} className="text-yellow-500" />
              <span className="text-gray-400 text-sm">
                {isYouTube
                  ? "Série religieuse • نور اليقين"
                  : "Matériel audio/vidéo local"}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-6">
              <strong>Description: </strong>
              {video.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
