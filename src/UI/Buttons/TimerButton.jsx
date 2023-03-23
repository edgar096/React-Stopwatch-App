const TimerButton = ({ handleAddValue }) => {
  return (
    <div>
      <button onClick={handleAddValue}>Add Timer</button>
    </div>
  );
};

export default TimerButton;
