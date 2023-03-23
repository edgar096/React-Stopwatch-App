import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const LapButton = ({ handleAddValue }) => {
  return (
    <div>
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        onClick={handleAddValue}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default LapButton;
