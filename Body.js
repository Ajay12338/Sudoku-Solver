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
      <div className="btn">
        <button
          onClick={async () => {
            let data = await fetch("https://sudoku-api.vercel.app/api/dosuku");
            data = await data.json();
            let grid = data.newboard.grids[0].value;
            for (let i = 0; i < 9; i++) {
              for (let j = 0; j < 9; j++) {
                if (grid[i][j] == 0) grid[i][j] = "";
              }
            }
            setSudokuBoard(grid);
          }}
        >
          Generate Random Board
        </button>
        <button>Input a Board</button>
      </div>
      <div className="body">
        <div className="sudoku-container">
          {sudokuBoard.map((arr, i) => {
            return arr.map((currVal, j) => {
              if (i === 2 || i === 5) {
                return (
                  <div id="bottom-heavy" key={j}>
                    {currVal}
                  </div>
                );
              }
              return <div key={j}>{currVal}</div>;
            });
          })}
        </div>
      </div>
      <div className="btn">
        <button onClick={() => {}}>Solve</button>
      </div>
    </>
  );
};

export default Body;
