export default function Dice({ numSides = 6 }) {
  console.log(numSides);
  const rand = Math.floor(Math.random() * numSides) + 1;
  return <h2>Die roll: {rand}</h2>;
}
