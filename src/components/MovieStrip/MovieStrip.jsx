import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import API from "../../services/API";
import Movie from "../Movie/Movie";
import useWindowDimensions from "../../services/useWindowDimensions";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectSelectedGenres } from "../../redux/reducers/selectedGenresSlice";

export default function MovieStrip(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const { width } = useWindowDimensions();
  const [movies, setMovies] = useState([]);
  const [movieSection, setMovieSection] = useState([]);

  const [stripData, setStripData] = useState({
    page: 1,
    pages: 1,
  });

  const selectedGenres = useSelector(selectSelectedGenres);

  useEffect(() => {
    API.get(
      `${props.request}&page=${
        stripData.page
      }&with_genres=${selectedGenres.toString()}`
    ).then((response) => {
      const list = response?.data?.results ?? [];
      setMovies(list);
    });
  }, [stripData, selectedGenres]);

  useEffect(() => {
    if (!movies || movies.length === 0) {
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
      const limit = Math.min(Math.floor(width / 220), 20);
      setMovieSection(
        movies
          .slice(0, limit)
          .map((movie, i) => <Movie key={movie.id} data={movie} pos={i} />)
      );
    }
  }, [movies, width]);

  function nextSet() {
    setStripData((prev) => ({ ...prev, page: prev.page + 1 }));
  }

  function prevSet() {
    if (stripData.page === 1) return;
    setStripData((prev) => ({ ...prev, page: prev.page - 1 }));
  }

  return (
    <>
      {isEnabled ? (
        <div className="flex flex-col gap-3 ">
          <div className="bg-neutral-800 rounded-lg text-neutral-100 p-2 flex items-center gap-1">
            {props.icon}
            <p>{props.name}</p>
          </div>

          <div className="relative ">
            <div className="flex space-x-3 ml-auto">{movieSection}</div>

            <motion.div
              className="absolute bg-neutral-800 cursor-pointer rounded p-1 top-[130px] left-[-17px]"
              onClick={prevSet}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <BiChevronLeft size={25} className="text-neutral-100" />
            </motion.div>

            <motion.div
              className="absolute bg-neutral-800 cursor-pointer rounded p-1 top-[130px] right-[-17px]"
              onClick={nextSet}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <BiChevronRight size={25} className="text-neutral-100" />
            </motion.div>
          </div>
        </div>
      ) : null}
    </>
  );
}
