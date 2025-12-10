import { useSelector } from "react-redux";
import { selectSelectedGenre } from "../../redux/reducers/selectedGenresSlice";
import Movie from "../Movie/Movie";

export default function Content() {
  const selectedGenre = useSelector(selectSelectedGenre);

  if (!selectedGenre)
    return (
      <div className="flex-1 p-4 text-neutral-400">
        Sélectionnez une catégorie pour voir les vidéos.
      </div>
    );

  return (
    <div className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">{selectedGenre.title}</h2>
      <div className="flex flex-wrap gap-4">
        {selectedGenre.videos.map((video, i) => (
          <Movie key={i} data={video} dataset={selectedGenre.id} />
        ))}
      </div>
    </div>
  );
}
