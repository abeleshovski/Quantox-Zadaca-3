import { setAiFields } from "../redux/gameStatus";

export const aiMove = (
  dispatch,
  fields,
  setFields,
  setCurrentPlayer,
  player,
  ai
) => {
  let randomNum = Math.floor(Math.random() * 10);
  let temp = fields.slice();
  if (fields.every((field) => field.isClicked)) return;
  if (randomNum === 9) {
    randomNum -= 1;
  }
  if (!temp[randomNum].isClicked) {
    setTimeout(() => {
      dispatch(setCurrentPlayer(player));
      temp[randomNum] = { value: ai, isClicked: true };
      setFields(temp);
      dispatch(setAiFields(randomNum));
    }, 1000);
  } else {
    aiMove();
  }
};
