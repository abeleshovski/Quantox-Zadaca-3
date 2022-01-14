import React, { useEffect, useState } from "react";
import { chunk } from "lodash";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const resetGame = Array(9).fill({ value: null, isClicked: false });

const Game = () => {
  const [fields, setFields] = useState(resetGame);
  const { player, ai } = useSelector((state) => state.game);
  const [playerFields, setPlayerFields] = useState([]);
  const [aiFields, setAiFields] = useState([]);
  let navigate = useNavigate();
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const aiMove = () => {
    let randomNum = Math.floor(Math.random() * 10);
    console.log(randomNum);
    let temp = fields.slice();
    if (randomNum === 9) {
      randomNum -= 1;
    }
    if (!temp[randomNum].isClicked) {
      setCurrentPlayer(player);
      temp[randomNum] = { value: ai, isClicked: true };
      setFields(temp);
      aiFields.push(randomNum);
    } else {
      aiMove();
    }
  };

  const checkWin = (selectedFields) => {
    let flag = false;
    winConditions.forEach((condition) => {
      //destructure condition and check if all fields are equal
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
  const handleClick = (id) => {
    let temp = fields.slice();
    temp[id] = { value: player, isClicked: true };
    setFields(temp);
    playerFields.push(id);
    setCurrentPlayer(ai);
    console.log(playerFields);
  };

  const effect = () => {
    const playerWin = checkWin(playerFields);
    const aiWin = checkWin(aiFields);
    if (playerWin) {
      alert("Player Win");
      setPlayerFields([]);
      setAiFields([]);
      setFields(Array(9).fill({ value: null, isClicked: false }));
    } else if (aiWin) {
      alert("AI Win");
      setPlayerFields([]);
      setAiFields([]);
      setFields(Array(9).fill({ value: null, isClicked: false }));
    } else {
      let flag = false;
      try {
        fields.forEach((field) => {
          if (field.isClicked) {
            flag = true;
          } else {
            flag = false;
            throw new Error("Game is not over");
          }
        });
      } catch (err) {
        console.log("err");
      }
      if (flag) {
        alert("Draw!");
        setPlayerFields([]);
        setAiFields([]);
        setFields(Array(9).fill({ value: null, isClicked: false }));
      }
    }
  };

  useEffect(() => {
    effect();
    if (currentPlayer === ai) {
      aiMove();
    }
  });

  return (
    <div className="game">
      {console.log(fields)}
      {fields.map((row, rowIndex) => (
        <div className="fuck" key={rowIndex}>
          {console.log(rowIndex)}
          {!row.isClicked ? (
            <button onClick={() => handleClick(rowIndex)}>{row.value}</button>
          ) : (
            <button>{row.value}</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Game;
