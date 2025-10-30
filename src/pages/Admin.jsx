import { users } from "../data/mockData";
import { useNavigate } from "react-router-dom";

function Admin({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  let userData = {};

  function handleLogout() {
    setLoggedIn(false);
    userData = {};
    navigate("/");
  }

  if (loggedIn) {
    userData = users.admin;
  }

  
  return (
    <div>
      <h2>Welcome {userData ? users.admin.name : "admin"}</h2>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
export default Admin;
