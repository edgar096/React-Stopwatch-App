const PauseButton = ({ handlePause }) => {
  return (
    <div>
      <button onClick={handlePause}>Pause Timer</button>
    </div>
  );
};

export default PauseButton;
