const LapButton = ({ handleAddValue, isDisabled }) => {
  return (
    <>
      <button onClick={handleAddValue} disabled={isDisabled}>
        LAP
      </button>
    </>
  );
};

export default LapButton;
