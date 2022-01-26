import { setPlayerScore, setAiScore, setTies } from "../redux/game/scores";
import { setCurrentPlayer } from "../redux/game/status";
import { reset } from "./reset";

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = (selectedFields) => {
  let flag = false;
  winConditions.forEach((condition) => {
    const [a, b, c] = condition;
    if (
      selectedFields.includes(a) &&
      selectedFields.includes(b) &&
      selectedFields.includes(c)
    ) {
      flag = true;
    }
  });
  if (flag) return true;
  else return false;
};

export const checkIfSomeoneWon = (
  dispatch,
  playerFields,
  aiFields,
  fields,
  setFields
) => {
  const playerWin = checkWin(playerFields);
  const aiWin = checkWin(aiFields);
  let flag = false;
  if (playerWin) {
    flag = true;
    dispatch(setPlayerScore());
  } else if (aiWin) {
    dispatch(setAiScore());
    flag = true;
  } else if (fields.every((item) => item.isClicked)) {
    dispatch(setTies());
    flag = true;
  }
  if (flag) {
    dispatch(setCurrentPlayer("X"));
    setFields(reset(dispatch));
    return true;
  }
  return false;
};
