import { useParams, useNavigate, useLocation } from "react-router-dom";
import { movies } from "../data/mockData";

function MovieDetail() {
  const { title } = useParams();
  const selectedMovie = movies.find((movie) => movie.title === title);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)

  function handleBack() {
    navigate(-1);
  }

  if (!selectedMovie) {
    return <div>No Movie Found</div>;
  }

  return (
    <div>
      {location.state?.from && <p>Came from: {location.state.from} page</p>}
      {location.state?.search && (
        <p>Previous search: "{location.state.search}"</p>
      )}
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
