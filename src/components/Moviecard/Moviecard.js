import React from "react";
import { Rating } from "@mui/material";
const Moviecard = ({ movie, deletMovie }) => {
  return (
    <div>
      <h1>{movie.name}</h1>
      <p>{movie.rating}</p>
      <p>{movie.description}</p>
      <button onClick={() => deletMovie(movie.id)}>X</button>
      <Rating name="read-only" value={+movie.rating} readOnly />
    </div>
  );
};

export default Moviecard;
