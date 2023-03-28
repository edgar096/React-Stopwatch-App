import Button from '@mui/material/Button';
import { useState } from 'react';

const StartButton = ({ handleStart, isClicked }) => {
  return (
    <div>
      {isClicked ? (
        <Button variant="contained" onClick={handleStart}>
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
