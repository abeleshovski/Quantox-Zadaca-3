import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPlayer } from "../../redux/gameSettings";
import X from "../../assets/icon-x.svg";
import O from "../../assets/icon-o.svg";

const StartMenu = () => {
  const { player } = useSelector((state) => state.game);
  const { ai } = useSelector((state) => state.game);
  const [xSelected, setXSelected] = React.useState("selected");
  const [oSelected, setOSelected] = React.useState("");

  const dispatch = useDispatch();
  return (
    <div className="startMenu">
      <div className="tictactoe">
        <img src={X} alt="X" />
        <img src={O} alt="O" />
      </div>

      <div className="toggleSettings">
        <h3>PICK PLAYER'S MARK</h3>
        <div className="pickMark">
          <button
            className={xSelected}
            onClick={() => {
              dispatch(setPlayer("X"));
              setXSelected("selected");
              setOSelected("");
            }}
          >
            <img src={X} alt="X" />
          </button>
          <button
            className={oSelected}
            onClick={() => {
              dispatch(setPlayer("O"));
              setXSelected("");
              setOSelected("selected");
            }}
          >
            <img src={O} alt="X" />
          </button>
        </div>
        <p>REMEMBER, X GOES FIRST!</p>
      </div>
      <div className="startButton">
        <Link to="/game">NEW GAME (VS CPU)</Link>
      </div>
    </div>
  );
};

export default StartMenu;
