import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import App, { getMe } from "./pages/home/App";

import {
  loginAction,
  registerAction,
} from "./lib/functions/actions/auth.action";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} loader={getMe} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route path="register" element={<Register />} action={registerAction} />
    </>
  )
);
