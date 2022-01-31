import { useState } from "react";
import "./App.css";
import Addmovie from "./components/Addmovie/Addmovie";
import Footer from "./components/Footer/Footer";
import Movielist from "./components/Movielist/Movielist";
import Navbar from "./components/Navbar/Navbar";
import { moviesData } from "./constants/data";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [Text, setText] = useState("");
  const [rate, setRate] = useState(0);
  const handleAdd = (movie) => {
    setMovies([...movies, movie]);
  };
  const deletMovie = (id) => {
    console.log(id);
    setMovies(movies.filter((el) => el.id != id));
  };
  return (
    <div>
      <Navbar setText={setText} setRate={setRate} rate={rate} />
      <Addmovie handleAdd={handleAdd} />
      <Movielist
        movies={movies}
        text={Text}
        rate={rate}
        deletMovie={deletMovie}
      />

      <Footer />
    </div>
  );
}

export default App;
