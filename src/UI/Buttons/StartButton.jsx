import Button from '@mui/material/Button';

const StartButton = ({ handleStart, handleStop, isClicked }) => {
  return (
    <div>
      {isClicked ? (
        <Button variant="contained" onClick={handleStop}>
          Reset Timer
        </Button>
      ) : (
        <Button variant="contained" onClick={handleStart}>
          Start Timer
        </Button>
      )}
    </div>
  );
};
export default StartButton;
