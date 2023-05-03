const RecordedLaps = ({ laps }) => {
  return (
    <>
      {laps.map((lap) => (
        <ul key={lap.id}>
          <li>{lap.value}</li>
        </ul>
      ))}
    </>
  );
};
export default RecordedLaps;
