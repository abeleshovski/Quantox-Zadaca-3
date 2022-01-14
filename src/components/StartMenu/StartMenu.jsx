import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPlayer } from "../../redux/gameSettings";
const StartMenu = () => {
  const { player } = useSelector((state) => state.game);
  const { ai } = useSelector((state) => state.game);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>{player}</h1>
      <h1>{ai}</h1>
      <button onClick={() => dispatch(setPlayer("X"))}>X</button>
      <button onClick={() => dispatch(setPlayer("O"))}>O</button>
      <Link to="/game">Start Game</Link>
    </div>
  );
};

export default StartMenu;
