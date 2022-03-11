function isWin(elements) {
  if (elements[0].isActive == "X" && elements[1].isActive == "X" && elements[2].isActive == "X") return true;
  else if (elements[3].isActive == "X" && elements[4].isActive == "X" && elements[5].isActive == "X")
    return true;
  else if (elements[6].isActive == "X" && elements[7].isActive == "X" && elements[8].isActive == "X")
    return true;
  else if (elements[0].isActive == "X" && elements[4].isActive == "X" && elements[8].isActive == "X")
    return true;
  else if (elements[2].isActive == "X" && elements[4].isActive == "X" && elements[6].isActive == "X")
    return true;
  else if (elements[0].isActive == "X" && elements[3].isActive == "X" && elements[6].isActive == "X")
    return true;
  else if (elements[1].isActive == "X" && elements[4].isActive == "X" && elements[7].isActive == "X")
    return true;
  else if (elements[2].isActive == "X" && elements[5].isActive == "X" && elements[8].isActive == "X")
    return true;
  if (elements[0].isActive == "O" && elements[1].isActive == "O" && elements[2].isActive == "O") return true;
  else if (elements[3].isActive == "O" && elements[4].isActive == "O" && elements[5].isActive == "O")
    return true;
  else if (elements[6].isActive == "O" && elements[7].isActive == "O" && elements[8].isActive == "O")
    return true;
  else if (elements[0].isActive == "O" && elements[4].isActive == "O" && elements[8].isActive == "O")
    return true;
  else if (elements[2].isActive == "O" && elements[4].isActive == "O" && elements[6].isActive == "O")
    return true;
  else if (elements[0].isActive == "O" && elements[3].isActive == "O" && elements[6].isActive == "O")
    return true;
  else if (elements[1].isActive == "O" && elements[4].isActive == "O" && elements[7].isActive == "O")
    return true;
  else if (elements[2].isActive == "O" && elements[5].isActive == "O" && elements[8].isActive == "O")
    return true;
}

export default isWin;

// 0 1 2
// 3 4 5
// 6 7 8
