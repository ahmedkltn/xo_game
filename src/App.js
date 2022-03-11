import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Box from "./components/Box";
import Player from "./components/Player";
import isWin from "./Logic/isWin";
function App() {
  const [user, setUser] = useState("P1");
  const [elements, setElements] = useState([
    { box: 1, isActive: "", id: 0 },
    { box: 2, isActive: "", id: 1 },
    { box: 3, isActive: "", id: 2 },
    { box: 4, isActive: "", id: 3 },
    { box: 5, isActive: "", id: 4 },
    { box: 6, isActive: "", id: 5 },
    { box: 7, isActive: "", id: 6 },
    { box: 8, isActive: "", id: 7 },
    { box: 9, isActive: "", id: 8 },
  ]);
  const [handleWin, setHandleWin] = useState(false);
  const changeUser = useCallback(() => {
    if (user == "P1") setUser("P2");
    else setUser("P1");
  });
  const handleClick = i => {
    if (user == "P1") elements[i].isActive = "X";
    else if (user == "P2") elements[i].isActive = "O";
    setElements(elements);
  };
  function refreshPage() {
    window.location.reload(false);
  }
  const xoLogic = () => {
    if (isWin(elements)) {
      console.log(`${user} WINS !`);
      setTimeout(() => refreshPage(), 200);
    }
  };
  useEffect(() => {
    xoLogic();
  }, [user]);
  return (
    <div className="App">
      <h1 className="title text-center">
        <span id="X">X</span>
        <span id="O">O</span> GAME
      </h1>
      <Player player={user} handleWin={handleWin} />
      <div className="main container shadow-lg">
        {elements.map((element, i) => (
          <div
            key={element.id}
            onClick={() => {
              handleClick(i);
            }}>
            <Box key={element.id} user={user} changeUser={changeUser} />
          </div>
        ))}
        <button className="reset" onClick={() => refreshPage()}>
          RESET GAME
        </button>
      </div>
    </div>
  );
}

export default App;
