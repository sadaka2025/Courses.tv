import { useDispatch } from "react-redux";
import { setGenre } from "../../redux/reducers/selectedGenresSlice";
import motounData from "../../data/motoun.json";
import nourData from "../../data/nour-alyakine.json";

export default function SideBar({ onSelectGenre }) {
  const dispatch = useDispatch();

  const categories = [
    { id: "motoun", title: "متون", videos: motounData },
    { id: "nour", title: "نور اليقين", videos: nourData },
  ];

  return (
    <div>
      {categories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => dispatch(setGenre(cat))}
          className="cursor-pointer p-3 hover:bg-neutral-700"
        >
          {cat.title}
        </div>
      ))}
    </div>
  );
}
