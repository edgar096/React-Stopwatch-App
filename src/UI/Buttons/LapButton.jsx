import Fab from '@mui/material/Fab';
import TimerIcon from '@mui/icons-material/Timer';
const LapButton = ({ handleAddValue, isDisabled }) => {
  return (
    <div>
      <Fab
        // size="small"
        color="primary"
        aria-label="add"
        onClick={handleAddValue}
        disabled={isDisabled}
      >
        <TimerIcon />
      </Fab>
    </div>
  );
};

export default LapButton;
