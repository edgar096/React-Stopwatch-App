import { useEffect, useState } from 'react';
import StartButton from './UI/Buttons/StartButton';
import LapButton from './UI/Buttons/LapButton';
import './App.css';
import Card from './UI/Card/Card';
import RecordedLaps from './UI/Recorded Laps/RecordedLaps';

function App() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [recordedLaps, setRecordedLaps] = useState([]);
  //const [timerRunning, setIsTimerRunning] = useState(false);

  const handleRecordedLaps = () => {
    setRecordedLaps([
      ...recordedLaps,
      { id: crypto.randomUUID(), value: secondsPassed },
    ]);
    console.log(recordedLaps);
  };

  const handleStart = () => {
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
    hoursPassed = 0;
  if (startTime != null && now != null) {
    millisecondsPassed = parseInt(((now - startTime) % 1000) / 10);
    secondsPassed = parseInt(((now - startTime) / 1000) % 60);
    minutesPassed = parseInt(((now - startTime) / (1000 * 60)) % 60);
    hoursPassed = parseInt(((now - startTime) / (1000 * 60 * 60)) % 24);
  }
  // const milliseconds = parseInt((time%1000)/10)
  // const seconds = parseInt((time/1000)%60)
  // const minutes = parseInt((time/(1000*60))%60)
  // const hour = parseInt((time/(1000*60*60))%24);
  return (
    <div className="App">
      <div>Stopwatch App</div>
      <Card>
        <div>{`${hoursPassed}:${minutesPassed}:${secondsPassed}:${hoursPassed}:`}</div>
        <RecordedLaps laps={recordedLaps} />
      </Card>
      <Card>
        <StartButton handleStart={handleStart} />
        <LapButton handleAddValue={handleRecordedLaps} />
      </Card>
    </div>
  );
}

//App structure:
//--Two Buttons: start and pause/resume
//--Lap Button(?): takes snapshot of time
export default App;
