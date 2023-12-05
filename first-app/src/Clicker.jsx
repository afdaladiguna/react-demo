export default function Clicker({
  message = 'clicked',
  buttonText = 'button',
}) {
  function handleClick() {
    alert(message);
  }
  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
