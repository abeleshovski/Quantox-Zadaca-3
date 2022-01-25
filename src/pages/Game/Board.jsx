import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import X from "../../assets/icon-x.svg";
import O from "../../assets/icon-o.svg";
import iconRestart from "../../assets/icon-restart.svg";
import { checkIfSomeoneWon } from "../../utils/checkWin";
import {
  setPlayerFields,
  setAiFields,
  setCurrentPlayer,
} from "../../redux/gameStatus";
import { reset } from "../../utils/reset";
import { ScoreComponents } from "../../components/ScoreComponents";

const Board = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState(
    Array(9).fill({ value: null, isClicked: false })
  );
  const { player, ai } = useSelector((state) => state.game);
  const { playerScore, aiScore, ties } = useSelector((state) => state.scores);

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
      setTimeout(() => {
        dispatch(setCurrentPlayer(player));
        temp[randomNum] = { value: ai, isClicked: true };
        setFields(temp);
        dispatch(setAiFields(randomNum));
      }, 1000);
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
  }, [fields, currentPlayer, playerFields, aiFields, ai, aiMove, dispatch]);

  return (
    <div className="board">
      <div className="header">
        <div className="tictactoe">
          <img src={X} alt="X" />

          <img src={O} alt="O" />
        </div>
        <div className="currentTurn">
          <span>
            {currentPlayer === "X" ? (
              <img src={X} alt="X" />
            ) : (
              <img src={O} alt="O" />
            )}{" "}
            Turn
          </span>
        </div>
        <div>
          <button
            className="restart"
            onClick={() => setFields(reset(dispatch))}
          >
            <img src={iconRestart} alt="restart" />
          </button>
        </div>
      </div>
      <div className="field">
        {fields.map((row, rowIndex) => (
          <div className="field" key={rowIndex}>
            {!row.isClicked ? (
              <button onClick={() => handleClick(rowIndex)}>{row.value}</button>
            ) : (
              <button>
                {row.value === "X" ? (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={X}
                    alt="X"
                  />
                ) : (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={O}
                    alt="O"
                  />
                )}
              </button>
            )}
          </div>
        ))}
      </div>
      <ScoreComponents
        player={player}
        playerScore={playerScore}
        ties={ties}
        ai={ai}
        aiScore={aiScore}
      />
    </div>
  );
};

export default Board;
