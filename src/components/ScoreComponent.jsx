import React from "react";

export const ScoreComponent = ({ player, playerScore, ties, ai, aiScore }) => {
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
