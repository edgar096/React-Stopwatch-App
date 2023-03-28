import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  //bgcolor: 'background.paper',
};
const RecordedLaps = ({ laps }) => {
  return (
    <>
      <List>
        {laps.map((lap) => (
          <ListItem key={lap.id}>
            {lap.value}
            <Divider />
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default RecordedLaps;
