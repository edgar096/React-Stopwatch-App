import Button from '@mui/material/Button';

const StartButton = ({ handleStart }) => {
  return (
    <div>
      <Button variant="contained" onClick={handleStart}>
        Start Timer
      </Button>
    </div>
  );
};
export default StartButton;
