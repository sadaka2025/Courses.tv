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
    <div className="w-48 bg-neutral-900 text-white h-screen p-4 overflow-y-auto">
      {categories.map((cat) => (
        <div key={cat.id} className="mb-4">
          <h2 className="cursor-pointer p-3 hover:bg-neutral-700 rounded">
            {cat.title}
          </h2>
          <div className="pl-2 flex flex-col gap-2">
            {cat.videos.map((video) => (
              <div
                key={video.id}
                onClick={() =>
                  dispatch(showMovie({ id: video.id, dataset: cat.id }))
                }
                className="cursor-pointer p-2 hover:bg-neutral-700 rounded bg-neutral-800 text-sm"
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
