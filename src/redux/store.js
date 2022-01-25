import { configureStore } from "@reduxjs/toolkit";
import gameSettings from "./game/settings";
import gameScores from "./game/scores";
import gameStatus from "./game/status";

export default configureStore({
  reducer: {
    game: gameSettings,
    scores: gameScores,
    status: gameStatus,
  },
});
