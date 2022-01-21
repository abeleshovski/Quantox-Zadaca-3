import { configureStore } from "@reduxjs/toolkit";
import gameSettings from "./gameSettings";
import gameScores from "./gameScores";
import gameStatus from "./gameStatus";

export default configureStore({
  reducer: {
    game: gameSettings,
    scores: gameScores,
    status: gameStatus,
  },
});
