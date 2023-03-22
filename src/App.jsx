import { useEffect, useState } from 'react';
import StartButton from './UI/Buttons/StartButton';
import PauseButton from './UI/Buttons/PauseButton';
import './App.css';
import Card from './UI/Card/Card';
import RecordedLaps from './UI/Recorded Laps/RecordedLaps';

function App() {
  const [timer, setTimer] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const handleStartTime = () => {
    setTimer(Date.now());
  };
  const handleStopTime = () => {
    setCurrentTime(timer);
  };
  useEffect(() => {
    setTimeout(handleStartTime, 100000);
  }, [handleStartTime, handleStopTime]);

  //start time
  //elapsed time
  //calculo para milisegundos
  //calculo para segundos
  //calculo para minutos
  return (
    <div className="App">
      <div>Stopwatch App</div>
      <Card>
        <div>{timer}</div>
        <RecordedLaps />
      </Card>
      {/* <button>{`Current Time: ${startTime}`}</button>
      <button onClick={handleStopTime}>{`Timer: ${stopTime}`}</button> */}
      {/*Criar divs com as laps do timer*/}
      {/* <button onClick={() => handleCount()}>{count}</button> */}
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
