export default function Greeter({ name = 'username', from }) {
  return (
    <>
      <h1>
        Hello {name}! from {from}
      </h1>
    </>
  );
}
