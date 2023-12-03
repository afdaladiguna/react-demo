import Chicken from './Chicken';
import Greeter from './Greeter';
import Dice from './Dice';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import './App.css';

function App() {
  return (
    <div>
      <Greeter name="afdal" from="alek" />
      <Greeter from="alek" />
      <Dice numSides={6} />
      <ListPicker values={[1, 25, 32]} />

      <Heading text="woy" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={['red', 'pink', 'purple', 'teal']} />
    </div>
  );
}

export default App;
