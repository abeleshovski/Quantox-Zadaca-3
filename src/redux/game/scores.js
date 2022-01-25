import { createSlice } from "@reduxjs/toolkit";

export const gameScoresSlice = createSlice({
  name: "gameScores",
  initialState: {
    playerScore: 0,
    aiScore: 0,
    ties: 0,
  },
  reducers: {
    setPlayerScore: (state) => {
      state.playerScore = state.playerScore + 1;
    },
    setAiScore: (state) => {
      state.aiScore = state.aiScore + 1;
    },
    setTies: (state) => {
      state.ties = state.ties + 1;
    },
  },
});

export const { setPlayerScore, setAiScore, setTies } = gameScoresSlice.actions;

export default gameScoresSlice.reducer;
