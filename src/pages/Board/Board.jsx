import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkIfSomeoneWon } from "../../utils/checkWin";
import {
  setPlayerFields,
  setAiFields,
  setCurrentPlayer,
} from "../../redux/game/status";

import { ScoreComponent } from "../../components/ScoreComponent";
import { nullValueArray } from "../../utils/Array/nullValueArray";
import Oimage from "../../components/ImageComponents/Oimage";
import Ximage from "../../components/ImageComponents/Ximage";
import Header from "../../components/HeaderComponents/Header";

const Board = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState(nullValueArray);
  const { player, ai } = useSelector((state) => state.game);

  const { playerFields, aiFields, currentPlayer } = useSelector(
    (state) => state.status
  );

  const aiMove = useCallback(() => {
    let randomNum = Math.floor(Math.random() * 10);
    let temp = fields.slice();
    if (fields.every((field) => field.isClicked)) return;
    if (randomNum === 9) {
      randomNum -= 1;
    }
    if (!temp[randomNum].isClicked) {
      dispatch(setCurrentPlayer(player));
      temp[randomNum] = { value: ai, isClicked: true };
      setFields(temp);
      dispatch(setAiFields(randomNum));
    } else {
      aiMove();
    }
  }, [fields, dispatch, player, ai]);

  const handleClick = (id) => {
    if (currentPlayer === player) {
      let temp = fields.slice();
      temp[id] = { value: player, isClicked: true };
      setFields(temp);
      dispatch(setPlayerFields(id));
      dispatch(setCurrentPlayer(ai));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const status = checkIfSomeoneWon(
        dispatch,
        playerFields,
        aiFields,
        fields,
        setFields
      );
      if (!status && currentPlayer === ai) {
        aiMove();
      }
    }, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);

  return (
    <div className="board">
      <Header currentPlayer={currentPlayer} setFields={setFields} />
      <div className="field">
        {fields.map((row, rowIndex) => (
          <div className="field" key={rowIndex}>
            {!row.isClicked ? (
              <button onClick={() => handleClick(rowIndex)}>{row.value}</button>
            ) : (
              <button>
                {row.value === "X" ? (
                  <Ximage isVisible={row.isClicked} />
                ) : (
                  <Oimage isVisible={row.isClicked} />
                )}
              </button>
            )}
          </div>
        ))}
      </div>
      <ScoreComponent player={player} ai={ai} />
    </div>
  );
};

export default Board;
