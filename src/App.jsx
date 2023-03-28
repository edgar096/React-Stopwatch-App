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

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [recordedLaps, setRecordedLaps] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleRecordedLaps = () => {
    setRecordedLaps([
      ...recordedLaps,
      { id: crypto.randomUUID(), value: completeTimer },
    ]);
    console.log(unixTimer);
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

  const handleStop = () => {
    setIsDisabled(true);
    setIsClicked(false);
    setStartTime(null);
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
    millisecondsPassed = parseInt((unixTimer % 1000) / 10);
    secondsPassed = parseInt((unixTimer / 1000) % 60);
    minutesPassed = parseInt((unixTimer / (1000 * 60)) % 60);
    hoursPassed = parseInt((unixTimer / (1000 * 60 * 60)) % 24);
    completeTimer = `${hoursPassed}:${minutesPassed}:${secondsPassed}:${millisecondsPassed}`;
  }
  return (
    <div className="App">
      <div>Stopwatch App</div>
      <Card>
        <div>{completeTimer}</div>
        <RecordedLaps laps={recordedLaps} />
      </Card>
      <Card>
        <StartButton
          isClicked={isClicked}
          handleStart={handleStart}
          handleStop={handleStop}
        />
        <LapButton
          isDisabled={isDisabled}
          handleAddValue={handleRecordedLaps}
        />
      </Card>
    </div>
  );
}

export default App;
