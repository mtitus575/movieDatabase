import { NavLink } from "react-router-dom";
function Navigation() {
  const navStyles = {
    border: "1px solid",
    padding: ".2rem .5rem",
    borderRadius: 7,
    margin: '0 .5rem',
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
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        Login
      </NavLink>
    </nav>
  );
}
export default Navigation;
