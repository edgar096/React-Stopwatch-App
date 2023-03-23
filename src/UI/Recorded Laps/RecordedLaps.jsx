const RecordedLaps = ({ laps }) => {
  return (
    <ul>
      {laps.map((lap) => (
        <li id={lap.id}>{lap.value}</li>
      ))}
    </ul>
  );
};
export default RecordedLaps;
