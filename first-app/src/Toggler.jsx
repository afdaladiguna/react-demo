import { useState } from 'react';

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const incrementCount = () => setCount(count + 2);

  return (
    <div>
      <p onClick={toggleIsHappy}>{isHappy ? 'Happy' : 'Sad'}</p>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
