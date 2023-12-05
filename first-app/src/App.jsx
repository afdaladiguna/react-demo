import Chicken from './Chicken';
import Greeter from './Greeter';
import Dice from './Dice';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Clicker from './Clicker';
import Counter from './Counter';
import Toggler from './Toggler';
import ColorBoxes from './ColorBoxes';
import './App.css';

function App() {
  return (
    <div>
      {/* <Greeter name="afdal" from="alek" />
      <Greeter from="alek" />
      <Dice numSides={6} />
      <ListPicker values={[1, 25, 32]} />

      <Heading text="woy" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={['red', 'pink', 'purple', 'teal']} /> */}
      {/* <Clicker message="anjay" buttonText="kiw" /> */}
      {/* <Counter num={0} /> */}
      {/* <Toggler /> */}
      <ColorBoxes colors={['red', 'orange', 'yellow', 'purple']} />
    </div>
  );
}

export default App;
