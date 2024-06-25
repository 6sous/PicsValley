import { Link, useNavigate } from "react-router-dom";
import "./App.scss";
import { logout } from "../../lib/functions/actions/auth.action";

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>

      <button onClick={handleLogout}>logout</button>
    </>
  );
}

export default App;

