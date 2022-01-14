import { createSlice } from "@reduxjs/toolkit";

export const gameSettingsSlice = createSlice({
  name: "gameSettings",
  initialState: {
    player: "X",
    ai: "O",
  },
  reducers: {
    setPlayer: (state, action) => {
      state.player = action.payload;
      state.ai = state.player === "X" ? "O" : "X";
    },
  },
});

export const { setPlayer } = gameSettingsSlice.actions;

export default gameSettingsSlice.reducer;
