import React from 'react';
import { Rating } from '@mui/material';

const Filterrate = ({setRate, rate}) => {
  return (
  <div>
  <Rating
  name="simple-controlled"
  value={rate}
  onChange={(event, newValue) => {
    setRate(newValue);}}

   />
  </div> 
  );
};

export default Filterrate;
