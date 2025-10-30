import { NavLink } from "react-router-dom";

function Navigation({ loggedIn, isAdmin, setLoggedIn }) {
  function handleLogout() {
    setLoggedIn(false);
  }

  const navStyles = {
    border: "1px solid",
    padding: ".2rem .5rem",
    borderRadius: 7,
    margin: "0 .5rem",
  };

  const activeStyle = {
    ...navStyles,
    backgroundColor: "#d7aeaeff",
  };

  const inactiveStyle = {
    ...navStyles,
    backgroundColor: "#c4c1c1ff",
  };

  return (
    <nav>
      {loggedIn && (
        <NavLink
          onClick={handleLogout}
          to={`/`}
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Logout
        </NavLink>
      )}
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        Movies
      </NavLink>
      {!loggedIn && (
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Login
        </NavLink>
      )}
      {loggedIn && !isAdmin && (
        <NavLink
          to="dashboard"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Dashboard
        </NavLink>
      )}
      {loggedIn && isAdmin && (
        <NavLink
          to="admin"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Admin
        </NavLink>
      )}
    </nav>
  );
}
export default Navigation;
