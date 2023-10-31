import { useState } from "react";
import solve from "./soduku_backtracking";
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
  function create2DCopyArray(arr) {
    return arr.map((subarray) => [...subarray]);
  }
  return (
    <>
      <div className="btn">
        <button
          onClick={async () => {
            let data = await fetch("https://sudoku-api.vercel.app/api/dosuku");
            data = await data.json();
            let questionGrid = data.newboard.grids[0].value;
            let copyQuestionGrid = create2DCopyArray(questionGrid);
            let solutionGrid = solve(copyQuestionGrid);
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
