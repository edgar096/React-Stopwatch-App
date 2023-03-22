import { useEffect, useState } from 'react';
import StartButton from './UI/Buttons/StartButton';
import PauseButton from './UI/Buttons/PauseButton';
import './App.css';
import Card from './UI/Card/Card';
import RecordedLaps from './UI/Recorded Laps/RecordedLaps';

function App() {
  const [timer, setTimer] = useState(0);

  const handleTimer = () => {
    setTimer(timer + 1);
  };
  useEffect(() => {
    setTimeout(handleTimer, 1000);
  }, [handleTimer]);

  return (
    <div className="App">
      <div>Stopwatch App</div>
      <Card>
        <div>{timer}</div>
        <RecordedLaps />
      </Card>
      <Card>
        <StartButton />
        <PauseButton />
      </Card>
    </div>
  );
}

//App structure:
//--Two Buttons: start and pause/resume
//--Lap Button(?): takes snapshot of time
export default App;
