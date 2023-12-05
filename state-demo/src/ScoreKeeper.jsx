import { useState } from 'react';

export default function ScoreKeeper({ player = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(player).fill(0));
  const addScore = () => {};
  // const incrementScore = (idx) => {
  //   setScores((prevScores) => {
  //     const copy = [...prevScores];
  //     copy[idx] += 1;
  //     return copy;
  //   });
  // };
  const incrementScore = (idx) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      });
    });
  };

  const reset = () => {
    setScores(new Array(player).fill(0));
  };
  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              <span>
                Player {idx + 1} : {score}
              </span>
              <button onClick={() => incrementScore(idx)}>+1</button>
              {score >= target && 'Winner'}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
