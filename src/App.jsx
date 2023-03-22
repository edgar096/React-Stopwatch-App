import { useEffect, useState } from 'react';
import StartButton from './UI/Buttons/StartButton';
import PauseButton from './UI/Buttons/PauseButton';
import './App.css';
import Card from './UI/Card/Card';
import RecordedLaps from './UI/Recorded Laps/RecordedLaps';

function App() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  //secondsPassed = (now - startTime) / 1000
  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    setInterval(() => {
      setNow(Date.now());
    }, 1);
  };

  const handlePause = () => {
    setInterval(secondsPassed);
  };
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <div className="App">
      <div>Stopwatch App</div>
      <Card>
        <div>{secondsPassed}</div>
        <RecordedLaps />
      </Card>
      <Card>
        <StartButton handleStart={handleStart} />
        <PauseButton handlePause={handlePause} />
      </Card>
    </div>
  );
}

//App structure:
//--Two Buttons: start and pause/resume
//--Lap Button(?): takes snapshot of time
export default App;
