import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
    mode: "dark" | "light";
  }

const initialState: ThemeState = {
  mode: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: ThemeState) => {      
      if (state.mode === "dark") {
        document.documentElement.classList.replace("light", "dark")
        state.mode = "light";
      } else {
        document.documentElement.classList.replace("dark", "light")
        state.mode = "dark";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
