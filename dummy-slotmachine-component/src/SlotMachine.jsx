export default function SlotMachine({ value1, value2, value3 }) {
  const isJackpot = value1 == value2 && value2 == value3;
  const styles = {
    color: isJackpot ? 'green' : 'red',
  };
  return (
    <>
      <div>
        <h1>
          {value1} {value2} {value3}
        </h1>
        <h2 style={styles}>{isJackpot ? 'You win' : 'You lose'}</h2>
        {isJackpot && <h3>Congrats!</h3>}
      </div>
    </>
  );
}
