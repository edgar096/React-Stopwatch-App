import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const style = {
  width: '100%',
  maxWidth: 360,
  //bgcolor: 'background.paper',
};
const RecordedLaps = ({ laps }) => {
  return (
    <List>
      {laps.map((lap) => (
        <ListItem key={lap.id}>
          <Typography variant="body1" gutterBottom>
            {lap.value}
          </Typography>
          <Divider />
        </ListItem>
      ))}
    </List>
  );
};
export default RecordedLaps;
