import { createSlice } from "@reduxjs/toolkit";

export const movieModalSlice = createSlice({
  name: "movieModal",
  initialState: {
    enabled: false,
    movieId: null,
    dataset: null,
  },
  reducers: {
    hide: (state) => {
      state.enabled = false;
      state.movieId = null;
      state.dataset = null;
    },
    showMovie: (state, action) => {
      state.enabled = true;
      state.movieId = action.payload.id;
      state.dataset = action.payload.dataset;
    },
  },
});

export const { hide, showMovie } = movieModalSlice.actions;
export const selectMovieModal = (state) => state.movieModal;
export default movieModalSlice.reducer;
