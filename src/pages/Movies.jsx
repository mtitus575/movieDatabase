import { movies } from "../data/mockData";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const genre = searchParams.get("genre");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());
    const matchesGenre = !genre || genre === movie.genre;

    return matchesSearch && matchesGenre;
  });

  const movieCardStyle = {
    width: "150px",
    height: "150px",
    border: "1px solid #853",
  };

  return (
    <div style={{ justifyItems: "center" }}>
      <h1>Movies</h1>
      <div>
        <input
          type="text"
          placeholder="Search movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => setSearchParams({})}>All</button>
        <button onClick={() => setSearchParams({ genre: "sci-fi" })}>
          Sci-Fi
        </button>
        <button onClick={() => setSearchParams({ genre: "drama" })}>
          Drama
        </button>
        <button onClick={() => setSearchParams({ genre: "action" })}>
          Action
        </button>
      </div>
      <div>
        <span>
          Available titles: <strong>{filteredMovies.length}</strong>
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: 5,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredMovies.map((movie) => {
          return (
            <Link
              to={`/movies/${movie.title}`}
              state={{ from: "MoviePage", search: searchTerm }}
              key={movie.title}
            >
              <div style={movieCardStyle}>
                <h4>{movie.title}</h4>
                <p>
                  Released date: <strong>{movie.year}</strong>
                </p>
                <span>
                  Genre: <strong>{movie.genre}</strong>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Movies;
