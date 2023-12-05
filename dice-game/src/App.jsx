import LuckyN from './LuckyN';
import { sum } from './utils';
import Box from './Box';
import './App.css';
import BoxGrid from './BoxGrid';

function lessThan4(dice) {
  return sum(dice) < 4;
}

function doubles(dice) {
  return dice.every((value) => value === dice[0]);
}

function App() {
  return (
    <>
      {/* <LuckyN winCheck={lessThan4} />
      <LuckyN title="doubles" winCheck={doubles} numDice={3} /> */}
      <BoxGrid />
    </>
  );
}

export default App;
