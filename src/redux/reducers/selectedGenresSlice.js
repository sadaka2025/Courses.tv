import { createSlice } from "@reduxjs/toolkit";

export const selectedGenresSlice = createSlice({
  name: "selectedGenres",
  initialState: {
    genre: null, // 🔥 un seul genre : { id, title, videos }
  },
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    clearGenre: (state) => {
      state.genre = null;
    },
  },
});

export const { setGenre, clearGenre } = selectedGenresSlice.actions;

// Sélecteur officiel
export const selectSelectedGenre = (state) => state.selectedGenres.genre;

export default selectedGenresSlice.reducer;
