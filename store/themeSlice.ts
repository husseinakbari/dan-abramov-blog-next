import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../models";



const initialState: ThemeState = {
  mode: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: ThemeState) => {      
      if (state.mode === "dark") {
        document.documentElement.classList.replace("dark", "light");
        state.mode = "light";
      } else {
        document.documentElement.classList.replace("light", "dark");
        state.mode = "dark";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
