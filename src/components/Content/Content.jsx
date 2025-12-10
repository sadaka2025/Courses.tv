import { useSelector } from "react-redux";
import { selectSelectedGenre } from "../../redux/reducers/selectedGenresSlice";
import Movie from "../Movie/Movie";

export default function Content() {
  const selectedGenre = useSelector(selectSelectedGenre);

  if (!selectedGenre)
    return (
      <div
        className="flex-1 p-4 text-neutral-400"
        style={{
          fontFamily: "'Arabic Typesetting', serif",
          fontSize: "26px",
          padding: "0.75rem",
          color: "yellow", // couleur par défaut
          transition: "color 0.3s", // animation douce au survol
        }}
      >
        Sélectionnez une catégorie pour voir les vidéos.
      </div>
    );

  return (
    <div
      className="flex-1 p-4"
      style={{
        fontFamily: "'Arabic Typesetting', serif",
        fontSize: "40px",
        padding: "0.75rem",
        color: "yellow", // couleur par défaut
        transition: "color 0.3s", // animation douce au survol
      }}
    >
      <h2
        className="text-2xl font-bold mb-4"
        style={{
          fontFamily: "'Arabic Typesetting', serif",
          fontSize: "40px",
          padding: "0.75rem",
          color: "yellow", // couleur par défaut
          transition: "color 0.3s", // animation douce au survol
        }}
      >
        {selectedGenre.title}
      </h2>
      <div
        className="flex flex-wrap gap-4"
        style={{
          fontFamily: "'Arabic Typesetting', serif",
          fontSize: "40px",
          padding: "0.75rem",
        }}
      >
        {selectedGenre.videos.map((video, i) => (
          <Movie
            key={i}
            data={video}
            dataset={selectedGenre.id}
            style={{
              fontFamily: "'Arabic Typesetting', serif",
              fontSize: "40px",
              padding: "0.75rem",
            }}
          />
        ))}
      </div>
    </div>
  );
}
