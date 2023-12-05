import './App.css';
import Counter from './Counter';
import Dumbo from './Dumbo';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';

function App() {
  return (
    <>
      <h1>State Demo</h1>
      {/* <Counter /> */}
      {/* <Dumbo /> */}
      <ScoreKeeper player={10} />
      {/* <EmojiClicker /> */}
    </>
  );
}

export default App;
