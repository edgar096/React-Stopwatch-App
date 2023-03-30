import { useState } from 'react';
import StartButton from './UI/Buttons/StartButton';
import LapButton from './UI/Buttons/LapButton';
import './App.css';
import Card from './UI/Card/Card';
import RecordedLaps from './UI/Recorded Laps/RecordedLaps';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import PauseButton from './UI/Buttons/PauseButton';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const [recordedLaps, setRecordedLaps] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleRecordedLaps = () => {
    setRecordedLaps([
      ...recordedLaps,
      { id: crypto.randomUUID(), value: completeTimer },
    ]);
  };

  const handleStart = () => {
    setIsDisabled(false);
    setIsClicked(true);
    setStartTime(Date.now());
    setNow(Date.now());
    setInterval(() => {
      setNow(Date.now());
    }, 1);
    setRecordedLaps([]);
  };

  let millisecondsPassed,
    secondsPassed,
    minutesPassed,
    hoursPassed,
    unixTimer,
    completeTimer = null;
  if (startTime != null && now != null) {
    unixTimer = now - startTime;
    millisecondsPassed = `0${parseInt((unixTimer % 1000) / 10)}`.slice(-2);
    secondsPassed = `0${parseInt((unixTimer / 1000) % 60)}`.slice(-2);
    minutesPassed = `0${parseInt((unixTimer / (1000 * 60)) % 60)}`.slice(-2);
    hoursPassed = `0${parseInt((unixTimer / (1000 * 60 * 60)) % 24)}`.slice(-2);

    completeTimer = `${hoursPassed}:${minutesPassed}:${secondsPassed}:${millisecondsPassed}`;
  }
  const handleStop = () => {
    setIsDisabled(true);
    setIsClicked(false);
    setStartTime(null);
    setRecordedLaps([]);
  };

  return (
    <div className="App">
      <Typography gutterBottom variant="h4" component="div">
        Stopwatch App
      </Typography>

      <Typography gutterBottom variant="h4" component="div">
        {completeTimer}
      </Typography>
      <RecordedLaps laps={recordedLaps} />

      <Card>
        <StartButton
          isClicked={isClicked}
          handleStart={handleStart}
          handleStop={handleStop}
        />
        <PauseButton />
        <LapButton
          isDisabled={isDisabled}
          handleAddValue={handleRecordedLaps}
        />
      </Card>
    </div>
  );
}

export default App;
