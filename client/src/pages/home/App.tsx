import { Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>

      <button>refresh</button>
    </>
  );
}

export default App;

