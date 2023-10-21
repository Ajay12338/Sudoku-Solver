import { useState } from "react";

const Body = () => {
  let [solveBoard, setSolveBoard] = useState([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ]);
  let [sudokuBoard, setSudokuBoard] = useState([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ]);

  return (
    <>
      <div className="btn">
        <button
          onClick={async () => {
            let data = await fetch("https://sudoku-api.vercel.app/api/dosuku");
            data = await data.json();
            let questionGrid = data.newboard.grids[0].value;
            let solutionGrid = data.newboard.grids[0].solution;
            for (let i = 0; i < 9; i++) {
              for (let j = 0; j < 9; j++) {
                if (questionGrid[i][j] === 0) questionGrid[i][j] = "";
              }
            }
            setSudokuBoard(questionGrid);
            setSolveBoard(solutionGrid);
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
        <button
          onClick={() => {
            setSudokuBoard(solveBoard);
          }}
        >
          Solve
        </button>
      </div>
    </>
  );
};

export default Body;
