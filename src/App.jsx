import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import MovieDetail from "./pages/MovieDetail";
import Admin from "./pages/Admin";
import UserDashboard from "./pages/UserDashboard";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route
          path="login"
          element={
            <Login
              username={username}
              password={password}
              setPassword={setPassword}
              setUsername={setUsername}
              setLoggedIn={setLoggedIn}
              setIsAdmin={setIsAdmin}
            />
          }
        />
        {loggedIn && isAdmin && (
          <Route
            path="admin"
            element={<Admin loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
        )}

        {loggedIn && !isAdmin && (
          <Route path="dashboard" element={<UserDashboard setLoggedIn={setLoggedIn} />} />
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
