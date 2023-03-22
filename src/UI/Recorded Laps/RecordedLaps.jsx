// const RecordedLaps = () {
//   return(

import Lap from '../../UI/Lap/Lap';

//   )
// }

//Pass down recorded times trough a array (might save to localstorage)
//Map the array and if "Lap Button clicked", add new time and render it

const RecordedLaps = () => {
  const lapTime = '00:00:213';
  return (
    <ul>
      <li>{`Lap Recorded: ${lapTime}`}</li>
    </ul>
  );
};
//Lap component should be rendered in a Map Logic
export default RecordedLaps;
