import { resetFields } from "../redux/game/status";

export const reset = (dispatch) => {
  dispatch(resetFields());
  const resetGame = Array(9).fill({ value: null, isClicked: false });
  return resetGame;
};
