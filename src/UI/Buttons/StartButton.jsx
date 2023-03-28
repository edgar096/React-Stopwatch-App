import Button from '@mui/material/Button';

const StartButton = ({ handleStart, handleStop, isClicked }) => {
  return (
    <div>
      {isClicked ? (
        <Button onClick={handleStop}>Reset Timer</Button>
      ) : (
        <Button onClick={handleStart}>Start Timer</Button>
      )}
    </div>
  );
};
export default StartButton;
