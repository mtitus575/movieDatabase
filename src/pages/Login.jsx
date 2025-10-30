import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/mockData";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username && !password) {
      alert("Enter details");
      return;
    } else if (
      users.user.name.trim().toLowerCase() === username.trim().toLowerCase()
    ) {
      alert(`Welcome ${users.user.name}!`);
      navigate("/movies");
    } else if (
      users.admin.name.trim().toLowerCase() === username.trim().toLowerCase()
    ) {
      alert(`Welcome ${users.admin.name}!`);
      navigate("/dashboard");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
