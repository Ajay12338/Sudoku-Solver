import { useState } from "react";

const Body = () => {
  let [sudokuBoard, setSudokuBoard] = useState([
    [5, 3, "", "", 7, "", "", "", ""],
    [6, "", "", 1, 9, 5, "", "", ""],
    ["", 9, 8, "", "", "", "", 6, ""],
    [8, "", "", "", 6, "", "", "", 3],
    [4, "", "", 8, "", 3, "", "", 1],
    [7, "", "", "", 2, "", "", "", 6],
    ["", 6, "", "", "", "", 2, 8, ""],
    ["", "", "", 4, 1, 9, "", "", 5],
    ["", "", "", "", 8, "", "", 7, 9],
  ]);
  return (
    <>
      <div className="body">
        <div className="sudoku-container">
          {sudokuBoard.map((arr, i) => {
            return arr.map((currVal) => {
              if (i === 2 || i === 5) {
                return <div id="bottom-heavy">{currVal}</div>;
              }
              return <div>{currVal}</div>;
            });
          })}
        </div>
      </div>
      <div className="btn">
        <button>Solve</button>
      </div>
    </>
  );
};

export default Body;
