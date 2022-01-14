import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartMenu from "./components/StartMenu/StartMenu.jsx";
import Game from "./components/Game/Game.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartMenu />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
