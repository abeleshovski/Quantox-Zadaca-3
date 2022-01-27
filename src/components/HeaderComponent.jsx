import React from "react";
import X from "../assets/icon-x.svg";
import O from "../assets/icon-o.svg";
import { RestartButton } from "./RestartButton";
const HeaderComponent = ({ currentPlayer, setFields }) => {
  return (
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
          )}
          Turn
        </span>
      </div>
      <div>
        <RestartButton setFields={setFields} />
      </div>
    </div>
  );
};

export default HeaderComponent;
