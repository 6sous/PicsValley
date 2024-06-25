import { Dispatch, SetStateAction, createContext } from "react";
import { UserType } from "../types/user.type";

export interface AuthState {
  isAuthenticated: boolean;
  user: UserType | null;
}

export interface AuthContextType extends AuthState {
  setAuthState: Dispatch<SetStateAction<AuthState>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
