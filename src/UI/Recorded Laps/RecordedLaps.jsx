const RecordedLaps = ({ laps }) => {
  return (
    <ul>
      {laps.map((lap) => (
        <li key={lap.id}>{lap.value}</li>
      ))}
    </ul>
  );
};
export default RecordedLaps;
