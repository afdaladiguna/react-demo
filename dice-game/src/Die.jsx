import './Die.css';
export default function Die({ val, color = 'bisque' }) {
  return (
    <div className="Die" style={{ backgroundColor: color }}>
      {val}
    </div>
  );
}
