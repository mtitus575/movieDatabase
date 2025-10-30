import { movies } from "../data/mockData";
import { Link } from "react-router-dom";
import { useState } from "react";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

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
            <Link to={`/movies/${movie.id}`} key={movie.id}>
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
