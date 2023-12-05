import Property from './Property';
export default function PropertyList({ properties }) {
  return (
    <div style={{ display: 'flex' }}>
      {properties.map((p) => (
        <Property name={p.name} rating={p.rating} price={p.price} key={p.id} />
      ))}
    </div>
  );
}
