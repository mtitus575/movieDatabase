import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data/mockData";

function MovieDetail() {
  const { id } = useParams();
  const selectedMovie = movies.find((movie) => movie.id === parseInt(id));
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  if (!selectedMovie) {
    return <div>No Movie Found</div>;
  }

  return (
    <div>
      <div>
        <button onClick={handleBack}>Back to Movies</button>
      </div>
      <h1>{selectedMovie.title}</h1>
      <p>Genre: {selectedMovie.genre}</p>
      <p>Year: {selectedMovie.year}</p>
    </div>
  );
}

export default MovieDetail;
