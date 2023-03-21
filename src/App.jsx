import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(null);

  const handleCount = () => {
    // setCount((count) => count + 1);
    setCount(Date.now());
  };

  useEffect(() => {
    setTimeout(handleCount, 1);
  }, [handleCount]);

  return (
    <div className="App">
      <div>Stopwatch App</div>
      <button onClick={() => handleCount()}>{count}</button>
    </div>
  );
}

//App structure:
//--Two Buttons: start and pause/resume
//--Lap Button(?): takes snapshot of time
export default App;
