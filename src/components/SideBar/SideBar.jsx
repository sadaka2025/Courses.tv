import { useDispatch } from "react-redux";
import { showMovie } from "../../redux/reducers/movieModalSlice";
import motounData from "../../data/motoun.json";
import nourData from "../../data/nour-alyakine.json";

export default function SideBar() {
  const dispatch = useDispatch();

  const categories = [
    { id: "motoun", title: "متون", videos: motounData },
    { id: "nour", title: "نور اليقين", videos: nourData },
  ];

  return (
    <div>
      {categories.map((cat) => (
        <div key={cat.id}>
          <h2 className="cursor-pointer p-3 hover:bg-neutral-700">
            {cat.title}
          </h2>
          <div className="pl-4">
            {cat.videos.map((video) => (
              <div
                key={video.id}
                onClick={() =>
                  dispatch(showMovie({ id: video.id, dataset: cat.id }))
                }
                className="cursor-pointer p-2 hover:bg-neutral-700 rounded"
              >
                {video.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
