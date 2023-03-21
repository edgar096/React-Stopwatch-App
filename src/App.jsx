import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [startTime, setStartTime] = useState(null);
  const [stopTime, setStopTime] = useState(null);

  const handleStartTime = () => {
    setStartTime(Date.now());
  };
  const handleStopTime = () => {
    setStopTime(startTime);
  };
  useEffect(() => {
    setTimeout(handleStartTime, 10000000);
  }, [handleStartTime, handleStopTime]);

  return (
    <div className="App">
      <div>Stopwatch App</div>
      <button>{startTime}</button>
      <button onClick={handleStopTime}>{`Timer: ${stopTime}`}</button>
      {/*Criar divs com as laps do timer*/}
      {/* <button onClick={() => handleCount()}>{count}</button> */}
    </div>
  );
}

//App structure:
//--Two Buttons: start and pause/resume
//--Lap Button(?): takes snapshot of time
export default App;
