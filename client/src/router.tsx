import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { login, register } from "./lib/functions/actions/auth.action";
import App from "./pages/landing/App";
import Auth from "./pages/auth/Auth";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<App />} />
      </Route>

      <Route path="login" element={<Auth page="login" />} action={login} />
      <Route
        path="register"
        element={<Auth page="register" />}
        action={register}
      />
    </>
  )
);
