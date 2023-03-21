import { useState } from 'react';
import './App.css';

function App() {
  const [startTime, setStartTime] = useState(null);

  const handleCount = () => {
    setStartTime(Date.now());
  };
  return (
    <div className="App">
      <div>Stopwatch App</div>
      <button onClick={handleCount}>{startTime}</button>
    </div>
  );
}

//App structure:
//--Two Buttons: start and pause/resume
//--Lap Button(?): takes snapshot of time
export default App;
