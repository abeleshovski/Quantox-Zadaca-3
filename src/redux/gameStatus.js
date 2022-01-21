import { createSlice } from "@reduxjs/toolkit";

export const gameStatusSlice = createSlice({
  name: "gameStatus",
  initialState: {
    playerFields: [],
    aiFields: [],
    currentPlayer: "X",
    fields: Array(9).fill({ value: null, isClicked: false }),
  },
  reducers: {
    setPlayerFields: (state, action) => {
      state.playerFields = [...state.playerFields, action.payload];
    },
    setAiFields: (state, action) => {
      state.aiFields = [...state.aiFields, action.payload];
    },
    resetFields: (state) => {
      state.playerFields = [];
      state.aiFields = [];
    },
    setCurrentPlayer: (state, action) => {
      state.currentPlayer = action.payload;
    },
  },
});

export const { setPlayerFields, setAiFields, resetFields, setCurrentPlayer } =
  gameStatusSlice.actions;

export default gameStatusSlice.reducer;
