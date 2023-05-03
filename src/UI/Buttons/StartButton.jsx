const StartButton = ({ handleStart, handleStop, isClicked }) => {
  return (
    <>
      {isClicked ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Reset</button>
      )}
    </>
  );
};
export default StartButton;
