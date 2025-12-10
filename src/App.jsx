import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content/Content";
import MovieModal from "./components/MovieModal/MovieModal";
import { useSelector, useDispatch } from "react-redux";
import { hide, selectMovieModal } from "./redux/reducers/movieModalSlice";

function App() {
  const { enabled: movieModalEnabled } = useSelector(selectMovieModal);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex h-fit">
        <SideBar />
        <Content />
      </div>

      {movieModalEnabled && (
        <div
          className="fixed top-0 left-0 bg-black w-full h-full flex items-center justify-center bg-opacity-50 z-50"
          onClick={(event) =>
            event.currentTarget === event.target && dispatch(hide())
          }
        >
          <MovieModal />
        </div>
      )}
    </div>
  );
}

export default App;
