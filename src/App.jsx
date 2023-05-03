import { useRef, useState } from 'react';
import RecordedLaps from './UI/Recorded Laps/RecordedLaps';
import StartButton from './UI/Buttons/StartButton';
import LapButton from './UI/Buttons/LapButton';
import './App.css';
import CardWrapper from './UI/Card/CardWrapper';
function App() {
  const [isClicked, setIsClicked] = useState(true);
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const [recordedLaps, setRecordedLaps] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const intervalRef = useRef(null);

  let millisecondsPassed,
    secondsPassed,
    minutesPassed,
    hoursPassed = 0;
  let completeTimer = '00:00:00:00';

  if (startTime != null && now != null) {
    let unixTimer = now - startTime;
    millisecondsPassed = `0${parseInt((unixTimer % 1000) / 10)}`.slice(-2);
    secondsPassed = `0${parseInt((unixTimer / 1000) % 60)}`.slice(-2);
    minutesPassed = `0${parseInt((unixTimer / (1000 * 60)) % 60)}`.slice(-2);
    hoursPassed = `0${parseInt((unixTimer / (1000 * 60 * 60)) % 24)}`.slice(-2);
    completeTimer = `${hoursPassed}:${minutesPassed}:${secondsPassed}:${millisecondsPassed}`;
  }
  const handleStart = () => {
    setIsDisabled(false);
    setIsClicked(false);
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1);
    setRecordedLaps([]);
  };
  const handleStop = () => {
    setIsDisabled(true);
    setIsClicked(true);
    setStartTime(null);
    clearInterval(intervalRef.current);
  };
  const handleRecordedLaps = () => {
    setRecordedLaps([
      ...recordedLaps,
      { id: crypto.randomUUID(), value: completeTimer },
    ]);
    console.log(recordedLaps);
  };
  return (
    <div className="App">
      <CardWrapper>
        <h1>Stopwatch App</h1>
        {completeTimer}
      </CardWrapper>

      <RecordedLaps laps={recordedLaps} />
      <CardWrapper>
        <StartButton
          isClicked={isClicked}
          handleStart={handleStart}
          handleStop={handleStop}
        />
        <LapButton
          isDisabled={isDisabled}
          handleAddValue={handleRecordedLaps}
        />
      </CardWrapper>
    </div>
  );
}

export default App;
