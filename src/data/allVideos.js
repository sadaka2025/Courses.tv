import motounData from "./motoun.json";
import nourData from "./nour-alyakine.json";

export const allVideos = [
  ...motounData.map((v) => ({ ...v, dataset: "motoun" })),
  ...nourData.map((v) => ({ ...v, dataset: "nour" })),
];
