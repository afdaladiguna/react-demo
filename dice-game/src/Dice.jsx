import Die from './Die';
import './Dice.css';
export default function Dice({ dice, color = 'bisque' }) {
  return (
    <section className="Dice">
      {dice.map((val, id) => (
        <Die key={id} val={val} color={color} />
      ))}
    </section>
  );
}
