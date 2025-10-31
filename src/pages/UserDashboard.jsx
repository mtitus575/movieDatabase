import { useNavigate, Outlet } from "react-router-dom";

function UserDashboard({ setLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <div>
      <h3>Welcome to your dashboard user!</h3>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default UserDashboard;
