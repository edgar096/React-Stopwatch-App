// const RecordedLaps = () {
//   return(

import { useState, useEffect } from 'react';
import Lap from '../../UI/Lap/Lap';

const RecordedLaps = ({ timer }) => {
  const lapTime = '00:00:213';
  return (
    <ul>
      <li>{`Lap Recorded: ${timer}`}</li>
    </ul>
  );
};
//Lap component should be rendered in a Map Logic
export default RecordedLaps;
