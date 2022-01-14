import { configureStore } from "@reduxjs/toolkit";
import gameSettings from "./gameSettings";

export default configureStore({
  reducer: {
    game: gameSettings,
  },
});
