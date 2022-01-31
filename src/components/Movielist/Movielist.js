import Moviecard from "../Moviecard/Moviecard";
import React from "react";
const Movielist = ({ movies, text, rate, deletMovie }) => {
  const filtred = movies;
  return (
    <div>
      {" "}
      {movies
        .filter((film) => film.name.toLowerCase().includes(text.toLowerCase()))

        .filter((film) => film.rating >= rate)
        .map((movie) => (
          <Moviecard movie={movie} key={movie.id} deletMovie={deletMovie} />
        ))}
    </div>
  );
};
export default Movielist;
