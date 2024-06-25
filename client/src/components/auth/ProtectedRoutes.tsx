import { Outlet } from "react-router-dom";
import { useAuth } from "../../lib/hooks/useAuth";
import { useEffect } from "react";

function ProtectedRoutes() {
  const { isAuthenticated, setAuthState } = useAuth();

  const user = localStorage.getItem("user");
  useEffect(() => {
    if (user) {
      setAuthState({ isAuthenticated: true, user: JSON.parse(user) });
    }
  }, [user]);

  return isAuthenticated && <Outlet />;
}

export default ProtectedRoutes;
