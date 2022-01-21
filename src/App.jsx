import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartMenu from "./components/StartMenu/StartMenu.jsx";
import Board from "./components/Game/Board.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartMenu />} />
          <Route path="/game" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
