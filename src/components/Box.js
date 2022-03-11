import { useEffect, useState } from "react";
import "./Box.css";
export default ({ user, changeUser }) => {
  const [color, setColor] = useState("");
  const [sign, setSign] = useState("");
  const [click, setClicked] = useState(false);
  useEffect(() => {
    if (user == "P1") {
      setSign("X");
    } else if (user == "P2") {
      setSign("O");
    }
    changeUser();
  }, [click]);
  useEffect(() => {
    if (sign == "X") {
      setColor("#fb3640");
    } else {
      setColor("#ffa400");
    }
  }, [sign]);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <div className="box shadow-md " onClick={handleClick}>
      <span id="sign" style={{ color: color }}>
        {click && sign}
      </span>
    </div>
  );
};
