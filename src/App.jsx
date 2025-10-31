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
import Layout from "./components/Layout";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <Routes>
        {loggedIn ? (
          <Route
            path="/"
            element={
              <Layout
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                isAdmin={isAdmin}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:title" element={<MovieDetail />} />

            {/*Nested Route */}
            <Route
              path="dashboard"
              element={<UserDashboard setLoggedIn={setLoggedIn} />}
            >
              {isAdmin && (
                <Route
                  path="admin"
                  element={
                    <Admin loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                  }
                />
              )}
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        ) : (
          <Route
            path="*"
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
        )}
      </Routes>
    </>
  );
}

export default App;
