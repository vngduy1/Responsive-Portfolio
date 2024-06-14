import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "vi",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguages: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { toggleLanguages } = languageSlice.actions;

export default languageSlice.reducer;
