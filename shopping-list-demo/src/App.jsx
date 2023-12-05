import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import UsernameForm from './UsernameForm';
import SignupForm from './SignupForm';
import BetterSignupForm from './BetterSignupForm';
import ShoppingListForm from './ShoppingListForm';
import './App.css';

// const data = [
//   { ud: 1, item: 'eggs', qty: 12, completed: false },
//   { ud: 2, item: 'milk', qty: 1, completed: true },
//   { ud: 3, item: 'chicken', qty: 4, completed: false },
//   { ud: 4, item: 'carrots', qty: 6, completed: false },
// ];

// const properties = [
//   { id: 129031, name: 'Desert Yurt', rating: 4.9, price: 150 },
//   { id: 129331, name: 'Lone Mountain Cabin', rating: 4.8, price: 250 },
//   { id: 129032, name: 'Cactus Retreat', rating: 4.75, price: 300 },
//   { id: 129033, name: 'Redwood Treehouse Escape', rating: 4.9, price: 120 },
//   { id: 129034, name: 'Oceanview Condo', rating: 4.7, price: 140 },
//   { id: 129035, name: 'Gold Miner Campground', rating: 4.69, price: 96 },
// ];

function App() {
  return (
    <>
      <div>
        {/* <ShoppingList items={data} />
        <PropertyList properties={properties} /> */}
        {/* <UsernameForm /> */}
        {/* <SignupForm /> */}
        {/* <BetterSignupForm /> */}
        <ShoppingList />
      </div>
    </>
  );
}

export default App;
