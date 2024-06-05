import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./pages/home/App";
import Login, { loginAction } from "./pages/login/Login";
import Register, { registerAction } from "./pages/register/Register";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route path="register" element={<Register />} action={registerAction} />
    </>
  )
);
