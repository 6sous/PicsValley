import { Link, useLoaderData } from "react-router-dom";
import "./App.scss";

function App() {
  const data = useLoaderData();

  console.log(data);

  return (
    <>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>

      <button>refresh</button>
    </>
  );
}

export default App;

export async function getMe() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/profile`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to get user");
  }
  const data = await response.json();
  return data;
}

