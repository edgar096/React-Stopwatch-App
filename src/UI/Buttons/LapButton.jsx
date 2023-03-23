import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const LapButton = ({ handleAddValue }) => {
  return (
    <div>
      <Button variant="contained" onClick={handleAddValue}>
        Add Timer
      </Button>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default LapButton;
