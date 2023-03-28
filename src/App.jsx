import { useEffect, useState } from 'react';
import StartButton from './UI/Buttons/StartButton';
import LapButton from './UI/Buttons/LapButton';
import './App.css';
import Card from './UI/Card/Card';
import RecordedLaps from './UI/Recorded Laps/RecordedLaps';

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
    console.log(recordedLaps);
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
    completeTimer = 0;
  if (startTime != null && now != null) {
    millisecondsPassed = parseInt(((now - startTime) % 1000) / 10);
    secondsPassed = parseInt(((now - startTime) / 1000) % 60);
    minutesPassed = parseInt(((now - startTime) / (1000 * 60)) % 60);
    hoursPassed = parseInt(((now - startTime) / (1000 * 60 * 60)) % 24);
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
        <StartButton isClicked={isClicked} handleStart={handleStart} />
        <LapButton
          isDisabled={isDisabled}
          handleAddValue={handleRecordedLaps}
        />
      </Card>
    </div>
  );
}

//App structure:
//--Two Buttons: start and pause/resume
//--Lap Button(?): takes snapshot of time
export default App;
