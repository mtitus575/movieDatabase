import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
