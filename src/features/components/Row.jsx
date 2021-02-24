import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

const base_url1 = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  axios.defaults.baseURL = "https://api.themoviedb.org/3";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div>
      {/* Title*/}
      <h2>{title}</h2>
      {/* COntainer _> Poster*/}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${base_url1}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* Title*/}
    </div>
  );
}

export default Row;
