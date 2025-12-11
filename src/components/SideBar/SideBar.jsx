import React from "react";
import { useDispatch } from "react-redux";
import { setGenre } from "../../redux/reducers/selectedGenresSlice";
import motounData from "../../data/motoun.json";
import nourData from "../../data/nour-alyakine.json";

export default function SideBar({ onSelectGenre }) {
  const dispatch = useDispatch();

  const categories = [
    { id: "motoun", title: "المتون الشرعية", videos: motounData },
    { id: "nour", title: " سيرة النبي محمدﷺ ", videos: nourData },
  ];

  return (
    <div className="bg-neutral-800 text-neutral-100 p-2 pr-0 h-auto drop-shadow-lg">
      {categories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => dispatch(setGenre(cat))}
          className="cursor-pointer hover:bg-cyan-600"
          style={{
            fontFamily: "'Arabic Typesetting', serif",
            fontSize: "40px",
            padding: "0.75rem",
            color: "yellow", // couleur par défaut
            transition: "color 0.3s", // animation douce au survol
          }}
        >
          {cat.title}
        </div>
      ))}
    </div>
  );
}
