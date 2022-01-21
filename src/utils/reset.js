import { resetFields } from "../redux/gameStatus";

export const reset = (dispatch) => {
  dispatch(resetFields());
  const resetGame = Array(9).fill({ value: null, isClicked: false });
  return resetGame;
};
