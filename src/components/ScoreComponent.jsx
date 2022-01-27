import React from "react";
import { useSelector } from "react-redux";

export const ScoreComponent = ({ player, ai }) => {
  const { playerScore, aiScore, ties } = useSelector((state) => state.scores);
  return (
    <div className="scores">
      <div className="playerScore">
        <p>{player} (You)</p>
        <span>{playerScore} </span>
      </div>
      <div className="ties">
        <p>Ties</p>
        <span>{ties} </span>
      </div>
      <div className="aiScore">
        <p>{ai} (CPU)</p>
        <span>{aiScore} </span>
      </div>
    </div>
  );
};
