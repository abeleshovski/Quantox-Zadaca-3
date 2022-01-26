import React from "react";
import { useDispatch } from "react-redux";
import iconRestart from "../assets/icon-restart.svg";
import { setCurrentPlayer } from "../redux/game/status";
import { reset } from "../utils/reset";

export const RestartButton = ({ setFields }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentPlayer("X"));
    setFields(reset(dispatch));
  };

  return (
    <button className="restart" onClick={() => handleClick()}>
      <img src={iconRestart} alt="restart" />
    </button>
  );
};
