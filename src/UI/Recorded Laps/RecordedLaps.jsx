import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  //bgcolor: 'background.paper',
};
const RecordedLaps = ({ laps }) => {
  return (
    <ul>
      {laps.map((lap) => (
        <li key={lap.id}>{lap.value}</li>
      ))}
    </ul>
    // <List sx={style} component="nav" aria-label="mailbox folders">
    //   {laps.map((lap) => {
    //     <ListItem>
    //       <ListItemText key={lap.id} primary={lap.value} />;
    //     </ListItem>;
    //     <Divider />;
    //   })}
    // </List>
  );
};
export default RecordedLaps;
