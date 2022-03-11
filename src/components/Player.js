import { useEffect, useState } from "react";
import "./Player.css";
export default ({ player, handleWin }) => {
  const [sign, setSign] = useState("X");
  const changeSign = () => {
    if (player == "P1") {
      setSign("X");
      if (handleWin) {
        setSign(`${player[1]} won !`);
      }
    } else {
      setSign("O");
    }
  };
  useEffect(() => changeSign(), [player]);
  return (
    <div className="play">
      <span>{sign} TURN</span>
    </div>
  );
};
