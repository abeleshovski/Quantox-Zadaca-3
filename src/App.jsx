import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import StartMenu from "./pages/StartMenu/StartMenu.jsx";
import Board from "./pages/Board/Board.jsx";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<StartMenu />} />
          <Route path="/game" element={<Board />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
